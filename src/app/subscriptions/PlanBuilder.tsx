"use client";
import { useId, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import AutoVideo from '@/components/AutoVideo';
import {
  MEAL_COUNTS,
  PLANS,
  PREFERENCES,
  SLOTS,
  formatINR,
  bestRatePackage,
  mixSplit,
  type MealCount,
  type MealSlot,
  type Plan,
  type Preference,
} from '@/data/plans';
import { SITE } from '@/data/site';
import { useCartStore } from '@/store/cartStore';

function Option({
  selected,
  name,
  onClick,
  title,
  sub,
}: {
  selected: boolean;
  name: string;
  onClick: () => void;
  title: string;
  sub?: string;
}) {
  return (
    <label
      className={`relative cursor-pointer flex-1 min-w-[6.5rem] text-left rounded-xl border px-4 py-3 transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-leaf-dark ${
        selected ? 'border-leaf-dark bg-leaf-tint ring-1 ring-leaf-dark' : 'border-black/10 bg-white hover:border-black/30'
      }`}
    >
      <input type="radio" name={name} value={title} checked={selected} onChange={onClick} className="sr-only" />
      <span className="block font-semibold">{title}</span>
      {sub && <span className="block text-sm text-charcoal mt-0.5 tabular-nums">{sub}</span>}
    </label>
  );
}

export default function PlanBuilder({ initialPlan = 'protein-pack' }: { initialPlan?: Plan['id'] }) {
  const router = useRouter();
  const setPlan = useCartStore((s) => s.setPlan);
  const groupId = useId();

  const [planId, setPlanId] = useState<Plan['id']>(initialPlan);
  const [meals, setMeals] = useState<MealCount>(20);
  const [preference, setPreference] = useState<Preference>('nonveg');
  const [slot, setSlot] = useState<MealSlot>('lunch');

  const plan = PLANS.find((p) => p.id === planId)!;
  const price = plan.prices[preference][meals];

  const choosePlan = (id: Plan['id']) => {
    setPlanId(id);
    document.getElementById('build')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
  };

  const checkout = () => {
    setPlan({ planId: plan.id, planName: plan.name, meals, preference, slot, price });
    router.push('/cart');
  };

  return (
    <>
      {/* Plan cards */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {PLANS.map((p) => {
            const offer = bestRatePackage(p);
            const active = p.id === planId;
            return (
              <article
                key={p.id}
                className={`flex flex-col rounded-3xl overflow-hidden bg-white border transition-shadow ${
                  active ? 'border-leaf-dark shadow-[0_0_0_2px_var(--color-leaf-dark)]' : 'border-black/5'
                }`}
              >
                <div className="relative aspect-[16/10] bg-leaf-tint">
                  <AutoVideo src={p.video} poster={p.image} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-forest">{p.name}</h2>
                  <p className="mt-1 font-medium text-leaf-dark">{p.short}</p>
                  <p className="mt-4 text-charcoal leading-relaxed">{p.description}</p>
                  <ul className="mt-5 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-ink/85">
                        <Check size={18} className="mt-0.5 shrink-0 text-leaf-dark" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-charcoal">
                      {offer ? (
                        <>
                          From <span className="text-xl font-semibold text-ink tabular-nums">{formatINR(Math.round(offer.rate))}</span> a meal
                          <span className="block text-sm tabular-nums">{formatINR(offer.price)} for {offer.meals} {offer.preference.toLowerCase()} meals</span>
                          <span className="block text-xs">Delivery extra</span>
                        </>
                      ) : (
                        <span className="text-xl font-semibold text-ink">Price on WhatsApp</span>
                      )}
                    </p>
                    <button
                      type="button"
                      onClick={() => choosePlan(p.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-leaf-dark text-white font-semibold px-5 py-3 hover:bg-forest transition-colors"
                    >
                      {active ? 'Selected' : 'Choose this plan'}
                      {active ? <Check size={18} /> : <ArrowRight size={18} />}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Builder */}
      <section id="build" className="scroll-mt-24 bg-cream-deep border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-12 md:py-16 grid lg:grid-cols-[1fr_380px] gap-10">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-forest">Build your plan</h2>
              <p className="mt-2 text-charcoal">Prices include all meals. Delivery is charged separately by location.</p>
            </div>

            <fieldset>
              <legend className="font-display text-lg font-semibold mb-3">1. Plan</legend>
              <div className="flex flex-wrap gap-3">
                {PLANS.map((p) => (
                  <Option key={p.id} name={`${groupId}-plan`} selected={planId === p.id} onClick={() => setPlanId(p.id)} title={p.name} />
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-display text-lg font-semibold mb-3">2. Number of meals</legend>
              <div className="flex flex-wrap gap-3">
                {MEAL_COUNTS.map((n) => {
                  const p = plan.prices[preference][n];
                  return (
                    <Option
                      key={n}
                      name={`${groupId}-meals`}
                      selected={meals === n}
                      onClick={() => setMeals(n)}
                      title={`${n} meals`}
                      sub={p != null ? `${formatINR(p)} · ${formatINR(Math.round(p / n))}/meal` : 'Price on WhatsApp'}
                    />
                  );
                })}
              </div>
              <p className="mt-3 text-sm text-charcoal">
                Each lunch or dinner counts as one meal, so Lunch + Dinner uses two meals a day.
              </p>
            </fieldset>

            <fieldset>
              <legend className="font-display text-lg font-semibold mb-3">3. Food preference</legend>
              <div className="flex flex-wrap gap-3">
                {PREFERENCES.map((p) => (
                  <Option
                    key={p.id}
                    name={`${groupId}-preference`}
                    selected={preference === p.id}
                    onClick={() => setPreference(p.id)}
                    title={p.label}
                    sub={p.id === 'mix' ? mixSplit(meals) : undefined}
                  />
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-display text-lg font-semibold mb-3">4. Delivery</legend>
              <div className="flex flex-wrap gap-3">
                {SLOTS.map((s) => (
                  <Option
                    key={s.id}
                    name={`${groupId}-slot`}
                    selected={slot === s.id}
                    onClick={() => setSlot(s.id)}
                    title={s.label}
                    sub={s.id === 'lunch' ? SITE.slots.lunch : s.id === 'dinner' ? SITE.slots.dinner : 'Both slots'}
                  />
                ))}
              </div>
            </fieldset>
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-28 self-start rounded-3xl bg-white border border-black/5 p-6 md:p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <h3 className="font-display text-xl font-semibold">Your plan</h3>
            <dl className="mt-4 space-y-2.5 text-[15px]">
              {[
                ['Plan', plan.name],
                ['Meals', `${meals}`],
                ['Preference', preference === 'mix' ? `Mix (${mixSplit(meals)})` : PREFERENCES.find((p) => p.id === preference)!.label],
                ['Delivery', SLOTS.find((s) => s.id === slot)!.label],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-charcoal">{k}</dt>
                  <dd className="font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 pt-5 border-t border-black/10">
              {price != null ? (
                <>
                  <p className="flex items-baseline justify-between">
                    <span className="text-charcoal">Meals subtotal</span>
                    <span className="text-3xl font-bold tabular-nums">{formatINR(price)}</span>
                  </p>
                  <p className="text-right text-sm text-charcoal tabular-nums">{formatINR(Math.round(price / meals))} per meal</p>
                </>
              ) : (
                <p className="text-charcoal">
                  <span className="block text-lg font-semibold text-ink">Price confirmed on WhatsApp</span>
                  {plan.fromNote && <span className="text-sm">{plan.fromNote}</span>}
                </p>
              )}
              <p className="mt-3 text-sm text-charcoal">+ delivery charge, shared before you pay.</p>
            </div>
            <button
              type="button"
              onClick={checkout}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-leaf-dark text-white font-semibold px-6 py-4 hover:bg-forest transition-colors"
            >
              Continue to checkout <ArrowRight size={18} />
            </button>
          </aside>
        </div>
      </section>
    </>
  );
}
