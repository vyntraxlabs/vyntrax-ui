import "./Logo.css";

import { cn } from "../../../utils";
import type { LogoProps } from "./Logo.types";

export function Logo({
  icon,
  text = "VYNTRAX",
  size = "md",
  className,
  ...props
}: LogoProps) {
  return (
    <div
      className={cn(
        "vyntrax-logo",
        `vyntrax-logo-${size}`,
        className
      )}
      {...props}
    >
      {icon && (
        <span className="vyntrax-logo-icon">
          {icon}
        </span>
      )}

      <span className="vyntrax-logo-text">
        {text}
      </span>
    </div>
  );
}