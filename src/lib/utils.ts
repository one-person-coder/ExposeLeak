import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Converts a string into a URL-friendly slug
export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Builds a URL from optional base and name, returns "/" if name is empty or root
export function urlBuilder(base?: string, name?: string) {
  if (!name || name === "/") return "/"; // fallback for empty or root
  const slug = slugify(name);
  return base ? `/${base}/${slug}` : `/${slug}`;
}
