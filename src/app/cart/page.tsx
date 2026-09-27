"use client";
import Link from 'next/link';
import { Minus, Plus, ArrowRight, Trash2, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

const INITIAL_CART = [
  { id: 1, title: 'Teriyaki Chicken Rice Bowl', price: 400, quantity: 1, video: '15_teriyaki_chicken_rice_bowl.mp4' },
  { id: 2, title: 'Mix Berry Smoothie', price: 250, quantity: 1, video: '16_mix_berry_smoothie.mp4' },
  { id: 3, title: 'Protein Pack Buddha Bowl', price: 390, quantity: 2, video: '5_chicken_buddha_bowl.mp4' },
];

const LOCATIONS = ['Gurugram', 'Delhi NCR', 'Noida'];

export default function CartPage() {
  const [cart, setCart] = useState(INITIAL_CART);
  const [location, setLocation] = useState('Gurugram');

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQ = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQ };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = subtotal > 1000 ? 0 : 50; 
  const total = subtotal + delivery;

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "919711533944";
    let message = `Hi Toss & Taste, I'd like to place an order for delivery to ${location}:\n\n`;
    
    cart.forEach(item => {
      message += `- ${item.quantity}x ${item.title} (₹${item.price})\n`;
    });

    message += `\n*Subtotal: ₹${subtotal}*`;
    message += `\n*Delivery: ₹${delivery}*`;
    message += `\n*Total: ₹${total}*\n\n`;
    message += "Please confirm the order.";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">Your Cart is Empty</h1>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">Looks like you haven&apos;t added anything to your cart yet. Let&apos;s get some healthy fuel!</p>
          <Link href="/menu">
            <MagneticButton className="bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-red-500 hover:text-white transition-colors duration-300">
              Browse Menu
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6 max-w-[1200px] mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-[5rem] font-black uppercase tracking-tighter">Your Cart</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-7 space-y-6">
          <AnimatePresence mode="popLayout">
            {cart.map((item, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={item.id} 
                className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-3xl bg-[#0a0a0a] border border-white/5 group"
              >
                <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden bg-zinc-900 shrink-0 relative">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={`/videos/${item.video}`} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                
                <div className="flex-grow flex flex-col justify-between h-full py-2 w-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold uppercase tracking-tight max-w-[200px]">{item.title}</h3>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-zinc-500 hover:text-red-500 transition-colors p-2"
                      title="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-zinc-300">₹{item.price}</span>
                    
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sticky top-32 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8"
          >
            <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Summary</h3>
            
            {/* Delivery Location Selector */}
            <div className="mb-8">
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

            <div className="space-y-4 text-zinc-400 mb-8 border-t border-white/10 pt-8">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-white">{delivery === 0 ? 'Free' : `₹${delivery}`}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-8 pt-6 border-t border-white/10">
              <span className="text-xl font-bold uppercase tracking-widest text-zinc-500">Total</span>
              <span className="text-3xl font-black text-red-500">₹{total}</span>
            </div>
            
            <MagneticButton 
              onClick={handleWhatsAppCheckout}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-red-500 text-black hover:text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm transition-all duration-300"
            >
              Checkout on WhatsApp <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            
            <p className="text-center text-zinc-500 text-xs mt-6 tracking-wide">
              Complete your order securely via WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
