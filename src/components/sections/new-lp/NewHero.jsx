import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, BarChart3, Globe, ShieldCheck } from 'lucide-react';

const InfiniteScrollText = ({ children, duration = 15 }) => {
    return (
        <div className="overflow-hidden flex max-w-full">
            <motion.div
                className="flex gap-4 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
            >
                <span className="flex gap-4">{children}</span>
                <span className="flex gap-4">{children}</span>
            </motion.div>
        </div>
    );
};

const NewHero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 bg-black">
            {/* Background Elements - Monotone */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] animate-pulse-slow delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Accepting New Clients</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter leading-[1.1] mb-6 text-white">
                            Are Your Ads Driving Growth — <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
                                or Just Draining Budget?
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed">
                            Most businesses treat Meta Ads like an endless experiment. We turn them into a growth system — using scientific method and artificial intelligence so every pound you invest works with clear purpose.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#strategy-session"
                                className="shiny-cta group inline-flex justify-center items-center w-fit"
                            >
                                <span className="flex items-center gap-2 whitespace-nowrap">
                                    Book Your Free Strategy Analysis
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </span>
                            </a>
                        </div>

                        <p className="mt-6 text-sm text-gray-500 italic">
                            Only 5 spots per month. Come with your numbers, leave with clarity.
                        </p>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative h-[700px] lg:h-[900px] w-full flex items-center justify-center lg:justify-end"
                    >
                        {/* Main Image Container */}
                        <div className="relative w-full h-full lg:w-[120%] lg:-mr-32 lg:-mt-20">
                            {/* Abstract/Tech Image Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="/images/hero-woman-v3.png"
                                    alt="Futuristic Meta Ads Specialist"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Card 1 - Top Left (AI Speed) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-20 left-4 md:left-8 w-64 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl z-20"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-white/10 rounded-lg text-white">
                                        <Zap size={20} />
                                    </div>
                                    <span className="text-sm font-bold text-white">AI Speed</span>
                                </div>
                                <div className="text-xs text-gray-400 font-mono border-t border-white/5 pt-2">
                                    <InfiniteScrollText duration={10}>
                                        <span>GENERATING VARIATIONS...</span>
                                        <span>ANALYZING PATTERNS...</span>
                                        <span>OPTIMIZING CTR...</span>
                                    </InfiniteScrollText>
                                </div>
                            </motion.div>

                            {/* Floating Card 2 - Bottom Right (Data Driven) */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-12 right-4 md:right-12 w-64 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl z-20"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-white/10 rounded-lg text-white">
                                        <BarChart3 size={20} />
                                    </div>
                                    <span className="text-sm font-bold text-white">Data Driven</span>
                                </div>
                                <div className="text-xs text-gray-400 font-mono border-t border-white/5 pt-2">
                                    <InfiniteScrollText duration={12}>
                                        <span>SCALING WINNERS...</span>
                                        <span>CUTTING LOSERS...</span>
                                        <span>MAXIMIZING ROAS...</span>
                                    </InfiniteScrollText>
                                </div>
                            </motion.div>

                            {/* Floating Card 3 - Bottom Left (Verified Results) */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-32 left-4 md:left-12 bg-white text-black rounded-lg py-2 px-4 shadow-lg z-30 flex items-center gap-2"
                            >
                                <ShieldCheck size={16} />
                                <span className="text-xs font-bold">Verified Results</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewHero;
