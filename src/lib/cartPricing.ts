import { MENU } from '@/data/menu';
import { PLANS } from '@/data/plans';
import type { CartItem, PlanSelection } from '@/store/cartStore';

// Saved carts can outlive a price update. Resolve current catalog prices when displaying
// and composing an enquiry; unknown items require a quote rather than an old price.
export function currentCartPrices(items: CartItem[], plan: PlanSelection | null) {
  const catalog = MENU.flatMap((item) =>
    item.packs
      ? item.packs.map((pack) => ({ id: `${item.id}-${pack.label}`, price: pack.price }))
      : [{ id: item.id, price: item.price }]
  );
  const currentPlan = plan ? PLANS.find((p) => p.id === plan.planId) : null;
  return {
    items: items.map((item) => ({ ...item, price: catalog.find((p) => p.id === item.id)?.price ?? null })),
    plan: plan ? {
      ...plan,
      price: currentPlan?.prices[plan.preference]?.[plan.meals] ?? null,
    } : null,
  };
}
