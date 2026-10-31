import "./QuickActions.css";

import { ActionButton, Card, Grid } from "../../../../components";

import { useDashboard } from "../../../../hooks";

export function QuickActions() {
  const { quickActions } = useDashboard();

  return (
    <Card title="Quick Actions">
      <Grid columns={6} gap="4">
        {quickActions.map((action) => (
          <ActionButton
            key={action.id}
            label={action.label}
            icon={action.icon}
          />
        ))}
      </Grid>
    </Card>
  );
}
