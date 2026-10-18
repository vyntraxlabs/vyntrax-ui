import { createElement } from "react";
import "./Heading.css";
import type { HeadingProps } from "./Heading.types";

export function Heading({
  level = 1,
  children,
  className = "",
  ...props
}: HeadingProps) {
  return createElement(
    `h${level}`,
    {
      className: `vyntrax-heading vyntrax-heading-${level} ${className}`.trim(),
      ...props,
    },
    children
  );
}