import "./DashboardHeader.css";

import { PageHeader } from "../../../../components";
import { useAuth } from "../../../../hooks";

export function DashboardHeader() {
  const { session } = useAuth();

  const email = session?.user.email ?? "";

  const firstName =
    email.split("@")[0].charAt(0).toUpperCase() +
    email.split("@")[0].slice(1);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="vyntrax-dashboard-header">
      <PageHeader
        title={`Welcome, ${firstName}`}
        subtitle="VYNTRAX Home AI Dashboard"
      />

      <p className="vyntrax-dashboard-date">
        {today}
      </p>
    </div>
  );
}