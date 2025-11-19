import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import ELEE from './components/sections/ELEE';
import Comparison from './components/sections/Comparison';
import AIAdvantage from './components/sections/AIAdvantage';
import ICP from './components/sections/ICP';
import Pricing from './components/sections/Pricing';
import CaseStudies from './components/sections/CaseStudies';
import StrategySession from './components/sections/StrategySession';
import FAQ from './components/sections/FAQ';
import FinalChoice from './components/sections/FinalChoice';
import FloatingElements from './components/layout/FloatingElements';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans text-navy dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <ELEE />
          <Comparison />
          <AIAdvantage />
          <ICP />
          <Pricing />
          <CaseStudies />
          <StrategySession />
          <FAQ />
          <FinalChoice />
        </main>
        <Footer />
        <FloatingElements />
      </div>
    </ThemeProvider>
  );
}

export default App;
