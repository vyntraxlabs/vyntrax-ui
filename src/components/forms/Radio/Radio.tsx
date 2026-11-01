import { useId } from "react";

import { Label } from "../Label";
import { cn } from "../../../utils";

import type { RadioProps } from "./Radio.types";

import "./Radio.css";

export function Radio({
  label,
  helperText,
  error,
  id,
  className,
  disabled = false,
  "aria-describedby": ariaDescribedBy,
  ...props
}: RadioProps) {
  const generatedId = useId();
  const radioId = id ?? generatedId;
  const messageId = `${radioId}-message`;

  const describedBy = [
    ariaDescribedBy,
    error || helperText ? messageId : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cn(
        "vyntrax-radio-wrapper",
        disabled && "disabled"
      )}
    >
      <div className="vyntrax-radio-control">
        <input
          {...props}
          id={radioId}
          type="radio"
          disabled={disabled}
          className={cn("vyntrax-radio", className)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
        />

        {label && (
          <Label
            htmlFor={radioId}
            className="vyntrax-radio-label"
          >
            {label}
          </Label>
        )}
      </div>

      {(error || helperText) && (
        <span
          id={messageId}
          className={
            error
              ? "vyntrax-radio-error"
              : "vyntrax-radio-helper"
          }
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
}