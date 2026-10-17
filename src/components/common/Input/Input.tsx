import { useId } from "react";

import "./Input.css";
import type { InputProps } from "./Input.types";

export function Input({
  label,
  helperText,
  error,
  fullWidth = false,
  id,
  className = "",
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div
      className={`vyntrax-input-wrapper ${
        fullWidth ? "full-width" : ""
      }`}
    >
      {label && (
        <label
          htmlFor={inputId}
          className="vyntrax-input-label"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={`vyntrax-input ${className}`}
        {...props}
      />

      {error ? (
        <span className="vyntrax-input-error">
          {error}
        </span>
      ) : (
        helperText && (
          <span className="vyntrax-input-helper">
            {helperText}
          </span>
        )
      )}
    </div>
  );
}