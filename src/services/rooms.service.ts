import { supabase } from "./supabase";

import type { Room } from "../types";

export const RoomsService = {
  async getAll(): Promise<Room[]> {
    const { data, error } = await supabase
      .from("rooms")
      .select("*")
      .order("name");

    if (error) throw error;

    return data ?? [];
  },

  async create(
    room: Omit<Room, "id" | "created_at">
  ): Promise<Room> {
    const { data, error } = await supabase
      .from("rooms")
      .insert(room)
      .select()
      .single();

    if (error) throw error;

    return data;
  },

  async update(
    id: string,
    room: Omit<Room, "id" | "created_at">
  ): Promise<Room> {
    const { data, error } = await supabase
      .from("rooms")
      .update(room)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from("rooms")
      .delete()
      .eq("id", id);

    if (error) throw error;
  },
};