"use client";
import { VideoType } from "@/types/data";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { CircleUser, Eye, LayoutGrid, LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import PreviewImage from "./PreviewImage";
import PreviewPlayer from "../player/PreviewPlayer";

type VideoCardProps = {
  video: VideoType;
};

type IconBadgeProps = {
  Icon?: LucideIcon;
  label: string | number;
  url?: string;
  className?: string;
};

export function IconBadge({ Icon, label = "unknown", url = "", className = "" }: IconBadgeProps) {
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

function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="rounded-sm pt-0 overflow-hidden gap-2 pb-3 border-none justify-between">
      <CardHeader className="relative p-0 gap-0 group">
        <Link href={video.url} className="relative aspect-video overflow-hidden bg-border dark:bg-sidebar">
          <PreviewImage
            src={video.thumbnail}
            label={video.label}
            width={640}
            height={360}
            className="rounded-lg overflow-hidden"
          />
          <PreviewPlayer src={video.previewUrl || ""} />
        </Link>
        <div className="z-10 absolute bottom-2 left-2 group-hover:opacity-0 duration-300">
          <IconBadge Icon={Eye} label={`${video.views / 1000}K`} className="dark:text-white text-black" />
        </div>
        <div className="z-10 absolute bottom-2 right-2 group-hover:opacity-0 duration-300">
          <IconBadge label={video.duration} className="dark:text-white text-black" />
        </div>
        <div className="z-10 absolute top-2 right-2 group-hover:opacity-0 duration-300">
          <IconBadge label={video.quality} className="text-white bg-destructive font-heading font-semibold" />
        </div>
      </CardHeader>
      <CardContent className="px-2 mt-1">
        <CardTitle>
          <Link
            className="font-heading text-link sm:leading-4.5 line-clamp-2 w-full"
            title={video.label}
            href={video.url}
          >
            {video.label}
          </Link>
        </CardTitle>
      </CardContent>
      <CardFooter className="px-2">
        <div className="flex gap-2 justify-between items-center w-full">
          <IconBadge Icon={LayoutGrid} label={video.category.label || ""} url={video.category.url} />
          <IconBadge Icon={CircleUser} label={video.uploadedBy.username} url={video.uploadedBy.url} />
        </div>
      </CardFooter>
    </Card>
  );
}

export default VideoCard;
