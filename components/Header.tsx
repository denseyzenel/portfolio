import Link from "next/link";
import { navLinks, profile } from "@/lib/content";
import PawMark from "./PawMark";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/85 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink"
        >
          <PawMark className="h-4 w-4 text-amber" />
          {profile.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] text-ink-dim">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline hover:text-ink">
                  <span className="text-amber">{link.number}</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
