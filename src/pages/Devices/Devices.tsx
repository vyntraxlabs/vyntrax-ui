import "./Devices.css";

import { useEffect, useState } from "react";

import { AppLayout } from "../../components/layout/AppLayout";
import { Container, Grid, PageHeader } from "../../components";

import { DevicesService } from "../../services";

import { DeviceCard } from "./components/DeviceCard";

type Device = {
  id: string;
  room_id: string;

  name: string;
  type: string;

  manufacturer: string;
  model: string;

  status: boolean;
  online: boolean;

  battery: number;

  rooms?: {
    id: string;
    name: string;
  };
};

export function Devices() {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    async function loadDevices() {
      const data = await DevicesService.getAll();
      setDevices(data ?? []);
    }

    loadDevices();
  }, []);

  return (
    <AppLayout>
      <Container>
        <PageHeader
          title="Devices"
          subtitle="Manage all smart devices connected to your VYNTRAX Home AI."
        />

        <Grid columns={3} gap="6">
          {devices.map((device) => (
            <DeviceCard
              key={device.id}
              name={device.name}
              type={device.type}
              manufacturer={device.manufacturer}
              model={device.model}
              online={device.online}
              battery={device.battery}
              room={device.rooms?.name ?? "Unknown Room"}
            />
          ))}
        </Grid>
      </Container>
    </AppLayout>
  );
}
