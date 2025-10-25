import React, { ReactNode, useState } from "react";
import Button from "../ui/Button";
import { CloseDialog, Dialog } from "../ui/Dialog";

interface DialogTriggerWrapperProps {
  icon?: ReactNode;
  label: string;
  children?: ReactNode;
  className?: string;
}

function DialogTriggerWrapper(props: DialogTriggerWrapperProps) {
  const { icon, label, children, className } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDialog = (): void => setIsOpen(!isOpen);

  return (
    <div>
      <Button
        onClick={toggleDialog}
        className={`!rounded-lg px-4 py-2 flex gap-2 !text-white items-center 
          ${className || ""}`}
      >
        {icon}
        {label}
      </Button>
      <Dialog
        isOpen={isOpen}
        toggleDialog={toggleDialog}
        className="max-w-lg min-w-full sm:min-w-sm"
      >
        <CloseDialog toggleDialog={toggleDialog} />
        {children}
      </Dialog>
    </div>
  );
}

export default DialogTriggerWrapper;
