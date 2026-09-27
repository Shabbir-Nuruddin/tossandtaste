"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

// TODO: Update these placeholders with real prices and macros
const MENU_ITEMS = [
  { id: 1, title: 'Grilled Chicken Salad', category: 'Salads', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '3_grilled_chicken_salad.mp4', tags: ['High Protein', 'Keto'] },
  { id: 2, title: 'Avocado Chickpea Salad', category: 'Salads', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '13_avocado_chickpea_salad.mp4', tags: ['Vegan'] },
  { id: 3, title: 'Exotic Fruit Salad', category: 'Salads', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '4_exotic_fruit_salad.mp4', tags: ['Fresh'] },
  { id: 4, title: 'Quinoa Fruit Salad', category: 'Salads', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '14_quinoa_fruit_salad.mp4', tags: ['Gluten Free'] },
  
  { id: 5, title: 'Teriyaki Chicken Bowl', category: 'Bowls', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '15_teriyaki_chicken_rice_bowl.mp4', tags: ['Chef Special'] },
  { id: 6, title: 'Chicken Buddha Bowl', category: 'Bowls', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '5_chicken_buddha_bowl.mp4', tags: ['Balanced'] },
  { id: 7, title: 'Veggie Buddha Bowl', category: 'Bowls', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '8_veggie_buddha_bowl.mp4', tags: ['Vegetarian'] },
  
  { id: 8, title: 'Strawberry Shake', category: 'Shakes', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '1_strawberry_shake.mp4', tags: ['No Sugar'] },
  { id: 9, title: 'Chocolate Shake', category: 'Shakes', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '2_chocolate_shake.mp4', tags: ['Protein Add-on'] },
  { id: 10, title: 'Mix Berry Smoothie', category: 'Shakes', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '16_mix_berry_smoothie.mp4', tags: ['Antioxidant'] },
  
  { id: 11, title: 'Watermelon Mint', category: 'Juices', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '6_watermelon_mint_juice.mp4', tags: ['Hydrating'] },
  { id: 12, title: 'Pineapple Juice', category: 'Juices', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '9_pineapple_juice.mp4', tags: ['Detox'] },
  { id: 13, title: 'ABC Detox', category: 'Juices', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '10_apple_beetroot_carrot_juice.mp4', tags: ['ABC Detox'] },
  
  { id: 14, title: 'Banana Bread', category: 'Snacks', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '7_banana_bread.mp4', tags: ['Wholewheat'] },
  { id: 15, title: 'PB Energy Bites', category: 'Snacks', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '11_peanut_butter_energy_bites.mp4', tags: ['Pre-workout'] },
  { id: 16, title: 'Dry Fruit Ladoo', category: 'Snacks', price: '₹[PRICE]', cals: '[MACROS] kcal', video: '12_dry_fruit_ladoo.mp4', tags: ['Immunity'] },
];

const CATEGORIES = ['All', 'Salads', 'Bowls', 'Shakes', 'Juices', 'Snacks'];

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
        <p className="text-zinc-400 text-xl font-light">Uncompromising nutrition. Impeccable taste.</p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-20">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-4 rounded-full text-sm font-black tracking-[0.15em] uppercase transition-all duration-500 ${
              activeCategory === cat 
                ? 'bg-red-500 text-white shadow-[0_0_30px_rgba(229,57,53,0.3)]' 
                : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <AnimatePresence mode='popLayout'>
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
              {/* Video Container */}
              <div className="relative h-72 w-full bg-zinc-900 overflow-hidden">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  <source src={`/videos/${item.video}`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex-grow flex flex-col justify-between -mt-6 relative z-10">
                <div>
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-2xl font-black uppercase tracking-tight leading-tight">{item.title}</h3>
                    <span className="text-xl font-bold text-red-500 whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-zinc-500 font-medium text-sm tracking-widest uppercase">{item.cals}</p>
                </div>
                
                <MagneticButton className="w-full mt-8 flex items-center justify-center gap-2 bg-white hover:bg-red-500 text-black hover:text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300">
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
