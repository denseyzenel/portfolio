import { profile } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="section-rule scroll-mt-20">
      <div className="container-content flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-28">
        <div>
          <SectionLabel number="03">Contact</SectionLabel>
          <h2 className="mt-6 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Got a dataset that doesn&apos;t add up yet?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-dim md:text-base">
            {profile.location} · Open to remote &amp; hybrid roles.
          </p>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="shrink-0 rounded-full bg-amber px-8 py-4 font-mono text-sm uppercase tracking-[0.14em] text-[#1a1406] transition hover:brightness-110"
        >
          Let&apos;s talk →
        </a>
      </div>
    </section>
  );
}
