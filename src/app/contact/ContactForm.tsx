"use client";
import { useState } from 'react';
import { SITE, whatsappLink } from '@/data/site';
import { SocialIcon } from '@/components/SocialIcons';

const inputClass =
  'w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-base outline-none focus:border-leaf-dark focus:ring-2 focus:ring-leaf-dark/20';

const TOPICS = ['Meal plans', 'A single order', 'Bulk or office order', 'Feedback', 'Something else'];

export default function ContactForm() {
  const [sent, setSent] = useState<'whatsapp' | 'email' | null>(null);

  const compose = (form: HTMLFormElement) => {
    const f = new FormData(form);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    return {
      subject: `${get('topic')} — ${get('name')}`,
      body: `Hi Toss & Taste, I'm ${get('name')}.\n\n${get('message')}\n\nTopic: ${get('topic')}\nPhone: ${get('phone')}`,
    };
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { body } = compose(e.currentTarget);
    window.open(whatsappLink(body), '_blank', 'noopener,noreferrer');
    setSent('whatsapp');
  };

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form!;
    if (!form.reportValidity()) return;
    const { subject, body } = compose(form);
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent('email');
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1.5">Your name</label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-1.5">Phone <span className="font-normal text-charcoal">(optional)</span></label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="topic" className="block text-sm font-semibold mb-1.5">What’s it about?</label>
        <select id="topic" name="topic" className={inputClass} defaultValue={TOPICS[0]}>
          {TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1.5">Message</label>
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#1f9d55] text-white font-semibold px-6 py-3.5 hover:bg-[#188a49] transition-colors"
        >
          <SocialIcon name="WhatsApp" /> Send on WhatsApp
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className="flex-1 rounded-full border border-black/15 font-semibold px-6 py-3.5 hover:border-black/40 transition-colors"
        >
          Send by email instead
        </button>
      </div>
      {sent && (
        <p role="status" className="rounded-xl bg-leaf-tint px-4 py-3 text-sm text-forest">
          {sent === 'whatsapp'
            ? 'WhatsApp should have opened with your message — just press send.'
            : 'Your email app should have opened with your message — just press send.'}{' '}
          We usually reply within a few hours.
        </p>
      )}
    </form>
  );
}
