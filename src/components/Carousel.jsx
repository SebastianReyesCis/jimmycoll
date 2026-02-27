import { useEffect, useState, useRef } from 'react';
import './Carousel.css';

export function Carousel({ images = [], autoPlay = true, interval = 3000, showDots = true, showArrows = true }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, images.length]);

  function goTo(i) {
    setIndex(((i % images.length) + images.length) % images.length);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function next() {
    goTo(index + 1);
  }

  function prev() {
    goTo(index - 1);
  }

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel">
      <div className="carousel-track">
        {images.map((src, i) => (
          <div className={`carousel-slide ${i === index ? 'active' : ''}`} key={i}>
            <img src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button className="carousel-arrow prev" onClick={prev} aria-label="Anterior">‹</button>
          <button className="carousel-arrow next" onClick={next} aria-label="Siguiente">›</button>
        </>
      )}

      {showDots && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
