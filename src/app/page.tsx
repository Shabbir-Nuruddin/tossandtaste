"use client"
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '@/components/MagneticButton';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="w-full bg-black">
      {/* Cinematic Hero */}
      <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105">
            <source src="/videos/toss_taste_lunch_dinner_9x16.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[9rem] leading-[0.85] font-black tracking-tighter uppercase mb-8 drop-shadow-2xl mix-blend-difference text-white"
          >
            Taste The <br/><span className="text-red-500 italic font-serif tracking-normal lowercase">impeccable</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-2xl text-zinc-300 font-medium max-w-2xl mx-auto mb-12 tracking-wide"
          >
            Delhi & Gurugram's premium destination for health-conscious, uncompromisingly delicious meals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href="/menu">
              <MagneticButton className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-red-500 hover:text-white transition-colors duration-500">
                Explore Menu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Subscriptions - The Cash Cow */}
      <section className="py-40 px-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase"
            >
              Curated <br/> <span className="text-zinc-500">For Results.</span>
            </motion.h2>
          </div>
          <Link href="/subscriptions" className="group flex items-center gap-3 text-red-500 font-bold uppercase tracking-widest hover:text-white transition-colors">
            All Subscriptions <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Protein Pack */}
          <Link href="/subscriptions" className="group block h-[700px] w-full rounded-[2rem] overflow-hidden relative">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]">
              <source src="/videos/20_protein_pack_hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <span className="bg-red-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 inline-block">Bestseller</span>
                <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">Protein Pack</h3>
                <p className="text-zinc-300 text-lg max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">120g+ daily protein to build strength and fuel your workouts. Zero compromise on flavor.</p>
              </div>
            </div>
          </Link>

          {/* Fat Loss */}
          <Link href="/subscriptions" className="group block h-[700px] w-full rounded-[2rem] overflow-hidden relative">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]">
              <source src="/videos/19_fat_loss_hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">Fat Loss Plan</h3>
                <p className="text-zinc-300 text-lg max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Calorie-controlled, low-carb masterpieces that make dieting feel like a luxury.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Visual Break Manifesto */}
      <section className="py-40 px-6 max-w-5xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light leading-tight text-zinc-400"
        >
          We believe <span className="text-white font-bold">100% fresh ingredients</span> and <span className="text-white font-bold">zero refined sugar</span> is not a diet—it's a standard.
        </motion.p>
      </section>
    </div>
  );
}
