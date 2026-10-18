import "./Stack.css";

import { cn } from "../../../utils";
import type { StackProps } from "./Stack.types";

export function Stack({
  children,
  direction = "vertical",
  gap = "4",
  align = "stretch",
  justify = "start",
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        "vyntrax-stack",
        `vyntrax-stack-${direction}`,
        `vyntrax-stack-gap-${gap}`,
        `vyntrax-stack-align-${align}`,
        `vyntrax-stack-justify-${justify}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}