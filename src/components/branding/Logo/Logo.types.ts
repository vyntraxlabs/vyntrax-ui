import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface LogoProps
  extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;

  text?: string;

  showText?: boolean;

  variant?: "default" | "3d";

  size?: "sm" | "md" | "lg";
}