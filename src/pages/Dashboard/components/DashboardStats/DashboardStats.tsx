import "./DashboardStats.css";

import { useEffect, useState } from "react";

import { DashboardService } from "../../../../services";

import { Grid } from "../../../../components";

import { dashboardStats } from "../../data/dashboardStats";

import { StatCard } from "../../widgets";

export function DashboardStats() {
  const [stats, setStats] = useState({
    devices: 0,
    cameras: 0,
    automations: 0,
  });

  useEffect(() => {
    async function loadStats() {
      const data = await DashboardService.getStats();

      setStats(data);
    }

    loadStats();
  }, []);
  return (
    <div className="vyntrax-dashboard-stats">
      <Grid columns={4} gap="6">
        {dashboardStats.map((stat) => {
          let value = stat.value;

          if (stat.title === "Active Devices") {
            value = stats.devices.toString();
          }

          if (stat.title === "Cameras") {
            value = stats.cameras.toString();
          }

          if (stat.title === "AI Status") {
            value = stats.automations.toString();
          }

          return (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={value}
              subtitle={stat.subtitle}
              icon={stat.icon}
            />
          );
        })}
      </Grid>
    </div>
  );
}
