import "./Button.css";

import { cn } from "../../../utils";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  className,
  onClick,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn("vyntrax-button", className)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}