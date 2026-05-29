import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true"></div>
      <div className="hero__blob hero__blob--2" aria-hidden="true"></div>
      <div className="hero__noise" aria-hidden="true"></div>

      <div className="hero__container">
        {/* Left: Text content */}
        <div className="hero__content">
          <span className="hero__badge">🚀 Now Delivering Near You</span>

          <h1 className="hero__title">
            Fuel Your
            <span className="hero__title-accent"> Inner </span>
            Geek
          </h1>

          <p className="hero__subtitle">
            Level up your taste buds with tech-inspired bites, epic combos,
            and flavors crafted for those who play, build, and create.
          </p>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">50+</span>
              <span className="hero__stat-label">Menu Items</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-value">4.9★</span>
              <span className="hero__stat-label">Rating</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-value">20K+</span>
              <span className="hero__stat-label">Happy Geeks</span>
            </div>
          </div>

          <div className="hero__actions">
            <a href="#menu" className="btn btn--hero-primary">
              Explore Menu
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#why" className="btn btn--hero-secondary">
              Our Story
            </a>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero__visual">
          <div className="hero__plate-ring hero__plate-ring--outer"></div>
          <div className="hero__plate-ring hero__plate-ring--inner"></div>
          <div className="hero__plate">
            <div className="hero__emoji-wrap">
              <span className="hero__main-emoji">🍔</span>
            </div>
            <div className="hero__orbit-item hero__orbit-item--1">🍕</div>
            <div className="hero__orbit-item hero__orbit-item--2">🌮</div>
            <div className="hero__orbit-item hero__orbit-item--3">🍜</div>
            <div className="hero__orbit-item hero__orbit-item--4">🧋</div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
