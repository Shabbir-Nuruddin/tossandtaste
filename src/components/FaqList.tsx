import { Plus } from 'lucide-react';
import { FAQS } from '@/data/site';

// Native <details> so it works without JavaScript and stays keyboard-accessible.
export default function FaqList({ items = FAQS }: { items?: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((f) => (
        <details key={f.q} className="group py-1">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-4 font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus size={20} className="shrink-0 text-leaf-dark transition-transform group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="pb-5 pr-8 text-charcoal leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
