import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export interface GridProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  columns?: number;

  gap?: "2" | "4" | "6" | "8";

  style?: CSSProperties;
}