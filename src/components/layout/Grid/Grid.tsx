import "./Grid.css";

import { cn } from "../../../utils";

import type { GridProps } from "./Grid.types";

export function Grid({
  children,
  columns = 4,
  gap = "6",
  className,
  style,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "vyntrax-grid",
        `vyntrax-grid-gap-${gap}`,
        className
      )}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}