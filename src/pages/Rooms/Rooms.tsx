import "./Rooms.css";

import {
  AppLayout,
  Container,
  PageHeader,
} from "../../components";

import { RoomGrid } from "./components/RoomGrid";

export function Rooms() {
  return (
    <AppLayout>
      <Container>

        <PageHeader
          title="Rooms"
          subtitle="Manage your home's rooms"
        />

        <RoomGrid />

      </Container>
    </AppLayout>
  );
}