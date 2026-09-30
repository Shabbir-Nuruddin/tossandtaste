import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Prose from '@/components/Prose';
import { POSTS, formatDate } from '@/data/blog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: 'article', title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article>
      <header className="max-w-3xl mx-auto px-5 sm:px-6 pt-10 md:pt-16">
        <Link href="/blog" className="text-sm font-semibold text-leaf-dark">← All posts</Link>
        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-forest">{post.title}</h1>
        <time dateTime={post.date} className="mt-4 block text-charcoal">{formatDate(post.date)}</time>
      </header>
      <div className="max-w-4xl mx-auto px-5 sm:px-6 mt-8">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-leaf-tint">
          <Image src={post.image} alt="" fill priority sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-10 md:py-14">
        <Prose source={post.body} />
        <div className="mt-12 rounded-2xl bg-leaf-tint p-6 md:p-8">
          <p className="font-display text-xl font-semibold text-forest">Want meals like this without the planning?</p>
          <p className="mt-2 text-ink/80">Our plans are cooked fresh every day and come with calories and macros for every meal.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/subscriptions" className="rounded-full bg-leaf-dark text-white font-semibold px-5 py-3 hover:bg-forest transition-colors">See meal plans</Link>
            <Link href="/menu" className="rounded-full border border-forest/20 font-semibold px-5 py-3 hover:border-forest/50 transition-colors">Browse the menu</Link>
          </div>
        </div>
      </div>
      <section className="bg-white border-t border-black/5">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-forest mb-6">More to read</h2>
          <ul className="grid sm:grid-cols-3 gap-6">
            {more.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-leaf-tint">
                    <Image src={p.image} alt="" fill sizes="(min-width: 640px) 30vw, 90vw" className="object-cover" />
                  </div>
                  <p className="mt-3 font-display font-semibold leading-snug group-hover:text-leaf-dark">{p.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
