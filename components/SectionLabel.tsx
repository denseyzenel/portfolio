import PawMark from "./PawMark";

type SectionLabelProps = {
  number: string;
  children: React.ReactNode;
};

export default function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <div className="section-label">
      <PawMark className="h-3.5 w-3.5" />
      <span>
        {number} {children}
      </span>
    </div>
  );
}
