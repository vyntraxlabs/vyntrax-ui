import "./Logo.css";

import LogoImage from "./logo.png";
import Logo3DImage from "./logo-3d.png";

import { cn } from "../../../utils";
import type { LogoProps } from "./Logo.types";

export function Logo({
  icon,
  text = "VYNTRAX",
  showText = false,
  variant = "default",
  size = "md",
  className,
  ...props
}: LogoProps) {
  const logo = variant === "3d" ? Logo3DImage : LogoImage;

  return (
    <div
      className={cn("vyntrax-logo", `vyntrax-logo-${size}`, className)}
      {...props}
    >
      {icon && <span className="vyntrax-logo-icon">{icon}</span>}

      <img src={logo} alt="VYNTRAX" className="vyntrax-logo-image" />

      {showText && <span className="vyntrax-logo-text">{text}</span>}
    </div>
  );
}
