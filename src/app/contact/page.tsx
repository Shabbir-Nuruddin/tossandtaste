import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SocialLinks from '@/components/SocialIcons';
import ContactForm from './ContactForm';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  alternates: { canonical: '/contact' },
  description: `Call or WhatsApp ${SITE.phone}, email ${SITE.email}, or visit us at ${SITE.address}.`,
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`Toss & Taste, ${SITE.address}`)}&output=embed`;

export default function ContactPage() {
  const rows = [
    { icon: Phone, label: 'Call or WhatsApp', value: SITE.phone, href: SITE.phoneHref },
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: 'Kitchen', value: SITE.address },
    { icon: Clock, label: 'Delivery', value: `Lunch ${SITE.slots.lunch}\nDinner ${SITE.slots.dinner}` },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us"
        intro={<p>Questions about a plan, a diet, or an order? WhatsApp is the quickest way to reach us.</p>}
      />

      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-12 md:py-16 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <ul className="space-y-6">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-leaf-tint text-leaf-dark flex items-center justify-center shrink-0">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-charcoal">{label}</p>
                  {href ? (
                    <a href={href} className="font-semibold text-lg hover:text-leaf-dark break-all">{value}</a>
                  ) : (
                    <p className="font-semibold text-lg whitespace-pre-line">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-sm text-charcoal mb-3">Follow what’s cooking</p>
            <SocialLinks itemClassName="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center hover:bg-leaf-dark hover:text-white hover:border-leaf-dark transition-colors" />
          </div>
          <p className="mt-8 text-sm text-charcoal">
            We deliver across {SITE.areas.join(', ')}. FSSAI Lic. No. {SITE.fssai}.
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-black/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <ContactForm />
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 pb-16">
        <div className="rounded-3xl overflow-hidden border border-black/5 aspect-[4/3] sm:aspect-[21/9]">
          <iframe
            title="Map showing Toss & Taste, Sector 55, Gurugram"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          />
        </div>
      </section>
    </>
  );
}
