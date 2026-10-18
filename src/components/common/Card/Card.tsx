import "./Card.css";

import { cn } from "../../../utils";
import type { CardProps } from "./Card.types";

export function Card({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn("vyntrax-card", className)}
      {...props}
    >
      {children}
    </div>
  );
}