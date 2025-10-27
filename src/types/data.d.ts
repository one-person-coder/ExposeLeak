import { LucideIcon } from "lucide-react";

export interface MenuLinkType {
  id: string;
  label?: string;
  svg?: LucideIcon;
  url: string;
}

export interface CategoryType {
  id: string;
  label?: string;
  url: string;
  videoCount?: number;
}

export interface UserType {
  fullname: string;
  email?: string;
  username: string;
  url: string;
  videos?: VideoType[];
}

export interface VideoType {
  id: string;
  label: string;
  url: string;
  previewUrl?: string;
  thumbnail: string;
  quality: string;
  category: CategoryType;
  likes: number;
  views: number;
  duration: string;
  uploadedAt: string;
  uploadedBy: UserType;
}
