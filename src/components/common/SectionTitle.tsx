interface SectionTitleProps {
  label: string;
}

function SectionTitle({ label }: SectionTitleProps) {
  return (
    <div className="mb-6 flex gap-2">
      <div className="w-1.5 bg-primary rounded-sm"></div>
      <h2 className="font-semibold">{label}</h2>
    </div>
  );
}

export default SectionTitle;
