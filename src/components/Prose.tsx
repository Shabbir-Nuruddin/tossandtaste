// Renders the small markdown subset used in src/data (blog + policies):
// "## " headings, "- " bullet lists, and blank-line separated paragraphs.

export default function Prose({ source }: { source: string }) {
  const blocks = source.trim().split(/\n\s*\n/);
  return (
    <div className="space-y-5 text-[17px] leading-relaxed text-ink/85">
      {blocks.map((block, i) => {
        const lines = block.split('\n');
        if (lines[0].startsWith('## ')) {
          return (
            <h2 key={i} className="font-display text-2xl font-semibold text-ink pt-4">
              {lines[0].slice(3)}
            </h2>
          );
        }
        if (lines.every((l) => l.startsWith('- '))) {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-leaf shrink-0" aria-hidden="true" />
                  <span>{l.slice(2)}</span>
                </li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{lines.join(' ')}</p>;
      })}
    </div>
  );
}
