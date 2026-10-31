import "./RoomGrid.css";

import { Grid } from "../../../../components";

import { useRooms } from "../../../../hooks";

import { RoomCard } from "../RoomCard";

export function RoomGrid() {
  const {
    rooms,
    loading,
  } = useRooms();

  if (loading) {
    return <p>Loading rooms...</p>;
  }

  return (
    <Grid
      columns={3}
      gap="6"
    >
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
        />
      ))}
    </Grid>
  );
}