import './EventCard.css';

export function EventCard({ event }) {
  const date = new Date(event.date);
  const day = date.toLocaleDateString(undefined, { day: '2-digit' });
  const month = date.toLocaleDateString(undefined, { month: 'short' });

  return (
    <article className="event-card">
      <div className="event-card-left">
        <div className="event-day">{day}</div>
        <div className="event-month">{month}</div>
      </div>
      <div className="event-card-right">
        <h3 className="event-title">{event.title}</h3>
        <div className="event-meta">{event.location} • {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        <p className="event-desc">{event.description}</p>
      </div>
    </article>
  );
}
