import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export interface SidebarProps
  extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}