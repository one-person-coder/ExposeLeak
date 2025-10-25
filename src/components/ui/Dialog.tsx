import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";

interface DialogProps {
  isOpen: boolean;
  className?: string;
  toggleDialog: () => void;
  children?: ReactNode;
}

function Dialog(props: DialogProps) {
  const { isOpen, toggleDialog, className, children } = props;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggleDialog();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleDialog]);

  return (
    <>
      {isOpen && (
        <>
          <button
            onClick={toggleDialog}
            className="fixed z-30 inset-0 h-full w-full bg-surface/20 backdrop-blur-sm"
          ></button>
          <div
            className={`px-4 fixed z-50 inset-0 left-[50%] top-[50%] h-fit -translate-[50%] ${className}`}
          >
            <div className="relative box-rounded-md bg-surface/80">
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
}

function CloseDialog({ toggleDialog }: { toggleDialog: () => void }) {
  return (
    <button
      onClick={toggleDialog}
      className="cursor-pointer absolute right-3 top-3 rounded-full p-1 bg-danger hover:bg-danger-hover"
    >
      <X strokeWidth={3} size={26} />
    </button>
  );
}

export { Dialog, CloseDialog };
