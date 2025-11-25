import React, { useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    useEffect(() => {
        const loadUnicornScript = () => {
            const scriptId = 'unicorn-studio-script';
            const existingScript = document.getElementById(scriptId);

            if (!existingScript) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
                script.onload = () => {
                    if (window.UnicornStudio) {
                        window.UnicornStudio.init();
                    }
                };
                document.head.appendChild(script);
            } else {
                if (window.UnicornStudio) {
                    window.UnicornStudio.init();
                }
            }
        };

        // Small delay to ensure DOM is ready
        const timer = setTimeout(loadUnicornScript, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden isolate">
            {/* Background Elements */}
            <div data-us-project="p7Ff6pfTrb5Gs59C7nLC" className="absolute w-full h-full left-0 top-0 -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-white/80">Meta Ads Management for Growth-Focused Businesses</span>
                    </motion.div>

                    {/* Headline */}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-2 mb-8"
                    >
                        <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient-silver-fade uppercase">
                            META ADS
                        </span>
                        <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gradient-silver-fade">
                            Solved with <span className="font-serif italic">Science.</span>
                        </span>
                        <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gradient-silver-fade">
                            <span className="font-serif italic">Enhanced</span> with AI.
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        We turn Meta Ads into a revenue engine for ambitious UK local businesses using high-performance data analysis and AI-driven creatives.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <a
                            href="#strategy-session"
                            className="shiny-cta group inline-flex justify-center items-center"
                        >
                            <span className="flex items-center gap-2 whitespace-nowrap">
                                Book Your Free Strategy Session
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </span>
                        </a>

                        <a
                            href="#process"
                            className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all duration-300 text-lg font-medium backdrop-blur-sm"
                        >
                            See Our Process
                        </a>
                    </motion.div>

                    {/* Social Proof / Trust Indicators (Optional placeholder) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-16 pt-8 border-t border-white/5"
                    >
                        <p className="text-sm text-white/40 uppercase tracking-widest mb-6">Trusted by ambitious brands</p>
                        {/* Add logos here if available, or keep it minimal */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
