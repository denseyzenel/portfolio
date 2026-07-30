import Link from "next/link";
import { profile } from "@/lib/content";
import PawMark from "./PawMark";

export default function Footer() {
  return (
    <footer className="section-rule">
      <div className="container-content grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
            <PawMark className="h-4 w-4 text-amber" />
            {profile.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-dim">
            Data Analyst turning messy datasets into reporting people actually trust. The analyst who won&apos;t stop until the number makes sense.
          </p>
        </div>

        <div>
          <p className="section-label mb-4">Navigate</p>
          <ul className="space-y-2 text-sm text-ink-dim">
            <li>
              <Link href="/about" className="link-underline hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link href="/#work" className="link-underline hover:text-ink">
                Project
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="link-underline hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="section-label mb-4">Reach me</p>
          <ul className="space-y-2 text-sm text-ink-dim">
            <li>
              <a href={`mailto:${profile.email}`} className="link-underline hover:text-ink">
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline hover:text-ink"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>{profile.location} · Open to remote &amp; hybrid</li>
          </ul>
        </div>
      </div>

      <div className="section-rule">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-dim md:flex-row">
          <p>© {profile.year} {profile.name} · Designed &amp; built with care</p>
          <a href="#top" className="link-underline hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
