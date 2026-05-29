import React, { useState } from 'react';
import './FeaturedMenu.css';

const categories = ['All', 'Burgers', 'Pizza', 'Noodles', 'Drinks'];

const menuItems = [
  {
    id: 1,
    name: 'Debug Burger',
    category: 'Burgers',
    price: 12.99,
    emoji: '🍔',
    tag: 'Best Seller',
    tagColor: 'orange',
    description: 'Double stack smash patty, cheddar waterfall, secret debug sauce.',
    rating: 4.9,
    time: '15 min',
  },
  {
    id: 2,
    name: 'Binary Pizza',
    category: 'Pizza',
    price: 15.49,
    emoji: '🍕',
    tag: 'New',
    tagColor: 'green',
    description: 'Two toppings, one love. Mozz + pepperoni on a crispy 0-1 crust.',
    rating: 4.8,
    time: '20 min',
  },
  {
    id: 3,
    name: 'RAM Ramen',
    category: 'Noodles',
    price: 11.99,
    emoji: '🍜',
    tag: 'Hot 🔥',
    tagColor: 'red',
    description: 'Spicy tonkotsu broth, soft-boiled egg, extra RAM of noodles.',
    rating: 4.7,
    time: '18 min',
  },
  {
    id: 4,
    name: 'Pixel Boba',
    category: 'Drinks',
    price: 6.49,
    emoji: '🧋',
    tag: 'Fan Fav',
    tagColor: 'purple',
    description: 'Brown sugar milk tea with tapioca pixels — 8-bit sweetness.',
    rating: 4.9,
    time: '5 min',
  },
  {
    id: 5,
    name: 'Syntax Wrap',
    category: 'Burgers',
    price: 10.49,
    emoji: '🌯',
    tag: null,
    tagColor: null,
    description: 'Grilled chicken, avocado, crispy onion — zero syntax errors.',
    rating: 4.6,
    time: '12 min',
  },
  {
    id: 6,
    name: '404 Pasta',
    category: 'Noodles',
    price: 13.49,
    emoji: '🍝',
    tag: "Chef's Pick",
    tagColor: 'blue',
    description: 'Not found? We found the best al dente arrabiata in town.',
    rating: 4.8,
    time: '22 min',
  },
];

function FoodCard({ item }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="food-card">
      {item.tag && (
        <span className={`food-card__tag food-card__tag--${item.tagColor}`}>
          {item.tag}
        </span>
      )}

      <button
        className={`food-card__heart ${liked ? 'food-card__heart--active' : ''}`}
        onClick={() => setLiked(!liked)}
        aria-label="Like"
      >
        {liked ? '❤️' : '🤍'}
      </button>

      <div className="food-card__emoji-wrap">
        <span className="food-card__emoji">{item.emoji}</span>
      </div>

      <div className="food-card__body">
        <div className="food-card__meta">
          <span className="food-card__rating">⭐ {item.rating}</span>
          <span className="food-card__time">⏱ {item.time}</span>
        </div>

        <h3 className="food-card__name">{item.name}</h3>
        <p className="food-card__desc">{item.description}</p>

        <div className="food-card__footer">
          <span className="food-card__price">${item.price.toFixed(2)}</span>
          <button
            className={`food-card__add ${added ? 'food-card__add--added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓ Added' : '+ Add'}
          </button>
        </div>
      </div>
    </div>
  );
}

function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="menu" id="menu">
      <div className="menu__container">
        <div className="menu__header">
          <span className="section__eyebrow">🍽️ Our Menu</span>
          <h2 className="section__title">
            Featured <span className="accent">Items</span>
          </h2>
          <p className="section__subtitle">
            Handcrafted bites for every kind of geek. Filter by category and find your next power-up.
          </p>
        </div>

        {/* Category Filter */}
        <div className="menu__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu__filter ${activeCategory === cat ? 'menu__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="menu__grid">
          {filtered.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        <div className="menu__cta">
          <a href="#contact" className="btn btn--outline-accent">
            View Full Menu →
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMenu;
