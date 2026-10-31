import "./StatCard.css";

import {
  Card,
  Flex,
  Icon,
} from "../../../../components";

import type { StatCardProps } from "./StatCard.types";

export function StatCard({
  title,
  value,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <Card className="vyntrax-stat-card">
      <Flex
        justify="between"
        align="center"
      >
        <span className="vyntrax-stat-title">
          {title}
        </span>

        <div className="vyntrax-stat-icon">
          <Icon icon={icon} />
        </div>
      </Flex>

      <div className="vyntrax-stat-content">
        <h2 className="vyntrax-stat-value">
          {value}
        </h2>

        <span className="vyntrax-stat-subtitle">
          {subtitle}
        </span>
      </div>
    </Card>
  );
}