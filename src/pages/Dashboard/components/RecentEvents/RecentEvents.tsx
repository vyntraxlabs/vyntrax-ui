import "./RecentEvents.css";

import { Card } from "../../../../components";

import { recentEvents } from "../../data/recentEvents";

export function RecentEvents() {
  return (
    <Card title="Recent Events">
      <ul className="vyntrax-recent-events">
        {recentEvents.map((event) => (
          <li
            key={event.id}
            className="vyntrax-recent-event"
          >
            <span className={`status ${event.status}`} />

            <div className="event-content">
              <span className="event-title">
                {event.title}
              </span>

              <span className="event-time">
                {event.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}