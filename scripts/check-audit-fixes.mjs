import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

// Run the pure catalog/pricing checks without an additional test dependency.
const cache = new Map();
function load(relative) {
  const file = path.resolve(relative);
  if (cache.has(file)) return cache.get(file);
  const loadedModule = { exports: {} };
  cache.set(file, loadedModule.exports);
  const { outputText } = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  vm.runInNewContext(outputText, {
    module: loadedModule, exports: loadedModule.exports,
    require: (specifier) => {
      assert.ok(specifier.startsWith('@/'), `Unexpected dependency: ${specifier}`);
      return load(`src/${specifier.slice(2)}.ts`);
    }, URL,
  }, { filename: file });
  return loadedModule.exports;
}

const { PLANS, MEAL_COUNTS, bestRatePackage } = load('src/data/plans.ts');
const { MENU } = load('src/data/menu.ts');
const { currentCartPrices } = load('src/lib/cartPricing.ts');
const expected = {
  veg: [3100, 5900, 8600], nonveg: [3300, 6400, 9200], mix: [3200, 6200, 9000],
};
let combinations = 0;
for (const plan of PLANS) {
  for (const [preference, prices] of Object.entries(expected)) {
    for (const [index, meals] of MEAL_COUNTS.entries()) {
      assert.equal(plan.prices[preference][meals], prices[index]);
      const stale = { planId: plan.id, planName: plan.name, meals, preference, slot: 'lunch', price: 1 };
      const resolved = currentCartPrices([], stale).plan;
      assert.equal(resolved.price, prices[index], 'Saved plans must use the current catalog price');
      assert.equal(stale.price, 1, 'Resolving a quote must not mutate stored cart data');
      combinations++;
    }
  }
  const offer = bestRatePackage(plan);
  assert.equal(offer.meals, 30);
  assert.equal(offer.price, 8600);
  assert.equal(offer.rate, 8600 / 30);
}
const dish = MENU.find((item) => !item.packs && item.price != null);
const item = { id: dish.id, title: dish.name, quantity: 2, price: 1 };
assert.equal(currentCartPrices([item], null).items[0].price, dish.price);
assert.equal(item.price, 1);
const bite = MENU.find((entry) => entry.packs?.length > 1);
const pack = bite.packs[1];
assert.equal(currentCartPrices([{ ...item, id: `${bite.id}-${pack.label}` }], null).items[0].price, pack.price);
assert.equal(currentCartPrices([{ ...item, id: 'removed-dish' }], null).items[0].price, null);
assert.equal(currentCartPrices([], { planId: 'removed-plan', price: 999 }).plan.price, null);

const sitemap = load('src/app/sitemap.ts').default();
const urls = sitemap.map((entry) => entry.url);
assert.equal(new Set(urls).size, urls.length);
assert.ok(!urls.some((url) => url.includes('/cart')));
assert.ok(urls.includes('https://tossandtaste.com/subscriptions'));
assert.ok(urls.every((url) => url.startsWith('https://tossandtaste.com/')));
const robots = load('src/app/robots.ts').default();
assert.equal(robots.sitemap, 'https://tossandtaste.com/sitemap.xml');
console.log(`Passed: ${combinations} published plan combinations, saved-cart/pack/unknown-item handling, sitemap and robots checks.`);

const baseUrl = process.argv[2];
if (baseUrl) {
  const results = await Promise.all(urls.map(async (url) => {
    const response = await fetch(new URL(new URL(url).pathname, baseUrl));
    assert.equal(response.status, 200, `Public route must resolve: ${url}`);
    const html = await response.text();
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/);
    assert.ok(canonical, `Missing canonical: ${url}`);
    assert.equal(new URL(canonical[1]).href, url, `Canonical mismatch: ${url}`);
    return url;
  }));
  const sitemapResponse = await fetch(new URL('/sitemap.xml', baseUrl));
  assert.equal(sitemapResponse.status, 200);
  const xml = await sitemapResponse.text();
  assert.ok(!xml.includes('/cart'));
  assert.ok(urls.every((url) => xml.includes(`<loc>${url}</loc>`)));
  const robotsResponse = await fetch(new URL('/robots.txt', baseUrl));
  assert.equal(robotsResponse.status, 200);
  assert.ok((await robotsResponse.text()).includes('Sitemap: https://tossandtaste.com/sitemap.xml'));
  const cartResponse = await fetch(new URL('/cart', baseUrl));
  assert.equal(cartResponse.status, 200);
  assert.match(await cartResponse.text(), /name="robots" content="[^"]*noindex/);
  console.log(`Passed: ${results.length} production routes and canonicals, sitemap.xml, robots.txt and checkout noindex.`);
}
