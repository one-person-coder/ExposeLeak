import React from "react";

interface Separator {
  className?: string | undefined;
  label?: string | undefined;
}

function Separator({ className, label }: Separator) {
  return (
    <div className={`relative bg-base h-0.5 w-full ${className || ""}`}>
      <div className="text-sm font-heading bg-base px-2 rounded-sm w-fit absolute top-[50%] left-[50%] -translate-[50%]">
        {label}
      </div>
    </div>
  );
}

export default Separator;
