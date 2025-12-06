import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const Hero = () => {
    const handleScrollToStrategy = () => {
        const target = document.querySelector('#strategy-session');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden hero-section-stack">

            <div className="absolute inset-0 pointer-events-none hero-light-background" aria-hidden="true">
                <span className="hero-light hero-light-top-right" />
                <span className="hero-light hero-light-bottom-left" />
                <div className="hero-gradient-sweep" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8 text-left">

                        {/* Badge */}
                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-white/80">Meta Ads Management that Prints Money</span>
                        </Motion.div>

                        {/* Headline */}
                        <Motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col gap-3 mb-8 font-heading text-left"
                        >
                            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-white leading-[1.1]">
                                Are Your Ads <br />
                                Driving <span className="glow-pulse">Growth</span>
                            </span>
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif italic font-light text-white/90 leading-tight mt-1">
                                or Just Draining Budget?
                            </span>
                        </Motion.h1>

                        {/* Subheadline */}
                        <Motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed font-light"
                        >
                            We turn Meta Ads into a revenue engine for ambitious UK local businesses using high-performance data analysis and AI-driven creatives.
                        </Motion.p>

                        {/* CTA Buttons */}
                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-start gap-6"
                        >
                            <div className="inline-block bg-transparent">
                                <button
                                    type="button"
                                    onClick={handleScrollToStrategy}
                                    className="shiny-cta focus:outline-none group inline-flex justify-center items-center"
                                    aria-label="Book your free strategy session"
                                >
                                    <span className="flex items-center gap-2 whitespace-nowrap">
                                        Book Free Strategy Session
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                    </span>
                                </button>
                            </div>

                            <a
                                href="#process"
                                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 text-lg font-medium backdrop-blur-sm flex items-center justify-center w-full sm:w-auto"
                            >
                                See How It Works
                            </a>
                        </Motion.div>

                        {/* Social Proof / Trust Indicators */}
                        <Motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-16 pt-8 border-t border-white/5 max-w-xl"
                        >
                            <p className="text-sm text-white/40 uppercase tracking-widest mb-6 font-mono text-xs">Trusted by ambitious brands across the UK</p>
                            {/* Add logos here if available, or keep it minimal */}
                        </Motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
