import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#f6f6f6]">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
