import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';
import { POLICIES } from '@/data/policies';

export const metadata: Metadata = { title: POLICIES['privacy'].title, alternates: { canonical: '/privacy' } };

export default function Page() {
  return <PolicyPage policy="privacy" />;
}
