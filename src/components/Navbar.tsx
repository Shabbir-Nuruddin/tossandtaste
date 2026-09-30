"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Phone, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cartCount, useCartStore } from '@/store/cartStore';
import { SITE, whatsappLink } from '@/data/site';
import SocialLinks from '@/components/SocialIcons';
import { useHydrated } from '@/lib/useHydrated';

const LINKS = [
  { name: 'Menu', href: '/menu' },
  { name: 'Meal Plans', href: '/subscriptions' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const mounted = useHydrated();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const count = useCartStore((s) => cartCount(s));

  // Close the mobile menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  const cart = (
    <Link href="/cart" className="relative p-2 -m-2 text-ink hover:text-leaf-dark transition-colors" aria-label={`Cart, ${mounted ? count : 0} items`}>
      <ShoppingBag size={22} />
      {mounted && count > 0 && (
        <span className="absolute -top-1 -right-1 bg-tangerine text-white text-[11px] font-bold min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </Link>
  );

  return (
    <header className="w-full bg-cream/95 backdrop-blur border-b border-black/5 sticky top-0 z-50">
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between px-4 sm:px-6 h-16 md:h-20">
        <Link href="/" aria-label="Toss & Taste home" className="shrink-0">
          <Image
            src="/uploads/live/Toss-Taste-LOGO-3-300x222.png"
            alt="Toss & Taste"
            width={300}
            height={222}
            className="h-11 md:h-14 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`px-3 py-2 rounded-full text-[15px] font-medium transition-colors ${
                isActive(link.href) ? 'bg-leaf-tint text-leaf-dark' : 'text-ink/80 hover:text-ink hover:bg-black/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          {cart}
          <Link
            href="/subscriptions"
            className="bg-leaf-dark hover:bg-forest text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Start a plan
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-5">
          {cart}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="p-2 -m-2 text-ink"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Explicit height: the header's backdrop-blur makes it the containing block for fixed
          children, so bottom-0 would resolve against the 64px header instead of the screen. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-cream z-40 overflow-y-auto"
          >
            <div className="px-5 pt-4 pb-10 flex flex-col min-h-full">
              <ul className="divide-y divide-black/5">
                {[{ name: 'Home', href: '/' }, ...LINKS].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block py-4 font-display text-2xl font-semibold ${
                        (link.href === '/' ? pathname === '/' : isActive(link.href)) ? 'text-leaf-dark' : 'text-ink'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3">
                <a
                  href={whatsappLink("Hi Toss & Taste! I'd like to know more about your meal plans.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1f9d55] text-white text-center font-semibold py-3.5 rounded-full"
                >
                  Order on WhatsApp
                </a>
                <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 border border-black/15 font-semibold py-3.5 rounded-full">
                  <Phone size={18} /> {SITE.phone}
                </a>
              </div>

              <div className="mt-auto pt-10 text-sm text-charcoal">
                <p>Lunch {SITE.slots.lunch} · Dinner {SITE.slots.dinner}</p>
                <p className="mt-1">Delivering in {SITE.areas.join(', ')}</p>
                <SocialLinks className="mt-5" itemClassName="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
