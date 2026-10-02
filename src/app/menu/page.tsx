import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import MenuBrowser from './MenuBrowser';
import { GRAINS } from '@/data/menu';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Salads, rice and millet bowls, fresh juices and energy bites, with calories and macros for every dish. Delivered across Gurugram, Delhi and Noida.',
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Menu"
        title="Salads, bowls & fresh juices"
        intro={
          <p>
            Every dish is cooked fresh on the day it’s delivered, with calories and macros listed so you know exactly what you’re eating. Order single meals here, or get them on a{' '}
            <Link href="/subscriptions" className="text-leaf-dark font-semibold underline underline-offset-4">meal plan</Link>.
          </p>
        }
      />

      <MenuBrowser />

      <section className="bg-white border-t border-black/5">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-forest">Choose your grain</h2>
          <p className="mt-3 text-charcoal max-w-2xl">
            Most bowls can be made with any of these. Tell us your pick when you order. Calories are per serving.
          </p>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {GRAINS.map((g) => (
              <li key={g.name} className="rounded-2xl overflow-hidden bg-cream border border-black/5">
                <div className="relative aspect-[16/9]">
                  <Image src={g.image} alt={g.name} fill sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
                </div>
                <div className="p-3 flex items-baseline justify-between gap-2">
                  <span className="font-semibold">{g.name}</span>
                  <span className="text-sm text-charcoal tabular-nums">{g.kcal} kcal</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-charcoal">
            Delivery charges depend on your location and are confirmed on WhatsApp before you pay. Lunch {SITE.slots.lunch}, dinner {SITE.slots.dinner}.
          </p>
        </div>
      </section>
    </>
  );
}
