import {
  Camera,
  Home,
  LayoutGrid,
  Settings,
  Shield,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const navigation = [
  {
    label: "Dashboard",
    icon: Home,
    path: "/dashboard",
  },
  {
  label: "Aurora",
  icon: Sparkles,
  path: "/ai-assistant",
  },
  {
    label: "Rooms",
    icon: LayoutGrid,
    path: "/rooms",
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
    label: "Settings",
    icon: Settings,
    path: "/settings",
  },
] as const;
