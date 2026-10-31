import "./Dashboard.css";

import { AppLayout, Container } from "../../components";

import {
  DashboardHeader,
  DashboardStats,
  QuickActions,
  RecentEvents,
} from "./components";

export function Dashboard() {
  return (
    <AppLayout>
      <Container>
        <DashboardHeader />

        <DashboardStats />

        <div className="vyntrax-dashboard-grid">
          <RecentEvents />

          <QuickActions />
        </div>
      </Container>
    </AppLayout>
  );
}
