import { useEffect, useState } from "react";

import type { Room } from "../types";

import { RoomsService } from "../services";

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRooms();
  }, []);

  async function loadRooms() {
    setLoading(true);

    const data = await RoomsService.getAll();

    setRooms(data);

    setLoading(false);
  }

  return {
    rooms,
    loading,
    reload: loadRooms,
  };
}