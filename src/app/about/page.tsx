"use client"
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-[1200px] mx-auto min-h-screen text-[#1a1a1a]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-[6rem] font-black uppercase tracking-tighter mb-6">Our Story</h1>
        <p className="text-[#555] text-xl font-light max-w-2xl mx-auto">We believe that healthy food should never compromise on taste.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
            <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop" alt="Founder of Toss and Taste" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-black uppercase tracking-widest">Shabbir</h3>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Founder & Head Chef</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <h2 className="text-4xl font-black uppercase tracking-tighter">The Vision</h2>
          <div className="prose prose-lg text-[#444] font-medium leading-relaxed">
            <p>
              Toss and Taste was born out of a simple frustration: why does "diet food" have to taste so bland? Our founder, Shabbir, realized that the fitness industry was full of extreme diets and boiled chicken that no one could sustain long-term.
            </p>
            <p>
              He set out to change the narrative. By combining his deep understanding of macros with his passion for culinary arts, Toss and Taste was created. We don't believe in diets. We believe in <strong>lifestyle standards</strong>.
            </p>
            <p>
              Every meal we deliver across Delhi and Gurugram is crafted with 100% fresh ingredients, zero refined sugar, and high-quality proteins. We carefully calculate the macros so you can focus on your goals, while we focus on the flavor.
            </p>
            <blockquote className="border-l-4 border-[#5e9d34] pl-6 italic text-[#1a1a1a] font-bold text-xl my-8">
              "We aren't just a meal prep company. We are your partner in building a sustainable, healthy, and incredibly tasty lifestyle."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
