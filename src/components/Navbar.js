import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <Link to="/" className="logo">
          <div className="logo-icon">&#9654;</div>
          <span className="logo-text">GeekFoods</span>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className="nav-link active" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/quote" className="nav-link" onClick={() => setMenuOpen(false)}>Quote</Link></li>
          <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Resturants</Link></li>
          <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Foods</Link></li>
          <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        <button className="get-started-btn">Get started</button>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
