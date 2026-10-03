import type { MetadataRoute } from 'next';
import { POSTS } from '@/data/blog';
import { SITE } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/menu', '/subscriptions', '/about', '/blog', '/contact',
    '/terms', '/privacy', '/shipping', '/return-refund'];
  return [...routes, ...POSTS.map((post) => `/blog/${post.slug}`)]
    .map((path) => ({ url: new URL(path || '/', SITE.url).href }));
}
