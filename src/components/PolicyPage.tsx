import PageHeader from '@/components/PageHeader';
import Prose from '@/components/Prose';
import { POLICIES, type PolicyKey } from '@/data/policies';

export default function PolicyPage({ policy }: { policy: PolicyKey }) {
  const { title, body } = POLICIES[policy];
  return (
    <>
      <PageHeader title={title} />
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-12 md:py-16">
        <Prose source={body} />
      </div>
    </>
  );
}
