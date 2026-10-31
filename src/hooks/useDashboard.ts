import { quickActions } from "../pages/Dashboard/data/quickActions";

import type { DashboardData } from "../types";

export function useDashboard(): DashboardData {
  return {
    quickActions,
  };
}