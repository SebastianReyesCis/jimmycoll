import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand"></div>
        <div className="footer-buttons">
          <a className="social-btn instagram" href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">Instagram</a>
          <a className="social-btn whatsapp" href="https://wa.me/" target="_blank" rel="noreferrer" title="WhatsApp">WhatsApp</a>
          <a className="social-btn gmail" href="mailto:tu-email@gmail.com" target="_blank" rel="noreferrer" title="Gmail">Gmail</a>
        </div>
      </div>
    </footer>
  );
}
