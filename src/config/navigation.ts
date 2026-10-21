import {
  Camera,
  Cpu,
  Home,
  Settings,
  Shield,
  Smartphone,
} from "lucide-react";

export const navigation = [
  {
    label: "Dashboard",
    icon: Home,
    path: "/dashboard",
  },
  {
    label: "Devices",
    icon: Smartphone,
    path: "/devices",
  },
  {
    label: "Cameras",
    icon: Camera,
    path: "/cameras",
  },
  {
    label: "Security",
    icon: Shield,
    path: "/security",
  },
  {
    label: "AI Assistant",
    icon: Cpu,
    path: "/ai",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
] as const;