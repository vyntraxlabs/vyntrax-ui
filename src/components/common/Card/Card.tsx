import "./Card.css";
import "./Card.css";

import { cn } from "../../../utils";
import type { CardProps } from "./Card.types";

export function Card({
  title,
  subtitle,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn("vyntrax-card", className)}
      {...props}
    >
      {title && (
        <h2 className="vyntrax-card-title">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="vyntrax-card-subtitle">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}