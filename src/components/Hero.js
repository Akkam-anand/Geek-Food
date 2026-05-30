import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Let us find your <br />
          <span className="hero-highlight">Forever Food.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>
        <div className="hero-buttons">
          <button className="btn-search">Search Now</button>
          <button className="btn-know">Know more</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;