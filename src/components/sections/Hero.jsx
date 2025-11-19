import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroVisual from '../../assets/hero-visual.png';

const Hero = () => {
    const [metrics, setMetrics] = useState({ cpl: '£??', bookings: '0', roas: '?.?x' });

    useEffect(() => {
        const timer = setTimeout(() => {
            setMetrics({ cpl: '£18', bookings: '47', roas: '3.8x' });
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-900 pt-20 transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px]" />
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/5 dark:bg-accent/10 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6"
                    >
                        <Badge variant="elee" className="px-4 py-1.5 text-sm">
                            Metodologia ELEE® + IA
                        </Badge>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-navy dark:text-white mb-6">
                        Stop Experimenting With Meta Ads. <br />
                        <span className="text-primary dark:text-primary">Start Engineering Predictable Results</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        We Build Customer Acquisition Machines Carefully Engineered to Actually Generate Bookings.
                        By using our proprietary ELEE methodology + AI optimisation, we build Meta campaigns that generate
                        <strong className="text-navy dark:text-white"> trackable bookings at predictable costs</strong> for UK aesthetic clinics and boutique fitness studios.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <Button
                            variant="cta"
                            size="lg"
                            className="text-lg px-8 h-14"
                            onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            See How ELEE Works
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg h-14"
                            onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Why most Meta Ads fail ↓
                        </Button>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        Built for businesses ready to invest £2k–£10k/month in systematic growth
                    </p>
                </motion.div>

                {/* Visual Content - Animated "Video" Style */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-slate-900/50 p-8 border border-slate-100 dark:border-slate-700 transition-colors duration-300">
                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 z-20"
                        >
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Cost Per Lead</div>
                            <div className="text-2xl font-bold text-success">{metrics.cpl}</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 z-20"
                        >
                            <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Monthly Bookings</div>
                            <div className="text-2xl font-bold text-primary">{metrics.bookings}</div>
                        </motion.div>

                        {/* Main Visual - Animated "Video" Style */}
                        <div className="relative rounded-xl overflow-hidden shadow-2xl dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 aspect-square bg-slate-900 group">
                            {/* Base Image with Slow Pan/Zoom */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 1, -1, 0]
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={heroVisual}
                                    alt="The ELEE Engine - Predictable Growth System"
                                    className="w-full h-full object-cover opacity-90 dark:opacity-80"
                                />
                            </motion.div>

                            {/* High-Tech Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 dark:from-slate-950/80 via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,27,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none" /> {/* Scanlines */}

                            {/* Scanning Laser Effect */}
                            <motion.div
                                animate={{ top: ['0%', '100%'] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatDelay: 1
                                }}
                                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20"
                            />

                            {/* Floating Data Points */}
                            <motion.div
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-8 left-8 z-20"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                                    <span className="text-[10px] font-mono text-white/80 tracking-widest">LIVE_DATA_FEED</span>
                                </div>
                            </motion.div>

                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 right-6 z-30">
                                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-4 rounded-xl border border-white/50 dark:border-slate-700/50 shadow-lg flex items-center justify-between transform transition-all hover:scale-[1.02]">
                                    <div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">Engine Status</div>
                                        <div className="text-sm font-bold text-navy dark:text-white flex items-center gap-2">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
                                            </span>
                                            Optimizing Campaigns
                                        </div>
                                    </div>
                                    <div className="h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                                        <CheckCircle className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
