import type {
  ButtonHTMLAttributes,
} from "react";

import type { LucideIcon } from "lucide-react";

export interface ActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;

  icon: LucideIcon;
}