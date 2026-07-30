import Link from "next/link";
import PawMark from "@/components/PawMark";

export default function NotFound() {
  return (
    <div className="container-content flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <PawMark className="h-10 w-10 text-amber" />
      <h1 className="font-display text-3xl font-semibold md:text-4xl">
        This page landed on all fours somewhere else.
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-ink-dim md:text-base">
        The page you&apos;re looking for doesn&apos;t exist. Head back and try again.
      </p>
      <Link
        href="/"
        className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-[#1a1406] transition hover:brightness-110"
      >
        Back to home
      </Link>
    </div>
  );
}
