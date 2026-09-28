"use client"
import Link from 'next/link';
import { ArrowRight, Leaf, Target, Star, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="w-full bg-[#fdfdfc] text-[#1a1a1a] selection:bg-[#5e9d34] selection:text-white">
      {/* Hero Section */}
      <section ref={ref} className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-24 pb-16">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-105">
            <source src="/videos/toss_taste_lunch_dinner_9x16.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-end h-full">
          <div className="md:col-span-8 pb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-[5.5rem] leading-[1.05] font-black tracking-tight text-white mb-6 uppercase"
            >
              Balanced meals <br />delivered to <br />your doorstep.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl font-light tracking-wide max-w-xl text-white/90 mb-10"
            >
              Fresh, healthy salads and protein meals crafted for Delhi & Gurugram.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link href="/subscriptions" className="bg-[#5e9d34] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-[#4a8027] transition-colors flex items-center gap-3">
                Explore Meal Plans <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/menu" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-white hover:text-black transition-colors flex items-center gap-3">
                View Menu
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meal Plans Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1a1a1a] mb-6">Explore Our<br />Meal Plans</h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Whether you want to build strength or lose fat naturally, our portion-controlled, protein-rich meals are designed for sustainable results.
              </p>
              <Link href="/subscriptions" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[#5e9d34] hover:text-[#1a1a1a] transition-colors">
                View all plans <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid gap-8">
              <Link href="/subscriptions" className="group block">
                <div className="bg-[#f6faed] p-10 md:p-12 rounded-3xl transition-all duration-500 hover:bg-[#eaf5d8]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a] mb-4">Protein Pack Plan</h3>
                      <p className="text-zinc-600 leading-relaxed max-w-sm">
                        Protein-rich meals crafted to fuel your strength and support a healthier lifestyle.
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Target className="w-6 h-6 text-[#5e9d34]" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/subscriptions" className="group block">
                <div className="bg-zinc-50 p-10 md:p-12 rounded-3xl transition-all duration-500 hover:bg-zinc-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a] mb-4">Fat Loss Plan</h3>
                      <p className="text-zinc-600 leading-relaxed max-w-sm">
                        Lose fat naturally with portion-controlled, protein-rich meals designed for sustainable results.
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Leaf className="w-6 h-6 text-[#1a1a1a]" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Editorial Layout */}
      <section className="py-32 px-6 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-12">
                {[
                  { step: '01', title: 'Planned by fitness expert', desc: 'Understand your body, goals, lifestyle, and dietary needs through a personalized expert consultation.' },
                  { step: '02', title: 'Freshly prepared meals', desc: 'We evaluate your health condition and preferences to create the right foundation with fresh ingredients.' },
                  { step: '03', title: 'Progress Monitoring', desc: 'Our nutrition experts design a customized meal plan tailored specifically to your fitness and health goals.' },
                  { step: '04', title: 'Maintain healthy habits', desc: 'We continuously track your progress and make necessary adjustments to ensure optimal results.' },
                  { step: '05', title: 'Delivered on time', desc: 'Receive freshly prepared, healthy, and tasty meals delivered directly to your doorstep.' }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <span className="text-sm font-mono text-zinc-500 pt-1 group-hover:text-[#5e9d34] transition-colors">{s.step}</span>
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-wide mb-2">{s.title}</h4>
                      <p className="text-zinc-400 leading-relaxed max-w-md">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                How <br /> Toss & Taste <br /> Works
              </h2>
              <p className="text-xl text-zinc-400 font-light max-w-md mb-12">
                We combine clean nutrition with rich flavors to create meals that are both nourishing and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlight (Experience Your First Meal) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1a1a1a] mb-6">Experience Your First Meal</h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Enjoy healthy meals without compromising on flavor. Healthy food doesn't have to be boring. Every dish is prepared with fresh ingredients and balanced macros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group rounded-3xl overflow-hidden bg-zinc-50 relative min-h-[500px] flex flex-col justify-end p-10">
              <img src="/uploads/2026/07/Grilled-panner-with-hummus-and-exotic-veggies-wed3.jpg" alt="Grilled Paprika Paneer Bowl" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 text-white">
                <div className="flex gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider">360 Kcal</span>
                  <span className="px-3 py-1 bg-[#5e9d34] rounded-full text-xs font-bold uppercase tracking-wider text-white">18.5g Protein</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3">Grilled Paprika Paneer Bowl</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-sm line-clamp-2">
                  Cottage cheese, rice, spinach, bell peppers, broccoli, baby corn, with Greek yogurt dressing.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-zinc-50 relative min-h-[500px] flex flex-col justify-end p-10">
              <img src="/uploads/2026/07/Grilled-tofu-with-rice-and-exotic-veggies-sdadqw-1024x1024.jpg" alt="South West Chicken Bowl" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 text-white">
                <div className="flex gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider">280 Kcal</span>
                  <span className="px-3 py-1 bg-[#5e9d34] rounded-full text-xs font-bold uppercase tracking-wider text-white">32.8g Protein</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-3">South West Chicken Bowl</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-sm line-clamp-2">
                  Pan roast chicken, black beans, avocado, cherry tomato, onions, baby corn, spinach, lettuce.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/menu" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#5e9d34] transition-colors">
              View full menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Clean Grid */}
      <section className="py-32 px-6 bg-[#f6faed]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1a1a1a] mb-6">Our Customers<br/>Love Toss Taste</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { text: "Toss Taste has completely changed my eating habits. The meals are fresh, delicious, and perfectly portioned. I've already started seeing great results.", name: "Neha Verma", detail: "Working Professional" },
              { text: "The convenience and quality are amazing. I don't have to worry about cooking or counting calories anymore. Toss Taste delivers healthy meals right on time.", name: "Rahul Sharma", detail: "Fitness Enthusiast" },
              { text: "Highly recommend Toss Taste to anyone who wants healthy and convenient meals. The quality, taste, and delivery service are excellent.", name: "Priya Mehta", detail: "Lifestyle Customer" },
              { text: "I've lost noticeable weight since starting Toss Taste meal plans. The meals are nutritious, tasty, and make it easy to stay consistent with my diet goals.", name: "Amit Gupta", detail: "Weight Loss Customer" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex gap-1 text-[#5e9d34] mb-6">
                    <Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} /><Star fill="currentColor" size={14} />
                  </div>
                  <p className="text-[#444] text-sm leading-relaxed mb-8">"{t.text}"</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a1a] uppercase text-sm tracking-wide">{t.name}</h4>
                  <span className="text-zinc-500 text-xs uppercase tracking-wider mt-1 block">{t.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center bg-zinc-950 text-white rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-[#5e9d34]/20 opacity-50 blur-3xl rounded-full translate-y-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Try Toss & Taste Today</h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
              Enjoy convenient, freshly prepared, and nutritious meals delivered weekly or monthly throughout Delhi NCR, Gurgaon, and Noida.
            </p>
            <Link href="/subscriptions" className="bg-[#5e9d34] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#4a8027] transition-all inline-block">
              Start Your Plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
