import "./AppLayout.css";

import { cn } from "../../../utils";

import { Navbar } from "../../navigation";

import type { AppLayoutProps } from "./AppLayout.types";

export function AppLayout({
  children,
  className,
  showNavbar = true,
  ...props
}: AppLayoutProps) {
  return (
    <div className="vyntrax-app-shell">
      {showNavbar && <Navbar />}

      <main className={cn("vyntrax-app-layout", className)} {...props}>
        {children}
      </main>
    </div>
  );
}
