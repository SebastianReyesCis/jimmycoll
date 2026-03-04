import { useState } from 'react';
import './Navbar.css';

export function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false);
  
  const handleNavigation = (page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>Jimmy Coll</div>
      <div className={`menu-toggle ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${open ? 'active' : ''}`}>   
        <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('zoom'); }}></a></li>
      </ul>
    </nav>
  );
}
