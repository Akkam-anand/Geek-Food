import React, { useState } from 'react';
import './Footer.css';

const footerLinks = {
  Menu: ['Burgers', 'Pizzas', 'Noodles', 'Drinks', 'Combos'],
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Support: ['FAQ', 'Contact', 'Track Order', 'Feedback'],
};

function Footer() {
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubbed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer" id="contact">
      {/* Top Banner */}
      <div className="footer__banner">
        <div className="footer__banner-inner">
          <div>
            <h3 className="footer__banner-title">Join the Geek Table 🍽️</h3>
            <p className="footer__banner-sub">
              Get exclusive deals, new drops, and first access to limited items.
            </p>
          </div>
          <form className="footer__subscribe" onSubmit={handleSubscribe}>
            {subbed ? (
              <p className="footer__subbed">✅ You're in! Welcome to the table.</p>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="footer__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn--primary">
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="footer__container">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#home" className="navbar__logo footer__logo">
              <span>⚡</span>
              <span>Geek<span className="navbar__logo-accent">Food</span></span>
            </a>
            <p className="footer__tagline">
              Crafted for developers, designers, gamers, and every geek in between.
              Eat legendary.
            </p>
            <div className="footer__socials">
              {['𝕏', 'ig', 'yt', 'dc'].map((s) => (
                <a href="#" key={s} className="footer__social">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div className="footer__col" key={section}>
              <h4 className="footer__col-title">{section}</h4>
              <ul className="footer__col-links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__col-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} GeekFood. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
