import type { MetadataRoute } from 'next';
import { SITE } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  // Let crawlers read the checkout's existing noindex instruction.
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${SITE.url}/sitemap.xml` };
}
