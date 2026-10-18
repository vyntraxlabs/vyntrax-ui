import type { HTMLAttributes } from "react";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  direction?: "vertical" | "horizontal";

  gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10";

  align?: "start" | "center" | "end" | "stretch";

  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly";
}