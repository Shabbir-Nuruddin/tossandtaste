"use client";
import Image from 'next/image';
import { useState } from 'react';
import { Check, Leaf, Plus } from 'lucide-react';
import type { Diet, MenuItem } from '@/data/menu';
import { isHighProtein } from '@/data/menu';
import { whatsappLink } from '@/data/site';
import { useCartStore } from '@/store/cartStore';

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
  const [pack, setPack] = useState(0);
  const [added, setAdded] = useState(false);

  const selected = item.packs?.[pack];
  const price = selected ? selected.price : item.price;

  const add = () => {
    addItem({
      id: selected ? `${item.id}-${selected.label}` : item.id,
      title: selected ? `${item.name} (${selected.label})` : item.name,
      price,
      image: item.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="relative aspect-[4/3] bg-leaf-tint overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-leaf/40">
            <Leaf size={48} strokeWidth={1.3} />
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
          <div className="flex gap-2 mt-1" role="radiogroup" aria-label="Pack size">
            {item.packs.map((p, i) => (
              <button
                key={p.label}
                role="radio"
                aria-checked={pack === i}
                onClick={() => setPack(i)}
                className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                  pack === i ? 'border-leaf-dark bg-leaf-tint text-leaf-dark font-semibold' : 'border-black/15 text-ink/70'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
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
          <button
            onClick={add}
            aria-label={added ? `${item.name} added to order` : `Add ${item.name} to order`}
            aria-live="polite"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
              added ? 'bg-forest text-white' : 'bg-leaf-dark text-white hover:bg-forest'
            }`}
          >
            {added ? <Check size={16} /> : <Plus size={16} />}
            {added ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </article>
  );
}
