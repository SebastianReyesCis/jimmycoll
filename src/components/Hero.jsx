import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-video">
        <iframe
          src=""
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <div className="hero-content">
        <h1></h1>
        <p></p>
      </div>
    </section>
  );
}
