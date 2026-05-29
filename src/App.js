import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedMenu from './components/FeaturedMenu';
import WhyGeekFood from './components/WhyGeekFood';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <FeaturedMenu />
        <WhyGeekFood />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
