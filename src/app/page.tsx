import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Clock, MapPin } from 'lucide-react';
import AutoVideo from '@/components/AutoVideo';
import FaqList from '@/components/FaqList';
import MenuCard from '@/components/MenuCard';
import { SocialIcon } from '@/components/SocialIcons';
import FoodReel from '@/components/FoodReel';
import { CATEGORIES, FEATURED_IDS, MENU } from '@/data/menu';
import { PLANS, formatINR, lowestPerMeal, lowestPrice } from '@/data/plans';
import { CONSULT_MESSAGE, FAQS, GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL, SITE, whatsappLink } from '@/data/site';

const INCLUDED = [
  'Proper protein in every meal: chicken, eggs, paneer, tofu or legumes',
  'Calories, protein and carbs listed, so you never have to weigh anything',
  'Sensible portions, cooked the day you eat them',
  'Veg, non-veg, or a bit of both',
  'Lunch, dinner or both, brought to your door',
];

// What a day on a plan looks like, from the first chat to the weekly check-in.
const DAY = [
  { when: 'Before you start', title: 'A free chat', body: 'Tell us your goal, your routine and what you like to eat. We’ll suggest a plan and portions that fit.' },
  { when: 'Same day', title: 'We cook', body: 'Your meals are chopped, cooked and packed in our Sector 55 kitchen on the day you eat them.' },
  { when: SITE.slots.lunch, title: 'Lunch arrives', body: 'At your office or at home, ready to eat. Nothing to cook, nothing to count.' },
  { when: SITE.slots.dinner, title: 'Dinner arrives', body: 'If your plan includes dinner, it comes in the evening slot. Same kitchen, same day.' },
  { when: 'Every week', title: 'We adjust', body: 'Tell us how you’re getting on and we’ll tweak your meals to keep you on track.' },
];

// Every dish that has a clip, meals first, then drinks and bites.
const categoryOrder = CATEGORIES.map((c) => c.id);
const reel = MENU.filter((m) => m.video).sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));

const featured = FEATURED_IDS.map((id) => MENU.find((m) => m.id === id)!).filter(Boolean);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 pt-10 pb-12 md:pt-16 md:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] font-bold text-forest">
              Healthy food doesn’t have to be boring.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-charcoal max-w-xl">
              Salads, bowls and fresh juices with the calories and protein on every dish. We cook it the same day in Gurugram and bring it to you for lunch or dinner.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/subscriptions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf-dark text-white font-semibold px-7 py-4 hover:bg-forest transition-colors"
              >
                See meal plans <ArrowRight size={18} />
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white font-semibold px-7 py-4 hover:border-black/40 transition-colors"
              >
                Browse the menu
              </Link>
            </div>
            <p className="mt-4 text-[15px] text-charcoal">
              Not ready for a plan?{' '}
              <Link href="/menu" className="font-semibold text-leaf-dark underline underline-offset-4 hover:text-forest">
                Try a single meal
              </Link>{' '}
              or{' '}
              <a
                href={whatsappLink(CONSULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-leaf-dark underline underline-offset-4 hover:text-forest"
              >
                book a free consultation
              </a>
              .
            </p>
            <ul className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-6 text-[15px] text-ink/80">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-leaf-dark" aria-hidden="true" /> {SITE.areas.join(' · ')}
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} className="text-leaf-dark" aria-hidden="true" /> Lunch & dinner, every day
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-[2rem] overflow-hidden bg-leaf-tint">
            <Image
              src="/food/cover-menu.webp"
              alt="A spread of Toss & Taste salads and bowls"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <AutoVideo src="/videos/17_menu_cover_hero.mp4" poster="/food/cover-menu.webp" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Dish clips: swipe on phones, arrows on desktop */}
      <FoodReel items={reel} />

      {/* Plans */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-forest">Meal plans</h2>
              <p className="mt-3 text-charcoal max-w-xl">Two plans, each in 10, 20 or 30 meals. Choose veg, non-veg or a mix.</p>
            </div>
            <Link href="/subscriptions" className="font-semibold text-leaf-dark inline-flex items-center gap-1.5">
              Compare plans <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PLANS.map((plan) => {
              const from = lowestPrice(plan);
              const perMeal = lowestPerMeal(plan);
              return (
                <Link
                  key={plan.id}
                  href={`/subscriptions?plan=${plan.id}`}
                  className="group rounded-3xl overflow-hidden bg-cream border border-black/5 flex flex-col"
                >
                  <div className="relative aspect-[16/10] bg-leaf-tint overflow-hidden">
                    <AutoVideo
                      src={plan.video}
                      poster={plan.image}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-forest group-hover:text-leaf-dark transition-colors">{plan.name}</h3>
                      <p className="mt-1 text-charcoal">{plan.short}</p>
                    </div>
                    <p className="text-charcoal whitespace-nowrap sm:text-right">
                      {from != null && perMeal != null ? (
                        <>
                          From <span className="font-semibold text-ink text-lg tabular-nums">{formatINR(perMeal)}</span> a meal
                          <span className="block text-sm tabular-nums">{formatINR(from)} for 10 meals</span>
                        </>
                      ) : (
                        <span className="font-semibold text-ink text-lg">{plan.fromNote}</span>
                      )}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-2 rounded-[2rem] overflow-hidden">
          <div className="relative min-h-[280px] md:min-h-[520px] bg-leaf-tint">
            <Image
              src="/uploads/2026/07/Fat-Loss-Plan-0001x.jpg"
              alt="Toss & Taste meal-plan bowls"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="bg-forest text-white p-8 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold">What’s in every plan</h2>
            <ul className="mt-8 space-y-5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-white/90">
                  <Check size={22} className="mt-0.5 shrink-0 text-leaf-bright" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-forest">Customer favourites</h2>
              <p className="mt-3 text-charcoal max-w-xl">Order single meals any day, or have them as part of a plan.</p>
            </div>
            <Link href="/menu" className="font-semibold text-leaf-dark inline-flex items-center gap-1.5">
              Full menu <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* A day on a plan: a timeline, vertical on phones and horizontal on desktop */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-forest">A day with Toss & Taste</h2>
        <ol className="mt-10 lg:mt-14 grid lg:grid-cols-5 lg:gap-8">
          {DAY.map((d, i) => (
            <li key={d.title} className="relative pl-8 pb-8 lg:pl-0 lg:pb-0 lg:pt-8">
              {/* The line joining the stops: down the left on phones, across the top on desktop. */}
              {i < DAY.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[5px] top-3 bottom-0 w-0.5 bg-tangerine/30 lg:left-3 lg:-right-8 lg:top-[5px] lg:bottom-auto lg:w-auto lg:h-0.5"
                />
              )}
              <span aria-hidden="true" className="absolute left-0 top-1 lg:top-0 w-3 h-3 rounded-full bg-tangerine" />
              <p className="font-display text-sm font-semibold text-tangerine-dark tabular-nums">{d.when}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{d.title}</h3>
              <p className="mt-2 text-charcoal leading-relaxed">{d.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Reviews: one large, two small. The rest are on the About page. */}
      <section className="bg-tangerine-tint">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20 grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-14 items-start">
          <figure>
            <span aria-hidden="true" className="block font-display text-8xl leading-none text-tangerine h-12">“</span>
            <blockquote className="font-display text-2xl md:text-4xl font-semibold text-forest leading-snug">
              {GOOGLE_REVIEWS[0].quote}
            </blockquote>
            <figcaption className="mt-6">
              <span className="font-semibold">{GOOGLE_REVIEWS[0].name}</span>
              <span className="text-charcoal">, Google review</span>
            </figcaption>
          </figure>
          <div>
            <ul className="space-y-4">
              {GOOGLE_REVIEWS.slice(1, 3).map((t) => (
                <li key={t.name} className="rounded-2xl bg-white p-5">
                  <blockquote className="text-ink/85 leading-relaxed">“{t.quote}”</blockquote>
                  <p className="mt-3 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-charcoal">, Google review</span>
                  </p>
                </li>
              ))}
            </ul>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 font-semibold text-tangerine-dark hover:text-forest"
            >
              Read all our Google reviews <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Who cooks your food: the founder and the kitchen */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 items-start">
          <figure>
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-leaf-tint">
              <Image
                src={SITE.founder.photo}
                alt={`${SITE.founder.name}, founder of Toss & Taste`}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover object-[center_15%]"
              />
            </div>
            <figcaption className="mt-2 text-sm text-charcoal">{SITE.founder.name}, founder</figcaption>
          </figure>
          <figure className="mt-10 sm:mt-16">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-leaf-tint">
              <Image
                src="/uploads/about/WhatsApp-Image-2026-02-18-at-1.01.44-PM.jpeg"
                alt="A Toss & Taste chef preparing fresh vegetables in our kitchen"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-charcoal">Our kitchen, Sector 55</figcaption>
          </figure>
        </div>
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-forest">Who cooks your food</h2>
          <p className="mt-5 text-[17px] text-ink/85 leading-relaxed">
            Toss & Taste started as Arun’s own fix. Healthy food that tasted good and kept you full enough to train on was
            impossible to find, so Arun started cooking it.
          </p>
          <p className="mt-4 text-[17px] text-ink/85 leading-relaxed">
            Today our team cooks every order in our own FSSAI-licensed kitchen in Sector 55, Gurugram. Same recipes, same
            portions, made the day you eat them.
          </p>
          <Link href="/about" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-leaf-dark">
            Read our story <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-black/5">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 py-14 md:py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-forest mb-8">Questions</h2>
          <FaqList items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-forest">
        <Image src="/food/cover-protein-pack-2.webp" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 py-16 md:py-24 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold">Hungry yet?</h2>
          <p className="mt-4 text-lg text-white/85">
            Order today and your first meal can arrive tomorrow, anywhere in {SITE.areas.slice(0, -1).join(', ')} or {SITE.areas.at(-1)}.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/subscriptions" className="rounded-full bg-white text-forest font-semibold px-7 py-4 hover:bg-cream transition-colors">
              Start a plan
            </Link>
            <a
              href={whatsappLink(CONSULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 font-semibold px-7 py-4 hover:bg-white/10 transition-colors"
            >
              <SocialIcon name="WhatsApp" /> Free consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
