"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CATEGORIES } from "@/data/data";
import { ChevronDown, Grid3X3 } from "lucide-react";
import { Badge } from "../ui/badge";

export default function CategoryButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-secondary/70 text-back hover:bg-secondary dark:bg-background dark:data-[state=open]:bg-primary dark:hover:bg-background/60 transition-colors font-medium border data-[state=open]:bg-[#0072c4] data-[state=open]:text-white group">
          <Grid3X3 className="w-5 h-5" strokeWidth={2} />
          <span className="sm:inline-flex hidden">Categories</span>
          <ChevronDown
            className="w-5 h-5 group-data-[state=open]:rotate-180 duration-150 sm:inline-flex "
            strokeWidth={3}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute left-[-50px] sm:left-[-90px] bg-card border-border w-80 mt-2 p-0">
        <DropdownMenuLabel className="dark:text-primary-light text-primary font-heading text-xl font-bold px-4 py-3">
          Categories
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-border" />

        <div className="py-2 overflow-y-scroll max-h-60">
          {CATEGORIES.map((category, idx: number) => (
            <button
              key={`${idx}-${category.id}`}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted dark:hover:bg-background/60 transition-colors group"
            >
              <span className="text-foreground font-roboto font-medium group-hover:text-primary dark:group-hover:text-white transition-colors">
                {category.label}
              </span>
              <Badge className="h-6 min-w-6 rounded-full px-1 bg-background text-black dark:text-white">
                {category.videoCount}
              </Badge>
            </button>
          ))}
        </div>
        <div className="p-3 bg-secondary/70 dark:bg-background/50 border-t border-border flex items-center justify-between">
          <span className="dark:text-primary-light text-primary font-heading text-sm font-bold">Total Categories</span>
          <span className="dark:text-[hsl(205,100%,72%)] text-primary font-heading text-sm font-bold">
            {CATEGORIES.reduce((sum, cat) => sum + cat.videoCount, 0)}
          </span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
