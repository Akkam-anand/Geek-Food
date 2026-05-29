import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Alex Turner',
    handle: '@alexcode',
    avatar: '👨‍💻',
    text: 'Best burger I\'ve had in years. The Debug Burger is literally a 10/10. Ordered it 3 times this week.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    handle: '@priya.dev',
    avatar: '👩‍🔬',
    text: 'RAM Ramen hits different at midnight. The spice level is configurable. Love the whole geek vibe.',
    stars: 5,
  },
  {
    name: 'Jordan Lee',
    handle: '@jlee_ux',
    avatar: '🧑‍🎨',
    text: 'The packaging, the naming, the taste — everything is designed thoughtfully. GeekFood gets it.',
    stars: 5,
  },
  {
    name: 'Marcus K.',
    handle: '@mk_builds',
    avatar: '🧔',
    text: 'Fastest delivery in the city. Pizza arrived before my next meeting started. Pixel crust is real.',
    stars: 4,
  },
];

function Testimonials() {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews__container">
        <div className="reviews__header">
          <span className="section__eyebrow">💬 Reviews</span>
          <h2 className="section__title">
            The Geeks <span className="accent">Approve</span>
          </h2>
          <p className="section__subtitle">
            Don't just take our word for it — hear it from the legends who've leveled up with us.
          </p>
        </div>

        <div className="reviews__grid">
          {testimonials.map((t, i) => (
            <div className="review-card" key={i}>
              <div className="review-card__top">
                <div className="review-card__avatar">{t.avatar}</div>
                <div>
                  <p className="review-card__name">{t.name}</p>
                  <p className="review-card__handle">{t.handle}</p>
                </div>
                <div className="review-card__stars">
                  {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
                </div>
              </div>
              <p className="review-card__text">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
