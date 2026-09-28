"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const MENU_ITEMS = [
  // Breakfast
  { id: 1, title: 'Grilled Chicken Sandwich', category: 'Breakfast', desc: 'Protein-packed grilled chicken breast with veggies in toasted multi-grain bread.', price: '₹280', cals: '32g Protein | 38g Carbs | 350 kcal', tags: ['High Protein'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 2, title: 'Grilled Paneer Sandwich', category: 'Breakfast', desc: 'Spiced grilled paneer layered with veggies in toasted bread.', price: '₹220', cals: '25g Protein | 42g Carbs | 320 kcal', tags: ['Vegetarian'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 3, title: 'Masala Omelet With Toast', category: 'Breakfast', desc: 'Classic Indian style omelet with onions, tomatoes, and chilies. 2 Slices.', price: '₹180', cals: '18g Protein | 20g Carbs | 280 kcal', tags: ['Classic'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 4, title: 'Mexican Omelet With Toast', category: 'Breakfast', desc: 'Fluffy omelet loaded with bell peppers, jalapenos, and a hint of cheese.', price: '₹220', cals: '20g Protein | 22g Carbs | 310 kcal', tags: ['Spicy'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 5, title: 'Scrambled Egg & Baked Beans', category: 'Breakfast', desc: 'Creamy scrambled eggs served with protein-rich baked beans and toast.', price: '₹220', cals: '22g Protein | 35g Carbs | 340 kcal', tags: ['Classic'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 6, title: 'Overnight Oats with Yogurt', category: 'Breakfast', desc: 'Rolled oats soaked in creamy yogurt with fresh fruits and chia seeds.', price: '₹220', cals: '12g Protein | 45g Carbs | 290 kcal', tags: ['High Fiber'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 7, title: 'Besan Chilla', category: 'Breakfast', desc: 'Savory Indian pancake made with gram flour, herbs, and spices.', price: '₹140', cals: '10g Protein | 28g Carbs | 200 kcal', tags: ['Gluten Free'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 8, title: 'Oats Chilla', category: 'Breakfast', desc: 'Healthy oats pancakes cooked to crisp perfection.', price: '₹160', cals: '8g Protein | 30g Carbs | 180 kcal', tags: ['Fiber Rich'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 9, title: 'Grilled Chicken Wrap', category: 'Breakfast', desc: 'Tender chicken strips wrapped in a wholesome tortilla with crisp veggies.', price: '₹280', cals: '35g Protein | 45g Carbs | 400 kcal', tags: ['On the go'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 10, title: 'Grilled Paneer Wrap', category: 'Breakfast', desc: 'Soft paneer cubes with mint chutney and salad in a wrap.', price: '₹260', cals: '20g Protein | 40g Carbs | 380 kcal', tags: ['Vegetarian'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 11, title: 'Avocado Toast', category: 'Breakfast', desc: 'Mashed avocado on sourdough with cherry tomatoes and microgreens.', price: '₹300', cals: '10g Protein | 35g Carbs | 310 kcal', tags: ['Superfood'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },

  // Shakes & Smoothies
  { id: 12, title: 'Strawberry Shake', category: 'Shakes & Smoothies', desc: 'Fresh strawberries blended with chilled milk.', price: '₹200', cals: '250 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Refreshing'] },
  { id: 13, title: 'Mix Berry Smoothie', category: 'Shakes & Smoothies', desc: 'Antioxidant-rich mixed berries blended perfectly.', price: '₹250', cals: '220 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Antioxidant'] },
  { id: 14, title: 'Date & Banana Shake', category: 'Shakes & Smoothies', desc: 'Naturally sweetened with dates, providing a quick energy boost.', price: '₹220', cals: '8g Protein | 45g Carbs | 300 kcal', tags: ['Energy'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },
  { id: 15, title: 'Chocolate Shake', category: 'Shakes & Smoothies', desc: 'Rich chocolate blended with low-fat milk.', price: '₹200', cals: '300 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Indulgent'] },
  { id: 16, title: 'Avocado Smoothie', category: 'Shakes & Smoothies', desc: 'Creamy avocado blended for healthy fats and satiety.', price: '₹280', cals: '6g Protein | 20g Carbs | 320 kcal', tags: ['Keto'], image: '/uploads/2026/07/tofu-salad-00as.jpg' },

  // Lunch & Dinner
  { id: 17, title: 'Southwest Bowl', category: 'Lunch & Dinner', desc: 'Black beans, corn, grilled chicken, and fresh greens with a zesty dressing.', price: '₹380', cals: '38g Protein | 42g Carbs | 450 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['High Protein'] },
  { id: 18, title: 'Pesto Pasta Bowl', category: 'Lunch & Dinner', desc: 'Whole wheat pasta tossed in fresh basil pesto with cherry tomatoes.', price: '₹350', cals: '15g Protein | 60g Carbs | 410 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Comfort Food'] },
  { id: 19, title: 'Herb Chicken & Mashed Potato', category: 'Lunch & Dinner', desc: 'Grilled herb chicken served with sweet mashed potato and grilled veggies.', price: '₹420', cals: '45g Protein | 35g Carbs | 400 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Balanced'] },
  { id: 20, title: 'Protein Pack Buddha Bowl', category: 'Lunch & Dinner', desc: 'Quinoa, roasted chickpeas, tofu, and greens in a tahini dressing.', price: '₹390', cals: '28g Protein | 55g Carbs | 480 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Vegan'] },
  { id: 21, title: 'Chicken Quinoa Bowl', category: 'Lunch & Dinner', desc: 'Grilled chicken breast with fluffy quinoa and roasted vegetables.', price: '₹420', cals: '42g Protein | 40g Carbs | 440 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Power Meal'] },
  { id: 22, title: 'Chicken With Hummus', category: 'Lunch & Dinner', desc: 'Mediterranean spiced chicken with creamy house-made hummus.', price: '₹400', cals: '40g Protein | 25g Carbs | 460 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Low Carb'] },
  { id: 23, title: 'Moroccan Chicken', category: 'Lunch & Dinner', desc: 'Aromatic Moroccan spiced chicken with couscous.', price: '₹410', cals: '38g Protein | 45g Carbs | 430 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Exotic'] },
  { id: 24, title: 'Minced Chicken Rice Bowl', category: 'Lunch & Dinner', desc: 'Lean minced chicken cooked in Asian spices served over brown rice.', price: '₹380', cals: '35g Protein | 50g Carbs | 420 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Comfort Food'] },
  { id: 25, title: 'Tomato Rice with Tofu', category: 'Lunch & Dinner', desc: 'Tangy tomato rice served with grilled tofu steaks.', price: '₹340', cals: '20g Protein | 55g Carbs | 390 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Vegan'] },
  { id: 26, title: 'Stir Fry Chicken Bowl', category: 'Lunch & Dinner', desc: 'Chicken and colorful veggies stir-fried in a light soy ginger sauce.', price: '₹380', cals: '35g Protein | 20g Carbs | 320 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Low Carb'] },
  { id: 27, title: 'Grilled Paneer Spinach Rice', category: 'Lunch & Dinner', desc: 'Cottage cheese cubes over nutrient-rich spinach rice.', price: '₹350', cals: '22g Protein | 45g Carbs | 400 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Vegetarian'] },
  { id: 28, title: 'Roasted Chickpea Quinoa', category: 'Lunch & Dinner', desc: 'Crunchy roasted chickpeas with fluffy quinoa and fresh veggies.', price: '₹330', cals: '18g Protein | 52g Carbs | 380 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Vegan'] },
  { id: 29, title: 'Teriyaki Chicken Rice Bowl', category: 'Lunch & Dinner', desc: 'Classic teriyaki glazed chicken served over steamed rice.', price: '₹400', cals: '38g Protein | 55g Carbs | 460 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Best Seller'] },

  // Salads
  { id: 30, title: 'Grilled Cottage Cheese Salad', category: 'Salads', desc: 'Fresh greens topped with grilled paneer and a light vinaigrette.', price: '₹280', cals: '20g Protein | 15g Carbs | 280 kcal', image: '/uploads/2026/07/Salad-200.png', tags: ['Low Carb'] },
  { id: 31, title: 'Quinoa Salad', category: 'Salads', desc: 'Nutrient-dense quinoa with mixed vegetables and lemon dressing.', price: '₹300', cals: '12g Protein | 45g Carbs | 320 kcal', image: '/uploads/2026/07/Quinoa-004.jpg', tags: ['Superfood'] },
  { id: 32, title: 'Falafel Salad', category: 'Salads', desc: 'Baked falafels on a bed of greens with tahini dressing.', price: '₹320', cals: '15g Protein | 40g Carbs | 350 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Middle Eastern'] },
  { id: 33, title: 'Chicken Avocado Salad', category: 'Salads', desc: 'Grilled chicken breast and fresh avocado on mixed greens.', price: '₹380', cals: '40g Protein | 12g Carbs | 380 kcal', image: '/uploads/2026/07/Salad-200.png', tags: ['Keto'] },
  { id: 34, title: 'Exotic Fruit Salad', category: 'Salads', desc: 'Seasonal exotic fruits tossed in a light citrus dressing.', price: '₹250', cals: '2g Protein | 45g Carbs | 180 kcal', image: '/uploads/2026/02/pic5.webp', tags: ['Refreshing'] }
];

const CATEGORIES = ['All', 'Breakfast', 'Lunch & Dinner', 'Salads', 'Shakes & Smoothies'];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = MENU_ITEMS.filter(item => 
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <div className="pt-40 pb-32 px-6 max-w-[1400px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-[5rem] font-black uppercase tracking-tighter mb-4 text-[#1a1a1a]">The Menu</h1>
        <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto">Uncompromising nutrition. Impeccable taste. Explore our chef-crafted healthy meals.</p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
              activeCategory === category 
                ? 'bg-[#1a1a1a] text-white' 
                : 'bg-white text-zinc-500 border border-zinc-200 hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map(item => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id} 
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative h-64 w-full bg-zinc-100 overflow-hidden">
                {(item as any).video ? (
                  <video 
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={`/videos/${(item as any).video}`} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={item.image} onError={(e) => { e.currentTarget.src = "/uploads/2026/07/Salad-200.png" }} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-black/50 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-[#1a1a1a] leading-snug">{item.title}</h3>
                  <span className="text-lg font-black text-[#5e9d34] shrink-0">{item.price}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {item.cals.split('|').map((stat, i) => (
                    <span key={i} className="bg-[#f6faed] text-[#5e9d34] text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                      {stat.trim()}
                    </span>
                  ))}
                </div>
                
                <p className="text-zinc-500 text-sm font-medium leading-relaxed flex-grow">{item.desc}</p>
                
                <button className="w-full mt-4 flex items-center justify-center gap-2 bg-[#fcfdf8] border border-zinc-200 group-hover:bg-[#5e9d34] group-hover:text-white text-[#1a1a1a] py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300">
                  <Plus className="w-4 h-4" /> Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
