"use client"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const cartItems = useCartStore(state => state.items);
  useEffect(() => setMounted(true), []);
  const cartCount = cartItems.reduce((a, b) => a + b.quantity, 0);

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'MENU', href: '/menu' },
    { name: 'SUBSCRIPTIONS', href: '/subscriptions' },
    { name: 'ABOUT', href: '/about' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-[#fdfcf5] py-4 px-6 border-b border-zinc-100 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src="/uploads/live/Toss-Taste-LOGO-3-300x222.png" alt="Toss & Taste" width={200} height={56} className="h-14 w-auto object-contain" priority />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={"text-sm font-black tracking-widest px-3 py-1.5 transition-all uppercase " + (isActive ? "border-2 border-black text-black" : "text-black hover:text-[#5e9d34] border-2 border-transparent")}
              >
                {link.name}
              </Link>
            )
          })}
          <Link href="/cart" className="text-black hover:text-[#5e9d34] transition-colors">
            <div className="relative">
              <ShoppingBag size={20} />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#5e9d34] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
