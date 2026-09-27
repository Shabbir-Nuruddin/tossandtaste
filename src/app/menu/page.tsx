"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const MENU_ITEMS = [
  // Breakfast
  { id: 1, title: 'Grilled Chicken Sandwich', category: 'Breakfast', desc: 'Juicy grilled chicken breast with fresh greens in wholewheat bread.', price: '₹250', cals: '350 kcal', tags: ['High Protein'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 2, title: 'Grilled Paneer Sandwich', category: 'Breakfast', desc: 'Spiced grilled paneer layered with veggies in toasted bread.', price: '₹220', cals: '320 kcal', tags: ['Vegetarian'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 3, title: 'Masala Omelet With Toast', category: 'Breakfast', desc: 'Classic Indian style omelet with onions, tomatoes, and chilies. 2 Slices.', price: '₹180', cals: '280 kcal', tags: ['Classic'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 4, title: 'Mexican Omelet With Toast', category: 'Breakfast', desc: 'Loaded with bell peppers, corn, and Mexican seasoning. 2 Slices.', price: '₹200', cals: '300 kcal', tags: ['Spicy'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 5, title: 'Scrambled Egg & Baked Beans', category: 'Breakfast', desc: 'Creamy scrambled eggs served with protein-rich baked beans and toast.', price: '₹220', cals: '340 kcal', tags: ['Protein'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 6, title: 'Overnight Oats with Yogurt', category: 'Breakfast', desc: 'Chilled oats soaked in yogurt with fresh berries and chia seeds.', price: '₹190', cals: '250 kcal', tags: ['Healthy'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 7, title: 'Besan Chilla', category: 'Breakfast', desc: 'Savory chickpea flour pancakes packed with veggies.', price: '₹160', cals: '200 kcal', tags: ['Gluten Free'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 8, title: 'Oats Chilla', category: 'Breakfast', desc: 'Healthy oats pancakes cooked to crisp perfection.', price: '₹160', cals: '180 kcal', tags: ['Fiber Rich'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 9, title: 'Grilled Chicken Wrap', category: 'Breakfast', desc: 'Tender chicken strips wrapped in a wholesome tortilla with crisp veggies.', price: '₹280', cals: '400 kcal', tags: ['On the go'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 10, title: 'Grilled Paneer Wrap', category: 'Breakfast', desc: 'Soft paneer cubes with mint chutney and salad in a wrap.', price: '₹260', cals: '380 kcal', tags: ['Vegetarian'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 11, title: 'Avocado Toast', category: 'Breakfast', desc: 'Mashed avocado on sourdough with cherry tomatoes and microgreens.', price: '₹300', cals: '310 kcal', tags: ['Superfood'], image: '/uploads/Our-Menucdd.jpg' },

  // Shakes & Smoothies
  { id: 12, title: 'Strawberry Shake', category: 'Shakes & Smoothies', desc: 'Fresh strawberries blended with chilled milk.', price: '₹200', cals: '250 kcal', video: '1_strawberry_shake.mp4', tags: ['Refreshing'] },
  { id: 13, title: 'Mix Berry Smoothie', category: 'Shakes & Smoothies', desc: 'Antioxidant powerhouse with mixed berries and yogurt.', price: '₹250', cals: '220 kcal', video: '16_mix_berry_smoothie.mp4', tags: ['Antioxidant'] },
  { id: 14, title: 'Date & Banana Shake', category: 'Shakes & Smoothies', desc: 'Naturally sweetened with dates, providing a quick energy boost.', price: '₹220', cals: '300 kcal', tags: ['Energy'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 15, title: 'Chocolate Shake', category: 'Shakes & Smoothies', desc: 'Rich, indulgent chocolate shake packed with whey protein.', price: '₹250', cals: '350 kcal', video: '2_chocolate_shake.mp4', tags: ['Protein Add-on'] },
  { id: 16, title: 'Avocado Smoothie', category: 'Shakes & Smoothies', desc: 'Creamy avocado blended for healthy fats and satiety.', price: '₹280', cals: '320 kcal', tags: ['Keto'], image: '/uploads/Our-Menucdd.jpg' },

  // Lunch & Dinner
  { id: 17, title: 'Southwest Bowl', category: 'Lunch & Dinner', desc: 'Zesty southwest chicken or paneer with black beans and corn.', price: '₹350', cals: '450 kcal', tags: ['Spicy'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 18, title: 'Pesto Pasta Bowl', category: 'Lunch & Dinner', desc: 'Wholewheat pasta tossed in fresh basil pesto with chicken/paneer.', price: '₹380', cals: '500 kcal', tags: ['Italian'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 19, title: 'Herb Chicken & Mashed Potato', category: 'Lunch & Dinner', desc: 'Grilled herb chicken served with sweet mashed potato and grilled veggies.', price: '₹420', cals: '400 kcal', tags: ['Balanced'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 20, title: 'Protein Pack Buddha Bowl', category: 'Lunch & Dinner', desc: 'A nourishing bowl packed with lean proteins, grains, and greens.', price: '₹390', cals: '480 kcal', video: '5_chicken_buddha_bowl.mp4', tags: ['High Protein'] },
  { id: 21, title: 'Chicken Quinoa Bowl', category: 'Lunch & Dinner', desc: 'Protein-packed chicken and quinoa, the perfect post-workout meal.', price: '₹400', cals: '420 kcal', tags: ['Superfood'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 22, title: 'Chicken With Hummus', category: 'Lunch & Dinner', desc: 'Grilled chicken served alongside creamy hummus and fresh veggies.', price: '₹380', cals: '450 kcal', tags: ['Middle Eastern'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 23, title: 'Moroccan Chicken', category: 'Lunch & Dinner', desc: 'Flavorful Moroccan spiced chicken with brown or white rice.', price: '₹390', cals: '460 kcal', tags: ['Exotic'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 24, title: 'Minced Chicken Rice Bowl', category: 'Lunch & Dinner', desc: 'Lean minced chicken cooked with herbs over a bed of warm rice.', price: '₹350', cals: '410 kcal', tags: ['Comfort'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 25, title: 'Tomato Rice with Tofu', category: 'Lunch & Dinner', desc: 'Tangy tomato rice paired with perfectly grilled tofu or paneer.', price: '₹340', cals: '380 kcal', tags: ['Vegan Option'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 26, title: 'Stir Fry Chicken Bowl', category: 'Lunch & Dinner', desc: 'Asian style stir-fry chicken with vibrant veggies and steamed rice.', price: '₹360', cals: '390 kcal', tags: ['Asian'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 27, title: 'Grilled Paneer Spinach Rice', category: 'Lunch & Dinner', desc: 'Iron-rich spinach rice served with charred grilled paneer.', price: '₹350', cals: '420 kcal', tags: ['Iron Rich'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 28, title: 'Roasted Chickpea Quinoa', category: 'Lunch & Dinner', desc: 'Crunchy roasted chickpeas with fluffy quinoa and grilled vegetables.', price: '₹350', cals: '380 kcal', tags: ['Vegan'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 29, title: 'Teriyaki Chicken Rice Bowl', category: 'Lunch & Dinner', desc: 'Sweet and savory teriyaki chicken over sticky rice.', price: '₹400', cals: '450 kcal', video: '15_teriyaki_chicken_rice_bowl.mp4', tags: ['Chef Special'] },

  // Salads
  { id: 30, title: 'Grilled Cottage Cheese Salad', category: 'Salads', desc: 'Fresh greens topped with perfectly grilled cottage cheese or chicken.', price: '₹320', cals: '250 kcal', video: '3_grilled_chicken_salad.mp4', tags: ['Low Carb'] },
  { id: 31, title: 'Quinoa Salad', category: 'Salads', desc: 'Nutrient-dense quinoa tossed with colorful vegetables.', price: '₹340', cals: '280 kcal', video: '14_quinoa_fruit_salad.mp4', tags: ['Gluten Free'] },
  { id: 32, title: 'Falafel Salad', category: 'Salads', desc: 'Crispy baked falafels over a bed of fresh Mediterranean greens.', price: '₹320', cals: '310 kcal', tags: ['Vegan'], image: '/uploads/Our-Menucdd.jpg' },
  { id: 33, title: 'Chicken Avocado Salad', category: 'Salads', desc: 'Lean chicken breast and creamy avocado for healthy fats.', price: '₹380', cals: '350 kcal', video: '13_avocado_chickpea_salad.mp4', tags: ['Keto'] },
  { id: 34, title: 'Exotic Fruit Salad', category: 'Salads', desc: 'A refreshing mix of seasonal and exotic fruits.', price: '₹280', cals: '180 kcal', video: '4_exotic_fruit_salad.mp4', tags: ['Fresh'] },
];

const CATEGORIES = ['All', 'Breakfast', 'Shakes & Smoothies', 'Lunch & Dinner', 'Salads'];

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
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-[6rem] font-black uppercase tracking-tighter mb-6">The Menu</h1>
        <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">Uncompromising nutrition. Impeccable taste. Explore our chef-crafted healthy meals designed for busy professionals and fitness lovers.</p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
              activeCategory === category 
                ? 'bg-white text-black' 
                : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              key={item.id}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 transition-colors duration-500 flex flex-col h-full"
            >
              {/* Media Container */}
              <div className="relative h-64 w-full bg-zinc-900 overflow-hidden">
                {item.video ? (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    <source src={`/videos/${item.video}`} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-70"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-grow flex flex-col justify-between -mt-8 relative z-10">
                <div>
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-2xl font-black tracking-tight leading-tight">{item.title}</h3>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                     <span className="text-xl font-bold text-red-500">{item.price}</span>
                     <p className="text-zinc-400 font-medium text-xs tracking-widest uppercase bg-zinc-900 px-2 py-1 rounded">{item.cals}</p>
                  </div>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed mb-6">{item.desc}</p>
                </div>
                
                <MagneticButton className="w-full flex items-center justify-center gap-2 bg-white hover:bg-red-500 text-black hover:text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300">
                  <Plus className="w-4 h-4" /> Add to Order
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
