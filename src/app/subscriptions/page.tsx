"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

const PLANS = [
  {
    id: 'fat-loss',
    title: 'Fat Loss Plan',
    video: '19_fat_loss_plan.mp4',
    description: 'Clean, calorie-controlled meals that never compromise on taste. Perfect for sustainable weight management.',
    features: ['Low Carb Options', 'Calorie Counted', 'Sugar Free', 'Daily Delivery'],
    basePrices: {
      'single': 350,
      '30days': 9000,
      '4months': 34000
    }
  },
  {
    id: 'protein-pack',
    title: 'Protein Pack Plan',
    video: '20_protein_pack_plan.mp4',
    description: 'Build strength and boost energy with our high-protein meals designed for active lifestyles.',
    features: ['120g+ Protein Daily', 'Lean Meats', 'Keto Friendly', 'Post-workout Shakes'],
    basePrices: {
      'single': 450,
      '30days': 12000,
      '4months': 45000
    }
  }
];

const DURATIONS = [
  { id: 'single', label: 'Single Meal', desc: 'Try it out' },
  { id: '30days', label: '30 Days', desc: 'Monthly commitment' },
  { id: '4months', label: '4 Months', desc: 'Best value' }
];

const ADD_ONS = [
  { id: 'extra-chicken', label: 'Extra Chicken', price: 100 },
  { id: 'extra-protein', label: 'Extra Protein', price: 150 },
  { id: 'vegetables', label: 'Extra Vegetables', price: 60 },
  { id: 'sweet-potatoes', label: 'Sweet Potatoes', price: 80 },
  { id: 'shake', label: 'Add Shake', price: 150 },
  { id: 'fish', label: 'Premium Fish', price: 200 }
];

const LOCATIONS = ['Gurugram', 'Delhi NCR', 'Noida'];

export default function SubscriptionsPage() {
  const [selectedPlan, setSelectedPlan] = useState(PLANS[1].id);
  const [selectedDuration, setSelectedDuration] = useState('30days');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [location, setLocation] = useState('Gurugram');

  const activePlan = PLANS.find(p => p.id === selectedPlan)!;
  const basePrice = activePlan.basePrices[selectedDuration as keyof typeof activePlan.basePrices];
  
  // Calculate multiplier for add-ons based on duration
  const durationMultiplier = selectedDuration === 'single' ? 1 : (selectedDuration === '30days' ? 26 : 104); // Assuming 26 meals a month
  const addonsPrice = selectedAddons.reduce((acc, addonId) => {
    const addon = ADD_ONS.find(a => a.id === addonId);
    return acc + (addon ? addon.price * durationMultiplier : 0);
  }, 0);
  
  const totalPrice = basePrice + addonsPrice;

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  return (
    <div className="pt-40 pb-32 px-6 max-w-[1400px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl md:text-[6rem] font-black uppercase tracking-tighter mb-6">Meal Plans</h1>
        <p className="text-zinc-400 text-xl font-light max-w-2xl mx-auto">
          Commit to your health. Choose a subscription plan and let us take care of your daily nutrition with uncompromising taste.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column - Plans */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLANS.map((plan, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                key={plan.id} 
                onClick={() => setSelectedPlan(plan.id)}
                className={`group cursor-pointer relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border transition-all duration-500 flex flex-col ${selectedPlan === plan.id ? 'border-red-500 ring-1 ring-red-500' : 'border-white/5 hover:border-white/20'}`}
              >
                <div className="relative h-64 w-full bg-zinc-900 overflow-hidden">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    <source src={`/videos/${plan.video}`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-90" />
                  
                  {selectedPlan === plan.id && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-1.5 z-20">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex-grow flex flex-col -mt-16 relative z-10">
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{plan.title}</h3>
                  <p className="text-zinc-400 font-light mb-6 flex-grow">{plan.description}</p>
                  
                  <ul className="space-y-3">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8"
          >
            <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Customize with Add-ons</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {ADD_ONS.map(addon => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex flex-col items-start p-4 rounded-xl border transition-all text-left ${isSelected ? 'border-red-500 bg-red-500/10' : 'border-white/10 hover:border-white/20 bg-white/5'}`}
                  >
                    <div className="flex justify-between w-full items-center mb-2">
                      <span className="font-bold text-sm">{addon.label}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-red-500" />}
                    </div>
                    <span className="text-xs text-zinc-400">+₹{addon.price}/meal</span>
                  </button>
                )
              })}
            </div>
          </motion.div>

        </div>

        {/* Right Column - Summary & Checkout */}
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sticky top-32 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 flex flex-col"
          >
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Plan Summary</h3>
            
            <div className="space-y-8 flex-grow">
              {/* Duration */}
              <div>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Select Duration</p>
                <div className="space-y-3">
                  {DURATIONS.map(dur => (
                    <button
                      key={dur.id}
                      onClick={() => setSelectedDuration(dur.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${selectedDuration === dur.id ? 'border-white bg-white text-black' : 'border-white/10 text-white hover:border-white/30'}`}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-bold">{dur.label}</span>
                        <span className={`text-xs ${selectedDuration === dur.id ? 'text-zinc-600' : 'text-zinc-500'}`}>{dur.desc}</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedDuration === dur.id ? 'border-black' : 'border-white/20'}`}>
                        {selectedDuration === dur.id && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Delivery Location</p>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <select 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white pl-12 pr-4 py-4 rounded-xl appearance-none focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
                  >
                    {LOCATIONS.map(loc => (
                      <option key={loc} value={loc} className="bg-zinc-900">{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="pt-8 border-t border-white/10 space-y-4">
                <div className="flex justify-between text-zinc-400">
                  <span>Base Plan ({activePlan.title})</span>
                  <span>₹{basePrice.toLocaleString()}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between text-zinc-400">
                    <span>Add-ons ({selectedAddons.length})</span>
                    <span>+₹{addonsPrice.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-black pt-4">
                  <span>Total Total</span>
                  <span className="text-red-500">₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <MagneticButton className="w-full mt-12 flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm transition-all duration-300">
              Checkout <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
