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
    <div className={cn("vyntrax-card", className)} {...props}>
      {(title || subtitle) && (
        <header className="vyntrax-card-header">
          {title && <h2 className="vyntrax-card-title">{title}</h2>}

          {subtitle && <p className="vyntrax-card-subtitle">{subtitle}</p>}
        </header>
      )}

      <div className="vyntrax-card-content">{children}</div>
    </div>
  );
}
