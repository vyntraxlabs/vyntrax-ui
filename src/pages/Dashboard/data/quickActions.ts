import {
  Camera,
  DoorOpen,
  Lightbulb,
  Lock,
  Thermometer,
  Warehouse,
} from "lucide-react";

import type { DashboardQuickAction } from "../../../types";

export const quickActions: DashboardQuickAction[] = [
  {
    id: 1,
    label: "Lights",
    icon: Lightbulb,
  },
  {
    id: 2,
    label: "Garage",
    icon: Warehouse,
  },
  {
    id: 3,
    label: "Climate",
    icon: Thermometer,
  },
  {
    id: 4,
    label: "Security",
    icon: Lock,
  },
  {
    id: 5,
    label: "Cameras",
    icon: Camera,
  },
  {
    id: 6,
    label: "Doors",
    icon: DoorOpen,
  },
];