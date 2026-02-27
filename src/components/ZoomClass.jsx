import './ZoomClass.css';

export function ZoomClass() {
  return (
    <div className="zoom-class-page">
      <section className="zoom-hero">
        <div className="zoom-hero-content">
          <h1>Clases por Zoom</h1>
          <p>Reserva tus clases con una gran figura nacional del jazz y profundiza en el lenguaje popular y el bebop para llevar tu improvisación al siguiente nivel.</p>
        </div>
      </section>
      
      <section className="zoom-content" style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}></h2>
        <div style={{ maxWidth: 920, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            Reserva tu clase — Valor: $40.000 pesos.
          </p>
          <button className="zoom-btn">Zoom</button>
        </div>
      </section>
    </div>
  );
}
