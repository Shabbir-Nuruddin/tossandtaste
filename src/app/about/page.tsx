import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { CONSULT_MESSAGE, GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL, SITE, TESTIMONIALS, whatsappLink } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Toss & Taste started when founder Arun Bhatia couldn’t find healthy food that actually tasted good. Today we cook fresh, macro-counted meals in Gurugram every day.',
};

const FACTS = [
  { title: 'Cooked the same day', body: `Everything is made fresh in our kitchen in ${SITE.address.split(',')[0]}, Gurugram, and delivered for lunch or dinner.` },
  { title: 'Numbers on every dish', body: 'Calories, protein and carbs are listed for our meals, so you can track without weighing anything.' },
  { title: 'Veg, non-veg or both', body: 'Paneer, tofu, chickpeas and beans for veg meals; chicken and eggs for non-veg. Mix plans split them half and half.' },
  { title: 'FSSAI licensed', body: `Our kitchen is registered with the Food Safety and Standards Authority of India (Lic. No. ${SITE.fssai}).` },
];

// Real dishes from our kitchen (the files are small, so they're shown small).
const KITCHEN_MEALS = [
  { src: '/uploads/about/meal1.webp', alt: 'Grilled paneer with herb rice, salad and a bowl of curry' },
  { src: '/uploads/about/meal2.webp', alt: 'A protein bowl from our kitchen' },
  { src: '/uploads/about/meal3.webp', alt: 'Grilled chicken with vegetables' },
];

// The homepage shows the first three Google reviews; the rest live here.
const REVIEWS = [
  ...GOOGLE_REVIEWS.slice(3).map((r) => ({ ...r, role: 'Google review' })),
  ...TESTIMONIALS,
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About us" title="Good health starts on your plate" />

      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-12 md:py-20 grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-start">
        <figure className="lg:sticky lg:top-28">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-leaf-tint">
            <Image
              src={SITE.founder.photo}
              alt={`${SITE.founder.name}, founder of Toss & Taste`}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[center_15%]"
            />
          </div>
          <figcaption className="mt-4">
            <p className="font-display text-xl font-semibold">{SITE.founder.name}</p>
            <p className="text-charcoal">{SITE.founder.role}</p>
          </figcaption>
        </figure>

        <div className="space-y-5 text-[17px] leading-relaxed text-ink/85 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-forest">How it started</h2>
          <p className="text-xl text-ink font-medium">Toss & Taste began with a problem I had every single day.</p>
          <p>
            I was working out regularly and trying to eat right, but finding food that actually nourished me was hard. The
            “healthy” options were bland, inconsistent, or didn’t give me the nutrition I needed. I kept compromising on
            taste, on quality, or on how much protein I was getting.
          </p>
          <p>
            So I started making my own meals: fresh ingredients, balanced macros and sensible portions. Salads, bowls, juices
            and smoothies that kept me full and fuelled through the day.
          </p>
          <p>
            What started as a personal fix turned into Toss & Taste. The meals that once covered my own daily nutrition are
            now cooked fresh every day for people across Gurugram, Delhi and Noida who face the same struggle.
          </p>
          <p className="font-display text-2xl font-semibold text-forest pt-4 border-t border-black/10">
            Healthy food doesn’t have to be boring.
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20 grid md:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-center">
        <figure className="order-last md:order-none relative aspect-[4/5] md:aspect-[2/3] max-h-[640px] w-full rounded-3xl overflow-hidden bg-leaf-tint">
          <Image
            src="/uploads/about/WhatsApp-Image-2026-02-18-at-1.01.44-PM.jpeg"
            alt="A Toss & Taste chef preparing fresh vegetables in our kitchen"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </figure>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-forest">Our kitchen</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/85 max-w-xl">
            Every meal is prepared in our own FSSAI-licensed kitchen in Sector 55, Gurugram. We chop, cook and pack on the
            day of delivery, so what reaches you for lunch or dinner was made that morning or afternoon, not days before.
          </p>
          <ul className="mt-8 grid grid-cols-3 gap-3">
            {KITCHEN_MEALS.map((m) => (
              <li key={m.src} className="relative aspect-[9/5] rounded-xl overflow-hidden bg-leaf-tint">
                <Image src={m.src} alt={m.alt} fill sizes="(min-width: 768px) 15vw, 30vw" className="object-cover" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-forest max-w-2xl">What you can expect from us</h2>
          <dl className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {FACTS.map((f) => (
              <div key={f.title} className="border-t-2 border-leaf pt-4">
                <dt className="font-display text-xl font-semibold">{f.title}</dt>
                <dd className="mt-2 text-charcoal leading-relaxed">{f.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-leaf-tint">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-forest">What customers say</h2>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-leaf-dark underline underline-offset-4 hover:text-forest"
            >
              Read all reviews on Google
            </a>
          </div>
          <ul className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5">
            {REVIEWS.map((t) => (
              <li key={t.name} className="break-inside-avoid mb-5 rounded-2xl bg-white p-6">
                <blockquote className="text-ink/85 leading-relaxed">“{t.quote}”</blockquote>
                <p className="pt-5 font-semibold">{t.name}</p>
                <p className="text-sm text-charcoal">{t.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-forest">Try it for yourself</h2>
        <p className="mt-3 text-charcoal max-w-xl mx-auto">
          Start with a 10-meal plan, order a few dishes from the menu first, or{' '}
          <a
            href={whatsappLink(CONSULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-leaf-dark underline underline-offset-4 hover:text-forest"
          >
            book a free consultation
          </a>{' '}
          and we’ll help you choose.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/subscriptions" className="rounded-full bg-leaf-dark text-white font-semibold px-6 py-3.5 hover:bg-forest transition-colors">
            See meal plans
          </Link>
          <Link href="/menu" className="rounded-full border border-black/15 font-semibold px-6 py-3.5 hover:border-black/40 transition-colors">
            Browse the menu
          </Link>
        </div>
      </section>
    </>
  );
}
