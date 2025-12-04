import React from 'react';
import NewLPNavbar from '../components/layout/NewLPNavbar';
import Footer from '../components/layout/Footer';
import FloatingElements from '../components/layout/FloatingElements';

// New Components
import NewHero from '../components/sections/new-lp/NewHero';
import NewReality from '../components/sections/new-lp/NewReality';
import NewAdvantage from '../components/sections/new-lp/NewAdvantage';
import NewFramework from '../components/sections/new-lp/NewFramework';
import NewTimeline from '../components/sections/new-lp/NewTimeline';
import NewProof from '../components/sections/new-lp/NewProof';
import NewICP from '../components/sections/new-lp/NewICP';
import NewStrategySession from '../components/sections/new-lp/NewStrategySession';

function NewLP() {
    return (
        <div className="min-h-screen bg-linear-main font-sans text-white selection:bg-accent selection:text-black">
            <NewLPNavbar />
            <main>
                <NewHero />
                <NewReality />
                <NewAdvantage />
                <NewFramework />
                <NewTimeline />
                <NewProof />
                <NewICP />
                <NewStrategySession />
            </main>
            <Footer />
            <FloatingElements />
        </div>
    );
}

export default NewLP;
