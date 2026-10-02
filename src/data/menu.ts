// Menu data taken from tossandtaste.com/menu.
// Prices marked `null` show "Ask on WhatsApp" until they are confirmed.
// Macros marked `null` were missing or clearly wrong on the live site.

export type Diet = 'veg' | 'nonveg' | 'egg';

export type Category = 'salads' | 'bowls' | 'drinks' | 'bites';

export type MenuItem = {
  id: string;
  name: string;
  category: Category;
  diet: Diet;
  description?: string;
  image?: string;
  // Short looping clip of the dish, played on the card when it is on screen.
  video?: string;
  price: number | null;
  // Bites are sold in packs, each with its own price.
  packs?: { label: string; price: number }[];
  kcal?: number | null;
  protein?: number | null;
  carbs?: number | null;
};

export const CATEGORIES: { id: Category; label: string; blurb: string }[] = [
  { id: 'salads', label: 'Salads', blurb: 'Big, crunchy salads with a proper protein and a dressing made in-house.' },
  { id: 'bowls', label: 'Bowls & Mains', blurb: 'Rice, quinoa and millet bowls. The heart of every meal plan.' },
  { id: 'drinks', label: 'Juices & Shakes', blurb: 'Glow sips: cold-pressed juices, shakes and smoothies. ₹160 each.' },
  { id: 'bites', label: 'Bliss Bites', blurb: 'Snack-sized energy bites for the 4 pm slump.' },
];

const img = (slug: string) => `/food/${slug}.webp`;
const vid = (file: string) => `/videos/${file}.mp4`;

export const MENU: MenuItem[] = [
  // ─── Salads ─────────────────────────────────────────────
  {
    id: 'quinoa-fruit-salad', name: 'Quinoa Fruit Salad', category: 'salads', diet: 'veg',
    description: 'Quinoa with pomegranate, green apple, cherries, mango, kiwi, orange, papaya, grapes, apricots, pecans and sunflower seeds. Mint-honey-lime dressing.',
    image: img('quinoa-fruit-salad'), video: vid('14_quinoa_fruit_salad'), price: 310, kcal: 250, protein: 9.2, carbs: 34.9,
  },
  {
    id: 'grilled-cottage-cheese-salad', name: 'Grilled Cottage Cheese Salad', category: 'salads', diet: 'veg',
    description: 'Grilled paneer, red and yellow peppers, carrots, cherry tomatoes, sweet corn, spring onion, basil and lettuce. Balsamic dressing, with bread.',
    image: img('grilled-cottage-cheese-salad'), price: 310, kcal: 260, protein: 24.2, carbs: 14.9,
  },
  {
    id: 'tofu-salad', name: 'Tofu Salad', category: 'salads', diet: 'veg',
    description: 'Tofu with purple cabbage, spinach, cucumber, pineapple and bell peppers. Creamy peanut dressing.',
    image: img('tofu-salad'), price: 320, kcal: 260, protein: 21.5, carbs: 18,
  },
  {
    id: 'falafel-salad', name: 'Falafel Salad', category: 'salads', diet: 'veg',
    description: 'Falafel with bell peppers, cucumber, olives, jalapeño, cherry tomatoes, lettuce, pita chips and parmesan. Creamy tahini dressing.',
    image: img('falafel-salad'), price: 320, kcal: 240, protein: 12, carbs: 30,
  },
  {
    id: 'avocado-chickpea-salad', name: 'Avocado Chickpea Salad', category: 'salads', diet: 'veg',
    description: 'Chickpeas, avocado, cucumber, cherry tomatoes, onion and carrot. Sweet chilli dressing.',
    image: img('avocado-chickpea-salad'), video: vid('13_avocado_chickpea_salad'), price: 325, kcal: 310, protein: 17.5, carbs: 35,
  },
  {
    id: 'trio-bean-salad', name: 'Trio Bean Salad', category: 'salads', diet: 'veg',
    description: 'Cannellini beans, kidney beans and chickpeas with pomegranate, pineapple, peppers, olives and feta. White wine vinegar dressing.',
    image: img('trio-bean-salad'), price: 325, kcal: 290, protein: 16.5, carbs: 32.8,
  },
  {
    id: 'black-bean-papaya-salad', name: 'Black Bean & Papaya Salad', category: 'salads', diet: 'veg',
    description: 'Black beans, papaya, cucumber, mixed leaves, bell peppers, sweet corn and cherry tomatoes. Sweet chilli dressing.',
    image: img('black-bean-papaya-salad'), price: 320, kcal: null, protein: 18, carbs: 20,
  },
  {
    id: 'exotic-fruit-salad', name: 'Exotic Fruit Salad', category: 'salads', diet: 'veg',
    description: 'A bowl of fresh exotic and seasonal fruit.',
    image: img('exotic-fruit-salad'), video: vid('4_exotic_fruit_salad'), price: 325, kcal: 210, protein: 3, carbs: 25,
  },
  {
    id: 'chicken-quinoa-salad', name: 'Chicken Quinoa Salad', category: 'salads', diet: 'nonveg',
    description: 'Grilled chicken, quinoa, sautéed zucchini, kale, baby corn, peppers, cherry tomatoes, spinach and roasted almonds. Lemon-basil vinaigrette, with bread.',
    image: img('chicken-quinoa-salad'), price: 345, kcal: 320, protein: 38.8, carbs: 40,
  },
  {
    id: 'grilled-chicken-salad', name: 'Grilled Chicken Salad', category: 'salads', diet: 'nonveg',
    description: 'Chicken, avocado, cherry tomatoes, cucumber, sweet corn, onion and roasted pistachios. Honey mustard dressing, with bread.',
    image: img('grilled-chicken-salad'), video: vid('3_grilled_chicken_salad'), price: 345, kcal: 320, protein: 35.2, carbs: 14.9,
  },
  {
    id: 'teriyaki-chicken-salad', name: 'Teriyaki Chicken Salad', category: 'salads', diet: 'nonveg',
    description: 'Teriyaki chicken with avocado, pineapple, kale, broccoli, peppers, cabbage and sesame. Sweet chilli dressing, with bread.',
    image: img('teriyaki-chicken-salad'), price: 345, kcal: 310, protein: 38.5, carbs: 15,
  },
  {
    id: 'chicken-chickpea-salad', name: 'Chicken Chickpea Salad', category: 'salads', diet: 'nonveg',
    description: 'Baked chicken, chickpeas, cherry tomatoes, cucumber, olives, red onion, romaine, feta and pita chips. Red wine vinaigrette.',
    image: img('chicken-chickpea-salad'), price: 345, kcal: null, protein: null, carbs: null,
  },
  {
    id: 'pesto-chicken-pasta', name: 'Pesto Chicken Pasta', category: 'salads', diet: 'nonveg',
    description: 'Smoked chicken with penne, broccoli, red pepper, cherry tomatoes, zucchini, basil, olives, feta and capers. With bread.',
    image: img('pesto-chicken-pasta'), price: 345, kcal: 360, protein: 30.9, carbs: 50.6,
  },

  // ─── Bowls & mains ──────────────────────────────────────
  {
    id: 'veggie-buddha-bowl', name: 'Veggie Buddha Bowl', category: 'bowls', diet: 'veg',
    description: 'Pan-grilled paneer, rice, purple cabbage, carrots, cherry tomatoes and green onion. Dijon honey mustard dressing.',
    image: img('veggie-buddha-bowl'), video: vid('8_veggie_buddha_bowl'), price: 355, kcal: 360, protein: 27.5, carbs: 38.9,
  },
  {
    id: 'paneer-herb-rice', name: 'Paneer with Herb Rice', category: 'bowls', diet: 'veg',
    description: 'Grilled paneer on herb rice, with mandi sauce and a Greek salad.',
    image: img('paneer-herb-rice'), price: 355, kcal: 340, protein: 23.7, carbs: 38.8,
  },
  {
    id: 'grilled-paneer-hummus', name: 'Grilled Paneer with Hummus & Veggies', category: 'bowls', diet: 'veg',
    description: 'Grilled paneer with hummus, broccoli, mushrooms, zucchini and carrots.',
    image: img('grilled-paneer-hummus'), price: 335, kcal: 265, protein: 22, carbs: 36,
  },
  {
    id: 'paprika-paneer-spinach-rice', name: 'Paprika Paneer / Tofu Spinach Rice', category: 'bowls', diet: 'veg',
    description: 'Paprika-grilled paneer or tofu on spinach rice with peppers, broccoli, baby corn and carrots. Greek yogurt dressing.',
    image: img('paprika-paneer-spinach-rice'), price: 345, kcal: 360, protein: 18.5, carbs: 40,
  },
  {
    id: 'tomato-rice-paneer', name: 'Tomato Rice with Paneer / Tofu', category: 'bowls', diet: 'veg',
    description: 'Paneer or tofu with tomato rice, broccoli, baby spinach and fresh basil.',
    image: img('tomato-rice-paneer'), price: 345, kcal: 330, protein: 26, carbs: 38,
  },
  {
    id: 'grilled-tofu-rice-veggies', name: 'Grilled Tofu with Rice & Veggies', category: 'bowls', diet: 'veg',
    description: 'Grilled tofu, brown rice, red pepper, broccoli, mushrooms and carrots. Mandi sauce.',
    image: img('grilled-tofu-rice-veggies'), price: 345, kcal: 330, protein: 27, carbs: 42,
  },
  {
    id: 'veg-burrito-bowl', name: 'Veg Burrito Bowl', category: 'bowls', diet: 'veg',
    description: 'Paneer or tofu, rice, black beans, sweet corn, peppers, lettuce and onion. Greek yogurt dressing.',
    image: img('veg-burrito-bowl'), price: 335, kcal: 320, protein: 30, carbs: 40,
  },
  {
    id: 'roasted-chickpea-quinoa', name: 'Roasted Chickpea with Cilantro Quinoa', category: 'bowls', diet: 'veg',
    description: 'Quinoa, roasted chickpeas, cherry tomatoes, red grapes, carrots, sweet corn, mixed leaves, feta and corn chips. Greek yogurt.',
    price: 345, kcal: 310, protein: 14.5, carbs: 32.9,
  },
  {
    id: 'veg-stir-fry-rice', name: 'Veg Stir Fry with Steamed Rice', category: 'bowls', diet: 'veg',
    description: 'Stir-fried vegetables with steamed rice.',
    price: 335, kcal: null, protein: null, carbs: null,
  },
  {
    id: 'egg-curry-cumin-rice', name: 'Egg Curry with Cumin Rice', category: 'bowls', diet: 'egg',
    description: 'Home-style egg curry with jeera rice and green chutney.',
    image: img('egg-curry-cumin-rice'), price: 315, kcal: 340, protein: 12, carbs: 38,
  },
  {
    id: 'south-west-chicken-bowl', name: 'South West Chicken Bowl', category: 'bowls', diet: 'nonveg',
    description: 'Pan-roasted chicken, black beans, avocado, cherry tomatoes, baby corn, red pepper, broccoli and spinach. Greek yogurt dressing.',
    image: img('south-west-chicken-bowl'), price: 370, kcal: 280, protein: 32.8, carbs: 22,
  },
  {
    id: 'protein-pack-buddha-bowl', name: 'Protein Pack Buddha Bowl', category: 'bowls', diet: 'nonveg',
    description: 'Roast chicken, brown rice, yellow pepper, purple cabbage, carrots, kale, cherry tomatoes and green onion. Dijon honey mustard dressing.',
    image: img('protein-pack-buddha-bowl'), video: vid('5_chicken_buddha_bowl'), price: 365, kcal: 390, protein: 34.4, carbs: 47,
  },
  {
    id: 'herb-chicken-mashed-potato', name: 'Herb Chicken, Mash & Grilled Veggies', category: 'bowls', diet: 'nonveg',
    description: 'Grilled herb chicken with broccoli, baby corn, zucchini and French beans, sweet mashed potato and mint-garlic yogurt.',
    image: img('herb-chicken-mashed-potato'), price: 365, kcal: 425, protein: 41.6, carbs: 50,
  },
  {
    id: 'chicken-with-hummus', name: 'Chicken with Hummus', category: 'bowls', diet: 'nonveg',
    description: 'Chicken with broccoli, baby corn, French beans, spinach and red pepper. Hummus and potato wedges on the side.',
    image: img('chicken-with-hummus'), price: 365, kcal: 280, protein: 30, carbs: 36,
  },
  {
    id: 'moroccan-chicken-barnyard-millet', name: 'Moroccan Chicken with Barnyard Millet', category: 'bowls', diet: 'nonveg',
    description: 'Moroccan-spiced chicken on barnyard millet with grilled pineapple, baby potatoes, broccoli and cherry tomatoes. Mint chutney and mandi sauce.',
    image: img('moroccan-chicken-barnyard-millet'), price: 375, kcal: 305, protein: 35, carbs: 30,
  },
  {
    id: 'stir-fry-chicken-rice', name: 'Stir Fry Chicken with Steamed Rice', category: 'bowls', diet: 'nonveg',
    description: 'Stir-fried chicken with broccoli, bell peppers, carrots and baby corn over steamed rice.',
    image: img('stir-fry-chicken-rice'), price: 365, kcal: 335, protein: 35, carbs: 42,
  },
  {
    id: 'olive-chicken-lemon-rice', name: 'Olive Chicken with Lemon Rice', category: 'bowls', diet: 'nonveg',
    description: 'Chicken in olive sauce with lemon rice and cherry tomatoes.',
    image: img('olive-chicken-lemon-rice'), price: 365, kcal: 345, protein: 32, carbs: 42,
  },
  {
    id: 'grilled-chicken-herb-rice', name: 'Grilled Chicken with Herb Rice', category: 'bowls', diet: 'nonveg',
    description: 'Grilled chicken on herbed brown rice, with mandi sauce and a Greek salad.',
    image: img('grilled-chicken-herb-rice'), price: 365, kcal: 380, protein: 28.9, carbs: 44.8,
  },
  {
    id: 'chicken-quinoa-bowl', name: 'Chicken Quinoa Bowl', category: 'bowls', diet: 'nonveg',
    description: 'Grilled chicken on quinoa with zucchini, kale, baby corn, peppers and roasted almonds. Lemon-basil vinaigrette.',
    image: img('chicken-quinoa-bowl'), price: 355, kcal: 320, protein: 38.8, carbs: 40,
  },
  {
    id: 'minced-chicken-cumin-rice', name: 'Minced Chicken with Cumin Rice', category: 'bowls', diet: 'nonveg',
    description: 'Spiced minced chicken with jeera rice, a garden salad and green chutney.',
    image: img('minced-chicken-cumin-rice'), price: 345, kcal: 320, protein: 32, carbs: 38,
  },
  {
    id: 'chicken-burrito-bowl', name: 'Chicken Burrito Bowl', category: 'bowls', diet: 'nonveg',
    description: 'Chicken, rice, black beans, sweet corn, peppers, lettuce and onion. Greek yogurt dressing.',
    image: img('chicken-burrito-bowl'), price: 345, kcal: 320, protein: 30, carbs: 40,
  },

  // ─── Juices & shakes (all ₹160) ────────────────────────
  { id: 'avocado-smoothie', name: 'Avocado Smoothie', category: 'drinks', diet: 'veg', description: 'Avocado, pineapple, yogurt and spinach.', image: img('avocado-smoothie'), price: 160 },
  { id: 'tropical-green-smoothie', name: 'Tropical Green Protein Smoothie', category: 'drinks', diet: 'veg', description: 'Spinach, mango and pineapple with coconut milk and protein powder.', price: 160 },
  { id: 'date-banana-shake', name: 'Date & Banana Shake', category: 'drinks', diet: 'veg', description: 'Dates, oats and banana with skimmed milk.', image: img('date-banana-shake'), price: 160 },
  { id: 'strawberry-shake', name: 'Strawberry Shake', category: 'drinks', diet: 'veg', description: 'A classic, made with real strawberries.', image: img('strawberry-shake'), video: vid('1_strawberry_shake'), price: 160 },
  { id: 'mix-berry-smoothie', name: 'Mixed Berry Smoothie', category: 'drinks', diet: 'veg', image: img('mix-berry-smoothie'), video: vid('16_mix_berry_smoothie'), price: 160 },
  { id: 'apple-beetroot-carrot-juice', name: 'Apple Beetroot Carrot Juice', category: 'drinks', diet: 'veg', image: img('apple-beetroot-carrot-juice'), video: vid('10_apple_beetroot_carrot_juice'), price: 160 },
  { id: 'apple-pomegranate-juice', name: 'Apple Pomegranate Juice', category: 'drinks', diet: 'veg', image: img('apple-pomegranate-juice'), price: 160 },
  { id: 'watermelon-pineapple-juice', name: 'Watermelon & Pineapple Juice', category: 'drinks', diet: 'veg', image: img('watermelon-juice'), video: vid('6_watermelon_mint_juice'), price: 160 },
  { id: 'pineapple-juice', name: 'Pineapple Juice', category: 'drinks', diet: 'veg', image: img('pineapple-juice'), video: vid('9_pineapple_juice'), price: 160 },
  { id: 'orange-juice', name: 'Orange Juice', category: 'drinks', diet: 'veg', image: img('orange-juice'), price: 160 },

  // ─── Bliss bites ────────────────────────────────────────
  {
    id: 'peanut-butter-crunch', name: 'Peanut Butter Crunch', category: 'bites', diet: 'veg',
    image: img('peanut-butter-crunch'), video: vid('11_peanut_butter_energy_bites'), price: 190,
    packs: [{ label: '4 pc', price: 190 }, { label: '8 pc', price: 360 }], kcal: 240, protein: 15, carbs: 28,
  },
  {
    id: 'oats-crisp-glow', name: 'Oats Crisp Glow', category: 'bites', diet: 'veg',
    image: img('oats-crisp-glow'), price: 190,
    packs: [{ label: '4 pc', price: 190 }, { label: '8 pc', price: 360 }], kcal: 210, protein: 4, carbs: 20,
  },
  {
    id: 'nutty-slash', name: 'Nutty Slash', category: 'bites', diet: 'veg',
    image: img('nutty-slash'), price: 230,
    packs: [{ label: '4 pc', price: 230 }, { label: '8 pc', price: 430 }], kcal: 240, protein: 10, carbs: 24,
  },
  {
    id: 'quinoa-jaggery-bites', name: 'Quinoa Jaggery Bites', category: 'bites', diet: 'veg',
    price: 190,
    packs: [{ label: '4 pc', price: 190 }, { label: '8 pc', price: 360 }], kcal: 210, protein: 10, carbs: 24,
  },
  {
    id: 'banana-bliss', name: 'Banana Bliss', category: 'bites', diet: 'veg',
    price: 280,
    packs: [{ label: '4 pc', price: 280 }, { label: '8 pc', price: 520 }], kcal: 190, protein: null, carbs: 28,
  },
];

export const GRAINS = [
  { name: 'Rice', kcal: 121, image: '/uploads/2026/07/Rice-001-600x336.jpg' },
  { name: 'Quinoa', kcal: 120, image: '/uploads/2026/07/Quinoa-004-600x336.jpg' },
  { name: 'Brown Rice', kcal: 105, image: '/uploads/2026/07/brown-rice-00d-600x336.jpg' },
  { name: 'Barnyard Millet', kcal: 103, image: '/uploads/2026/07/Barnyard-Millet-003-600x336.jpg' },
  { name: 'Millet Pasta', kcal: 165, image: '/uploads/2026/07/Millet-Pasta-003-600x336.jpg' },
];

export const isHighProtein = (item: MenuItem) => (item.protein ?? 0) >= 30;

export const FEATURED_IDS = [
  'south-west-chicken-bowl',
  'veggie-buddha-bowl',
  'moroccan-chicken-barnyard-millet',
  'quinoa-fruit-salad',
  'grilled-paneer-hummus',
  'teriyaki-chicken-salad',
];
