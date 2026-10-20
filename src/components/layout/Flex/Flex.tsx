import "./Flex.css";

import { cn } from "../../../utils";
import type { FlexProps } from "./Flex.types";

export function Flex({
  children,
  direction = "row",
  align = "stretch",
  justify = "start",
  wrap = false,
  gap = "0",
  fullWidth = false,
  fullHeight = false,
  className,
  ...props
}: FlexProps) {
  return (
    <div
      className={cn(
        "vyntrax-flex",
        `vyntrax-flex-direction-${direction}`,
        `vyntrax-flex-align-${align}`,
        `vyntrax-flex-justify-${justify}`,
        `vyntrax-flex-gap-${gap}`,
        wrap && "vyntrax-flex-wrap",
        fullWidth && "vyntrax-flex-full-width",
        fullHeight && "vyntrax-flex-full-height",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}