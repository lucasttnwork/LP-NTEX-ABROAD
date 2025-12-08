import React, { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    SystemFailureAnimation,
    BlindSignalsAnimation,
    CreativeLoopAnimation,
    BudgetTiltAnimation,
    IterationLagAnimation,
    VanityMetricsAnimation,
} from '../../animations';
import ViewportAnimationBoundary from '../../animations/ViewportAnimationBoundary';

const realityPatternStyle = {
    backgroundImage: `
        linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px),
        linear-gradient(180deg, rgba(255,255,255,0.12) 1px, transparent 1px)
    `,
    backgroundSize: '80px 80px, 80px 80px',
    backgroundPosition: '0 0, 0 0',
    backgroundColor: '#020202',
    backgroundBlendMode: 'screen',
};

const realityFadeMask = {
    WebkitMaskImage: 'radial-gradient(closest-side at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0.4) 80%, transparent 100%)',
    maskImage: 'radial-gradient(closest-side at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0.4) 80%, transparent 100%)',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
};

const truthParagraphs = [
    {
        text: "You've probably been through this: Hired an agency (or tried it yourself). Invested a decent budget. Waited. Reports arrived full of metrics — impressions, clicks, reach — but when you looked at the actual revenue... nothing concrete.",
    },
    {
        text: "Or worse: some results appeared early on, then... silence. The agency said \"the algorithm changed\" or \"it needs more time.\" You kept paying. Results stayed uncertain.",
    },
    {
        text: "This isn't your fault. And it probably isn't your product's fault either.",
        highlight: true,
    },
    {
        text: "The problem is that most agencies operate in the dark. They don't have a real method — they have \"experience\" and \"gut feeling.\" And when gut feeling fails, you pay the price.",
    },
];

const useHoverPlayback = (ids, exitDelay = 1000) => {
    const [playing, setPlaying] = useState(() =>
        ids.reduce((acc, id) => ({ ...acc, [id]: false }), {})
    );
    const timersRef = useRef({});

    const play = (id) => {
        if (timersRef.current[id]) {
            clearTimeout(timersRef.current[id]);
            timersRef.current[id] = null;
        }
        setPlaying((prev) => ({ ...prev, [id]: true }));
    };

    const pauseWithGrace = (id) => {
        if (timersRef.current[id]) clearTimeout(timersRef.current[id]);
        timersRef.current[id] = setTimeout(() => {
            setPlaying((prev) => ({ ...prev, [id]: false }));
            timersRef.current[id] = null;
        }, exitDelay);
    };

    return {
        isPlaying: (id) => !!playing[id],
        play,
        pauseWithGrace,
    };
};

const NewReality = () => {
    const cardIds = useMemo(
        () => ({
            system: 'system-failure',
            signals: 'blind-signals',
            creative: 'creative-loop',
            budget: 'budget-tilt',
            iteration: 'iteration-lag',
            vanity: 'vanity-metrics',
        }),
        []
    );

    const hoverPlayback = useHoverPlayback(Object.values(cardIds));

    return (
        <>
            <section
                id="reality"
                className="py-32 relative overflow-hidden border-t border-white/5 bg-[#020202]"
            >
                <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        ...realityPatternStyle,
                        ...realityFadeMask
                    }}
                />
                <div className="container mx-auto px-6 relative z-10">
                    {/* Section 1: The Problem */}
                    <div className="max-w-4xl mx-auto mb-32">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 block"
                        >
                            The Reality
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-8 text-white"
                        >
                            Let's Be Honest About
                            <br />
                            <span className="font-serif italic text-gray-400">What's Happening.</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 leading-relaxed space-y-6 max-w-4xl"
                        >
                            {truthParagraphs.map((paragraph, index) => (
                                <p
                                    key={`truth-paragraph-${index}`}
                                    className={`leading-relaxed ${
                                        paragraph.highlight ? 'text-white font-semibold' : 'text-gray-300'
                                    }`}
                                >
                                    {paragraph.text}
                                </p>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section id="campaigns" className="py-20 bg-black relative overflow-hidden border-t border-white/5">
                {/* Background Lights - Enhanced Visibility & Centered */}
                <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-800/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slower pointer-events-none" />
                <div className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slower pointer-events-none delay-1000" />
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
                        <div>
                            <p className="text-sm font-medium text-white/50 font-sans uppercase tracking-wider">The Hard Truth</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter font-heading text-white mt-2">
                                Why Most Campaigns Disappoint
                            </h2>
                            <p className="mt-4 text-base text-white/70 font-sans max-w-2xl">
                                They launch on autopilot, measure vanity metrics, and never align spend, creative, and optimization with real business outcomes.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Big feature - System Failure */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2"
                        >
                            <div className="relative h-64 sm:h-80 md:h-full min-h-[300px]">
                                <ViewportAnimationBoundary className="absolute inset-0" rootMargin="-10% 0px">
                                    <SystemFailureAnimation
                                        isPlaying={hoverPlayback.isPlaying(cardIds.system)}
                                        className="absolute inset-0 w-full h-full"
                                        onMouseEnter={() => hoverPlayback.play(cardIds.system)}
                                        onMouseLeave={() => hoverPlayback.pauseWithGrace(cardIds.system)}
                                    />
                                </ViewportAnimationBoundary>
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                
                                <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
                                    <div className="flex items-center gap-2 mb-3">
                                        <motion.span 
                                            className="inline-flex items-center gap-1 rounded-full border border-red-500/30 bg-red-500/15 px-2 py-0.5 text-[11px] font-medium text-red-300 font-sans"
                                            animate={{
                                                borderColor: ['rgba(239,68,68,0.3)', 'rgba(239,68,68,0.6)', 'rgba(239,68,68,0.3)'],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        >
                                            CRITICAL
                                        </motion.span>
                                        <span className="text-xs text-white/60 font-sans">System Failure</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight font-heading text-white mb-3">
                                        The system fails before launch
                                    </h3>
                                    <p className="text-sm sm:text-base text-white/70 font-sans max-w-lg">
                                       Without a methodical combination of research, targeting, and measurement, campaigns become expensive experiments instead of predictable growth engines.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right column: Blind to Market Signals */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ 
                                scale: 1.02,
                                borderColor: 'rgba(255,255,255,0.2)',
                            }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 group"
                        >
                            <div className="p-5 sm:p-6 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-medium tracking-tight font-heading text-white flex items-center gap-2">
                                        Blind to Signals
                                    </h3>
                                     <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/40 font-sans">01</span>
                                </div>
                                <p className="text-sm text-white/70 font-sans mb-4">
                                    Campaigns launch before you hear from your customers, missing the cues your audience cares about.
                                </p>
                                <div className="mt-auto rounded-lg overflow-hidden border border-white/10 aspect-video relative">
                                    <ViewportAnimationBoundary className="w-full h-full" rootMargin="-15% 0px">
                                        <BlindSignalsAnimation
                                            isPlaying={hoverPlayback.isPlaying(cardIds.signals)}
                                            className="w-full h-full"
                                            onMouseEnter={() => hoverPlayback.play(cardIds.signals)}
                                            onMouseLeave={() => hoverPlayback.pauseWithGrace(cardIds.signals)}
                                        />
                                    </ViewportAnimationBoundary>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right column: Creative Feedback Loop */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ 
                                scale: 1.02,
                                borderColor: 'rgba(255,255,255,0.2)',
                            }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 group"
                        >
                             <div className="p-5 sm:p-6 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-medium tracking-tight font-heading text-white flex items-center gap-2">
                                        Creative Loop
                                    </h3>
                                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-white/40 font-sans">02</span>
                                </div>
                                <p className="text-sm text-white/70 font-sans mb-4">
                                    Creative variations are refreshed once a month—long after poorly performing ads burn through budget.
                                </p>
                                <div className="mt-auto rounded-lg overflow-hidden border border-white/10 aspect-video relative">
                                    <ViewportAnimationBoundary className="w-full h-full" rootMargin="-15% 0px">
                                        <CreativeLoopAnimation
                                            isPlaying={hoverPlayback.isPlaying(cardIds.creative)}
                                            className="w-full h-full"
                                            onMouseEnter={() => hoverPlayback.play(cardIds.creative)}
                                            onMouseLeave={() => hoverPlayback.pauseWithGrace(cardIds.creative)}
                                        />
                                    </ViewportAnimationBoundary>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom: Budget Misallocation */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ 
                                scale: 1.02,
                                borderColor: 'rgba(255,255,255,0.2)',
                            }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 group"
                        >
                            <div className="p-5 sm:p-6 flex flex-col h-full">
                                <h3 className="text-lg font-medium tracking-tight font-heading text-white flex items-center gap-2 mb-2">
                                    Budget Tilt
                                </h3>
                                <p className="text-sm text-white/70 font-sans mb-4">
                                    Spend is dictated by what felt right last quarter instead of a model that forecasts ROI.
                                </p>
                                <div className="mt-auto rounded-lg overflow-hidden border border-white/10 aspect-video relative">
                                    <ViewportAnimationBoundary className="w-full h-full" rootMargin="-15% 0px">
                                        <BudgetTiltAnimation
                                            isPlaying={hoverPlayback.isPlaying(cardIds.budget)}
                                            className="w-full h-full"
                                            onMouseEnter={() => hoverPlayback.play(cardIds.budget)}
                                            onMouseLeave={() => hoverPlayback.pauseWithGrace(cardIds.budget)}
                                        />
                                    </ViewportAnimationBoundary>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom: Optimization Rhythm */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ 
                                scale: 1.02,
                                borderColor: 'rgba(255,255,255,0.2)',
                            }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 group"
                        >
                             <div className="p-5 sm:p-6 flex flex-col h-full">
                                <h3 className="text-lg font-medium tracking-tight font-heading text-white flex items-center gap-2 mb-2">
                                    Iteration Lag
                                </h3>
                                <p className="text-sm text-white/70 font-sans mb-4">
                                    There is no cadence for analysis, so the campaign only changes when someone notices a drop.
                                </p>
                                 <div className="mt-auto rounded-lg overflow-hidden border border-white/10 aspect-video relative">
                                    <ViewportAnimationBoundary className="w-full h-full" rootMargin="-15% 0px">
                                        <IterationLagAnimation
                                            isPlaying={hoverPlayback.isPlaying(cardIds.iteration)}
                                            className="w-full h-full"
                                            onMouseEnter={() => hoverPlayback.play(cardIds.iteration)}
                                            onMouseLeave={() => hoverPlayback.pauseWithGrace(cardIds.iteration)}
                                        />
                                    </ViewportAnimationBoundary>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom: Vanity Metrics */}
                         <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ 
                                scale: 1.02,
                                borderColor: 'rgba(255,255,255,0.2)',
                            }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 group"
                        >
                             <div className="p-5 sm:p-6 flex flex-col h-full">
                                <h3 className="text-lg font-medium tracking-tight font-heading text-white flex items-center gap-2 mb-2">
                                    Vanity Metrics
                                </h3>
                                <p className="text-sm text-white/70 font-sans mb-4">
                                    Reports celebrate impressions and clicks while the revenue column stays empty.
                                </p>
                                 <div className="mt-auto rounded-lg overflow-hidden border border-white/10 aspect-video relative">
                                    <ViewportAnimationBoundary className="w-full h-full" rootMargin="-15% 0px">
                                        <VanityMetricsAnimation
                                            isPlaying={hoverPlayback.isPlaying(cardIds.vanity)}
                                            className="w-full h-full"
                                            onMouseEnter={() => hoverPlayback.play(cardIds.vanity)}
                                            onMouseLeave={() => hoverPlayback.pauseWithGrace(cardIds.vanity)}
                                        />
                                    </ViewportAnimationBoundary>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default NewReality;
