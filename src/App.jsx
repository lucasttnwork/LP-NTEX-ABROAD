import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import ELEE from './components/sections/ELEE';
import Timeline from './components/sections/Timeline';
import AIAdvantage from './components/sections/AIAdvantage';
import ICP from './components/sections/ICP';
import StrategySession from './components/sections/StrategySession';
import FloatingElements from './components/layout/FloatingElements';

function App() {
  return (
    <div className="min-h-screen bg-linear-main font-sans text-white selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <AIAdvantage />
        <ELEE />
        <Timeline />
        <ICP />
        <StrategySession />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}

export default App;
