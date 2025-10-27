"use client";
import { CategoryType } from "@/types/data";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { Eye, Video } from "lucide-react";
import Link from "next/link";
import PreviewImage from "./PreviewImage";
import IconBadge from "../common/IconBadge";

type CategoryCardProps = {
  category: CategoryType;
};

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card className="rounded-sm pt-0 overflow-hidden gap-2 pb-3 border-none justify-between">
      <CardHeader className="relative p-0 gap-0 group">
        <Link href={category.url} className="relative aspect-video overflow-hidden bg-border dark:bg-sidebar">
          <PreviewImage
            src={category.thumbnail || ""}
            label={category.label}
            width={640}
            height={360}
            className="rounded-t-lg overflow-hidden"
          />
        </Link>
      </CardHeader>
      <CardContent className="px-2 mt-1">
        <CardTitle>
          <Link
            className="font-heading text-link sm:leading-4.5 line-clamp-2 w-full"
            title={category.label}
            href={category.url}
          >
            {category.label}
          </Link>
        </CardTitle>
      </CardContent>
      <CardFooter className="px-2 ">
        <div className="flex gap-1 justify-between items-center w-full">
          <IconBadge Icon={Video} label={`${category.videoCount} videos` || ""} />
          <IconBadge Icon={Eye} label={`${(category.views || 0) / 1000}K`} />
        </div>
      </CardFooter>
    </Card>
  );
}

export default CategoryCard;
