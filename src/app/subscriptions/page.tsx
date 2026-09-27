"use client"
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

// TODO: Update these placeholders with real prices
const PLANS = [
  {
    id: 'fat-loss',
    title: 'Fat Loss Plan',
    video: '19_fat_loss_hero.mp4',
    description: 'Clean, calorie-controlled meals that never compromise on taste. Perfect for sustainable weight management.',
    features: ['Low Carb Options', 'Calorie Counted', 'Sugar Free', 'Daily Delivery'],
    price: '₹[PRICE] / week'
  },
  {
    id: 'protein-pack',
    title: 'Protein Pack',
    video: '20_protein_pack_hero.mp4',
    description: 'Build strength and boost energy with our high-protein meals designed for active lifestyles.',
    features: ['120g+ Protein Daily', 'Lean Meats', 'Keto Friendly', 'Post-workout Shakes'],
    price: '₹[PRICE] / week'
  }
];

export default function SubscriptionsPage() {
  return (
    <div className="pt-40 pb-32 px-6 max-w-[1400px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-6xl md:text-[6rem] font-black uppercase tracking-tighter mb-6">Meal Plans</h1>
        <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">
          Commit to your health. Choose a subscription plan and let us take care of your daily nutrition with uncompromising taste.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {PLANS.map((plan, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            key={plan.id} 
            className="group relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors duration-500 flex flex-col h-full"
          >
            {/* Hero Video for Plan */}
            <div className="relative h-[400px] w-full overflow-hidden bg-zinc-900">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]">
                <source src={`/videos/${plan.video}`} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
            </div>
            
            {/* Plan Details */}
            <div className="p-10 flex-grow flex flex-col -mt-20 relative z-10">
              <h2 className="text-5xl font-black uppercase tracking-tight mb-6">{plan.title}</h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-light">{plan.description}</p>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-4 text-zinc-300 text-lg">
                    <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0" />
                    <span className="font-medium tracking-wide">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto pt-10 border-t border-white/5 gap-6">
                <div className="text-3xl font-black text-red-500 whitespace-nowrap">{plan.price}</div>
                <MagneticButton className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-8 py-5 rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-red-500 hover:text-white transition-colors duration-500">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
