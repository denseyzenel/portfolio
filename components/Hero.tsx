import { heroCopy, profile } from "@/lib/content";

export default function Hero() {
  return (
    <section className="container-content relative flex min-h-[92vh] flex-col justify-between pb-20 pt-10 md:pt-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="section-label">{heroCopy.eyebrow}</p>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
          {profile.location} · {profile.timezone}
        </p>
      </div>

      <div className="my-10 md:my-16">
        <h1
          data-text="DENSEY ZENEL MABEN"
          className="glint-text font-display text-[13vw] font-semibold uppercase leading-[0.92] tracking-tight text-ink sm:text-[10vw] md:text-[7.2vw] lg:text-[6.4rem]"
        >
          DENSEY ZENEL MABEN
        </h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-[0.3em] text-amber md:text-base">
          Data Analyst
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="max-w-2xl font-display text-2xl leading-snug text-ink sm:text-3xl md:text-4xl">
            {heroCopy.lead}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-dim md:text-base">
            {heroCopy.sub}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:justify-end">
          <a
            href="#work"
            className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-[#1a1406] transition hover:brightness-110"
          >
            See my work ↗
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-amber-dim"
          >
            Say hello ↗
          </a>
        </div>
      </div>
    </section>
  );
}
