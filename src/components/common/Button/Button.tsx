import "./Button.css";
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`vyntrax-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}