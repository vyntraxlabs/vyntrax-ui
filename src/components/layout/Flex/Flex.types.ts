import type { HTMLAttributes } from "react";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  direction?: "row" | "column";

  align?: "start" | "center" | "end" | "stretch";

  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly";

  wrap?: boolean;

  gap?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10";

  fullWidth?: boolean;

  fullHeight?: boolean;
}