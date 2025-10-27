import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label: string;
  className?: string;
}

function SectionTitle({ label, className = "" }: SectionTitleProps) {
  return (
    <div className={cn("flex gap-2 mb-6", className)}>
      <div className="w-1.5 bg-primary rounded-sm"></div>
      <h2 className="font-semibold">{label}</h2>
    </div>
  );
}

export default SectionTitle;
