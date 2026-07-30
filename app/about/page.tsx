import type { Metadata } from "next";
import Link from "next/link";
import {
  awards,
  certifications,
  education,
  experience,
  volunteering,
  profile,
  skillGroups,
} from "@/lib/content";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About — Densey Zenel Maben",
  description:
    "The full story: experience, education, skills and certifications behind Densey Zenel Maben's data analytics work.",
};

export default function AboutPage() {
  return (
    <div className="container-content py-16 md:py-24">
      <SectionLabel number="02">About</SectionLabel>

      <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
        The full story.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-dim md:text-lg">
        {profile.summary}
      </p>

      {/* Experience */}
      <section className="mt-20 md:mt-28" aria-labelledby="experience-heading">
        <h2
          id="experience-heading"
          className="font-mono text-xs uppercase tracking-[0.18em] text-amber"
        >
          Experience
        </h2>

        <ol className="mt-8 space-y-12">
          {experience.map((item) => (
            <li key={`${item.company}-${item.role}`} className="border-l border-line pl-6 md:pl-8">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {item.role}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wide text-ink-dim">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-dim">
                {item.company}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="text-sm leading-relaxed text-ink-dim md:text-base">
                    <span className="mr-2 text-amber">·</span>
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Volunteering */}
      <section className="mt-20 md:mt-28" aria-labelledby="volunteering-heading">
        <h2
          id="volunteering-heading"
          className="font-mono text-xs uppercase tracking-[0.18em] text-amber"
        >
          Volunteering and Internships
        </h2>

        <ol className="mt-8 space-y-12">
          {volunteering.map((item) => (
            <li key={`${item.company}-${item.role}`} className="border-l border-line pl-6 md:pl-8">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {item.role}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wide text-ink-dim">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-dim">
                {item.company}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <ul className="mt-4 space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="text-sm leading-relaxed text-ink-dim md:text-base">
                    <span className="mr-2 text-amber">·</span>
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>



      {/* Education */}
      <section className="mt-20 md:mt-28" aria-labelledby="education-heading">
        <h2
          id="education-heading"
          className="font-mono text-xs uppercase tracking-[0.18em] text-amber"
        >
          Education
        </h2>

        <ol className="mt-8 space-y-10">
          {education.map((item) => (
            <li key={item.school} className="border-l border-line pl-6 md:pl-8">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {item.qualification}
                </h3>
                <span className="font-mono text-xs uppercase tracking-wide text-ink-dim">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-dim">{item.school}</p>
              {item.detail && (
                <p className="mt-3 text-sm leading-relaxed text-ink-dim md:text-base">
                  {item.detail}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="mt-20 md:mt-28" aria-labelledby="skills-heading">
        <h2
          id="skills-heading"
          className="font-mono text-xs uppercase tracking-[0.18em] text-amber"
        >
          Skills
        </h2>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-bg p-6 md:p-8">
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-wide text-ink-dim"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="mt-20 md:mt-28 md:mb-0" aria-labelledby="certs-heading">
        <h2
          id="certs-heading"
          className="font-mono text-xs uppercase tracking-[0.18em] text-amber"
        >
          Certifications &amp; Awards
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-3 text-sm leading-relaxed text-ink-dim md:text-base">
                <span className="mt-1 text-amber">·</span>
                {cert}
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {awards.map((award) => (
              <li key={award.title} className="text-sm leading-relaxed text-ink-dim md:text-base">
                <span className="font-medium text-ink">{award.title}</span>
                <span className="block text-xs text-ink-dim">{award.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-20 border-t border-line pt-10 md:mt-28">
        <Link
          href="/#work"
          className="link-underline inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-ink"
        >
          ← Back to work
        </Link>
      </div>
    </div>
  );
}
