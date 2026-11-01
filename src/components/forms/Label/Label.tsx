import { cn } from "../../../utils";

import type { LabelProps } from "./Label.types";

import "./Label.css";

export function Label({
  children,
  required = false,
  className,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn("vyntrax-label", className)}
      {...props}
    >
      {children}
      {required && (
        <span className="vyntrax-label-required" aria-hidden="true">
          {" "}*
        </span>
      )}
    </label>
  );
}