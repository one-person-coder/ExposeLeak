import { ReactNode } from "react";

declare module "*.css";
interface ChildrenPropType {
  children?: ReactNode;
}

export type AuthType = "login" | "register";
