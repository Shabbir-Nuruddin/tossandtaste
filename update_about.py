import sys

content = '''"use client"
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#fdfdfc] text-[#1a1a1a] min-h-screen pt-20">
      
      {/* Intro Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-[#0f3b21] mb-8 tracking-tight uppercase">Welcome To Toss & Taste</h1>
        <p className="text-zinc-600 text-lg leading-relaxed font-light mb-6">
          We believe that eating healthy shouldn't mean compromising on taste or satisfaction. Founded on the principle of balanced nutrition and culinary excellence, Toss & Taste is your partner in achieving a healthier lifestyle through delicious, freshly prepared meals delivered right to your doorstep.
        </p>
        <p className="text-zinc-600 text-lg leading-relaxed font-light">
          Whether you are looking to build muscle, lose weight, or simply maintain a balanced diet, our expertly crafted meal plans are designed to fuel your body and mind. Join us on this journey to a healthier, happier you.
        </p>
      </section>

      {/* Mission / Vision / How We Work Cards */}
      <section className="py-16 px-6 bg-white border-y border-zinc-100">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* How We Work */}
          <div className="bg-[#fcfdf8] p-10 rounded-[32px] flex flex-col items-start border border-[#eaf2d7]">
            <div className="w-14 h-14 mb-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="#5e9d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">How We Work</h3>
            <p className="text-zinc-600 leading-relaxed font-light">We combine nutritional science with fresh food preparation to deliver perfectly portioned meals tailored to your goals. Every meal is carefully planned to ensure the right balance of protein, carbs, and nutrients for optimal results.</p>
          </div>

          {/* Our Mission */}
          <div className="bg-white p-10 rounded-[32px] flex flex-col items-start border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="w-14 h-14 mb-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Our Mission</h3>
            <p className="text-zinc-600 leading-relaxed font-light">Our mission is to make healthy eating simple, convenient, and sustainable for everyone. We aim to provide fresh, nutritious, and perfectly balanced meals that support fitness, wellness, and everyday performance without compromising on taste.</p>
          </div>

          {/* Our Vision */}
          <div className="bg-[#19191b] p-10 rounded-[32px] flex flex-col items-start text-white">
            <div className="w-14 h-14 mb-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="#5e9d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            </div>
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight text-white">Our Vision</h3>
            <p className="text-zinc-400 leading-relaxed font-light">Our vision is to become a trusted leader in healthy meal delivery by transforming the way people eat and live. We aspire to empower individuals to lead healthier lifestyles through personalized nutrition, high-quality ingredients, and innovative meal solutions.</p>
          </div>

        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl font-black text-[#0f3b21] mb-12 tracking-tight uppercase">Toss & Taste was born from a personal struggle.</h2>
        <div className="rounded-[40px] overflow-hidden mb-16 relative aspect-[4/3] md:aspect-[16/9] bg-zinc-100 shadow-xl border border-zinc-200">
          <img src="/uploads/about/WhatsApp-Image-2026-02-18-at-1.01.44-PM.jpeg" alt="Arun Bhatia - Founder & Head Chef" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/uploads/2026/07/Grilled-tofu-with-rice-and-exotic-veggies-sdadqw-1024x1024.jpg' }} />
          {/* Overlay text if image doesn't have it natively */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-10 text-left">
            <h3 className="text-white text-4xl font-black uppercase tracking-widest drop-shadow-md">Arun Bhatia</h3>
            <p className="text-[#84b84b] font-bold tracking-widest text-lg uppercase mt-2">Founder & Head Chef</p>
          </div>
        </div>
        
        <div className="text-left space-y-6 text-zinc-600 font-light leading-relaxed text-lg mx-auto max-w-3xl">
          <p>As a fitness enthusiast, I was deeply committed to taking care of my body â€” working out regularly, staying active, and aiming for a healthy lifestyle. But despite all the effort, one major problem remained: finding food that truly nourished my body.</p>
          <p>Every day felt like a challenge. Healthy options were either tasteless, inconsistent, or didn't provide complete nutrition. I often found myself compromising â€” either on taste, quality, or proper nourishment. The struggle to find balanced, wholesome meals became a frustrating part of my daily routine.</p>
          <p>I realized that good health doesn't start in the gym; it starts on your plate. I wanted to create a brand that offers complete daily nutrition, without stress, guilt, or compromise.</p>
          <p>That's how Toss & Taste came to life.</p>
          <p>What started as a personal solution soon turned into a purpose. We began crafting meals using fresh ingredients, balanced macros, and thoughtful portions â€” salads, bowls, juices, smoothies, and wholesome mains designed to fuel the body and support an active lifestyle. Every meal at Toss & Taste is inspired by real fitness needs, designed to keep you energized, satisfied, and nourished throughout the day.</p>
        </div>
      </section>

    </div>
  );
}
'''

with open('src/app/about/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
