import re

with open("src/app/subscriptions/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace ADD_ONS
new_addons = """const ADD_ONS = [
  { id: 'extra-chicken', label: 'Extra Chicken', price: 100, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=400&auto=format&fit=crop' },
  { id: 'extra-protein', label: 'Extra Protein', price: 150, img: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=400&auto=format&fit=crop' },
  { id: 'vegetables', label: 'Extra Vegetables', price: 60, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=400&auto=format&fit=crop' },
  { id: 'sweet-potatoes', label: 'Sweet Potatoes', price: 80, img: 'https://images.unsplash.com/photo-1596647271927-6f81a7924ec9?q=80&w=400&auto=format&fit=crop' },
  { id: 'shake', label: 'Add Shake', price: 150, img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=400&auto=format&fit=crop' },
  { id: 'fish', label: 'Premium Fish', price: 200, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=400&auto=format&fit=crop' }
];"""
content = re.sub(r'const ADD_ONS = \[.*?\];', new_addons, content, flags=re.DOTALL)

# Replace Render Block
old_render_regex = r'<div className="grid grid-cols-2 md:grid-cols-3 gap-4">.*?</div>\s*</motion\.div>'

new_render = """<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ADD_ONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`relative flex flex-col items-start p-0 rounded-2xl overflow-hidden border-2 transition-all text-left shadow-sm group ${isSelected ? 'border-[#5e9d34] ring-2 ring-[#5e9d34]/20' : 'border-zinc-100 hover:border-[#5e9d34]/50 bg-white'}`}
                    >
                      <div className="w-full h-32 relative overflow-hidden bg-zinc-100">
                        <img src={addon.img} alt={addon.label} className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? 'scale-105' : 'group-hover:scale-105'}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-[#5e9d34] text-white rounded-full p-1">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      <div className="p-4 w-full bg-white flex flex-col gap-1">
                        <span className="font-black tracking-tight text-[#1a1a1a]">{addon.label}</span>
                        <span className="text-sm font-bold text-[#5e9d34]">+₹{addon.price}<span className="text-zinc-400 font-medium text-xs">/meal</span></span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>"""

content = re.sub(old_render_regex, new_render, content, flags=re.DOTALL)

with open("src/app/subscriptions/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
