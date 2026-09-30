import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';
import { POLICIES } from '@/data/policies';

export const metadata: Metadata = { title: POLICIES['return-refund'].title };

export default function Page() {
  return <PolicyPage policy="return-refund" />;
}
