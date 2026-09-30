"use client";
import { useState } from 'react';
import MenuCard from '@/components/MenuCard';
import { CATEGORIES, MENU, type Category } from '@/data/menu';

type DietFilter = 'all' | 'veg' | 'nonveg';

export default function MenuBrowser() {
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [diet, setDiet] = useState<DietFilter>('all');

  const visible = CATEGORIES.filter((c) => category === 'all' || c.id === category);

  const matchesDiet = (d: string) => diet === 'all' || (diet === 'veg' ? d === 'veg' : d !== 'veg');

  const chip = (active: boolean) =>
    `shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
      active ? 'bg-forest text-white border-forest' : 'bg-white text-ink/80 border-black/10 hover:border-black/30'
    }`;

  return (
    <>
      <div className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur border-b border-black/5">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-3 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 md:mx-0 md:px-0" role="tablist" aria-label="Menu category">
            <button role="tab" aria-selected={category === 'all'} className={chip(category === 'all')} onClick={() => setCategory('all')}>
              All
            </button>
            {CATEGORIES.map((c) => (
              <button key={c.id} role="tab" aria-selected={category === c.id} className={chip(category === c.id)} onClick={() => setCategory(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2" aria-label="Diet filter">
            {(
              [
                ['all', 'Veg & non-veg'],
                ['veg', 'Veg only'],
                ['nonveg', 'Non-veg'],
              ] as const
            ).map(([id, label]) => (
              <button key={id} aria-pressed={diet === id} className={chip(diet === id)} onClick={() => setDiet(id)}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-10 md:py-14 space-y-16">
        {visible.map((c) => {
          const items = MENU.filter((m) => m.category === c.id && matchesDiet(m.diet));
          if (!items.length) return null;
          return (
            <section key={c.id} aria-labelledby={`cat-${c.id}`}>
              <div className="mb-6">
                <h2 id={`cat-${c.id}`} className="text-2xl md:text-3xl font-bold text-forest">
                  {c.label}
                </h2>
                <p className="mt-1 text-charcoal">{c.blurb}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
