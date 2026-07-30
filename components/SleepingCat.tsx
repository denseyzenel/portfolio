"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A curled-up cat that naps until it's scrolled into view, then plays a
 * one-time stretch/wake animation. Sits at the seam between the hero and the
 * About teaser, so scrolling from one to the other "wakes" it.
 */
export default function SleepingCat() {
  const ref = useRef<HTMLDivElement>(null);
  const [awake, setAwake] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAwake(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="flex justify-center py-8 text-amber-dim"
    >
      <svg
        viewBox="0 0 80 56"
        className={awake ? "h-12 w-16 cat-awake" : "h-12 w-16 cat-asleep"}
        fill="currentColor"
      >
        <ellipse cx="40" cy="36" rx="30" ry="17" />
        <circle cx="17" cy="29" r="11" />
        <path d="M10 21 L7 12 L17 18 Z" />
        <path d="M19 19 L19 9 L27 17 Z" />
        <path
          d="M64 38 C 77 32, 75 12, 56 15"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
