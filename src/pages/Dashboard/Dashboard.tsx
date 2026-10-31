import "./Dashboard.css";

import { AppLayout, Container } from "../../components";
import { AssistantCard } from "./components/AssistantCard";

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

          <AssistantCard />
        </div>
      </Container>
    </AppLayout>
  );
}
