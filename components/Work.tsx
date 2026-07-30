import Link from "next/link";
import { projects } from "@/lib/projects";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";
import { profile } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="section-rule scroll-mt-20">
      <div className="container-content py-20 md:py-28">
        <SectionLabel number="02">Selected Project</SectionLabel>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Projects.
        </h2>

        <div className="mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          <Link
            href="/projects"
            className="link-underline inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-amber"
          >
            More projects ↗
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] text-ink"
          >
            More on LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
