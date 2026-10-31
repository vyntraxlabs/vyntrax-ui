import type { LucideIcon } from "lucide-react";

export interface DashboardQuickAction {
  id: number;
  label: string;
  icon: LucideIcon;
}

export interface DashboardData {
  quickActions: DashboardQuickAction[];
}

export interface DashboardEvent {
  id: number;

  title: string;

  time: string;

  status: "success" | "warning" | "error" | "info";
}