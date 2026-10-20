import "./Button.css";

import { cn } from "../../../utils";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  className,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "vyntrax-button",
        fullWidth && "vyntrax-button-full-width",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}