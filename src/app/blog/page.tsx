import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { POSTS, formatDate } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog',
  alternates: { canonical: '/blog' },
  description: 'Simple, practical reads on eating well: fat loss, protein, planning your meals, and healthy snacks and drinks.',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader eyebrow="Blog" title="Notes from our kitchen" intro={<p>Simple, practical reads on eating well without overthinking it.</p>} />
      <section className="max-w-[1280px] mx-auto px-5 sm:px-6 py-12 md:py-16">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-black/5">
                <div className="relative aspect-[16/10] bg-leaf-tint overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <time dateTime={post.date} className="text-sm text-charcoal">{formatDate(post.date)}</time>
                  <h2 className="mt-2 font-display text-xl font-semibold leading-snug group-hover:text-leaf-dark transition-colors">{post.title}</h2>
                  <p className="mt-2 text-charcoal leading-relaxed">{post.excerpt}</p>
                  <span className="mt-auto pt-4 text-sm font-semibold text-leaf-dark">Read more →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
