import { useId } from "react";

import { Label } from "../Label";
import { cn } from "../../../utils";

import type { CheckboxProps } from "./Checkbox.types";

import "./Checkbox.css";

export function Checkbox({
  label,
  helperText,
  error,
  id,
  className,
  disabled = false,
  "aria-describedby": ariaDescribedBy,
  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const messageId = `${checkboxId}-message`;

  const describedBy = [
    ariaDescribedBy,
    error || helperText ? messageId : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cn(
        "vyntrax-checkbox-wrapper",
        disabled && "disabled"
      )}
    >
      <div className="vyntrax-checkbox-control">
        <input
          {...props}
          id={checkboxId}
          type="checkbox"
          disabled={disabled}
          className={cn("vyntrax-checkbox", className)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy || undefined}
        />

        {label && (
          <Label
            htmlFor={checkboxId}
            className="vyntrax-checkbox-label"
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
              ? "vyntrax-checkbox-error"
              : "vyntrax-checkbox-helper"
          }
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
}