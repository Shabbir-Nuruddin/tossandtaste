"use client"
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-[1400px] mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-[6rem] font-black uppercase tracking-tighter mb-10 leading-[0.9]">Our <br/>Story</h1>
          <p className="text-zinc-400 text-xl mb-8 leading-relaxed font-light">
            At Toss & Taste, we believe that healthy eating shouldn't be a punishment. Located in the heart of Gurugram, we set out on a mission to redefine what it means to eat well. No bland diets, no boring salads. 
          </p>
          <p className="text-zinc-400 text-xl mb-8 leading-relaxed font-light">
            We source the freshest ingredients and craft them into impeccable, flavor-packed meals that nourish your body and satisfy your cravings. Whether you're a fitness enthusiast looking for a high-protein diet or a busy professional needing a wholesome lunch, we have a plan for you.
          </p>
          <div className="grid grid-cols-2 gap-10 mt-16 pt-16 border-t border-white/5">
            <div>
              <h3 className="text-5xl font-black text-red-500 mb-4">100%</h3>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-zinc-300">Fresh Ingredients</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-red-500 mb-4">Zero</h3>
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-zinc-300">Refined Sugar</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[800px] w-full rounded-[2rem] overflow-hidden bg-zinc-900 group"
        >
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)]">
            <source src="/videos/4_exotic_fruit_salad.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </div>
  );
}
