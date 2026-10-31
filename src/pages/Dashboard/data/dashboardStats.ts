import {
  Cpu,
  Camera,
  Shield,
  Brain,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Active Devices",
    value: 12,
    subtitle: "Online",
    icon: Cpu,
  },
  {
    title: "Cameras",
    value: 4,
    subtitle: "Recording",
    icon: Camera,
  },
  {
    title: "Security",
    value: "Armed",
    subtitle: "Protected",
    icon: Shield,
  },
  {
    title: "AI Status",
    value: "Running",
    subtitle: "Operational",
    icon: Brain,
  },
];