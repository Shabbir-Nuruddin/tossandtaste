"use client";
import { motion } from 'framer-motion';
import { Target, Leaf, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-[5rem] font-black uppercase tracking-tighter mb-6 text-[#1a1a1a]">Who We Are</h1>
        <p className="text-zinc-500 text-xl font-light max-w-3xl mx-auto leading-relaxed">
          Toss and Taste is a health-focused meal plan brand dedicated to helping you achieve your fitness and wellness goals. We create fresh, balanced, and nutrition-rich meals designed by experts to support weight loss, muscle gain, and a healthier lifestyle.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-3xl overflow-hidden bg-zinc-100"
        >
          <img 
            src="/uploads/2026/07/WhatsApp-Image-2026-07-13-at-4.47.01-PM.jpeg" 
            alt="Arun Bhatia - Founder" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-4xl font-black tracking-tighter mb-2">ARUN BHATIA</h3>
            <p className="font-bold tracking-[0.2em] uppercase text-[#5e9d34]">Founder & Head Chef</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4 text-[#1a1a1a]">Our Journey</h2>
            <p className="text-zinc-600 leading-relaxed text-lg mb-4">
              Toss & Taste was born from a personal struggle. As a fitness enthusiast, I was deeply committed to taking care of my body – working out regularly, staying active, and aiming for a healthy lifestyle. But despite all the effort, one major problem remained: finding food that truly nourished my body.
            </p>
            <p className="text-zinc-600 leading-relaxed text-lg mb-4">
              Every day felt like a challenge. Healthy options were either tasteless, inconsistent, or didn't provide complete nutrition. I often found myself compromising – either on taste, quality, or proper nourishment.
            </p>
            <p className="text-zinc-600 leading-relaxed text-lg">
              That frustration sparked an idea. Why not create a brand that offers complete daily nutrition, without stress, guilt, or compromise? That's how Toss & Taste came to life.
            </p>
          </div>
          
          <div className="pl-6 border-l-4 border-[#5e9d34]">
            <p className="text-2xl font-bold italic text-[#1a1a1a] leading-relaxed">
              "Because good health doesn't start in the gym. It starts on your plate."
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f6faed] p-12 rounded-3xl"
        >
          <Target className="w-12 h-12 text-[#5e9d34] mb-6" />
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-[#1a1a1a]">How We Work</h3>
          <p className="text-zinc-600 leading-relaxed">
            We combine nutritional science with fresh food preparation to deliver perfectly portioned meals tailored to your goals. Every meal is carefully planned to ensure the right balance of protein, carbs, and nutrients for optimal results.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-50 p-12 rounded-3xl"
        >
          <Heart className="w-12 h-12 text-zinc-900 mb-6" />
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-[#1a1a1a]">Our Mission</h3>
          <p className="text-zinc-600 leading-relaxed">
            Our mission is to make healthy eating simple, convenient, and sustainable for everyone. We aim to provide fresh, nutritious, and perfectly balanced meals that support fitness, wellness, and everyday performance without compromising on taste.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900 p-12 rounded-3xl text-white"
        >
          <Leaf className="w-12 h-12 text-[#5e9d34] mb-6" />
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Our Vision</h3>
          <p className="text-zinc-400 leading-relaxed">
            Our vision is to become a trusted leader in healthy meal delivery by transforming the way people eat and live. We aspire to empower individuals to lead healthier lifestyles through personalized nutrition, high-quality ingredients, and innovative meal solutions.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
