import { LucideIcon } from "lucide-react";

export interface MenuLinkType {
  id: string;
  label?: string;
  svg?: LucideIcon;
  href: string;
}

export interface CategoryType {
  id: string;
  label?: string;
  href: string;
  videoCount: number;
}
