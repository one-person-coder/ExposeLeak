"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CATEGORIES } from "@/data/data";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { useState } from "react";

export default function CategoryButton() {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <>
      <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-secondary/70 text-back hover:bg-secondary dark:bg-background dark:data-[state=open]:bg-primary dark:hover:bg-background/60 transition-colors font-medium border data-[state=open]:bg-[#0072c4] data-[state=open]:text-white group focus-visible:outline-0">
            <LayoutGrid className="w-5 h-5" strokeWidth={2} />
            <span className="sm:inline-flex hidden">Categories</span>
            <ChevronDown
              className="w-5 h-5 group-data-[state=open]:rotate-180 duration-150 sm:inline-flex "
              strokeWidth={3}
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute left-[-50px] sm:left-[-120px] bg-card border-border w-86 mt-0.5 p-0 rounded-none">
          <DropdownMenuLabel className="dark:text-primary-light text-primary font-heading text-xl font-semibold px-4 py-3 sticky top-0 border-b bg-card flex gap-2 items-center">
            <LayoutGrid className="w-5.5 h-5.5" strokeWidth={2.5} />
            <h3>Categories</h3>
          </DropdownMenuLabel>

          <div className="py-2 max-h-full">
            {CATEGORIES.map((category, idx: number) => (
              <Link
                onClick={toggleOpen}
                href={category.url}
                key={`${idx}-${category.id}`}
                className="w-full px-4 pl-6 py-3 flex items-center justify-between hover:bg-muted dark:hover:bg-background/60 transition-colors group"
              >
                <span className="text-foreground font-roboto font-medium group-hover:text-primary dark:group-hover:text-white transition-colors">
                  {category.label}
                </span>
                <Badge className="h-6 min-w-6 rounded-full px-1 bg-background text-black dark:text-white">
                  {category.videoCount}
                </Badge>
              </Link>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
