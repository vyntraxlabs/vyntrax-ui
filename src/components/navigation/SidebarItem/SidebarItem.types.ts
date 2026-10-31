import type { AnchorHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

export interface SidebarItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: LucideIcon;
  label: string;
  path: string;
}