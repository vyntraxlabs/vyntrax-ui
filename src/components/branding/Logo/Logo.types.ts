import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface LogoProps
  extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;

  text?: string;

  size?: "sm" | "md" | "lg";
}