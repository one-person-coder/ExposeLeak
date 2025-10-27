"use client";
import { useState } from "react";

interface PreviewPlayerProps {
  src: string;
  className?: string;
}

function PreviewPlayer({ src, className }: PreviewPlayerProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`absolute inset-0 h-full w-full ${className ?? ""} z-10`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && src && (
        <video
          src={src}
          className="absolute inset-0 h-full w-full object-contain"
          preload="metadata"
          loop
          muted
          playsInline
          autoPlay
        />
      )}
    </div>
  );
}

export default PreviewPlayer;
