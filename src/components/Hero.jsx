import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-video">
        <iframe
          src="https://www.youtube.com/embed/2nNL9Fr_SF4?controls=0&autoplay=1&mute=1&loop=1&playlist=2nNL9Fr_SF4"
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
