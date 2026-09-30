"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Target, Heart, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#fdfdfc] text-[#1a1a1a] min-h-screen pt-20">
      <div className="py-20 text-center bg-[#fdfbf6] border-b border-zinc-100">
        <h1 className="text-5xl font-black uppercase tracking-tight text-[#0f3b21]">About Us</h1>
        <p className="mt-4 text-zinc-600">Home &raquo; About</p>
      </div>

      
      {/* Our Journey & Founder */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] w-full bg-zinc-100">
              <Image src="/uploads/about/WhatsApp-Image-2026-02-18-at-1.01.45-PM.jpeg" alt="Arun Bhatia - Founder" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[center_15%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold text-2xl">Arun Bhatia</p>
                <p className="text-white/80 font-medium">Founder, Toss & Taste</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-[#0f3b21] uppercase tracking-tight mb-8">Our Journey</h2>
            <div className="space-y-6 text-lg text-zinc-600 font-medium leading-relaxed">
              <p>
                <strong className="text-[#84b84b] block mb-2 text-xl">Toss & Taste was born from a personal struggle.</strong>
                As a fitness enthusiast, I was deeply committed to taking care of my body — working out regularly, staying active, and aiming for a healthy lifestyle. But despite all the effort, one major problem remained: finding food that truly nourished my body.
              </p>
              <p>
                Every day felt like a challenge. Healthy options were either tasteless, inconsistent, or didn't provide complete nutrition. I often found myself compromising — either on taste, quality, or proper nourishment. The struggle to find balanced, wholesome meals became a part of my routine.
              </p>
              <p>
                That frustration sparked an idea.<br/>
                <strong className="text-zinc-800">Why not create a brand that offers complete daily nutrition, without stress, guilt, or compromise?</strong>
              </p>
              <p>
                That's how Toss & Taste came to life. What started as a personal solution soon turned into a purpose. We began crafting meals using fresh ingredients, balanced macros, and thoughtful portions — salads, bowls, juices, smoothies, and wholesome mains designed to fuel the body and support an active lifestyle.
              </p>
              <p>
                Every meal at Toss & Taste is inspired by real fitness needs — meals that keep you energized, satisfied, and nourished throughout the day. What once fulfilled my own daily nutritional requirements is now helping many others who face the same struggle.
              </p>
              <p className="text-xl font-bold text-[#0f3b21] pt-4 border-t border-zinc-100">
                Because good health doesn't start in the gym. It starts on your plate.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Who We Are & What We Create */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto border-t border-zinc-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-[#fcfdf8] p-12 rounded-3xl border border-[#eaf2d7]">
            <h2 className="text-3xl font-black text-[#0f3b21] uppercase tracking-tight mb-6">Who We Are</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">Toss and Taste is a health-focused meal plan brand dedicated to helping you achieve your fitness and wellness goals. We create fresh, balanced, and nutrition-rich meals designed by experts to support weight loss, muscle gain, and a healthier lifestyle.</p>
          </div>
          <div className="bg-[#fcfdf8] p-12 rounded-3xl border border-[#eaf2d7]">
            <h2 className="text-3xl font-black text-[#0f3b21] uppercase tracking-tight mb-6">What We Create</h2>
            <p className="text-zinc-600 leading-relaxed font-medium">We craft customized meal plans using high-quality ingredients and scientifically balanced nutrition. Our meals are designed to fuel your body, improve performance, and make healthy eating simple, convenient, and enjoyable.</p>
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
