import './PortfolioCard.css';

export function PortfolioCard() {
  return (
    <section className="portfolio-card">
      <div className="portfolio-card-inner">
        <div className="portfolio-title">
          <button type="button" className="portfolio-button" onClick={() => {
            const link = document.createElement('a');
            link.href = '/Dossier Jimmy (1).pdf';
            link.download = 'Dossier Jimmy (1).pdf';
            link.click();
          }}>Descargar Dossier</button>
        </div>
      </div>
    </section>
  );
}
