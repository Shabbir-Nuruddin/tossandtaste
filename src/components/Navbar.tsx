"use client"
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-black tracking-tighter uppercase text-white hover:text-red-500 transition-colors z-50">
            Toss<span className="font-light text-red-500">&</span>Taste
          </Link>

          <div className="hidden md:flex gap-10 items-center">
            {['Menu', 'Subscriptions', 'About'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="group relative text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-white transition-colors">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/cart" className="relative group p-2">
              <ShoppingBag className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-red-500 text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold"
              >
                2
              </motion.span>
            </Link>
          </div>

          <button className="md:hidden text-white z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
          >
            {['Menu', 'Subscriptions', 'About'].map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                key={item}
              >
                <Link href={`/${item.toLowerCase()}`} className="text-4xl font-black tracking-widest uppercase hover:text-red-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
