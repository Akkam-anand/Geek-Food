import React from 'react';
import './WhyGeekFood.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast Delivery',
    description:
      'Your order reaches you before your next build finishes. Optimized routes, real-time tracking.',
  },
  {
    icon: '🧪',
    title: 'Lab-Tested Recipes',
    description:
      'Every dish is stress-tested for flavor, texture, and maximum satisfaction. No bugs, only bites.',
  },
  {
    icon: '🌿',
    title: 'Fresh Ingredients Only',
    description:
      'We source locally and seasonally — no legacy produce, no deprecated dairy. Fresh stack only.',
  },
  {
    icon: '🎮',
    title: 'Geek-Themed Experience',
    description:
      'From menu names to packaging — everything is crafted for the culture. Eat like the legend you are.',
  },
];

function WhyGeekFood() {
  return (
    <section className="why" id="why">
      <div className="why__container">
        <div className="why__left">
          <span className="section__eyebrow">💡 Why Us</span>
          <h2 className="section__title">
            More Than Just <span className="accent">Food</span>
          </h2>
          <p className="section__subtitle" style={{ margin: '0 0 40px' }}>
            We're a community of food-lovers and tech-enthusiasts who believe every meal should feel like an achievement unlocked.
          </p>

          <div className="why__visual">
            <div className="why__score-card">
              <div className="why__score-top">
                <span className="why__score-emoji">🏆</span>
                <div>
                  <p className="why__score-label">Geek Score</p>
                  <p className="why__score-value">9,999 pts</p>
                </div>
              </div>
              <div className="why__score-bar">
                <div className="why__score-fill"></div>
              </div>
              <p className="why__score-sub">Level MAX — You're a Legend</p>
            </div>
          </div>
        </div>

        <div className="why__right">
          {features.map((f, i) => (
            <div className="why__feature" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="why__feature-icon">{f.icon}</div>
              <div className="why__feature-text">
                <h3 className="why__feature-title">{f.title}</h3>
                <p className="why__feature-desc">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyGeekFood;
