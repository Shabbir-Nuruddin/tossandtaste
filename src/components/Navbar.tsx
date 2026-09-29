"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'MENU', href: '/menu' },
    { name: 'SUBSCRIPTIONS', href: '/subscriptions' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-[#fdfcf5] py-4 px-6 border-b border-zinc-100 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/">
          <img src="/uploads/live/toss___taste_logo-removebg-final-300x238.webp" alt="Toss & Taste" className="h-14 w-auto object-contain" />
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
            <ShoppingBag size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
