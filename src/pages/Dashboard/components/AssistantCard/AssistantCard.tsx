import { useEffect, useState } from "react";

import { Sparkles } from "lucide-react";

import { Card } from "../../../../components";
import { DashboardService } from "../../../../services";

import "./AssistantCard.css";

interface DashboardStats {
  devices: number;
  cameras: number;
}

export function AssistantCard() {
  const [stats, setStats] = useState<DashboardStats>({
    devices: 0,
    cameras: 0,
  });

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
        ? "Good Afternoon"
        : "Good Evening";

  useEffect(() => {
    let active = true;

    async function loadStats() {
      try {
        const data = await DashboardService.getStats();

        if (active) {
          setStats({
            devices: data.devices,
            cameras: data.cameras,
          });
        }
      } catch (error) {
        console.error("Failed to load assistant stats:", error);
      }
    }

    loadStats();

    return () => {
      active = false;
    };
  }, []);

  return (
    <Card>
      <div className="assistant-card">
        <div className="assistant-header">
          <Sparkles size={22} />

          <div>
            <h2>{greeting}, Renato.</h2>
            <p>Welcome to your VYNTRAX Home AI.</p>
          </div>
        </div>

        <div className="assistant-status">
          <div>
            <strong>{stats.devices}</strong>
            <span>Devices Online</span>
          </div>

          <div>
            <strong>{stats.cameras}</strong>
            <span>Cameras Recording</span>
          </div>

          <div>
            <strong>ACTIVE</strong>
            <span>Assistant Status</span>
          </div>
        </div>
      </div>
    </Card>
  );
}