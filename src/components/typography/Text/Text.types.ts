import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;

  size?: "sm" | "md" | "lg";
}