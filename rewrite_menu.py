import re

with open('src/app/menu/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken avocado toast image
content = content.replace(
    "'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=800&auto=format&fit=crop'",
    "'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=800&auto=format&fit=crop'"
)

# Extract everything up to the return statement
pre_return_match = re.search(r'(.*?return \(\s*)(<div className="pt-40.*)', content, re.DOTALL)
pre_return = pre_return_match.group(1)

new_render = '''<div className="pt-40 pb-32 px-6 max-w-[1400px] mx-auto min-h-screen">
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
            className={px-6 py-2 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 }
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
                {item.video ? (
                  <video 
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={/videos/} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={item.image} 
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
}'''

with open('src/app/menu/page.tsx', 'w', encoding='utf-8') as f:
    f.write(pre_return + new_render)
