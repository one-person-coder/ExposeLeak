import { Separator } from "@/components/ui/separator";

interface CustomSeparatorProps {
  children?: string;
}

function CustomSeparator({ children }: CustomSeparatorProps) {
  return (
    <Separator className="relative dark:bg-gray-600/50 mt-4 mb-0">
      <span className="absolute top-[50%] left-[50%] translate-[-50%] bg-background text-sm py-0 px-1 font-heading font-semibold text-muted-foreground">{children}</span>
    </Separator>
  );
}

export default CustomSeparator;
