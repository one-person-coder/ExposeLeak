import { ChevronDown, Menu } from "lucide-react";
import React, { ReactNode, useEffect, useRef } from "react";
import Button from "./Button";

interface DropdownProps {
  label: string;
  children: ReactNode;
  isOpen: boolean;
  toggleIsOpen: () => void;
}

interface DropDownContentProps {
  children: ReactNode;
  className?: string | undefined;
}

interface DropdownItemProps {
  children: ReactNode;
}

function Dropdown(props: DropdownProps) {
  const { label, children, isOpen, toggleIsOpen } = props;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent | KeyboardEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        toggleIsOpen();
      }
      if (e instanceof KeyboardEvent && e.key === "Escape") {
        toggleIsOpen();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleClickOutside);
    };
  }, [isOpen, toggleIsOpen]);

  return (
    <div ref={ref}>
      <div>
        <Button
          onClick={toggleIsOpen}
          className={`!rounded-full !bg-base hover:!bg-base/80 flex items-center w-44 justify-center gap-2 ${
            isOpen && "!bg-secondary hover:!bg-secondary"
          }`}
        >
          <div className="flex items-center justify-center gap-1">
            <Menu size={20} strokeWidth={2.5} />
            <span className="text-white font-heading text-lg">{label}</span>
          </div>
          <ChevronDown
            size={20}
            strokeWidth={3}
            className={`${isOpen ? "rotate-180" : "rotate-0"} duration-150`}
          />
        </Button>
      </div>
      {isOpen && <div className="w-fit">{children}</div>}
    </div>
  );
}

function DropdownContent(props: DropDownContentProps) {
  const { children, className } = props;
  return (
    <div className="absolute top-full w-full px-1 sm:px-2 left-0 max-w-2xl">
      <div
        className={`bg-surface p-3 overflow-y-scroll sm:p-4 md:p-5 lg:p-6 rounded-lg w-full mt-1 z-20 max-h-[320px]
          ${className || ""}`}
      >
        {children}
      </div>
    </div>
  );
}

function DropdownLabel({ children }: { children: ReactNode }) {
  return <h4 className="text-primary">{children}</h4>;
}

function DropdownItem(props: DropdownItemProps) {
  const { children } = props;
  return (
    <div>
      <Button className="!bg-base !rounded-lg px-4 py-2 text-[1rem] hover:!bg-secondary">
        {children}
      </Button>
    </div>
  );
}

export { Dropdown, DropdownItem, DropdownContent, DropdownLabel };
