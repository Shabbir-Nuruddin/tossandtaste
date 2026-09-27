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
        className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-black/5 shadow-sm' : 'bg-transparent py-8'}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="z-50">
            <img src="/uploads/2026/07/cropped-Toss-Taste-LOGO-ICON--180x180.png" alt="Toss & Taste" className="h-12 object-contain" />
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {['Home', 'About', 'Menu', 'Subscriptions', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className={`group relative text-xs font-bold tracking-[0.15em] uppercase ${isScrolled ? 'text-[#1a1a1a]' : 'text-white drop-shadow-md'} hover:text-[#5e9d34] transition-colors`}>
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#5e9d34] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/cart" className="relative group p-2">
              <ShoppingBag className={`w-5 h-5 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white drop-shadow-md'} group-hover:text-[#5e9d34] transition-colors`} />
            </Link>
          </div>

          <button className={`md:hidden z-50 ${isScrolled ? 'text-[#1a1a1a]' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            {['Home', 'About', 'Menu', 'Subscriptions', 'Blog', 'Contact'].map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                key={item}
              >
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-3xl font-black tracking-widest uppercase text-[#1a1a1a] hover:text-[#5e9d34] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
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
