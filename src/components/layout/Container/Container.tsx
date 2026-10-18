import "./Container.css";

import { cn } from "../../../utils";
import type { ContainerProps } from "./Container.types";

export function Container({
  children,
  fluid = false,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "vyntrax-container",
        fluid && "vyntrax-container-fluid",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}