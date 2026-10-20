import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";

export interface IconProps
  extends HTMLAttributes<HTMLSpanElement> {
  icon: LucideIcon;

  size?: number;

  strokeWidth?: number;
}