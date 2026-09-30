"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';

export default function MenuPage() {
  const addItem = useCartStore(state => state.addItem);
  const menuItems = [
    { id: 1, title: 'Avocado Chickpea Salad', category: 'Salads', desc: 'Fresh and delicious avocado chickpea salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/Avocado chickpea salad.jpg', tags: ['Bestseller'] },
    { id: 2, title: 'Black Bean And Papaya Salad', category: 'Salads', desc: 'Fresh and delicious black bean and papaya salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/Black bean and Papaya salad.jpg', tags: ['Bestseller'] },
    { id: 3, title: 'Chicken Chickpea Salad', category: 'Salads', desc: 'Fresh and delicious chicken chickpea salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/chicken chickpea salad.jpg', tags: ['Bestseller'] },
    { id: 4, title: 'Exotic Fruit Salad', category: 'Salads', desc: 'Fresh and delicious exotic fruit salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/Exotic Fruit salad.jpg', tags: ['Bestseller'] },
    { id: 5, title: 'Flafal Salad', category: 'Salads', desc: 'Fresh and delicious flafal salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/flafal salad.jpeg', tags: ['Bestseller'] },
    { id: 6, title: 'Grilled Chicken Quinoa Salad', category: 'Salads', desc: 'Fresh and delicious grilled chicken quinoa salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/grilled chicken quinoa salad.jpg', tags: ['Bestseller'] },
    { id: 7, title: 'Grilled Chicken Salad', category: 'Salads', desc: 'Fresh and delicious grilled chicken salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/Grilled Chicken Salad.jpg', tags: ['Bestseller'] },
    { id: 8, title: 'Grilled Cottage Cheese Salad', category: 'Salads', desc: 'Fresh and delicious grilled cottage cheese salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/grilled cottage cheese salad.jpg', tags: ['Bestseller'] },
    { id: 9, title: 'Pesto Pasta Chicken Salad', category: 'Salads', desc: 'Fresh and delicious pesto pasta chicken salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/pesto pasta chicken salad.jpg', tags: ['Bestseller'] },
    { id: 10, title: 'Quinoa Fruit Salad', category: 'Salads', desc: 'Fresh and delicious quinoa fruit salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/quinoa fruit salad.jpg', tags: ['Bestseller'] },
    { id: 11, title: 'Teriyak Chicken Avocedo Slalad', category: 'Salads', desc: 'Fresh and delicious teriyak chicken avocedo slalad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/teriyak chicken avocedo slalad.jpg', tags: ['Bestseller'] },
    { id: 12, title: 'Tofu Salad', category: 'Salads', desc: 'Fresh and delicious tofu salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/tofu salad.jpeg', tags: ['Bestseller'] },
    { id: 13, title: 'Trio Bean Couscous Salad', category: 'Salads', desc: 'Fresh and delicious trio bean couscous salad made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/salads/trio bean couscous salad.jpg', tags: ['Bestseller'] },
    { id: 14, title: 'Baked Chicken With Herb Rice', category: 'Lunch & Dinner', desc: 'Fresh and delicious baked chicken with herb rice made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/baked chicken with herb rice.jpg', tags: ['Bestseller'] },
    { id: 15, title: 'Chicken Buddha Bowl', category: 'Lunch & Dinner', desc: 'Fresh and delicious chicken buddha bowl made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/chicken buddha bowl.jpg', tags: ['Bestseller'] },
    { id: 16, title: 'Chicken With Humms', category: 'Lunch & Dinner', desc: 'Fresh and delicious chicken with humms made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/chicken with humms.jpg', tags: ['Bestseller'] },
    { id: 17, title: 'Chickhen Burrito Bowl', category: 'Lunch & Dinner', desc: 'Fresh and delicious chickhen burrito bowl made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/chickhen burrito bowl.jpg', tags: ['Bestseller'] },
    { id: 18, title: 'Cottage Cheese  Herb Rice', category: 'Lunch & Dinner', desc: 'Fresh and delicious cottage cheese  herb rice made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/cottage cheese  herb rice.jpg', tags: ['Bestseller'] },
    { id: 19, title: 'Cottage Cheese Veggie Barnyard Millet', category: 'Lunch & Dinner', desc: 'Fresh and delicious cottage cheese veggie barnyard millet made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/cottage cheese veggie barnyard millet.jpg', tags: ['Bestseller'] },
    { id: 20, title: 'Grill Tofu Rice & Veggies', category: 'Lunch & Dinner', desc: 'Fresh and delicious grill tofu rice & veggies made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/Grill tofu rice & veggies.jpeg', tags: ['Bestseller'] },
    { id: 21, title: 'Grilled Chicken Bowl', category: 'Lunch & Dinner', desc: 'Fresh and delicious grilled chicken bowl made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/grilled chicken bowl.jpg', tags: ['Bestseller'] },
    { id: 22, title: 'Grilled Panner With Hummus And Exotic Veggies', category: 'Lunch & Dinner', desc: 'Fresh and delicious grilled panner with hummus and exotic veggies made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/Grilled panner with hummus and exotic veggies.jpeg', tags: ['Bestseller'] },
    { id: 23, title: 'Grilled Paprika Panner Spinach Rice', category: 'Lunch & Dinner', desc: 'Fresh and delicious grilled paprika panner spinach rice made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/grilled paprika panner spinach rice.jpg', tags: ['Bestseller'] },
    { id: 24, title: 'Herb Chicken With Grilled Veggies & Mashed Potato', category: 'Lunch & Dinner', desc: 'Fresh and delicious herb chicken with grilled veggies & mashed potato made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800', tags: ['Bestseller'] },
    { id: 25, title: 'Minced Chicken With Cumin Rice Bowl', category: 'Lunch & Dinner', desc: 'Fresh and delicious minced chicken with cumin rice bowl made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/Minced chicken with cumin rice bowl.jpg', tags: ['Bestseller'] },
    { id: 26, title: 'Moroccan Chicken With Barnyard Millet', category: 'Lunch & Dinner', desc: 'Fresh and delicious moroccan chicken with barnyard millet made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/Moroccan chicken with barnyard millet.jpg', tags: ['Bestseller'] },
    { id: 27, title: 'Olive Chichen With Lemon Rice', category: 'Lunch & Dinner', desc: 'Fresh and delicious olive chichen with lemon rice made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/olive chichen with lemon rice.jpg', tags: ['Bestseller'] },
    { id: 28, title: 'South West Chicken Bowl', category: 'Lunch & Dinner', desc: 'Fresh and delicious south west chicken bowl made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/South West chicken Bowl.jpg', tags: ['Bestseller'] },
    { id: 29, title: 'Stir Fry Chicken With Steam Rice Bowl', category: 'Lunch & Dinner', desc: 'Fresh and delicious stir fry chicken with steam rice bowl made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/Stir fry chicken with steam rice bowl.jpg', tags: ['Bestseller'] },
    { id: 30, title: 'Teriyaki Chichen Rice Bowl', category: 'Lunch & Dinner', desc: 'Fresh and delicious teriyaki chichen rice bowl made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/teriyaki chichen rice bowl.jpg', tags: ['Bestseller'] },
    { id: 31, title: 'Tomatoo Rice & Pestro Panner', category: 'Lunch & Dinner', desc: 'Fresh and delicious tomatoo rice & pestro panner made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/tomatoo rice & pestro panner.jpg', tags: ['Bestseller'] },
    { id: 32, title: 'Veg Burritow Bowl', category: 'Lunch & Dinner', desc: 'Fresh and delicious veg burritow bowl made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/veg burritow bowl.jpg', tags: ['Bestseller'] },
    { id: 33, title: 'Veggie Buddha Bowl', category: 'Lunch & Dinner', desc: 'Fresh and delicious veggie buddha bowl made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/meals/veggie buddha bowl.jpg', tags: ['Bestseller'] },
    { id: 34, title: 'Apple Rasperry Smoothie', category: 'Shakes & Smoothies', desc: 'Fresh and delicious apple rasperry smoothie made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/shakes/apple rasperry smoothie.jpg', tags: ['Bestseller'] },
    { id: 35, title: 'Banana Oats Shake', category: 'Shakes & Smoothies', desc: 'Fresh and delicious banana oats shake made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/shakes/banana oats shake.jpg', tags: ['Bestseller'] },
    { id: 36, title: 'Choclet Shake', category: 'Shakes & Smoothies', desc: 'Fresh and delicious choclet shake made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/shakes/choclet shake.jpg', tags: ['Bestseller'] },
    { id: 37, title: 'Date And Banana Shake', category: 'Shakes & Smoothies', desc: 'Fresh and delicious date and banana shake made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/shakes/date and banana shake.jpg', tags: ['Bestseller'] },
    { id: 38, title: 'Kiwi Banana Smoothie', category: 'Shakes & Smoothies', desc: 'Fresh and delicious kiwi banana smoothie made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/shakes/kiwi banana smoothie.jpg', tags: ['Bestseller'] },
    { id: 39, title: 'Mix Berry Smoothie', category: 'Shakes & Smoothies', desc: 'Fresh and delicious mix berry smoothie made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/shakes/mix berry smoothie.jpg', tags: ['Bestseller'] },
    { id: 40, title: 'Strawberry Shake (2)', category: 'Shakes & Smoothies', desc: 'Fresh and delicious strawberry shake (2) made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/shakes/Strawberry shake (2).jpg', tags: ['Bestseller'] },
    { id: 41, title: 'Apple Beetroot Carrot', category: 'Cold Pressed Juices', desc: 'Fresh and delicious apple beetroot carrot made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/juices/apple beetroot carrot.jpg', tags: ['Bestseller'] },
    { id: 42, title: 'Apple Pomegrante Juice', category: 'Cold Pressed Juices', desc: 'Fresh and delicious apple pomegrante juice made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/juices/apple pomegrante juice.jpg', tags: ['Bestseller'] },
    { id: 43, title: 'Avocado Smoothie', category: 'Cold Pressed Juices', desc: 'Fresh and delicious avocado smoothie made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/juices/avocado smoothie.jpg', tags: ['Bestseller'] },
    { id: 44, title: 'Orange Ginger Juice', category: 'Cold Pressed Juices', desc: 'Fresh and delicious orange ginger juice made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/juices/orange ginger juice.jpg', tags: ['Bestseller'] },
    { id: 45, title: 'Orange Juice', category: 'Cold Pressed Juices', desc: 'Fresh and delicious orange juice made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/juices/orange juice.jpg', tags: ['Bestseller'] },
    { id: 46, title: 'Pineapple Juice', category: 'Cold Pressed Juices', desc: 'Fresh and delicious pineapple juice made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/juices/pineapple juice.jpg', tags: ['Bestseller'] },
    { id: 47, title: 'Watermelon Mint Juice', category: 'Cold Pressed Juices', desc: 'Fresh and delicious watermelon mint juice made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/juices/watermelon mint juice.jpg', tags: ['Bestseller'] },
    { id: 48, title: 'Banana Bread (2 Slice)', category: 'Healthy Desserts & Snacks', desc: 'Fresh and delicious banana bread (2 slice) made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/snacks/Banana bread (2 slice).png', tags: ['Bestseller'] },
    { id: 49, title: 'Dry Fruit Ladoo (4Piece)', category: 'Healthy Desserts & Snacks', desc: 'Fresh and delicious dry fruit ladoo (4piece) made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/snacks/Dry fruit Ladoo (4piece).png', tags: ['Bestseller'] },
    { id: 50, title: 'Mix Berries Bread (2 Slice)', category: 'Healthy Desserts & Snacks', desc: 'Fresh and delicious mix berries bread (2 slice) made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/snacks/Mix Berries bread (2 slice).png', tags: ['Bestseller'] },
    { id: 51, title: 'Oats Ladoo (4Piece)', category: 'Healthy Desserts & Snacks', desc: 'Fresh and delicious oats ladoo (4piece) made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/snacks/Oats Ladoo (4piece).png', tags: ['Bestseller'] },
    { id: 52, title: 'Peanut Butter Energy Bites (4Piece)', category: 'Healthy Desserts & Snacks', desc: 'Fresh and delicious peanut butter energy bites (4piece) made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/snacks/Peanut butter energy bites (4piece).png', tags: ['Bestseller'] },
    { id: 53, title: 'Fat Loss Cover Page', category: 'Combos', desc: 'Fresh and delicious fat loss cover page made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/combos/fat loss cover page.jpg', tags: ['Bestseller'] },
    { id: 54, title: 'Menu Cover 2 Pic', category: 'Combos', desc: 'Fresh and delicious menu cover 2 pic made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/combos/menu cover 2 pic.png', tags: ['Bestseller'] },
    { id: 55, title: 'Menu Cover Pic', category: 'Combos', desc: 'Fresh and delicious menu cover pic made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/combos/menu cover pic.jpg', tags: ['Bestseller'] },
    { id: 56, title: 'Protein Cover Pic 2', category: 'Combos', desc: 'Fresh and delicious protein cover pic 2 made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/combos/protein cover pic 2.jpg', tags: ['Bestseller'] },
    { id: 57, title: 'Protein Pack Cover Pic', category: 'Combos', desc: 'Fresh and delicious protein pack cover pic made with the finest ingredients.', price: ',1250', cals: '25g Protein | 40g Carbs | 350 kcal', image: '/images/combos/protein pack cover pic.jpg', tags: ['Bestseller'] },
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
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700" />
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
                  <button 
                    onClick={() => addItem({ id: item.id, title: item.title, price: item.price, image: item.image })}
                    className="w-full block text-center bg-[#fdfcf5] border border-[#eaf2d7] text-[#5e9d34] text-sm font-bold uppercase tracking-wider py-3 rounded-xl hover:bg-[#5e9d34] hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
