"use client"
import Link from 'next/link';
import { Minus, Plus, ArrowRight, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

// TODO: Replace with real numerical prices when available
const INITIAL_CART = [
  { id: 1, title: 'Teriyaki Chicken Rice Bowl', price: 0, quantity: 1, video: '15_teriyaki_chicken_rice_bowl.mp4' },
  { id: 2, title: 'Mix Berry Smoothie', price: 0, quantity: 1, video: '16_mix_berry_smoothie.mp4' },
];

export default function CartPage() {
  const [cart, setCart] = useState(INITIAL_CART);

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
  const delivery = 0; // TBD based on price
  const total = subtotal + delivery;

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "919711533944";
    let message = "Hi Toss & Taste, I'd like to place an order:\n\n";
    
    cart.forEach(item => {
      message += `- ${item.quantity}x ${item.title} (Price TBD)\n`;
    });

    message += `\n*Total: Price TBD*\n\n`;
    message += "Please let me know the final amount, delivery time, and payment options.";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="pt-40 pb-32 px-6 max-w-6xl mx-auto min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16"
      >
        Your Order.
      </motion.h1>
      
      {cart.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-32 bg-[#0a0a0a] rounded-[2rem] border border-white/5"
        >
          <p className="text-zinc-400 text-xl font-light mb-8">Your cart is feeling a bit empty.</p>
          <Link href="/menu">
            <MagneticButton className="inline-flex bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-red-500 hover:text-white transition-colors duration-500">
              Browse Menu
            </MagneticButton>
          </Link>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cart.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ delay: i * 0.1 }}
                  key={item.id} 
                  className="flex flex-col sm:flex-row gap-8 p-6 bg-[#0a0a0a] border border-white/5 rounded-3xl items-center"
                >
                  <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden shrink-0 relative bg-zinc-900">
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                      <source src={`/videos/${item.video}`} type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-2xl font-black uppercase tracking-tight">{item.title}</h3>
                    <p className="text-red-500 font-bold mt-2 text-xl">₹[PRICE]</p>
                  </div>
                  <div className="flex items-center gap-6 bg-zinc-900 rounded-full px-4 py-2 border border-white/10">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:text-red-500 transition-colors"><Minus className="w-4 h-4" /></button>
                    <span className="w-6 text-center font-black text-lg">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:text-red-500 transition-colors"><Plus className="w-4 h-4" /></button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-4 text-zinc-600 hover:text-red-500 transition-colors">
                    <Trash2 className="w-6 h-6" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Checkout Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[2rem] h-fit lg:sticky lg:top-40"
          >
            <h3 className="text-xl font-black uppercase tracking-[0.2em] mb-8 pb-6 border-b border-white/5">Summary</h3>
            <div className="space-y-6 text-sm font-bold text-zinc-400 tracking-widest uppercase">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">₹[TBD]</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-white">₹[TBD]</span>
              </div>
            </div>
            <div className="flex justify-between text-2xl font-black mt-8 pt-8 border-t border-white/5">
              <span className="uppercase tracking-widest">Total</span>
              <span className="text-red-500">₹[TBD]</span>
            </div>
            <MagneticButton onClick={handleWhatsAppCheckout} className="w-full mt-10 group flex items-center justify-center gap-4 bg-white text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-green-500 hover:text-white transition-colors duration-500">
              Checkout on WhatsApp <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
            </MagneticButton>
          </motion.div>
        </div>
      )}
    </div>
  );
}
