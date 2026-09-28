"use client"
import Link from 'next/link';
import { ArrowRight, Star, Leaf, HeartPulse, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '@/components/MagneticButton';
import { BlurText } from '@/components/ui/BlurText';
import { Marquee } from '@/components/ui/Marquee';
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid';

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
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <BlurText 
            text="TOSS & TASTE" 
            className="text-7xl md:text-[9rem] leading-[0.85] font-black tracking-tighter uppercase mb-8 drop-shadow-2xl text-white" 
          />
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
            className="mt-4 text-base md:text-xl font-medium tracking-wide max-w-3xl mx-auto drop-shadow-lg text-[#5e9d34]"
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
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-500">🔥</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-[#1a1a1a] group-hover:text-[#5e9d34] transition-colors">Lose Fat</h3>
                  <p className="text-sm text-[#666] font-medium">Calorie-controlled, high satiation meals.</p>
                </MagneticButton>
              </Link>
              
              <Link href="/subscriptions">
                <MagneticButton className="w-full h-full p-10 rounded-3xl bg-[#f6faed] border border-[#d8e6c4] hover:border-[#5e9d34] transition-all duration-500 flex flex-col items-center justify-center gap-4 group shadow-sm">
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-500">💪</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-[#1a1a1a] group-hover:text-[#5e9d34] transition-colors">Build Muscle</h3>
                  <p className="text-sm text-[#666] font-medium">High protein, complex carbs for recovery.</p>
                </MagneticButton>
              </Link>
              
              <Link href="/menu">
                <MagneticButton className="w-full h-full p-10 rounded-3xl bg-[#f6faed] border border-[#d8e6c4] hover:border-[#5e9d34] transition-all duration-500 flex flex-col items-center justify-center gap-4 group shadow-sm">
                  <span className="text-4xl group-hover:scale-125 transition-transform duration-500">🥑</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-[#1a1a1a] group-hover:text-[#5e9d34] transition-colors">Eat Clean</h3>
                  <p className="text-sm text-[#666] font-medium">Balanced macros for everyday wellness.</p>
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works - Bento Grid */}
      <section className="py-24 bg-[#fcfdf8] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">How It Works</h2>
            <p className="text-[#666] font-medium text-lg">Nutrition made effortless.</p>
          </div>
          <BentoGrid className="max-w-4xl mx-auto">
            <BentoGridItem
              title="We Cook Fresh"
              description="Premium ingredients, zero refined sugar, and chef-crafted recipes cooked daily."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#f6faed] to-[#d8e6c4] flex items-center justify-center"><Leaf size={48} className="text-[#5e9d34]" /></div>}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Macro Balanced"
              description="Every meal is perfectly portioned to hit your exact protein, carb, and fat goals."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#f6faed] to-[#d8e6c4] flex items-center justify-center"><HeartPulse size={48} className="text-[#5e9d34]" /></div>}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Delivered Daily"
              description="Enjoy seamless daily delivery across Delhi & Gurugram, straight to your door or office."
              header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-[#f6faed] to-[#d8e6c4] flex items-center justify-center"><Clock size={48} className="text-[#5e9d34]" /></div>}
              className="md:col-span-1"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Infinite Testimonials Marquee */}
      <section className="py-32 bg-white overflow-hidden flex flex-col items-center">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Loved by our clients</h2>
          <p className="text-[#666] font-medium text-lg">Don't just take our word for it.</p>
        </div>
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white">
          <Marquee pauseOnHover className="[--duration:20s]">
            {[
              { text: "The Fat Loss plan completely changed my life. The Teriyaki Bowl is incredible!", name: "Rajat S.", detail: "Lost 8kg in 2 Months" },
              { text: "Toss & Taste saves me hours every day. The Protein Pack is a game-changer.", name: "Priya M.", detail: "Subscribed for 6 Months" },
              { text: "Zero refined sugar and absolutely delicious. Highest quality meal prep ever.", name: "Amit K.", detail: "Fitness Enthusiast" },
              { text: "I look forward to lunch every day. The Exotic Fruit Salad is perfectly fresh.", name: "Neha G.", detail: "Eat Clean Plan" },
              { text: "As a doctor, I recommend this to my patients. The macro balancing is spot on.", name: "Dr. Sharma", detail: "Nutrition Expert" }
            ].map((t, i) => (
              <div key={i} className="bg-[#fcfdf8] p-6 rounded-3xl border border-zinc-100 shadow-sm w-80 shrink-0 mx-2 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-[#5e9d34] mb-4">
                    <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
                  </div>
                  <p className="text-[#444] text-base font-medium leading-relaxed mb-6 italic">"{t.text}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a1a]">{t.name}</h4>
                  <p className="text-xs text-[#888] font-bold uppercase tracking-widest mt-1">{t.detail}</p>
                </div>
              </div>
            ))}
          </Marquee>
          {/* Gradient masks for smooth fade out at screen edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </section>

      {/* About The Founder Teaser */}
      <section className="py-24 bg-[#f6faed] px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-lg border-4 border-white">
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" alt="Chef preparing food" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
