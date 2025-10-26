import VideoCard from "@/components/card/VideoCard";
import { VIDEOS } from "@/data/data";
import React from "react";

function HomePage() {
  return (
    <div className="app-container app-padding app-space">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        <VideoCard video={VIDEOS[0]} />
        <VideoCard video={VIDEOS[1]} />
        <VideoCard video={VIDEOS[0]} />
        <VideoCard video={VIDEOS[0]} />
        <VideoCard video={VIDEOS[0]} />
      </div>
    </div>
  );
}

export default HomePage;
