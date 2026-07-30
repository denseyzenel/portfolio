"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/content";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`block h-px w-6 bg-ink transition-transform duration-300 ${
            open ? "translate-y-[3.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-6 bg-ink transition-transform duration-300 ${
            open ? "-translate-y-[3.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm uppercase tracking-[0.2em] text-ink"
            >
              <span className="text-amber">{link.number}</span> {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
