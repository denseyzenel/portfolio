import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import SectionLabel from "@/components/SectionLabel";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Densey Zenel Maben`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-content py-16 md:py-24">
      <Link
        href="/#work"
        className="link-underline inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-ink-dim hover:text-ink"
      >
        ← Back to work
      </Link>

      <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
        <span className="text-amber">{project.index}</span>
        <span>{project.year}</span>
      </div>

      <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
        {project.title}
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-dim md:text-lg">
        {project.summary}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs uppercase tracking-wide text-ink-dim"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-12">
        <section aria-labelledby="overview-heading">
          <SectionLabel number="01">Overview</SectionLabel>
          <p className="mt-5 text-sm leading-relaxed text-ink-dim md:text-base">
            {project.overview}
          </p>
        </section>

        <section aria-labelledby="approach-heading">
          <SectionLabel number="02">Approach</SectionLabel>
          <ul className="mt-5 space-y-3">
            {project.approach.map((item, i) => (
              <li key={i} className="text-sm leading-relaxed text-ink-dim md:text-base">
                <span className="mr-2 text-amber">·</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-16 border-t border-line pt-12" aria-labelledby="outcome-heading">
        <SectionLabel number="03">Outcome</SectionLabel>
        <ul className="mt-5 grid gap-4 md:grid-cols-2">
          {project.outcome.map((item, i) => (
            <li
              key={i}
              className="rounded-2xl border border-line bg-bg-raised p-6 text-sm leading-relaxed text-ink-dim md:text-base"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-20 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/#work"
          className="link-underline inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-ink"
        >
          ← All work
        </Link>
        <a
          href="mailto:denseyzenel@gmail.com"
          className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-[#1a1406] transition hover:brightness-110"
        >
          Ask about this project ↗
        </a>
      </div>
    </div>
  );
}
