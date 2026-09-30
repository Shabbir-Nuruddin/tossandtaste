import Link from 'next/link';
import Image from 'next/image';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { SITE } from '@/data/site';
import SocialLinks from '@/components/SocialIcons';

const EXPLORE = [
  { name: 'Menu', href: '/menu' },
  { name: 'Meal Plans', href: '/subscriptions' },
  { name: 'About us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const POLICIES = [
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Shipping & Delivery', href: '/shipping' },
  { name: 'Returns & Refunds', href: '/return-refund' },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80 pt-16 pb-24 md:pb-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-x-8 gap-y-12">
        <div className="col-span-2 lg:col-span-1 space-y-5">
          <div className="flex items-center gap-3">
            <Image src="/uploads/2026/07/cropped-Toss-Taste-LOGO-ICON--192x192.png" alt="" width={48} height={48} className="w-12 h-12 rounded-full bg-white p-1" />
            <div>
              <p className="font-display text-xl font-semibold text-white">Toss &amp; Taste</p>
              <p className="text-sm text-leaf-bright">{SITE.tagline}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Healthy meal plans cooked fresh every day in Gurugram. Salads, bowls and juices with the calories and protein listed on every dish.
          </p>
          <SocialLinks itemClassName="w-10 h-10 rounded-full bg-white/10 hover:bg-leaf text-white flex items-center justify-center transition-colors" />
        </div>

        <div>
          <h2 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">Explore</h2>
          <ul className="space-y-2.5 text-sm">
            {EXPLORE.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">Policies</h2>
          <ul className="space-y-2.5 text-sm">
            {POLICIES.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h2 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">Get in touch</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-leaf-bright mt-0.5" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-leaf-bright mt-0.5" />
              <a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-leaf-bright mt-0.5" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white break-all">{SITE.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="shrink-0 text-leaf-bright mt-0.5" />
              <span>
                Lunch {SITE.slots.lunch}
                <br />
                Dinner {SITE.slots.dinner}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/60">
        <p>© {new Date().getFullYear()} Toss &amp; Taste. All rights reserved.</p>
        <p>FSSAI Licence No. {SITE.fssai}</p>
      </div>
    </footer>
  );
}
