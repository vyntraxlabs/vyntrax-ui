import "./Card.css";
import type { CardProps } from "./Card.types";

export function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`vyntrax-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}