import React from "react";
import { Button } from "../ui/button";
import { User } from "lucide-react";

function AuthButton() {
  return (
    <Button className="dark:bg-background bg-secondary hover:bg-secondary/70 text-black dark:text-white dark:hover:bg-background/60 h-12 w-46 text-[1rem]">
      <User className="!h-6 !w-6" />
      Login / Register
    </Button>
  );
}

export default AuthButton;
