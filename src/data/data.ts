import { Category, MenuLinkType } from "@/types/data";
import { HouseIcon } from "lucide-react";

export const MENU_LINKs: MenuLinkType[] = [
  {
    id: "1",
    href: "/",
    svg: HouseIcon,
  },
  {
    id: "2",
    label: "Latest Videos",
    href: "/categories/latest-videos",
  },
  {
    id: "3",
    label: "Trending Videos",
    href: "/categories/trending-videos",
  },
  {
    id: "4",
    label: "Most Viewed",
    href: "/categories/most-viewed",
  },
  {
    id: "5",
    label: "Categories",
    href: "/categories",
  },
];

export const CATEGORIES: Category[] = [
  { id: "1", label: "Web Development", videoCount: 24, href: "/categories/development" },
  { id: "2", label: "Mobile Apps", videoCount: 18, href: "/categories/apps" },
  { id: "3", label: "UI/UX Design", videoCount: 15, href: "/categories/design" },
  { id: "4", label: "Backend Systems", videoCount: 22, href: "/categories/system" },
  { id: "5", label: "DevOps & Cloud", videoCount: 12, href: "/categories/cloud" },
  { id: "6", label: "Web Development", videoCount: 24, href: "/categories/development" },
  { id: "7", label: "Mobile Apps", videoCount: 18, href: "/categories/mobile" },
  { id: "8", label: "UI/UX Design", videoCount: 15, href: "/categories/ux" },
  { id: "9", label: "Backend Systems", videoCount: 22, href: "/categories/backend" },
  { id: "10", label: "DevOps & Cloud", videoCount: 12, href: "/categories/deveops" },
];
