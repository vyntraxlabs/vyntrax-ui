import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface AppLayoutProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}