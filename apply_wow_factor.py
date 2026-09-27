import re

# Read the file
with open('src/app/menu/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Our-Menucdd.jpg with appropriate specific images or premium unsplash placeholders
replacements = [
    ("title: 'Grilled Paneer Sandwich',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Grilled Paneer Sandwich', category: 'Breakfast', desc: 'Spiced grilled paneer layered with veggies in toasted bread.', price: '₹220', cals: '25g Protein | 42g Carbs | 320 kcal', tags: ['Vegetarian'], image: '/uploads/2026/07/tofu-salad-00as.jpg'"),
    ("title: 'Masala Omelet With Toast',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Masala Omelet With Toast', category: 'Breakfast', desc: 'Classic Indian style omelet with onions, tomatoes, and chilies. 2 Slices.', price: '₹180', cals: '18g Protein | 20g Carbs | 280 kcal', tags: ['Classic'], image: 'https://images.unsplash.com/photo-1510693259836-39ddf637f6a6?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Mexican Omelet With Toast',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Mexican Omelet With Toast', category: 'Breakfast', desc: 'Loaded with bell peppers, corn, and Mexican seasoning. 2 Slices.', price: '₹200', cals: '20g Protein | 22g Carbs | 300 kcal', tags: ['Spicy'], image: 'https://images.unsplash.com/photo-1627915508827-09d57a2c2692?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Scrambled Egg & Baked Beans',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Scrambled Egg & Baked Beans', category: 'Breakfast', desc: 'Creamy scrambled eggs served with protein-rich baked beans and toast.', price: '₹220', cals: '28g Protein | 35g Carbs | 340 kcal', tags: ['Protein'], image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Overnight Oats with Yogurt',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Overnight Oats with Yogurt', category: 'Breakfast', desc: 'Chilled oats soaked in yogurt with fresh berries and chia seeds.', price: '₹190', cals: '12g Protein | 40g Carbs | 250 kcal', tags: ['Healthy'], image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Besan Chilla',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Besan Chilla', category: 'Breakfast', desc: 'Savory chickpea flour pancakes packed with veggies.', price: '₹160', cals: '10g Protein | 25g Carbs | 200 kcal', tags: ['Gluten Free'], image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Oats Chilla',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Oats Chilla', category: 'Breakfast', desc: 'Healthy oats pancakes cooked to crisp perfection.', price: '₹160', cals: '8g Protein | 30g Carbs | 180 kcal', tags: ['Fiber Rich'], image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Grilled Chicken Wrap',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Grilled Chicken Wrap', category: 'Breakfast', desc: 'Tender chicken strips wrapped in a wholesome tortilla with crisp veggies.', price: '₹280', cals: '35g Protein | 45g Carbs | 400 kcal', tags: ['On the go'], image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Grilled Paneer Wrap',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Grilled Paneer Wrap', category: 'Breakfast', desc: 'Soft paneer cubes with mint chutney and salad in a wrap.', price: '₹260', cals: '20g Protein | 40g Carbs | 380 kcal', tags: ['Vegetarian'], image: 'https://images.unsplash.com/photo-1565557612749-d75752df49af?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Avocado Toast',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Avocado Toast', category: 'Breakfast', desc: 'Mashed avocado on sourdough with cherry tomatoes and microgreens.', price: '₹300', cals: '10g Protein | 35g Carbs | 310 kcal', tags: ['Superfood'], image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=800&auto=format&fit=crop'"),
    
    # Missing dishes replacements
    ("title: 'Date & Banana Shake',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Date & Banana Shake', category: 'Shakes & Smoothies', desc: 'Naturally sweetened with dates, providing a quick energy boost.', price: '₹220', cals: '8g Protein | 45g Carbs | 300 kcal', tags: ['Energy'], image: 'https://images.unsplash.com/photo-1572490122747-3968b75bb811?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Avocado Smoothie',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Avocado Smoothie', category: 'Shakes & Smoothies', desc: 'Creamy avocado blended for healthy fats and satiety.', price: '₹280', cals: '6g Protein | 20g Carbs | 320 kcal', tags: ['Keto'], image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop'"),
    
    ("title: 'Southwest Bowl',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Southwest Bowl', category: 'Lunch & Dinner', desc: 'Zesty southwest chicken or paneer with black beans and corn.', price: '₹350', cals: '40g Protein | 45g Carbs | 450 kcal', tags: ['Spicy'], image: '/uploads/2026/07/Quinoa-004.jpg'"),
    ("title: 'Pesto Pasta Bowl',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Pesto Pasta Bowl', category: 'Lunch & Dinner', desc: 'Wholewheat pasta tossed in fresh basil pesto with chicken/paneer.', price: '₹380', cals: '35g Protein | 60g Carbs | 500 kcal', tags: ['Italian'], image: '/uploads/2026/07/Millet-Pasta-003.jpg'"),
    ("title: 'Herb Chicken',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Herb Chicken', category: 'Lunch & Dinner', desc: 'Succulent herb-crusted chicken with sweet mashed potato and grilled veggies.', price: '₹390', cals: '45g Protein | 30g Carbs | 420 kcal', tags: ['Balanced'], image: '/uploads/2026/07/chicken-bowl.webp'"),
    ("title: 'Chicken Quinoa Bowl',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Chicken Quinoa Bowl', category: 'Lunch & Dinner', desc: 'Protein-packed chicken with ancient grain quinoa and greens.', price: '₹370', cals: '40g Protein | 40g Carbs | 430 kcal', tags: ['Superfood'], image: '/uploads/2026/07/Food-Image-sweass.jpg'"),
    ("title: 'Chicken With Hummus',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Chicken With Hummus', category: 'Lunch & Dinner', desc: 'Grilled chicken with creamy hummus and fire-roasted vegetables.', price: '₹360', cals: '42g Protein | 25g Carbs | 390 kcal', tags: ['Middle Eastern'], image: 'https://images.unsplash.com/photo-1548943487-a2e4f4d22bf2?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Moroccan Chicken',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Moroccan Chicken', category: 'Lunch & Dinner', desc: 'Flavorful Moroccan spiced chicken with brown or white rice.', price: '₹390', cals: '38g Protein | 45g Carbs | 460 kcal', tags: ['Exotic'], image: '/uploads/2026/07/brown-rice-00d.jpg'"),
    ("title: 'Minced Chicken Rice Bowl',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Minced Chicken Rice Bowl', category: 'Lunch & Dinner', desc: 'Lean minced chicken cooked with herbs over a bed of warm rice.', price: '₹350', cals: '45g Protein | 40g Carbs | 410 kcal', tags: ['Comfort'], image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Tomato Rice with Tofu',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Tomato Rice with Tofu', category: 'Lunch & Dinner', desc: 'Tangy tomato rice paired with perfectly grilled tofu or paneer.', price: '₹340', cals: '22g Protein | 45g Carbs | 380 kcal', tags: ['Vegan Option'], image: '/uploads/2026/07/tofu-salad-00as.jpg'"),
    ("title: 'Stir Fry Chicken Bowl',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Stir Fry Chicken Bowl', category: 'Lunch & Dinner', desc: 'Asian style stir-fry chicken with vibrant veggies and steamed rice.', price: '₹360', cals: '35g Protein | 50g Carbs | 390 kcal', tags: ['Asian'], image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop'"),
    ("title: 'Grilled Paneer Spinach Rice',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Grilled Paneer Spinach Rice', category: 'Lunch & Dinner', desc: 'Iron-rich spinach rice served with charred grilled paneer.', price: '₹350', cals: '25g Protein | 40g Carbs | 420 kcal', tags: ['Iron Rich'], image: '/uploads/2026/07/Rice-001.jpg'"),
    ("title: 'Roasted Chickpea Quinoa',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Roasted Chickpea Quinoa', category: 'Lunch & Dinner', desc: 'Crunchy roasted chickpeas with fluffy quinoa and grilled vegetables.', price: '₹350', cals: '18g Protein | 55g Carbs | 380 kcal', tags: ['Vegan'], image: '/uploads/2026/07/Barnyard-Millet-003.jpg'"),
    
    ("title: 'Falafel Salad',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Falafel Salad', category: 'Salads', desc: 'Crispy baked falafels over a bed of fresh Mediterranean greens.', price: '₹320', cals: '15g Protein | 35g Carbs | 310 kcal', tags: ['Vegan'], image: '/uploads/2026/07/Falafel-dsd.jpg'"),
    ("title: 'Grilled Chicken Sandwich',.*?, image: '/uploads/Our-Menucdd.jpg'", "title: 'Grilled Chicken Sandwich', category: 'Breakfast', desc: 'Juicy grilled chicken breast with fresh greens in wholewheat bread.', price: '₹250', cals: '35g Protein | 40g Carbs | 350 kcal', tags: ['High Protein'], image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=800&auto=format&fit=crop'")
]

for old, new in replacements:
    content = re.sub(old, new, content, flags=re.DOTALL)

# Now, implement hover videos and masonry layout
# Find the Media Container
old_media_container = '''{item.video ? (
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
                )}'''

new_media_container = '''{item.video ? (
                  <video 
                    loop 
                    muted 
                    playsInline
                    onMouseEnter={(e) => { e.currentTarget.play(); e.currentTarget.style.opacity = "1"; e.currentTarget.style.filter = "blur(0px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.style.opacity = "0.7"; e.currentTarget.style.filter = "blur(2px)"; }}
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-70 blur-[2px]"
                  >
                    <source src={`/videos/${item.video}`} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-80 group-hover:opacity-100 group-hover:blur-0 blur-[1px]"
                  />
                )}'''

content = content.replace(old_media_container, new_media_container)

# Change grid layout to be masonry-like by spanning rows for items with videos
old_grid = 'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"'
new_grid = 'className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8"'
content = content.replace(old_grid, new_grid)

# Change the h-full flex items to allow masonry varying heights
content = content.replace('flex flex-col h-full"', 'flex flex-col mb-8 break-inside-avoid"')
# Make videos taller
content = content.replace('h-64 w-full bg-zinc-900 overflow-hidden"', 'w-full bg-zinc-900 overflow-hidden" style={{ height: item.video ? "400px" : "280px" }}"')
content = content.replace('flex-grow flex flex-col justify-between -mt-8 relative z-10', 'flex-grow flex flex-col justify-between -mt-8 relative z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent pt-12')

with open('src/app/menu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
