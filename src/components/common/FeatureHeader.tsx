"use client";
import React, { ReactNode } from "react";

interface FeatureHeaderProps {
  svg: ReactNode;
  heading: string;
  subHeading: string;
  className?: string;
}

function FeatureHeader(props: FeatureHeaderProps) {
  const { svg, heading, subHeading, className } = props;
  return (
    <div className="sm-box flex items-center gap-2">
      <div
        className={`rounded-full w-fit p-2 h-fit flex gap-2 !text-white bg-danger
          ${className || ""}`}
      >
        {svg}
      </div>
      <div>
        <h3>{heading}</h3>
        <p className="text-sm">{subHeading}</p>
      </div>
    </div>
  );
}

export default FeatureHeader;
