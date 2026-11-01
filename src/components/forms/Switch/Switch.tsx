import { useId } from "react";

import { Label } from "../Label";
import { cn } from "../../../utils";

import type { SwitchProps } from "./Switch.types";

import "./Switch.css";

export function Switch({
  id,
  label,
  helperText,
  error,
  className,
  disabled = false,
  ...props
}: SwitchProps) {
  const generatedId = useId();
  const switchId = id ?? generatedId;

  return (
    <div className="vyntrax-switch-wrapper">
      <label className="vyntrax-switch-container">
        <input
          id={switchId}
          type="checkbox"
          className={cn("vyntrax-switch-input", className)}
          disabled={disabled}
          {...props}
        />

        <span className="vyntrax-switch-slider" />

        {label && (
          <Label htmlFor={switchId}>
            {label}
          </Label>
        )}
      </label>

      {helperText && !error && (
        <span className="vyntrax-switch-helper">
          {helperText}
        </span>
      )}

      {error && (
        <span className="vyntrax-switch-error">
          {error}
        </span>
      )}
    </div>
  );
}