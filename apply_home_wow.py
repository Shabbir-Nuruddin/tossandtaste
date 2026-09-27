import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

quiz_html = '''
      {/* Personalized Nutrition Quiz */}
      <section className="relative py-32 bg-zinc-950 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/uploads/2026/07/Our-Menucdd.jpg')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">What's your goal?</h2>
            <p className="text-zinc-400 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto">Select your fitness objective below and let our chef-crafted algorithm recommend the perfect fuel for your journey.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/subscriptions?plan=fat-loss">
                <MagneticButton className="w-full h-full p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-500 flex flex-col items-center justify-center gap-4 group">
                  <span className="text-4xl">🔥</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-white group-hover:text-red-500 transition-colors">Lose Fat</h3>
                  <p className="text-sm text-zinc-500 font-light">Calorie-controlled, high satiation meals.</p>
                </MagneticButton>
              </Link>
              
              <Link href="/subscriptions?plan=protein-pack">
                <MagneticButton className="w-full h-full p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-500 flex flex-col items-center justify-center gap-4 group">
                  <span className="text-4xl">💪</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-white group-hover:text-red-500 transition-colors">Build Muscle</h3>
                  <p className="text-sm text-zinc-500 font-light">High protein, complex carbs for recovery.</p>
                </MagneticButton>
              </Link>
              
              <Link href="/menu">
                <MagneticButton className="w-full h-full p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-500 flex flex-col items-center justify-center gap-4 group">
                  <span className="text-4xl">🥑</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-white group-hover:text-red-500 transition-colors">Eat Clean</h3>
                  <p className="text-sm text-zinc-500 font-light">Balanced macros for everyday wellness.</p>
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
'''

# insert the quiz before the Plans section
content = content.replace('{/* Plans */}', quiz_html + '\n\n      {/* Plans */}')

# ensure 'it's' doesn't break eslint
content = content.replace("What's", "What&apos;s")

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
