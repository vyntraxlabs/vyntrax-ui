import "./RoomCard.css";

import { Card } from "../../../../components";

import type { Room } from "../../../../types";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({
  room,
}: RoomCardProps) {
  return (
    <Card>
      <div className="vyntrax-room-card">
        <div className="vyntrax-room-icon">
          {room.icon}
        </div>

        <h3>{room.name}</h3>
      </div>
    </Card>
  );
}