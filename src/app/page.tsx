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
  'Lean protein in every meal — chicken, eggs, paneer, tofu or legumes',
  'Calories, protein and carbs listed, so you can track without weighing',
  'Portion-controlled, cooked fresh on the day of delivery',
  'Veg, non-veg, or a mix of both',
  'Lunch, dinner, or both — delivered to your door',
];

const STEPS = [
  { title: 'Free consultation', body: 'Tell us your goal, routine and what you like to eat. We’ll suggest the right plan and portions.' },
  { title: 'Choose your plan', body: '10, 20 or 30 meals — veg, non-veg or mix — for lunch, dinner or both.' },
  { title: 'We cook it fresh', body: `Every meal is made the same day in our FSSAI-licensed kitchen in Sector 55, Gurugram.` },
  { title: 'Delivered on time', body: `Lunch arrives ${SITE.slots.lunch}, dinner ${SITE.slots.dinner}.` },
  { title: 'Adjust as you go', body: 'Tell us how you’re getting on and we’ll tweak your meals to keep you on track.' },
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
            <p className="text-sm font-semibold text-leaf-dark uppercase tracking-wider">{SITE.tagline}</p>
            <h1 className="mt-4 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] font-bold text-forest">
              Healthy food doesn’t have to be boring.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-charcoal max-w-xl">
              Fresh salads, bowls and juices with the calories and macros on every meal. Cooked daily in Gurugram and delivered for lunch or dinner.
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

      {/* Dish clips — swipe on phones, arrows on desktop */}
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

      {/* How it works */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-forest">How it works</h2>
        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="flex w-10 h-10 items-center justify-center rounded-full bg-tangerine text-white font-display font-bold">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-charcoal leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="bg-leaf-tint">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-forest">What customers say</h2>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-leaf-dark underline underline-offset-4 hover:text-forest"
            >
              Read all reviews on Google
            </a>
          </div>
          {/* Three reviews: a swipe row on phones, a grid from md up. The rest are on the About page. */}
          <ul className="mt-10 -mx-5 px-5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 flex md:grid md:grid-cols-3 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-5 no-scrollbar">
            {GOOGLE_REVIEWS.slice(0, 3).map((t) => (
              <li key={t.name} className="snap-start shrink-0 w-[82vw] sm:w-[360px] md:w-auto flex flex-col rounded-2xl bg-white p-6">
                <blockquote className="text-ink/85 leading-relaxed">“{t.quote}”</blockquote>
                <p className="mt-auto pt-5 font-semibold">{t.name}</p>
                <p className="text-sm text-charcoal">Google review</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founder */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-14 md:py-20 grid md:grid-cols-[320px_1fr] gap-8 md:gap-14 items-center">
        <div className="relative aspect-square max-w-[320px] rounded-3xl overflow-hidden bg-leaf-tint">
          <Image
            src={SITE.founder.photo}
            alt={`${SITE.founder.name}, founder of Toss & Taste`}
            fill
            sizes="320px"
            className="object-cover object-[center_15%]"
          />
        </div>
        <div className="max-w-2xl">
          <p className="font-display text-2xl md:text-3xl font-semibold text-forest leading-snug">
            “Good health doesn’t start in the gym. It starts on your plate.”
          </p>
          <p className="mt-4 text-charcoal leading-relaxed">
            Toss & Taste started as a personal fix: healthy food that was tasty, consistent and filling enough to train on was impossible to find, so our founder began cooking it.
          </p>
          <p className="mt-5 font-semibold">{SITE.founder.name}</p>
          <p className="text-charcoal">{SITE.founder.role}</p>
          <Link href="/about" className="mt-5 inline-flex items-center gap-1.5 font-semibold text-leaf-dark">
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
          <h2 className="text-3xl md:text-5xl font-bold">Start eating better tomorrow</h2>
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
