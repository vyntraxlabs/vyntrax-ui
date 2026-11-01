import { useId } from "react";

import { cn } from "../../../utils";

import type { TextareaProps } from "./Textarea.types";

import "./Textarea.css";

export function Textarea({
  label,
  helperText,
  error,
  fullWidth = false,
  id,
  className,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const messageId = `${textareaId}-message`;

  return (
    <div
      className={cn(
        "vyntrax-textarea-wrapper",
        fullWidth && "full-width"
      )}
    >
      {label && (
        <label
          htmlFor={textareaId}
          className="vyntrax-textarea-label"
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        className={cn("vyntrax-textarea", className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error || helperText ? messageId : undefined
        }
        {...props}
      />

      {(error || helperText) && (
        <span
          id={messageId}
          className={
            error
              ? "vyntrax-textarea-error"
              : "vyntrax-textarea-helper"
          }
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
}