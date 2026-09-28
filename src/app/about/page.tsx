"use client"
import Link from 'next/link';
import { Target, Heart, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#fdfdfc] text-[#1a1a1a] min-h-screen pt-20">
      <div className="py-20 text-center bg-[#fdfbf6] border-b border-zinc-100">
        <h1 className="text-5xl font-black uppercase tracking-tight text-[#0f3b21]">About Us</h1>
        <p className="mt-4 text-zinc-600">Home &raquo; About</p>
      </div>

      {/* Intro & Founder Story */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="/uploads/about/WhatsApp-Image-2026-02-18-at-1.01.45-PM.jpeg" alt="Arun Bhatia - Founder & Head Chef" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-black uppercase tracking-wider mb-2">Arun Bhatia</h3>
              <p className="text-[#a3c94a] font-bold tracking-widest text-sm uppercase">Founder & Head Chef</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-black text-[#0f3b21] uppercase tracking-tight mb-8">Our Story</h2>
            
            <p className="text-zinc-600 leading-relaxed text-lg font-medium">As a fitness enthusiast, I was deeply committed to taking care of my body — working out regularly, staying active, and aiming for a healthy lifestyle. But despite all the effort, one major problem remained: finding food that truly nourished my body.</p>
            
            <p className="text-zinc-500 leading-relaxed">Every day felt like a challenge. Healthy options were either tasteless, inconsistent, or didn't provide complete nutrition. I often found myself compromising — either on taste, quality, or proper nourishment. The struggle to find balanced, wholesome meals became a part of my routine.</p>
            
            <p className="text-zinc-800 font-bold italic text-xl border-l-4 border-[#8cc63f] pl-4 my-6">"Why not create a brand that offers complete daily nutrition, without stress, guilt, or compromise?"</p>
            
            <p className="text-zinc-500 leading-relaxed">What started as a personal solution soon turned into a purpose. We began crafting meals using fresh ingredients, balanced macros, and thoughtful portions — salads, bowls, juices, smoothies, and wholesome mains designed to fuel the body and support an active lifestyle.</p>
            
            <p className="text-zinc-500 leading-relaxed">Every meal at Toss & Taste is inspired by real fitness needs — meals that keep you energized, satisfied, and nourished throughout the day. What once fulfilled my own daily nutritional requirements is now helping many others who face the same struggle.</p>
            
            <p className="text-zinc-500 leading-relaxed font-medium">Today, Toss & Taste stands for healthy food that actually works for your body — food that supports fitness, wellness, and everyday life.</p>
            
            <p className="text-[#5e9d34] font-black text-2xl mt-8">Because good health doesn't start in the gym.<br/>It starts on your plate.</p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / How We Work */}
      <section className="py-24 bg-[#fdfcf5] px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#eaf2d7] rounded-[32px] p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Target className="w-8 h-8 text-[#5e9d34]" />
            </div>
            <h3 className="text-2xl font-black text-[#0f3b21] uppercase mb-4">How We Work</h3>
            <p className="text-[#4a6b2c] leading-relaxed relative z-10 font-medium">
              We combine nutritional science with fresh food preparation to deliver perfectly portioned meals tailored to your goals. Every meal is carefully planned to ensure the right balance of protein, carbs, and nutrients for optimal results.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-10 relative overflow-hidden border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-[#1a1a1a] uppercase mb-4">Our Mission</h3>
            <p className="text-zinc-500 leading-relaxed relative z-10 font-medium">
              Our mission is to make healthy eating simple, convenient, and sustainable for everyone. We aim to provide fresh, nutritious, and perfectly balanced meals that support fitness, wellness, and everyday performance without compromising on taste.
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-[32px] p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#2a2a2a] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Leaf className="w-8 h-8 text-[#a3c94a]" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase mb-4">Our Vision</h3>
            <p className="text-zinc-400 leading-relaxed relative z-10 font-medium">
              Our vision is to become a trusted leader in healthy meal delivery by transforming the way people eat and live. We aspire to empower individuals to lead healthier lifestyles through personalized nutrition and innovative meal solutions.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
