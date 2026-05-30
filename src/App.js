import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedMenu from './components/FeaturedMenu';
import WhyGeekFood from './components/WhyGeekFood';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import QuotePage from './components/QuotePage';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <WhyGeekFood />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quote" element={<QuotePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;