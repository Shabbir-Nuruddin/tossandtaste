"use client";
import Image from 'next/image';
import { useId, useState } from 'react';
import { Leaf, Minus, Plus } from 'lucide-react';
import type { Diet, MenuItem } from '@/data/menu';
import { isHighProtein } from '@/data/menu';
import { whatsappLink } from '@/data/site';
import { useCartStore } from '@/store/cartStore';
import { useHydrated } from '@/lib/useHydrated';
import AutoVideo from '@/components/AutoVideo';

export function DietMark({ diet }: { diet: Diet }) {
  // Indian food-labelling convention: green square = veg, red/brown = non-veg, yellow = egg.
  const colour = diet === 'veg' ? '#1f9d55' : diet === 'egg' ? '#d4a106' : '#b42318';
  const label = diet === 'veg' ? 'Vegetarian' : diet === 'egg' ? 'Contains egg' : 'Non-vegetarian';
  return (
    <span title={label} className="inline-flex items-center justify-center w-4 h-4 border-[1.5px] rounded-[3px] shrink-0" style={{ borderColor: colour }}>
      <span className="w-2 h-2 rounded-full" style={{ background: colour }} />
      <span className="sr-only">{label}</span>
    </span>
  );
}

function Macros({ item }: { item: MenuItem }) {
  const parts = [
    item.kcal != null && `${item.kcal} kcal`,
    item.protein != null && `${item.protein}g protein`,
    item.carbs != null && `${item.carbs}g carbs`,
  ].filter(Boolean) as string[];
  if (!parts.length) return null;
  return <p className="text-[13px] text-charcoal tabular-nums">{parts.join(' · ')}</p>;
}

export default function MenuCard({ item }: { item: MenuItem }) {
  const addItem = useCartStore((s) => s.addItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const mounted = useHydrated();
  const [pack, setPack] = useState(0);
  const packGroup = useId();

  const selected = item.packs?.[pack];
  const price = selected ? selected.price : item.price;
  const cartId = selected ? `${item.id}-${selected.label}` : item.id;
  const inCart = useCartStore((s) => s.items.find((i) => i.id === cartId)?.quantity ?? 0);
  const quantity = mounted ? inCart : 0;

  const add = () =>
    addItem({
      id: cartId,
      title: selected ? `${item.name} (${selected.label})` : item.name,
      price,
      image: item.image,
    });

  return (
    <article id={item.id} className="scroll-mt-40 group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="relative aspect-[4/3] bg-leaf-tint overflow-hidden">
        {item.image ? (
          <>
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {item.video && (
              <AutoVideo src={item.video} poster={item.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            )}
          </>
        ) : (
          // No photo yet: show the dish name so the card still reads as intentional.
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center bg-gradient-to-br from-leaf-tint to-cream">
            <Leaf size={28} strokeWidth={1.5} className="text-leaf" aria-hidden="true" />
            <p className="font-display text-2xl font-semibold text-forest leading-tight max-w-[16ch]">{item.name}</p>
          </div>
        )}
        {isHighProtein(item) && (
          <span className="absolute top-3 left-3 bg-white/95 text-forest text-xs font-semibold px-2.5 py-1 rounded-full">
            High protein
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-2">
        <div className="flex items-start gap-2">
          <span className="mt-1"><DietMark diet={item.diet} /></span>
          <h3 className="font-display text-lg font-semibold leading-snug">{item.name}</h3>
        </div>
        {item.description && <p className="text-sm text-ink/70 leading-relaxed">{item.description}</p>}
        <Macros item={item} />

        {item.packs && (
          <fieldset className="flex gap-2 mt-1">
            <legend className="sr-only">{item.name} pack size</legend>
            {item.packs.map((p, i) => (
              <label
                key={p.label}
                className={`relative cursor-pointer text-sm px-3 py-2 rounded-full border transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-leaf-dark ${
                  pack === i ? 'border-leaf-dark bg-leaf-tint text-leaf-dark font-semibold' : 'border-black/15 text-ink/70'
                }`}
              >
                <input type="radio" name={packGroup} value={p.label} checked={pack === i} onChange={() => setPack(i)} className="sr-only" />
                {p.label}
              </label>
            ))}
          </fieldset>
        )}

        <div className="mt-auto pt-3 flex items-center justify-between gap-3">
          {price != null ? (
            <p className="text-lg font-semibold tabular-nums">₹{price}</p>
          ) : (
            <a
              href={whatsappLink(`Hi! What's the price of the ${item.name}?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-leaf-dark underline underline-offset-4"
            >
              Ask for price
            </a>
          )}
          {quantity > 0 ? (
            <div className="inline-flex items-center rounded-full bg-leaf-dark text-white" role="group" aria-label={`${item.name} quantity`}>
              <button
                onClick={() => updateQuantity(cartId, quantity - 1)}
                aria-label={quantity === 1 ? `Remove ${item.name} from order` : `One less ${item.name}`}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-forest transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="min-w-[1.75rem] text-center text-sm font-semibold tabular-nums" aria-live="polite">
                {quantity}
              </span>
              <button
                onClick={add}
                aria-label={`One more ${item.name}`}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-forest transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={add}
              aria-label={`Add ${item.name} to order`}
              className="inline-flex items-center gap-1.5 h-9 text-sm font-semibold px-4 rounded-full bg-leaf-dark text-white hover:bg-forest transition-colors"
            >
              <Plus size={16} /> Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
