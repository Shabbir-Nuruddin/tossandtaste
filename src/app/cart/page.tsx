"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore, itemsTotal } from '@/store/cartStore';
import { PREFERENCES, SLOTS, formatINR, mixSplit } from '@/data/plans';
import { SITE, whatsappLink } from '@/data/site';
import { SocialIcon } from '@/components/SocialIcons';
import { useHydrated } from '@/lib/useHydrated';
import { currentCartPrices } from '@/lib/cartPricing';

const inputClass =
  'w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-base outline-none focus:border-leaf-dark focus:ring-2 focus:ring-leaf-dark/20';

function tomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function Field({ label, htmlFor, children, hint }: { label: string; htmlFor: string; children: React.ReactNode; hint?: string }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold mb-1.5">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1 text-sm text-charcoal">{hint}</p>}
    </div>
  );
}

export default function CartPage() {
  const { items: savedItems, plan: savedPlan, updateQuantity, removeItem, setPlan, clearCart } = useCartStore();
  const { items, plan } = currentCartPrices(savedItems, savedPlan);
  const mounted = useHydrated();
  const [sent, setSent] = useState(false);

  // The cart lives in localStorage, so wait for the browser before rendering it.
  if (!mounted) return <div className="min-h-[60vh]" />;
  const minDate = tomorrow();

  const subtotal = itemsTotal(items);
  const hasUnpriced = items.some((i) => i.price == null) || (plan != null && plan.price == null);
  const total = subtotal + (plan?.price ?? 0);

  if (!plan && items.length === 0) {
    return (
      <section className="max-w-xl mx-auto px-5 py-24 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-leaf-tint flex items-center justify-center text-leaf-dark">
          <Leaf size={30} />
        </div>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold text-forest">Your cart is empty</h1>
        <p className="mt-3 text-charcoal">Start a meal plan, or add a few dishes from the menu.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/subscriptions" className="rounded-full bg-leaf-dark text-white font-semibold px-6 py-3 hover:bg-forest transition-colors">
            See meal plans
          </Link>
          <Link href="/menu" className="rounded-full border border-black/15 font-semibold px-6 py-3 hover:border-black/40 transition-colors">
            Browse the menu
          </Link>
        </div>
      </section>
    );
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? '').trim();

    const lines: string[] = ["Hi Toss & Taste! I'd like to place an order.", ''];

    if (plan) {
      const pref =
        plan.preference === 'mix' ? `Mix (${mixSplit(plan.meals)})` : PREFERENCES.find((p) => p.id === plan.preference)?.label;
      lines.push(
        '*Meal plan*',
        `${plan.planName}: ${plan.meals} meals, ${pref}, ${SLOTS.find((s) => s.id === plan.slot)?.label}`,
        plan.price != null ? formatINR(plan.price) : 'Price: please confirm',
        ''
      );
    }

    if (items.length) {
      lines.push('*Items*');
      items.forEach((i) =>
        lines.push(`${i.quantity} × ${i.title}: ${i.price != null ? formatINR(i.price * i.quantity) : 'price to confirm'}`)
      );
      lines.push('');
    }

    if (!hasUnpriced) lines.push(`*Total (before delivery):* ${formatINR(total)}`, '');

    lines.push(
      '*Delivery details*',
      `Name: ${get('name')}`,
      `Phone: ${get('phone')}`,
      `Area: ${get('area')}`,
      `Address: ${get('address')}`,
      `Start date: ${new Date(`${get('date')}T00:00`).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}`
    );
    if (!plan) lines.push(`Slot: ${get('slot')}`);
    if (get('notes')) lines.push(`Notes: ${get('notes')}`);
    lines.push('', 'Please confirm the delivery charge and payment details.');

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-10 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-forest">Checkout</h1>
      <p className="mt-2 text-charcoal max-w-2xl">
        Fill in your details and we’ll open WhatsApp with your order ready to send. Our team confirms the delivery charge and start date, then shares payment details.
      </p>
      <p className="mt-4 lg:hidden text-sm text-charcoal">
        {hasUnpriced ? 'Your total requires a quote.' : <>Meals subtotal: <strong className="text-ink tabular-nums">{formatINR(total)}</strong>. Delivery is additional.</>}
      </p>

      <div className="mt-10 grid lg:grid-cols-[1fr_400px] gap-10 items-start">
        <form id="checkout" onSubmit={submit} className="space-y-10">
          {/* Order */}
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">Your order</h2>
            <ul className="space-y-3">
              {plan && (
                <li className="rounded-2xl bg-white border border-black/5 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-leaf-dark">Meal plan</p>
                      <p className="font-display text-lg font-semibold mt-0.5">{plan.planName}</p>
                      <p className="text-sm text-charcoal mt-1">
                        {plan.meals} meals ·{' '}
                        {plan.preference === 'mix'
                          ? `Mix (${mixSplit(plan.meals)})`
                          : PREFERENCES.find((p) => p.id === plan.preference)?.label}{' '}
                        · {SLOTS.find((s) => s.id === plan.slot)?.label}
                      </p>
                    </div>
                    <p className="font-semibold tabular-nums whitespace-nowrap">
                      {plan.price != null ? formatINR(plan.price) : 'On WhatsApp'}
                    </p>
                  </div>
                  <div className="mt-3 flex gap-4 text-sm">
                    <Link href="/subscriptions" className="font-semibold text-leaf-dark underline underline-offset-4">
                      Change
                    </Link>
                    <button type="button" onClick={() => setPlan(null)} className="text-charcoal hover:text-ink underline underline-offset-4">
                      Remove
                    </button>
                  </div>
                </li>
              )}

              {items.map((item) => (
                <li key={item.id} className="rounded-2xl bg-white border border-black/5 p-3 sm:p-4 flex gap-4 items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-leaf-tint shrink-0">
                    {item.image && <Image src={item.image} alt="" fill sizes="80px" className="object-cover" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold leading-snug">{item.title}</p>
                    <p className="text-sm text-charcoal tabular-nums">
                      {item.price != null ? `${formatINR(item.price)} each` : 'Price on WhatsApp'}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="inline-flex items-center rounded-full border border-black/15">
                        <button
                          type="button"
                          aria-label={`Remove one ${item.title}`}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-9 h-9 flex items-center justify-center"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-6 text-center tabular-nums font-semibold" aria-live="polite">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Add one ${item.title}`}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-9 h-9 flex items-center justify-center"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.title}`}
                        onClick={() => removeItem(item.id)}
                        className="w-9 h-9 flex items-center justify-center text-charcoal hover:text-[#b42318]"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold tabular-nums self-start">
                    {item.price != null ? formatINR(item.price * item.quantity) : 'To confirm'}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <Link href="/menu" className="font-semibold text-leaf-dark underline underline-offset-4">
                + Add dishes from the menu
              </Link>
            </p>
          </div>

          {/* Details */}
          <div>
            <h2 className="font-display text-2xl font-semibold mb-4">Delivery details</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" htmlFor="name">
                <input id="name" name="name" required autoComplete="name" className={inputClass} />
              </Field>
              <Field label="Phone number" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9+\s\-]{10,15}"
                  title="A 10-digit mobile number"
                  className={inputClass}
                />
              </Field>
              <Field label="City" htmlFor="area">
                <select id="area" name="area" required defaultValue={SITE.areas[0]} className={inputClass}>
                  {SITE.areas.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </Field>
              <Field label="Start date" htmlFor="date" hint="New orders start from tomorrow.">
                <input id="date" name="date" type="date" required min={minDate} defaultValue={minDate} className={inputClass} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Full address" htmlFor="address">
                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={3}
                    autoComplete="street-address"
                    placeholder="House / flat, building, sector, landmark"
                    className={inputClass}
                  />
                </Field>
              </div>
              {!plan && (
                <Field label="Delivery slot" htmlFor="slot">
                  <select id="slot" name="slot" className={inputClass} defaultValue={`Lunch (${SITE.slots.lunch})`}>
                    <option>{`Lunch (${SITE.slots.lunch})`}</option>
                    <option>{`Dinner (${SITE.slots.dinner})`}</option>
                  </select>
                </Field>
              )}
              <div className={plan ? 'sm:col-span-2' : ''}>
                <Field label="Notes (optional)" htmlFor="notes">
                  <input id="notes" name="notes" placeholder="Allergies, grain choice, gate code…" className={inputClass} />
                </Field>
              </div>
            </div>
          </div>
        </form>

        {/* Summary */}
        <aside className="lg:sticky lg:top-28 rounded-3xl bg-white border border-black/5 p-6 md:p-7">
          <h2 className="font-display text-xl font-semibold">Summary</h2>
          <dl className="mt-4 space-y-2.5 text-[15px]">
            {plan && (
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal">{plan.planName}</dt>
                <dd className="font-medium tabular-nums">{plan.price != null ? formatINR(plan.price) : 'On WhatsApp'}</dd>
              </div>
            )}
            {items.length > 0 && (
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal">
                  Dishes ({items.reduce((a, b) => a + b.quantity, 0)})
                </dt>
                <dd className="font-medium tabular-nums">{items.some((i) => i.price == null) ? 'Quote required' : formatINR(subtotal)}</dd>
              </div>
            )}
            <div className="flex justify-between gap-4">
              <dt className="text-charcoal">Delivery</dt>
              <dd className="font-medium">Confirmed on WhatsApp</dd>
            </div>
          </dl>
          <div className="mt-5 pt-5 border-t border-black/10 flex items-baseline justify-between">
            <span className="text-charcoal">{hasUnpriced ? 'Total' : 'Subtotal'}</span>
            <span className={`${hasUnpriced ? 'text-xl' : 'text-3xl'} font-bold tabular-nums`}>{hasUnpriced ? 'Quote required' : formatINR(total)}</span>
          </div>
          {hasUnpriced && <p className="mt-1 text-sm text-charcoal">Some prices will be confirmed on WhatsApp.</p>}
          {!hasUnpriced && <p className="mt-1 text-sm text-charcoal">Delivery is additional. The team confirms the final total before you pay.</p>}

          <button
            type="submit"
            form="checkout"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-white font-semibold px-6 py-4 hover:bg-[#188a49] transition-colors"
          >
            <SocialIcon name="WhatsApp" />
            Send order on WhatsApp
          </button>
          <p className="mt-3 text-sm text-charcoal text-center">
            Nothing is charged here. You pay after we confirm.
          </p>

          {sent && (
            <div role="status" className="mt-5 rounded-2xl bg-leaf-tint p-4 text-sm">
              <p className="font-semibold text-forest">WhatsApp should have opened with your order.</p>
              <p className="mt-1 text-ink/80">
                Didn’t open? Message us on {SITE.phone}. Once you’ve sent it, you can{' '}
                <button type="button" onClick={() => { clearCart(); setSent(false); }} className="font-semibold underline underline-offset-4">
                  clear your cart
                </button>
                .
              </p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
