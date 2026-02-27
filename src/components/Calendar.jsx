import { useMemo, useState } from 'react';
import './Calendar.css';

function getMonthMatrix(year, month) {
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeks = [];
  let current = 1 - startDay;
  while (current <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      if (current < 1 || current > daysInMonth) {
        week.push(null);
      } else {
        week.push(new Date(year, month, current));
      }
      current++;
    }
    weeks.push(week);
  }
  return weeks;
}

export function Calendar({ events = [] }) {
  const today = new Date();
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const eventsMap = useMemo(() => {
    const map = {};
    events.forEach((e) => {
      const d = new Date(e.date).toISOString().slice(0,10);
      if (!map[d]) map[d] = [];
      map[d].push(e);
    });
    return map;
  }, [events]);

  const weeks = useMemo(() => getMonthMatrix(view.year, view.month), [view]);

  function prevMonth() { setView((v) => ({ year: v.month === 0 ? v.year - 1 : v.year, month: v.month === 0 ? 11 : v.month - 1 })); }
  function nextMonth() { setView((v) => ({ year: v.month === 11 ? v.year + 1 : v.year, month: v.month === 11 ? 0 : v.month + 1 })); }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth} className="calendar-nav">‹</button>
        <div className="calendar-title">{new Date(view.year, view.month).toLocaleString(undefined,{month:'long', year:'numeric'})}</div>
        <button onClick={nextMonth} className="calendar-nav">›</button>
      </div>

      <div className="calendar-grid">
        {['Dom','Lun','Mar','Mie','Jue','Vie','Sab'].map((d) => (
          <div key={d} className="calendar-weekday">{d}</div>
        ))}

        {weeks.map((week, wi) => (
          week.map((day, di) => {
            const key = `${wi}-${di}`;
            if (!day) return <div key={key} className="calendar-cell empty" />;
            const iso = day.toISOString().slice(0,10);
            const has = eventsMap[iso];
            return (
              <div key={key} className={`calendar-cell ${has ? 'has-event' : ''}`}>
                <div className="calendar-day">{day.getDate()}</div>
                {has && <div className="calendar-event-count">{eventsMap[iso].length}</div>}
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
}
