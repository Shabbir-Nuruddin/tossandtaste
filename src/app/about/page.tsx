"use client"
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="w-full bg-[#fdfdfc] text-[#1a1a1a] selection:bg-[#5e9d34] selection:text-white">
      {/* 3-Column Grid Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-16">
            <div className="text-center md:text-left px-4">
              <h2 className="text-3xl font-black text-[#0f3b21] mb-4 tracking-tight">Who We Are?</h2>
              <p className="text-zinc-600 leading-relaxed font-light">
                Toss and Taste is a health-focused meal plan brand dedicated to helping you achieve your fitness and wellness goals. We create fresh, balanced, and nutrition-rich meals designed by experts to support weight loss, muscle gain, and a healthier lifestyle.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-sm h-64 md:h-80">
              <img src="/uploads/about/meal2.webp" alt="Healthy Rice Bowl" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/uploads/2026/02/pic1-1.webp' }} />
            </div>
            <div className="text-center md:text-right px-4">
              <h2 className="text-3xl font-black text-[#0f3b21] mb-4 tracking-tight">What We Create?</h2>
              <p className="text-zinc-600 leading-relaxed font-light">
                We craft customized meal plans using high-quality ingredients and scientifically balanced nutrition. Our meals are designed to fuel your body, improve performance, and make healthy eating simple, convenient, and enjoyable.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-sm h-64 md:h-80">
              <img src="/uploads/about/meal1.webp" alt="Paneer Bowl" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/uploads/2026/02/pic2.webp' }} />
            </div>
            <div className="text-center px-4">
              <h2 className="text-3xl font-black text-[#0f3b21] mb-4 tracking-tight">How We Work?</h2>
              <p className="text-zinc-600 leading-relaxed font-light">
                We combine nutritional science with fresh food preparation to deliver perfectly portioned meals tailored to your goals. Every meal is carefully planned to ensure the right balance of protein, carbs, and nutrients for optimal results.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-sm h-64 md:h-80">
              <img src="/uploads/about/meal3.webp" alt="Chicken Bowl" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/uploads/2026/02/pic3.webp' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-black text-[#9dbd36] mb-6 tracking-tight">Our Vision</h2>
              <p className="text-zinc-700 leading-relaxed font-light text-lg">
                Our vision is to become a trusted leader in healthy meal delivery by transforming the way people eat and live. We aspire to empower individuals to lead healthier lifestyles through personalized nutrition, high-quality ingredients, and innovative meal solutions that make wellness accessible to all.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black text-[#9dbd36] mb-6 tracking-tight">Our Mission</h2>
              <p className="text-zinc-700 leading-relaxed font-light text-lg">
                Our mission is to make healthy eating simple, convenient, and sustainable for everyone. We aim to provide fresh, nutritious, and perfectly balanced meals that support fitness, wellness, and everyday performance. Toss Taste is committed to helping people achieve their health goals without compromising on taste, quality, or convenience.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <img src="/uploads/about/Shutterstock_2266633617-1024x512.avif" alt="Mission Vision Values" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/uploads/2026/02/pic4.webp' }} />
          </div>
        </div>
      </section>

      {/* Personal Struggle Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-zinc-100 rounded-3xl overflow-hidden shadow-sm bg-white">
          <div className="h-[600px]">
            <img src="/uploads/about/WhatsApp-Image-2026-02-18-at-1.01.44-PM.jpeg" alt="Toss and Taste Kitchen" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/uploads/2026/07/WhatsApp-Image-2026-07-13-at-4.47.01-PM.jpeg' }} />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 tracking-tight">Toss & Taste was born from a personal struggle.</h3>
            <div className="space-y-6 text-zinc-600 font-light leading-relaxed">
              <p>As a fitness enthusiast, I was deeply committed to taking care of my body — working out regularly, staying active, and aiming for a healthy lifestyle. But despite all the effort, one major problem remained: finding food that truly nourished my body.</p>
              <p>Every day felt like a challenge. Healthy options were either tasteless, inconsistent, or didn't provide complete nutrition. I often found myself compromising — either on taste, quality, or proper nourishment. The struggle to find balanced, wholesome meals became a part of my routine.</p>
              <p className="font-bold text-[#1a1a1a]">That frustration sparked an idea.</p>
              <p>Why not create a brand that offers complete daily nutrition, without stress, guilt, or compromise?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-6 mb-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-zinc-100 rounded-3xl overflow-hidden shadow-sm bg-white">
          <div className="p-12 md:p-20 flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 tracking-tight">That's how Toss & Taste came to life.</h3>
            <div className="space-y-6 text-zinc-600 font-light leading-relaxed">
              <p>What started as a personal solution soon turned into a purpose. We began crafting meals using fresh ingredients, balanced macros, and thoughtful portions — salads, bowls, juices, smoothies, and wholesome mains designed to fuel the body and support an active lifestyle.</p>
              <p>Every meal at Toss & Taste is inspired by real fitness needs — meals that keep you energized, satisfied, and nourished throughout the day. What once fulfilled my own daily nutritional requirements is now helping many others who face the same struggle.</p>
              <p>Today, Toss & Taste stands for healthy food that actually works for your body — food that supports fitness, wellness, and everyday life.</p>
              <p className="font-bold text-[#1a1a1a]">Because good health doesn't start in the gym.</p>
              <p className="font-bold text-[#1a1a1a]">It starts on your plate.</p>
              <p className="mt-8 font-bold text-[#5e9d34] uppercase tracking-widest text-sm">— Arun Bhatia, Founder</p>
            </div>
          </div>
          <div className="h-[600px] order-1 md:order-2">
            <img src="/uploads/about/WhatsApp-Image-2026-02-18-at-1.01.45-PM.jpeg" alt="Arun Bhatia - Founder" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/uploads/2026/02/pic1-1.webp' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
