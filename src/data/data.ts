import { CategoryType, MenuLinkType, VideoType } from "@/types/data";
import { HouseIcon } from "lucide-react";

export const MENU_LINK: MenuLinkType[] = [
  {
    id: "1",
    url: "/",
    svg: HouseIcon,
  },
  {
    id: "2",
    label: "Latest",
    url: "/categories/latest-videos",
  },
  {
    id: "3",
    label: "Trending",
    url: "/categories/trending-videos",
  },
  {
    id: "4",
    label: "Most Viewed",
    url: "/categories/most-viewed",
  },
  {
    id: "5",
    label: "Categories",
    url: "/categories",
  },
];

export const CATEGORIES: CategoryType[] = [
  { id: "1", label: "Web Development", videoCount: 24, url: "/categories/development" },
  { id: "2", label: "Mobile Apps", videoCount: 18, url: "/categories/apps" },
  { id: "3", label: "UI/UX Design", videoCount: 15, url: "/categories/design" },
  { id: "4", label: "Backend Systems", videoCount: 22, url: "/categories/system" },
  { id: "5", label: "DevOps & Cloud", videoCount: 12, url: "/categories/cloud" },
  { id: "6", label: "Web Development", videoCount: 24, url: "/categories/development" },
  { id: "7", label: "Mobile Apps", videoCount: 18, url: "/categories/mobile" },
  { id: "8", label: "UI/UX Design", videoCount: 15, url: "/categories/ux" },
  { id: "9", label: "Backend Systems", videoCount: 22, url: "/categories/backend" },
  { id: "10", label: "DevOps & Cloud", videoCount: 12, url: "/categories/deveops" },
];

export const VIDEOS: VideoType[] = [
  {
    id: "1",
    label: "Watch and Download best videos on exposeleak Watch and Download best videos on exposeleak",
    url: "/think-what-can-you-do-at-this-point-brother??",
    thumbnail:
      "https://i.ytimg.com/vi/aEj6k-gi9-s/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDpUrBoFqq9F75vKdYvDn3ImD2kKw",
    quality: "1080p",
    category: {
      id: "1",
      label: "blowjob",
      url: "/categories/blowjob",
    },
    likes: 500,
    views: 4000,
    duration: "2:58",
    uploadedAt: "1 day ago",
    uploadedBy: {
      fullname: "Anonymous",
      username: "anonymous",
      url: "/@anonymous",
    },
  },
  {
    id: "2",
    label: "Go to youtube",
    url: "/think-what-can-you-do-at-this-point-brother??",
    thumbnail:
      "https://i.ytimg.com/vi/HhwCsJQh7j4/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDM1ejqkkGFum0LrOlKdgz-k1pong",
    quality: "1080p",
    category: {
      id: "1",
      label: "blowjob",
      url: "/categories/blowjob",
    },
    likes: 500,
    views: 44030,
    duration: "2:58",
    uploadedAt: "1 day ago",
    uploadedBy: {
      fullname: "Anonymous",
      username: "anonymous",
      url: "/@anonymous",
    },
  },
];
