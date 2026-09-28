import sys

content = '''"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'banner', 'plans', 'included', 'works', 'cta', 'blog'];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollY >= el.offsetTop - 300) {
          setActiveSection(section);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#fdfdfc] text-[#1a1a1a]">
      
      {/* Scroll Navigation Pills */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3 bg-[#111111] rounded-full px-2 py-4 shadow-2xl border border-white/10 backdrop-blur-md">
        {['hero', 'banner', 'plans', 'included', 'works', 'cta', 'blog'].map((section, i) => (
          <a 
            key={section} 
            href={#\} 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-150 \}
          />
        ))}
      </div>

      {/* Hero Image Slider Section */}
      <section id="hero" className="w-full pt-24 md:pt-32">
        <img src="/uploads/2026/07/HEALTHY-MEALS-WebSlider-1998x874.jpg" alt="Healthy Meals Delivered Daily" className="w-full object-cover" />
      </section>

      {/* Balanced Meals Banner */}
      <section id="banner" className="w-full bg-[#fdfbf6] py-16 overflow-hidden border-y border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#eaf4e5] rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          
          <div className="text-center md:text-left z-10 px-4 md:pl-20">
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#e87c1e] leading-tight mb-2 uppercase">Balanced Meals</h2>
            <h2 className="text-4xl md:text-[3.5rem] font-black text-[#0f3b21] leading-tight uppercase tracking-tight">Delivered To Your<br />Doorstep</h2>
          </div>
          
          <div className="relative z-10 flex justify-center md:justify-end pr-0 md:pr-10">
            <div className="relative">
              <div className="absolute -inset-4 border border-zinc-300 rounded-[40%] transform rotate-12 scale-105"></div>
              <img src="/uploads/2026/07/Salad-200.png" alt="Balanced Salad" className="w-[300px] md:w-[450px] object-contain relative z-10 drop-shadow-2xl" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#6c8e3e] rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plans Section */}
      <section id="plans" className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="text-center">
              <Link href="/subscriptions">
                <div className="aspect-square mb-6 overflow-hidden rounded-md bg-zinc-50 border border-zinc-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <img src="/uploads/2026/02/Protein-Pack-toss-taste-banner-24-2-2-1-768x768-1.jpg" alt="Protein Pack Meal Plan" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/uploads/2026/07/PROTEIN-pack-plan-000f.jpg' }} />
                </div>
                <h3 className="text-xl font-medium text-[#1a1a1a]">Protein Pack Meal Plan</h3>
              </Link>
            </div>
            
            <div className="text-center">
              <Link href="/subscriptions">
                <div className="aspect-square mb-6 overflow-hidden rounded-md bg-zinc-50 border border-zinc-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <img src="/uploads/2026/02/fat-Loss-Plan-toss-taste-banner-24-2-1-768x768-1.jpg" alt="Fat Loss Meal Plan" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/uploads/2026/07/Fat-Loss-Plan-0001x.jpg' }} />
                </div>
                <h3 className="text-xl font-medium text-[#1a1a1a]">Fat Loss Meal Plan</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="included" className="w-full py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px]">
            <div className="bg-[#84b84b] text-white p-12 md:p-20 rounded-l-3xl rounded-br-[100px] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -right-20 top-0 w-[400px] h-full bg-[#fdfdfc] rounded-l-full opacity-20"></div>
              <h2 className="text-4xl font-black mb-10 tracking-tight uppercase relative z-10">What's Included</h2>
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4">
                  <div className="w-1 h-12 bg-white/40 shrink-0"></div>
                  <span className="text-sm font-semibold uppercase tracking-wider">Lean Protein Sources like Chicken,<br />Paneer, Tofu, and Legumes</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-12 bg-white/40 shrink-0"></div>
                  <span className="text-sm font-semibold uppercase tracking-wider">Balanced Macros for<br />Muscle Support and Recovery</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-12 bg-white/40 shrink-0"></div>
                  <span className="text-sm font-semibold uppercase tracking-wider">Freshly Prepared Meals<br />Delivered Daily</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-12 bg-white/40 shrink-0"></div>
                  <span className="text-sm font-semibold uppercase tracking-wider">High-Protein, Portion-<br />Controlled Meals</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-1 h-12 bg-white/40 shrink-0"></div>
                  <span className="text-sm font-semibold uppercase tracking-wider">Nutritionist-Designed<br />Meal Combinations</span>
                </li>
              </ul>
            </div>
            
            <div className="h-full w-full">
              <img src="/uploads/2026/07/Fat-Loss-Plan-0001x.jpg" alt="Healthy Bowls" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How Toss & Taste Works Section */}
      <section id="works" className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0f3b21] tracking-tight">How Toss & Taste Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Steps */}
            <div className="md:col-span-4 space-y-12">
              <div className="flex gap-4 items-start justify-end text-right relative">
                <div>
                  <h4 className="text-[#0f3b21] font-bold text-lg mb-2">Step 1: Planed By Fitness Expert</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Understand your body, goals, lifestyle, and dietary needs through a personalized expert consultation.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#84b84b] shrink-0 mt-1 shadow-md border-4 border-white"></div>
              </div>
              
              <div className="flex gap-4 items-start justify-end text-right relative">
                <div>
                  <h4 className="text-[#0f3b21] font-bold text-lg mb-2">Step 2: Freshly Prepared Meals</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">We evaluate your health condition, preferences, and nutritional requirements to create the right foundation.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#84b84b] shrink-0 mt-1 shadow-md border-4 border-white"></div>
              </div>

              <div className="flex gap-4 items-start justify-end text-right relative">
                <div>
                  <h4 className="text-[#0f3b21] font-bold text-lg mb-2">Step 3: Regular Progress<br/>Monitoring In A Hygienic<br/>Environment</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Our nutrition experts design a customized meal plan tailored specifically to your fitness and health goals.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#84b84b] shrink-0 mt-1 shadow-md border-4 border-white"></div>
              </div>
            </div>

            {/* Center Image */}
            <div className="md:col-span-4 flex justify-center relative">
              <div className="relative w-full max-w-[400px] aspect-square rounded-full border-4 border-[#e87c1e] p-2 bg-white shadow-xl z-10">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/uploads/2026/07/Layer-1.png" alt="Happy woman eating salad" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#84b84b] opacity-20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[110%] bg-[#5e9d34] opacity-80 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] -z-10"></div>
            </div>

            {/* Right Steps */}
            <div className="md:col-span-4 space-y-16">
              <div className="flex gap-4 items-start relative">
                <div className="w-12 h-12 rounded-full bg-[#84b84b] shrink-0 mt-1 shadow-md border-4 border-white"></div>
                <div>
                  <h4 className="text-[#0f3b21] font-bold text-lg mb-2">Step 4: Maintain Your Healthy<br/>Eating Habbit</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">We continuously track your progress and make necessary adjustments to ensure optimal results.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start relative">
                <div className="w-12 h-12 rounded-full bg-[#84b84b] shrink-0 mt-1 shadow-md border-4 border-white"></div>
                <div>
                  <h4 className="text-[#0f3b21] font-bold text-lg mb-2">Step 5: Delivered Fresh, Right On<br/>Time</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">Receive freshly prepared, healthy, and tasty meals delivered directly to your doorstep.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Try Toss & Taste today */}
      <section id="cta" className="w-full py-24 relative flex flex-col items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/uploads/2026/07/Grilled-tofu-with-rice-and-exotic-veggies-sdadqw-1024x1024.jpg" alt="Try Toss and Taste" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Try Toss & Taste today</h2>
          <p className="text-white/90 text-lg mb-10">
            Enjoy convenient, freshly prepared, and nutritious meals delivered weekly or monthly throughout Delhi NCR, Gurgaon, and Noida.
          </p>
          <Link href="/subscriptions" className="inline-block bg-[#a3c94a] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-[#8eb53d] transition-colors">
            Experience Your First Meal &raquo;
          </Link>
        </div>
      </section>

      {/* Sub CTA Banner */}
      <div className="w-full py-8 bg-white border-b border-zinc-100 text-center">
        <h3 className="text-3xl font-bold text-[#555]">Enjoy Healthy Meals Without Compromising On Flavor.</h3>
      </div>

      {/* NEW: Blog / Latest News Grid */}
      <section id="blog" className="py-24 px-6 bg-[#f6faed]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left Large Blog Post */}
            <Link href="/blog/natural-nutrition" className="group relative h-[500px] lg:h-auto rounded-md overflow-hidden bg-white shadow-sm block">
              <img src="/uploads/about/Food-Image-sweass-930x540.jpg" alt="Natural Nutrition" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = '/uploads/2026/02/pic1-1.webp' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                <span className="bg-[#a3c94a] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-4 inline-block">Blog</span>
                <p className="text-xs text-white/80 mb-2 flex items-center gap-2">
                  <span>&#128197; February 17, 2026</span>
                  <span>|</span>
                  <span>&#128100; by Toss Taste</span>
                  <span>|</span>
                  <span>&#128172; 0</span>
                </p>
                <h3 className="text-3xl font-bold leading-tight group-hover:text-[#a3c94a] transition-colors">Natural Nutrition vs Processed Food: Which One Is...</h3>
              </div>
            </Link>

            {/* Right Small Blog Posts */}
            <div className="grid grid-rows-2 gap-6">
              
              {/* Top Small Post */}
              <Link href="/blog/protein-pack" className="group bg-white rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[250px]">
                <div className="w-full md:w-[45%] relative h-[250px] md:h-full shrink-0 overflow-hidden">
                  <img src="/uploads/2026/02/50.jpg" alt="Protein Pack" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = '/uploads/2026/02/pic2.webp' }} />
                  <span className="absolute bottom-4 left-4 bg-[#a3c94a] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider z-10">Blog</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-xs text-zinc-500 mb-3 flex flex-wrap items-center gap-2">
                    <span>&#128197; February 17, 2026</span>
                    <span>|</span>
                    <span>&#128100; by Toss Taste</span>
                  </p>
                  <h3 className="text-xl font-bold text-[#0f3b21] mb-3 leading-snug group-hover:text-[#a3c94a] transition-colors">Protein Pack: Fuel Strength, Boost Energy</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">Protein is the building block of the body. Without enough protein, yo...</p>
                  <span className="text-[#a3c94a] font-bold text-sm">Read more &raquo;</span>
                </div>
              </Link>
              
              {/* Bottom Small Post */}
              <Link href="/blog/energy-bites" className="group bg-white rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[250px]">
                <div className="w-full md:w-[45%] relative h-[250px] md:h-full shrink-0 overflow-hidden">
                  <img src="/uploads/about/Group-38-930x540.png" alt="Energy Bites" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.currentTarget.src = '/uploads/2026/02/pic3.webp' }} />
                  <span className="absolute bottom-4 left-4 bg-[#a3c94a] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider z-10">Blog</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-xs text-zinc-500 mb-3 flex flex-wrap items-center gap-2">
                    <span>&#128197; February 17, 2026</span>
                    <span>|</span>
                    <span>&#128100; by Toss Taste</span>
                  </p>
                  <h3 className="text-xl font-bold text-[#0f3b21] mb-3 leading-snug group-hover:text-[#a3c94a] transition-colors">Energy Bites: Power Your Body Naturally</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">We often reach for junk food when hunger strikes. But unhealthy...</p>
                  <span className="text-[#a3c94a] font-bold text-sm">Read more &raquo;</span>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
'''

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
