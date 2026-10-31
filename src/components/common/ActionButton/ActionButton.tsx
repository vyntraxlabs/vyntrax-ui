import "./ActionButton.css";

import { Button, Icon } from "..";

import type { ActionButtonProps } from "./ActionButton.types.ts";

export function ActionButton({
  label,
  icon,
  className,
  ...props
}: ActionButtonProps) {
  return (
    <Button
      className={`vyntrax-action-button ${className ?? ""}`}
      {...props}
    >
      <Icon icon={icon} />

      <span>{label}</span>
    </Button>
  );
}