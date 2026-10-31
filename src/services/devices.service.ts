import { supabase } from "./supabase";

export const DevicesService = {
  async getAll() {
    const { data, error } = await supabase
      .from("devices")
      .select(`
        *,
        rooms (
          id,
          name
        )
      `)
      .order("name");

    if (error) {
      throw error;
    }

    return data;
  },
};