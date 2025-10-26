"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { User, X } from "lucide-react";
import CustomSeparator from "../common/Separator";
import GoogleLoginButton from "./SocialLoginButtons";
import AuthForm from "./AuthForm";
import { AuthType } from "@/types/global";
import { Dispatch, SetStateAction } from "react";

interface AuthDialogProps {
  open?: boolean;
  mode: AuthType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function AuthDialogHeader() {
  return (
    <>
      <div className="text-white bg-primary flex justify-center p-2 rounded-full">
        <User size={27} />
      </div>
      <div>
        <DialogTitle className="text-xl font-heading text-start">Let&apos;s Get Started</DialogTitle>
        <DialogDescription className="text-start">Login or create an account to continue.</DialogDescription>
      </div>
    </>
  );
}

function AuthDialog({ open = false, setOpen, mode }: AuthDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] bg-card border-none app-padding">
        <DialogClose asChild>
          <button className="absolute right-3.5 top-3.5 bg-destructive hover:bg-destructive/90 z-20 rounded-full p-1">
            <X className="h-6 w-6 text-white" strokeWidth={3} />
          </button>
        </DialogClose>
        <DialogHeader className="flex flex-row gap-2.5 items-center">
          <AuthDialogHeader />
        </DialogHeader>
        <CustomSeparator />
        <div className="grid gap-4">
          <AuthForm mode={mode} />
        </div>
        <CustomSeparator>Or Continue With</CustomSeparator>
        <DialogFooter className="sm:!justify-center items-center pt-3">
          <GoogleLoginButton />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;
