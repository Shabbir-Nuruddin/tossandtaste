"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, User, Mail, Calendar, ArrowRight, Utensils, Clock, Trash2, Plus, Minus, MessageSquare } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';

const LOCATIONS = ['Gurugram', 'Delhi NCR', 'Noida'];
const PLANS = [
  { id: '10-day', title: '10-Day Plan', days: 10, price: 3500 },
  { id: '30-day', title: '30-Day Plan', days: 30, price: 9500 },
];

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const cart = useCartStore();
  const [step, setStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedPlan, setSelectedPlan] = useState('');
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

  const plan = PLANS.find(p => p.id === selectedPlan);
  const total = cart.getTotal() + (plan?.price || 0);

  const handleCheckout = () => {
    let message = "Hi Toss & Taste! I'd like to place an order:%0A%0A";
    if (cart.items.length > 0) {
      message += "*A La Carte Items:*%0A";
      cart.items.forEach(item => {
        message += `- ${item.quantity}x ${item.title} (${item.price})%0A`;
      });
    }
    if (selectedPlan) {
      message += `%0A*Subscription Plan:*%0A- ${plan?.title} (${plan?.price})%0A`;
    }
    if (selectedLocation) {
      message += `%0A*Delivery Location:* ${selectedLocation}%0A`;
    }
    if (selectedDate) {
      message += `*Start Date:* ${format(selectedDate, 'PP')}%0A`;
    }
    message += `%0A*Total Estimated:* ₹${total}%0A`;
    message += `%0APlease let me know the payment details.`;
    
    window.open(`https://wa.me/919711533944?text=${message}`, '_blank');
  };

  return (
    <div className="w-full bg-[#fdfdfc] text-[#1a1a1a] min-h-screen pt-20">
      <div className="py-20 text-center bg-[#fdfbf6] border-b border-zinc-100">
        <h1 className="text-5xl font-black uppercase tracking-tight text-[#0f3b21]">Your Cart</h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-2/3 space-y-12">
          
          {/* A LA CARTE ITEMS */}
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
              <Utensils className="text-[#a3c94a]" /> A La Carte Menu
            </h2>
            {cart.items.length === 0 ? (
              <p className="text-zinc-500 italic p-8 bg-zinc-50 rounded-2xl border border-zinc-100 text-center">Your cart is empty. Add meals from the Menu.</p>
            ) : (
              <div className="space-y-4">
                {cart.items.map(item => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-white border border-zinc-200 rounded-2xl shadow-sm">
                    <div className="w-24 h-24 relative rounded-xl overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-[#5e9d34] font-bold">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-4 bg-zinc-50 rounded-full p-2 border border-zinc-200">
                      <button onClick={() => cart.updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-zinc-200 rounded-full transition-colors"><Minus size={16} /></button>
                      <span className="font-bold w-4 text-center">{item.quantity}</span>
                      <button onClick={() => cart.updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-zinc-200 rounded-full transition-colors"><Plus size={16} /></button>
                    </div>
                    <button onClick={() => cart.removeItem(item.id)} className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ADD SUBSCRIPTION PLAN */}
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
              <Clock className="text-[#a3c94a]" /> Add a Subscription Plan (Optional)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PLANS.map(p => (
                <button 
                  key={p.id}
                  onClick={() => setSelectedPlan(p.id === selectedPlan ? '' : p.id)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${selectedPlan === p.id ? 'border-[#5e9d34] bg-[#5e9d34]/5' : 'border-zinc-200 hover:border-zinc-300'}`}
                >
                  <h3 className="font-bold text-xl mb-2">{p.title}</h3>
                  <p className="text-zinc-500 text-sm mb-4">Delivered daily for {p.days} days</p>
                  <p className="text-xl font-bold text-[#5e9d34]">₹{p.price}</p>
                </button>
              ))}
            </div>
          </div>
          
        </div>

        {/* RIGHT COLUMN - SUMMARY */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl sticky top-32">
            <h2 className="text-2xl font-black uppercase tracking-widest mb-8 border-b border-zinc-100 pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              {cart.items.length > 0 && (
                <div className="flex justify-between items-center text-zinc-600">
                  <span>A La Carte ({cart.items.reduce((a,b) => a + b.quantity, 0)} items)</span>
                  <span className="font-bold text-black">₹{cart.getTotal()}</span>
                </div>
              )}
              {selectedPlan && (
                <div className="flex justify-between items-center text-zinc-600">
                  <span>Subscription ({plan?.title})</span>
                  <span className="font-bold text-black">₹{plan?.price}</span>
                </div>
              )}
              {!selectedPlan && cart.items.length === 0 && (
                <p className="text-zinc-400 text-sm text-center">Add items to see total</p>
              )}
            </div>

            <div className="border-t border-zinc-200 pt-6 mb-8">
              <div className="flex justify-between items-center text-2xl font-black">
                <span>Total</span>
                <span className="text-[#5e9d34]">₹{total}</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="font-bold uppercase tracking-wider text-sm mb-2">Delivery Details</h3>
              <select 
                className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-[#5e9d34]"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Select Location...</option>
                {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={total === 0 || !selectedLocation}
              className="w-full bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MessageSquare size={20} /> Order via WhatsApp
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
