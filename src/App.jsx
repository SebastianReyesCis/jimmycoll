
import React, { useState } from "react";
import { Navbar, Hero, PortfolioCard, EventCard, ZoomClass } from "./components";

// Only two specific events for March 28 and March 31
const sampleEvents = [
  { id: 1, title: 'Evento 25 de marzo', date: new Date('2026-03-28T20:00:00').toISOString(), location: 'Club Subterrano', description: 'Presentación de Jimmy Coll Quartet el 25 de marzo.' },
  { id: 2, title: 'Evento 31 de marzo', date: new Date('2026-03-31T20:00:00').toISOString(), location: 'Backroom', description: 'Cierre de mes con evento el 31 de marzo con Jimmy Coll Quartet.' }
];

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <Navbar onNavigate={setPage} />
      {page === 'home' ? (
        <>
          <Hero />
          <PortfolioCard />
          <section style={{ padding: '90px 20px 30px 20px' }}>
            <h2 style={{ textAlign: 'center' }}>Próximos Eventos</h2>
            <div style={{ maxWidth: 920, margin: '0 auto' }}>
              {sampleEvents.map(e => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <ZoomClass />
      )}
    </div>
  );
}

export default App;