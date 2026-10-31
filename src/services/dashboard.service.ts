import { supabase } from "./supabase";

export const DashboardService = {
  async getStats() {
    const [{ count: devices }, { count: cameras }] = await Promise.all([
      supabase
        .from("devices")
        .select("*", {
          count: "exact",
          head: true,
        })
        .eq("online", true),

      supabase
        .from("cameras")
        .select("*", {
          count: "exact",
          head: true,
        })
        .eq("recording", true),
    ]);

    return {
      devices: devices ?? 0,
      cameras: cameras ?? 0,
      automations: 0,
    };
  },
};