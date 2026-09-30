"use client";
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import AutoVideo from '@/components/AutoVideo';
import { DietMark } from '@/components/MenuCard';
import type { MenuItem } from '@/data/menu';

// Horizontal strip of dish clips: swipe on phones, arrow buttons on larger screens.
export default function FoodReel({ items }: { items: MenuItem[] }) {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  const arrow =
    'hidden md:flex w-11 h-11 items-center justify-center rounded-full border border-black/15 bg-white hover:border-black/40 transition-colors';

  return (
    <section className="py-14 md:py-20" aria-labelledby="reel-title">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 id="reel-title" className="text-3xl md:text-5xl font-bold text-forest">
            Fresh from our kitchen
          </h2>
          <p className="mt-3 text-charcoal max-w-xl">Every dish is cooked the day it’s delivered. Tap one to see it on the menu.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button type="button" onClick={() => scroll(-1)} className={arrow} aria-label="Scroll dishes left">
            <ChevronLeft size={20} />
          </button>
          <button type="button" onClick={() => scroll(1)} className={arrow} aria-label="Scroll dishes right">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-px-5 sm:scroll-px-6 px-5 sm:px-6 lg:px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] lg:scroll-px-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
      >
        {items.map((item) => (
          <li key={item.id} className="snap-start shrink-0 w-[82vw] sm:w-[420px]">
            <Link href={`/menu#${item.id}`} className="group block">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-leaf-tint">
                <AutoVideo
                  src={item.video!}
                  poster={item.image}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 flex items-start gap-2">
                <span className="mt-1">
                  <DietMark diet={item.diet} />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold leading-snug group-hover:text-leaf-dark transition-colors">{item.name}</p>
                  {(item.kcal != null || item.protein != null) && (
                    <p className="text-sm text-charcoal tabular-nums">
                      {[item.kcal != null && `${item.kcal} kcal`, item.protein != null && `${item.protein}g protein`].filter(Boolean).join(' · ')}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
        <li className="snap-start shrink-0 w-[60vw] sm:w-[260px]">
          <Link
            href="/menu"
            className="flex h-[61.5vw] sm:h-[315px] flex-col items-center justify-center gap-2 rounded-2xl bg-forest text-white font-semibold hover:bg-leaf-dark transition-colors"
          >
            See the full menu <ArrowRight size={20} />
          </Link>
        </li>
      </ul>
    </section>
  );
}
