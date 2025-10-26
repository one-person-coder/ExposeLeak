"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { User } from "lucide-react";
import AuthDialog from "../auth/AuthDialog";
import { AuthType, ChildrenPropType } from "@/global";

type CustomButtonProps<T> = ChildrenPropType & T;

function CustomButton<T>({ children, ...props }: CustomButtonProps<T>) {
  return (
    <Button
      className="dark:bg-background hover:bg-transparent dark:hover:bg-background/60 h-fit rounded-none p-0 sm:text-[1rem] hover:text-primary dark:hover:text-primary-light hover:border-b-primary border-b border-b-transparent !bg-transparent transition-none text-foreground sm:inline hidden"
      {...props}
    >
      {children}
    </Button>
  );
}

function AuthButton() {
  const [authType, setAuthType] = useState<AuthType>("login");
  const [open, setOpen] = useState<boolean>(false);
  const setLoginAuth = () => (setAuthType("login"), setOpen(true));
  const setRegisterAuth = () => (setAuthType("register"), setOpen(true));

  return (
    <div className="flex gap-1.5 items-center">
      <AuthDialog mode={authType} open={open} setOpen={setOpen} />
      <div>
        <Button
          className="p-5.5 rounded-full bg-secondary/40 dark:bg-background border border-primary/20 text-primary dark:text-primary-light hover:bg-secondary/60 transition-all duration-200 dark:hover:bg-background/70"
          size="icon"
          onClick={setLoginAuth}
        >
          <User className="!h-6.5 !w-6.5" />
        </Button>
      </div>
      <div className="sm:w-34">
        <p className="sm:block hidden text-sm font-roboto text-muted-foreground leading-4">Account</p>
        <div className="space-x-1">
          <CustomButton onClick={setLoginAuth}>Login</CustomButton>
          <span className="sm:inline hidden">/</span>
          <CustomButton onClick={setRegisterAuth}>Register</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default AuthButton;
