import { skillsTicker } from "@/lib/content";

export default function SkillsMarquee() {
  // Duplicate the list so the CSS marquee (which translates -50%) loops seamlessly.
  const doubled = [...skillsTicker, ...skillsTicker];

  return (
    <div className="section-rule overflow-hidden py-8">
      <div className="marquee-track gap-10 font-mono text-sm uppercase tracking-[0.14em] text-ink-dim md:text-base">
        {doubled.map((skill, i) => (
          <span key={`${skill}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            {skill}
            <span className="text-amber-dim">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
