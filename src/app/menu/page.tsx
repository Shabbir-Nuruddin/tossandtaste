"use client"
import Link from 'next/link';

export default function MenuPage() {
  const menuItems = [
    { id: 1, title: 'Minced Chicken Rice Bowl', category: 'Lunch & Dinner', desc: 'Lean minced chicken cooked in Asian spices served over brown rice.', price: '₹380', cals: '35g Protein | 50g Carbs | 420 kcal', image: '/uploads/live/Minced-chicken-with-cumin-rice-bowl.webp', tags: ['Comfort Food'] },
    { id: 2, title: 'Stir Fry Chicken Bowl', category: 'Lunch & Dinner', desc: 'Chicken and colorful veggies stir-fried in a light soy ginger sauce.', price: '₹380', cals: '35g Protein | 20g Carbs | 320 kcal', image: '/uploads/live/Stir-fry-chicken-with-steam-rice-bowl.webp', tags: ['Low Carb'] },
    { id: 3, title: 'Egg Curry & Cumin Rice', category: 'Lunch & Dinner', desc: 'Wholesome egg curry served with aromatic cumin rice.', price: '₹320', cals: '22g Protein | 45g Carbs | 380 kcal', image: '/uploads/live/Egg-curry-and-Cumin-rice-bowl.webp', tags: ['Classic'] },
    { id: 4, title: 'Grilled Tofu with Rice & Veggies', category: 'Lunch & Dinner', desc: 'Grilled tofu steaks served with rice and exotic vegetables.', price: '₹340', cals: '20g Protein | 55g Carbs | 390 kcal', image: '/uploads/live/Grilled-tofu-with-rice-and-exotic-veggies-sdadqw-1024x1024.jpg', tags: ['Vegan'] },
    { id: 5, title: 'Grilled Paneer with Hummus', category: 'Lunch & Dinner', desc: 'Mediterranean spiced paneer with creamy house-made hummus and exotic veggies.', price: '₹360', cals: '25g Protein | 30g Carbs | 410 kcal', image: '/uploads/live/Grilled-panner-with-hummus-and-exotic-veggies-wed3.jpg', tags: ['Vegetarian'] },
    { id: 6, title: 'Chicken Quinoa Salad', category: 'Salads', desc: 'Grilled chicken breast on a bed of quinoa and mixed greens.', price: '₹380', cals: '40g Protein | 35g Carbs | 380 kcal', image: '/uploads/live/chicken-quinoa-salad.webp', tags: ['High Protein'] },
    { id: 7, title: 'Falafel Salad', category: 'Salads', desc: 'Baked falafels on a bed of greens with tahini dressing.', price: '₹320', cals: '15g Protein | 40g Carbs | 350 kcal', image: '/uploads/live/Falafel-dsd.jpg', tags: ['Middle Eastern'] },
    { id: 8, title: 'Millet Pasta Bowl', category: 'Lunch & Dinner', desc: 'Healthy millet pasta tossed with fresh veggies and light sauce.', price: '₹350', cals: '12g Protein | 55g Carbs | 380 kcal', image: '/uploads/live/Millet-Pasta-003.jpg', tags: ['Gluten Free'] },
    { id: 9, title: 'Roasted Chickpea Quinoa', category: 'Salads', desc: 'Crunchy roasted chickpeas with fluffy quinoa and fresh veggies.', price: '₹330', cals: '18g Protein | 52g Carbs | 380 kcal', image: '/uploads/live/Quinoa-004.jpg', tags: ['Vegan'] },
    { id: 10, title: 'Chicken Bowl', category: 'Lunch & Dinner', desc: 'Classic grilled chicken served with a side of mixed greens.', price: '₹360', cals: '45g Protein | 15g Carbs | 350 kcal', image: '/uploads/live/chicken-bowl.webp', tags: ['Keto'] },
  ];

  return (
    <div className="w-full bg-[#fdfdfc] text-[#1a1a1a] min-h-screen pt-20">
      <div className="relative py-32 text-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/videos/18_menu_cover2_hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20">
          <h1 className="text-6xl font-black uppercase tracking-tight text-white drop-shadow-xl">Our Menu</h1>
          <p className="mt-4 text-white/90 font-medium tracking-wide">Home &raquo; Menu</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menuItems.map(item => (
            <div key={item.id} className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-zinc-100 group flex flex-col h-full">
              <div className="relative h-64 overflow-hidden bg-zinc-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                  <span className="text-lg font-black text-[#5e9d34] shrink-0">{item.price}</span>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#84b84b] bg-[#fcfdf8] border border-[#eaf2d7] px-2 py-1 rounded-sm">{item.cals.split('|')[0]}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#84b84b] bg-[#fcfdf8] border border-[#eaf2d7] px-2 py-1 rounded-sm">{item.cals.split('|')[1]}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#84b84b] bg-[#fcfdf8] border border-[#eaf2d7] px-2 py-1 rounded-sm">{item.cals.split('|')[2]}</span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="pt-4 border-t border-zinc-100 mt-auto">
                  <Link href="/cart" className="w-full block text-center bg-[#fdfcf5] border border-[#eaf2d7] text-[#5e9d34] text-sm font-bold uppercase tracking-wider py-3 rounded-xl hover:bg-[#5e9d34] hover:text-white transition-colors">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
