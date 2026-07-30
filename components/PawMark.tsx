type PawMarkProps = {
  className?: string;
};

/**
 * Minimal paw-print mark used as a section bullet / favicon motif.
 * Kept small and geometric so it reads as a brand mark, not a novelty icon.
 */
export default function PawMark({ className }: PawMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="15.2" rx="5.3" ry="4.4" />
      <ellipse cx="5.4" cy="9.4" rx="2.1" ry="2.6" />
      <ellipse cx="10.4" cy="6.4" rx="2.1" ry="2.7" />
      <ellipse cx="13.6" cy="6.4" rx="2.1" ry="2.7" />
      <ellipse cx="18.6" cy="9.4" rx="2.1" ry="2.6" />
    </svg>
  );
}
