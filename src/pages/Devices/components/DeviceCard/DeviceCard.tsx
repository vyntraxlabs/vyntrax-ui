import "./DeviceCard.css";

import {
  Battery,
  CheckCircle,
  XCircle,
} from "lucide-react";

type DeviceCardProps = {
  name: string;
  room: string;
  type: string;
  manufacturer: string;
  model: string;
  online: boolean;
  battery: number;
};

export function DeviceCard({
  name,
  
  type,
  manufacturer,
  model,
  online,
  battery,
}: DeviceCardProps)
{
  return (
    <div className="device-card">
      <div className="device-card-header">
        <h3>{name}</h3>

        {online ? (
          <CheckCircle size={20} />
        ) : (
          <XCircle size={20} />
        )}
      </div>

      <p>{type}</p>

      <p>
        {manufacturer} {model}
      </p>

      <div className="device-card-footer">
        <Battery size={18} />
        <span>{battery}%</span>
      </div>
    </div>
  );
}