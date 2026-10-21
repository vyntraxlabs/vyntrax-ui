import "./AppLayout.css";

import { cn } from "../../../utils";

import { Navbar, Sidebar } from "../../navigation";

import type { AppLayoutProps } from "./AppLayout.types";

export function AppLayout({
  children,
  className,
  showNavbar = true,
  showSidebar = true,
  ...props
}: AppLayoutProps) {
  return (
    <div className="vyntrax-app-shell">
      {showNavbar && <Navbar />}

      <div className="vyntrax-app-content">
        {showSidebar && <Sidebar />}

        <main className={cn("vyntrax-app-layout", className)} {...props}>
          {children}
        </main>
      </div>
    </div>
  );
}
