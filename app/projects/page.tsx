import type { Metadata } from "next";
import Link from "next/link";
import { moreProjects } from "@/lib/moreProjects";
import { projects } from "@/lib/projects";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "More Projects — Densey Zenel Maben",
  description:
    "Additional data, ML and engineering projects from Densey Zenel Maben, beyond the featured case studies.",
};

export default function MoreProjectsPage() {
  return (
    <div className="container-content py-16 md:py-24">
      <SectionLabel number="02">More work</SectionLabel>

      <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
        More projects.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-dim md:text-lg">
        The {projects.length} projects on the home page are the full case studies. Everything
        below is additional coursework, prototypes and dissertation-adjacent work — lighter
        write-ups that link out to the skill details on LinkedIn.
      </p>

      <ul className="mt-12 divide-y divide-line border-t border-line">
        {moreProjects.map((project) => (
          <li key={project.title} className="py-8 first:pt-0">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="md:max-w-2xl">
                <h2 className="font-display text-xl font-semibold md:text-2xl">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim md:text-base">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-wide text-ink-dim"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline shrink-0 font-mono text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:text-amber"
              >
                View skills ↗
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-16 border-t border-line pt-10">
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
