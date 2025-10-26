import { VideoType } from "@/types/data";
import React from "react";
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: VideoType[];
}

function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {videos?.map((video, idx) => {
        return <VideoCard key={`${idx}-${video.id}`} video={video} />;
      })}
    </div>
  );
}

export default VideoGrid;
