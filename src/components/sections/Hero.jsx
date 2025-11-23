import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowRight, CheckCircle } from 'lucide-react';
import heroVisual from '../../assets/hero-tablet.png';
import heroBooking from '../../assets/hero-booking.png';
import heroAi from '../../assets/hero-ai.png';
import LogoSlider from '../ui/LogoSlider';

const Hero = () => {
    const [metrics, setMetrics] = useState({ cpl: '£??', bookings: '0', roas: '?.?x' });

    useEffect(() => {
        const timer = setTimeout(() => {
            setMetrics({ cpl: '£18', bookings: '47', roas: '3.8x' });
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-20">
            {/* Spline Background */}
            <div className="spline-container absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <iframe
                    src="https://my.spline.design/aidatamodelinteraction-jipMLzxI5liMrspqcm4GRWTh"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    id="aura-spline"
                    className="opacity-60"
                ></iframe>
            </div>

            {/* Background Elements - Kept for depth but reduced opacity */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[100px]" />
            </div>

            {/* Seamless Transition Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-0 pointer-events-none" />

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
                        <Badge variant="elee" className="px-4 py-1.5 text-sm border-primary/30 bg-primary/10 text-primary-foreground backdrop-blur-md">
                            ELEE® Methodology + AI
                        </Badge>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 drop-shadow-lg">
                        Stop Experimenting With Meta Ads. <br />
                        <span className="text-gradient-silver">Start Engineering Predictable Results</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed drop-shadow-md">
                        We Build Customer Acquisition Machines Carefully Engineered to Actually Generate Bookings.
                        By using our proprietary ELEE methodology + AI optimisation, we build Meta campaigns that generate
                        <strong className="text-white"> trackable bookings at predictable costs</strong> for UK aesthetic clinics and boutique fitness studios.
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

                    <p className="text-sm text-slate-400 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        Built for businesses ready to invest £2k–£10k/month in systematic growth
                    </p>
                </motion.div>

                {/* Visual Content - Bento Grid Style */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative hidden lg:block h-[600px]"
                >
                    <div className="grid grid-cols-2 grid-rows-6 gap-4 h-full w-full p-4">

                        {/* Card 1: Main Tablet (Top - Spans 2 cols, 4 rows) */}
                        <motion.div
                            className="col-span-2 row-span-4 relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
                            <img
                                src={heroVisual}
                                alt="Analytics Dashboard"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Badge */}
                            <div className="absolute bottom-4 left-4 z-20">
                                <div className="bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700/50 flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs text-white font-medium">Live Performance Tracking</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Booking Notification (Bottom Left - 1 col, 2 rows) */}
                        <motion.div
                            className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <img
                                src={heroBooking}
                                alt="Booking Confirmation"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                            <div className="absolute bottom-3 left-3 z-20">
                                <span className="text-xs text-slate-300 font-mono">CONVERSION_EVENT</span>
                                <div className="text-sm text-white font-bold">New Booking</div>
                            </div>
                        </motion.div>

                        {/* Card 3: AI Network (Bottom Right - 1 col, 2 rows) */}
                        <motion.div
                            className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <img
                                src={heroAi}
                                alt="AI Optimization"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                            <div className="absolute top-3 right-3 z-20">
                                <div className="bg-primary/20 p-1.5 rounded-md backdrop-blur-sm border border-primary/30">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                </div>
                            </div>
                            <div className="absolute bottom-3 left-3 z-20">
                                <span className="text-xs text-slate-300 font-mono">AI_OPTIMIZER</span>
                                <div className="text-sm text-white font-bold">Learning...</div>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
            <LogoSlider />
        </section>
    );
};

export default Hero;
