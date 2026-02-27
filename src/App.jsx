
import React, { useState } from "react";
import { Navbar, Hero, PortfolioCard, EventCard, ZoomClass } from "./components";

const sampleEvents = [
  { id: 1, title: 'Concierto', date: new Date().toISOString(), location: 'Auditorio', description: 'Concierto en vivo con artistas locales.' },
  { id: 2, title: 'Taller de JS', date: new Date(new Date().getTime() + 86400000).toISOString(), location: 'Online', description: 'Aprende fundamentos de JavaScript.' },
  { id: 3, title: 'Mercado', date: new Date(new Date().getTime() + 3*86400000).toISOString(), location: 'Plaza Central', description: 'Mercado de productores locales.' }
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