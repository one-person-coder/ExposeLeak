import { CategoryType, VideoType } from "@/types/data";
import React, { Fragment } from "react";
import VideoCard from "./VideoCard";
import CategoryCard from "./CategoryCard";

interface ContentGridProps {
  items: VideoType[] | CategoryType[];
  itemType: "video" | "category";
}

function ContentGrid({ items, itemType = "video" }: ContentGridProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {items?.map((item, idx) => (
        <Fragment key={`${idx}-${item.id}`}>
          {itemType === "video" && <VideoCard video={item as VideoType} />}
          {itemType === "category" && <CategoryCard category={item} />}
        </Fragment>
      ))}
    </div>
  );
}

export default ContentGrid;
