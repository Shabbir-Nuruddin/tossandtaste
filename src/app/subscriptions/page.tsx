import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import FaqList from '@/components/FaqList';
import PlanBuilder from './PlanBuilder';
import { FAQS } from '@/data/site';
import { PLANS } from '@/data/plans';

export const metadata: Metadata = {
  title: 'Meal Plans',
  description:
    'Protein Pack and Fat Loss meal plans in 10, 20 or 30 meals. Veg, non-veg or mix, delivered for lunch, dinner or both across Gurugram, Delhi and Noida.',
};

// Links like /subscriptions?plan=fat-loss (from the home page) preselect that plan.
export default async function SubscriptionsPage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan } = await searchParams;
  const initialPlan = PLANS.find((p) => p.id === plan)?.id;

  return (
    <>
      <PageHeader
        eyebrow="Meal plans"
        title="Pick a plan. We’ll handle the cooking."
        intro={
          <p>
            Choose your goal, how many meals you want, and when you want them. Everything is cooked fresh each day and delivered to your door.
          </p>
        }
      />

      <PlanBuilder initialPlan={initialPlan} />

      <section className="bg-white border-t border-black/5">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-8">Before you subscribe</h2>
          <FaqList items={FAQS} />
        </div>
      </section>
    </>
  );
}
