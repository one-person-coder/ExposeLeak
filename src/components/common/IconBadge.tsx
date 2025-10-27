import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface IconBadgeProps {
  Icon?: LucideIcon;
  label: string | number;
  url?: string;
  className?: string;
}

function IconBadge({ Icon, label = "unknown", url = "", className = "" }: IconBadgeProps) {
  const Wrapper: React.ElementType = url ? Link : "div";

  return (
    <Wrapper
      {...(url ? { href: url } : {})}
      className={cn("flex mt-0.5 items-center gap-1 bg-background px-2 py-0.5 rounded-full text-link", className)}
    >
      {Icon && (
        <span className="w-3.5 h-3.5">
          <Icon className="h-full w-full" strokeWidth={2.5} />
        </span>
      )}
      <span className="text-sm">{label}</span>
    </Wrapper>
  );
}

export default IconBadge;
