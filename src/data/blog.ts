// Blog posts as published on tossandtaste.com (lightly tidied for the web).
// Body uses a tiny markdown subset: "## " headings, "- " bullets, blank-line paragraphs.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  image: string;
  body: string;
};

export const POSTS: Post[] = [
  {
    slug: 'fat-loss-plan-a-smart-sustainable-way-to-lose-weight',
    title: 'Smart Fat Loss: A Sustainable Plan to Lose Weight',
    excerpt: 'Crash diets and starving yourself don’t work. Here’s how the Fat Loss Plan helps you lose weight without feeling weak or deprived.',
    date: '2026-02-17',
    image: '/uploads/about/24.jpg',
    body: `Irregular meals, processed food and too little movement make weight gain very common today. But crash dieting and starving yourself is not the answer.

Our Fat Loss Plan is built to help you lose weight gradually and sustainably, without feeling weak or deprived.

## What is the Fat Loss Plan?

It’s a structured nutrition plan that helps you:

- Boost your metabolism
- Reduce excess body fat
- Control cravings
- Keep your energy up

It is built around clean eating and balanced meals.

## What’s in it

- High-fibre foods that keep you full for longer
- Plant-based protein
- Healthy fats
- Low-sugar options

## Benefits

- Gradual, safe weight loss
- No extreme dieting
- Better digestion
- More energy through the day

## How to get the most out of it

- Eat a proper breakfast
- Choose smart snacks like our Energy Bites
- Stay hydrated
- Add some light exercise to your routine

Consistency is what gets results. Weight loss doesn’t mean starving. With the right food and a balanced approach, you can lose fat safely and keep it off.`,
  },
  {
    slug: 'protein-pack-plan-build-strength-boost-energy',
    title: 'Protein Pack: Fuel Strength, Boost Energy',
    excerpt: 'Not getting enough protein shows up as fatigue, slow recovery and muscle loss. Here’s who the Protein Pack Plan is for.',
    date: '2026-02-17',
    image: '/uploads/2026/02/pic14.webp',
    body: `Protein is the building block of the body. Without enough of it, you may notice muscle loss, fatigue and slow recovery.

## Who it’s for

- Gym-goers
- Busy professionals
- Anyone looking to tone up
- Anyone who wants to get stronger

## Why protein matters

- Muscle growth
- Muscle recovery
- Immunity support
- Long-lasting energy

## What the plan gives you

- High-protein meals built on chicken, paneer, tofu, beans and eggs
- Clean, natural ingredients
- No harmful chemicals
- Balanced nutrition

## Benefits

- Faster recovery after workouts
- Better workout performance
- Lean muscle development
- Steady energy through the day

If your goal is to stay strong, active and fit, the Protein Pack Plan makes hitting your protein target much easier.`,
  },
  {
    slug: 'energy-bites-the-smart-way-to-snack-healthy',
    title: 'Energy Bites: Power Your Body Naturally',
    excerpt: 'Junk food when hunger strikes means energy crashes later. Energy Bites are the smarter snack.',
    date: '2026-02-17',
    image: '/uploads/about/Group-38-930x540.png',
    body: `We often reach for junk food when hunger strikes, and unhealthy snacks lead to weight gain and energy crashes. Energy Bites are a better option.

## What are Energy Bites?

Small, nutrient-rich snack balls made with:

- Plant protein
- Fibre-rich ingredients
- Natural sweeteners

## Why they work

- A quick energy boost
- A good pre-workout snack
- Easy to carry around
- No artificial preservatives

## When to eat them

- Mid-morning
- When evening cravings hit
- Before a workout
- During long work hours

Energy Bites keep you going without the empty calories.`,
  },
  {
    slug: 'healthy-sip-refreshment-that-supports-your-health',
    title: 'Healthy Sip: Refreshment with Benefits',
    excerpt: 'Sodas and sugary drinks add up. Our fresh juices and smoothies are the lighter alternative.',
    date: '2026-02-17',
    image: '/uploads/about/Group-37-930x540.png',
    body: `Sugary drinks and sodas can harm your health over time. Our Glow Sips (fresh juices, shakes and smoothies) are a smarter alternative.

## What you get

- Low sugar
- Antioxidant-rich ingredients
- Natural refreshment

## Benefits

- Keeps you hydrated
- Gives you an energy lift
- Supports your body’s natural detox
- Light and refreshing

A good pick for anyone who wants flavour without the junk.`,
  },
  {
    slug: 'why-smart-planning-is-essential-for-weight-loss',
    title: 'Why Smart Planning Is Essential for Weight Loss',
    excerpt: 'Most diets fail because they have no structure. Planning is what makes fat loss stick.',
    date: '2026-02-17',
    image: '/uploads/about/Group-36-930x540.png',
    body: `Many people try random diets and give up because there’s no structure behind them.

## Successful fat loss needs

- Balanced nutrition
- Enough protein
- Healthy snacks
- Less sugar
- Consistency

Pairing the Fat Loss Plan with smart snacks like Energy Bites and a fresh juice gives you a routine you can actually follow.

## Common mistakes to avoid

- Skipping meals
- Cutting calories too hard
- Ignoring protein
- An inconsistent routine

Smart planning is what makes results last.`,
  },
  {
    slug: 'natural-nutrition-vs-processed-food-make-the-right-choice',
    title: 'Natural Nutrition vs Processed Food: Which Is Better for You?',
    excerpt: 'Added sugar, preservatives and additives, and why real ingredients make the difference.',
    date: '2026-02-17',
    image: '/uploads/about/Food-Image-sweass-930x540.jpg',
    body: `Processed foods are often loaded with:

- Added sugars
- Artificial preservatives
- Harmful additives

Natural nutrition focuses on:

- Real ingredients
- Higher nutrient value
- Better digestion
- Clean energy

Choosing natural food supports long-term health and overall well-being.

## Final thoughts

Your body deserves clean, nourishing food. Switching from processed items to natural, balanced meals is an investment in your long-term health.`,
  },
];

export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
