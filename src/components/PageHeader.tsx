export default function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-cream-deep border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 pt-12 pb-10 md:pt-20 md:pb-14">
        {eyebrow && <p className="text-sm font-semibold text-leaf-dark uppercase tracking-wider mb-3">{eyebrow}</p>}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-forest max-w-3xl">{title}</h1>
        {intro && <div className="mt-4 text-lg text-charcoal max-w-2xl">{intro}</div>}
        {children}
      </div>
    </section>
  );
}
