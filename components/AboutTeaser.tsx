import Link from "next/link";
import { howIWork, profile } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function AboutTeaser() {
  return (
    <section className="section-rule">
      <div className="container-content py-20 md:py-28">
        <SectionLabel number="01">About me</SectionLabel>

        <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Who I am.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-dim md:text-lg">
          {profile.summary}
        </p>

        <p className="mt-4 max-w-2xl text-sm font-mono uppercase tracking-[0.14em] text-ink-dim">
          How I work
        </p>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {howIWork.map((item) => (
            <div key={item.number} className="bg-bg p-8">
              <span className="font-mono text-xs text-amber">{item.number}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">{item.body}</p>
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="link-underline mt-10 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-ink"
        >
          The full story ↗
        </Link>
      </div>
    </section>
  );
}
