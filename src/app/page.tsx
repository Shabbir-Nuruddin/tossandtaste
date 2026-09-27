"use client"
import Link from 'next/link';
import { ArrowRight, Star, Leaf, HeartPulse, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '@/components/MagneticButton';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="w-full bg-[#fcfdf8] text-[#1a1a1a]">
      {/* Cinematic Hero */}
      <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-105">
            <source src="/videos/toss_taste_lunch_dinner_9x16.mp4" type="video/mp4" />
          </video>
          {/* Light gradient overlay so white text is still readable, or use dark text? The video might be dark. */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[9rem] leading-[0.85] font-black tracking-tighter uppercase mb-8 drop-shadow-2xl text-white"
          >
            Toss <span className="text-[#96c93d]">&</span><br/>Taste
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-3xl font-light tracking-wide max-w-3xl mx-auto drop-shadow-lg text-white"
          >
            Fresh. Fit. Flavourful. 
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 text-base md:text-xl font-medium tracking-wide max-w-3xl mx-auto drop-shadow-lg text-white/90"
          >
            Delivering in Delhi-Gurugram
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link href="/menu">
              <MagneticButton className="bg-[#5e9d34] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#4a8027] transition-all flex items-center gap-3">
                Explore Menu <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Personalized Nutrition Quiz */}
      <section className="relative py-32 bg-white px-6">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-[#1a1a1a]">What is your goal?</h2>
            <p className="text-[#555] text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto">Select your fitness objective below and let our chef-crafted algorithm recommend the perfect fuel for your journey.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/subscriptions">
                <MagneticButton className="w-full h-full p-10 rounded-3xl bg-[#f6faed] border border-[#d8e6c4] hover:border-[#5e9d34] transition-all duration-500 flex flex-col items-center justify-center gap-4 group shadow-sm">
                  <span className="text-4xl">🔥</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-[#1a1a1a] group-hover:text-[#5e9d34] transition-colors">Lose Fat</h3>
                  <p className="text-sm text-[#666] font-medium">Calorie-controlled, high satiation meals.</p>
                </MagneticButton>
              </Link>
              
              <Link href="/subscriptions">
                <MagneticButton className="w-full h-full p-10 rounded-3xl bg-[#f6faed] border border-[#d8e6c4] hover:border-[#5e9d34] transition-all duration-500 flex flex-col items-center justify-center gap-4 group shadow-sm">
                  <span className="text-4xl">💪</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-[#1a1a1a] group-hover:text-[#5e9d34] transition-colors">Build Muscle</h3>
                  <p className="text-sm text-[#666] font-medium">High protein, complex carbs for recovery.</p>
                </MagneticButton>
              </Link>
              
              <Link href="/menu">
                <MagneticButton className="w-full h-full p-10 rounded-3xl bg-[#f6faed] border border-[#d8e6c4] hover:border-[#5e9d34] transition-all duration-500 flex flex-col items-center justify-center gap-4 group shadow-sm">
                  <span className="text-4xl">🥑</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-[#1a1a1a] group-hover:text-[#5e9d34] transition-colors">Eat Clean</h3>
                  <p className="text-sm text-[#666] font-medium">Balanced macros for everyday wellness.</p>
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-[#fcfdf8] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f6faed] flex items-center justify-center text-[#5e9d34] mb-6 shadow-sm border border-[#d8e6c4]">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">1. We Cook Fresh</h3>
              <p className="text-[#666] font-medium">Premium ingredients, zero refined sugar, and chef-crafted recipes cooked daily.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f6faed] flex items-center justify-center text-[#5e9d34] mb-6 shadow-sm border border-[#d8e6c4]">
                <HeartPulse size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">2. Macro Balanced</h3>
              <p className="text-[#666] font-medium">Every meal is perfectly portioned to hit your protein, carb, and fat goals.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f6faed] flex items-center justify-center text-[#5e9d34] mb-6 shadow-sm border border-[#d8e6c4]">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">3. Delivered Daily</h3>
              <p className="text-[#666] font-medium">Enjoy seamless daily delivery across Delhi & Gurugram, straight to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Loved by our clients</h2>
            <p className="text-[#666] font-medium text-lg">Don't just take our word for it.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The Fat Loss plan completely changed my life. The food doesn't even feel like diet food. The Teriyaki Bowl is incredible!", name: "Rajat S.", detail: "Lost 8kg in 2 Months" },
              { text: "As a busy professional in Gurugram, Toss & Taste saves me hours every day. The Protein Pack is a game-changer for my workouts.", name: "Priya M.", detail: "Subscribed for 6 Months" },
              { text: "Zero refined sugar and absolutely delicious. I've tried many meal prep services, but this is by far the highest quality.", name: "Amit K.", detail: "Fitness Enthusiast" }
            ].map((t, i) => (
              <div key={i} className="bg-[#fcfdf8] p-8 rounded-3xl border border-zinc-100 shadow-sm relative">
                <div className="flex gap-1 text-[#5e9d34] mb-6">
                  <Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} /><Star fill="currentColor" size={20} />
                </div>
                <p className="text-[#444] text-lg font-medium leading-relaxed mb-8 italic">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-[#1a1a1a]">{t.name}</h4>
                  <p className="text-sm text-[#888] font-medium">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About The Founder Teaser */}
      <section className="py-24 bg-[#f6faed] px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-lg border-4 border-white">
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" alt="Chef preparing food" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-[#1a1a1a]">Our Story</h2>
            <p className="text-[#555] font-medium text-lg leading-relaxed mb-8">
              At Toss & Taste, we believe that healthy eating shouldn't be a punishment. Our founder started this journey to prove that nutritious, macro-balanced food can taste absolutely phenomenal. 
              We use 100% fresh ingredients, zero refined sugar, and high-quality proteins.
            </p>
            <Link href="/about">
              <MagneticButton className="border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#1a1a1a] hover:text-white transition-all">
                Read Full Story
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
