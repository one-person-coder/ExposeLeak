"use client";
import { useState } from "react";
import Image from "next/image";

interface PreviewImageProps {
  src: string;
  label?: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
}

function PreviewImage(props: PreviewImageProps) {
  const {
    src,
    label = "",
    width = 640,
    height = 360,
    className = "",
    sizes = "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw",
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => setIsLoading(false);
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Background blurred / scaled image */}
      <Image
        src={src}
        alt=""
        fill
        className="absolute inset-0 object-cover blur-xs scale-105"
        aria-hidden="true"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      />
      {/* Main image */}
      <Image
        src={src}
        alt={label}
        width={width}
        height={height}
        className="relative z-10 object-contain object-center w-full h-full transition duration-150"
        sizes={sizes}
        onLoad={handleImageLoad}
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      />
    </div>
  );
}
export default PreviewImage;
