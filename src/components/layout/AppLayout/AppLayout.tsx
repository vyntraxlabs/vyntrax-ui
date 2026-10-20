import "./AppLayout.css";

import { cn } from "../../../utils";
import type { AppLayoutProps } from "./AppLayout.types";

export function AppLayout({
  children,
  className,
  ...props
}: AppLayoutProps) {
  return (
    <main
      className={cn("vyntrax-app-layout", className)}
      {...props}
    >
      {children}
    </main>
  );
}