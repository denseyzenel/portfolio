import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-b border-line py-10 first:pt-0 last:border-none"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="md:max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
            <span className="text-amber">{project.index}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-semibold transition-colors group-hover:text-amber md:text-3xl">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-ink-dim md:text-base">
            {project.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
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

        <span className="shrink-0 font-mono text-sm uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-amber">
          View ↗
        </span>
      </div>
    </Link>
  );
}
