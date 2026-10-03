// Prices published on both product pages at tossandtaste.com, verified 4 October 2026.
// Delivery is additional and confirmed by the team before payment.

export type Preference = 'veg' | 'nonveg' | 'mix';
export type MealSlot = 'lunch' | 'dinner' | 'both';
export type MealCount = 10 | 20 | 30;

export type Plan = {
  id: 'protein-pack' | 'fat-loss';
  name: string;
  short: string;
  description: string;
  points: string[];
  image: string;
  video: string;
  fromNote?: string;
  prices: Record<Preference, Record<MealCount, number | null>>;
};

export const MEAL_COUNTS: MealCount[] = [10, 20, 30];

export const PREFERENCES: { id: Preference; label: string }[] = [
  { id: 'veg', label: 'Veg' },
  { id: 'nonveg', label: 'Non-Veg' },
  { id: 'mix', label: 'Mix' },
];

export const SLOTS: { id: MealSlot; label: string }[] = [
  { id: 'lunch', label: 'Lunch' },
  { id: 'dinner', label: 'Dinner' },
  { id: 'both', label: 'Lunch + Dinner' },
];

export const mixSplit = (meals: MealCount) => `${meals / 2} veg + ${meals / 2} non-veg`;

export const PLANS: Plan[] = [
  {
    id: 'protein-pack',
    name: 'Protein Pack Plan',
    short: 'For building strength and staying full.',
    description:
      'Protein-rich, balanced meals to help you hit your daily protein goal, recover from workouts and stay full between meals. Meals are portioned, and most come with their calories and macros.',
    points: [
      'Chicken, paneer, tofu, beans and eggs as the protein',
      'Calories and macros listed for most meals',
      'Veg, non-veg, or a mix of both',
      'Lunch, dinner, or both',
    ],
    image: '/food/cover-protein-pack.webp',
    video: '/videos/20_protein_pack_hero.mp4',
    prices: {
      veg: { 10: 3100, 20: 5900, 30: 8600 },
      nonveg: { 10: 3300, 20: 6400, 30: 9200 },
      mix: { 10: 3200, 20: 6200, 30: 9000 },
    },
  },
  {
    id: 'fat-loss',
    name: 'Fat Loss Plan',
    short: 'For losing weight without going hungry.',
    description:
      'Portion-controlled meals that keep you in a calorie deficit while still feeling like real food. Light salads and bowls, high in fibre and protein, so you stay satisfied through the day.',
    points: [
      'Calorie-counted salads and bowls',
      'High fibre and protein to keep hunger in check',
      'Veg, non-veg, or a mix of both',
      'Lunch, dinner, or both',
    ],
    image: '/food/cover-fat-loss.webp',
    video: '/videos/19_fat_loss_hero.mp4',
    prices: {
      veg: { 10: 3100, 20: 5900, 30: 8600 },
      nonveg: { 10: 3300, 20: 6400, 30: 9200 },
      mix: { 10: 3200, 20: 6200, 30: 9000 },
    },
  },
];

export const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`;

// Cheapest way into a plan (usually 10 veg meals).
export function lowestPrice(plan: Plan) {
  const all = Object.values(plan.prices).flatMap((p) => Object.values(p)).filter((n): n is number => n != null);
  return all.length ? Math.min(...all) : null;
}

// Best per-meal rate across all sizes and preferences (usually the 30-meal plan).
export function lowestPerMeal(plan: Plan) {
  const rates = Object.values(plan.prices).flatMap((byCount) =>
    MEAL_COUNTS.flatMap((n) => (byCount[n] != null ? [Math.round(byCount[n]! / n)] : []))
  );
  return rates.length ? Math.min(...rates) : null;
}

// Keep the advertised rate tied to the package that actually offers it.
export function bestRatePackage(plan: Plan) {
  const offers = PREFERENCES.flatMap(({ id, label }) =>
    MEAL_COUNTS.flatMap((meals) => {
      const price = plan.prices[id][meals];
      return price == null ? [] : [{ meals, price, preference: label, rate: price / meals }];
    })
  );
  return offers.sort((a, b) => a.rate - b.rate)[0] ?? null;
}
