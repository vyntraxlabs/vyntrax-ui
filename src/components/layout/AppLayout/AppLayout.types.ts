import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface AppLayoutProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  showNavbar?: boolean;
  showSidebar?: boolean;
}