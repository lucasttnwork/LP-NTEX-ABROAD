import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Timeline = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const phases = [
        {
            phase: "01",
            title: "Exploration",
            subtitle: "Rapid Impact",
            period: "Month 1",
            description: "We launch 10+ AI-generated variations immediately and identify winners within weeks.",
            image: "/src/assets/exploration_phase_visual_1764091514544.png"
        },
        {
            phase: "02",
            title: "Lapidation",
            subtitle: "The Continuous Loop",
            period: "Month 2",
            description: "We polish winners with surgical A/B testing while launching Wave 2 to prevent ad fatigue.",
            image: "/src/assets/lapidation_phase_visual.png"
        },
        {
            phase: "03",
            title: "Escalation",
            subtitle: "Compounding Growth",
            period: "Month 3+",
            description: "We scale budgets confidently on proven campaigns while continuously refreshing creatives.",
            image: "/src/assets/escalation_phase_visual_1764091702926.png"
        },
        {
            phase: "04",
            title: "Extraction",
            subtitle: "Maximum Value",
            period: "Ongoing",
            description: "We maximize customer lifetime value through smart retention and remarketing sequences.",
            image: "/src/assets/extraction_phase_visual_1764091726420.png"
        }
    ];

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = container.offsetWidth * 0.8;
        const newScrollLeft = direction === 'left'
            ? container.scrollLeft - scrollAmount
            : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setCanScrollLeft(container.scrollLeft > 20);
        setCanScrollRight(
            container.scrollLeft < container.scrollWidth - container.offsetWidth - 20
        );
    };

    return (
        <section id="process" className="section-padding relative overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
                            The Process in Action
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-gradient-silver-fade">From Chaos to Predictability</span>
                        </h2>
                        <p className="text-xl text-white/60">
                            Here is what happens when a business stops guessing and starts engineering growth with NTEX.
                        </p>
                    </motion.div>
                </div>

                {/* Horizontal Scrolling Cards */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => scroll('left')}
                        className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full glass-panel items-center justify-center transition-all duration-300 ${canScrollLeft ? 'opacity-100 hover:scale-110' : 'opacity-0 pointer-events-none'
                            }`}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full glass-panel items-center justify-center transition-all duration-300 ${canScrollRight ? 'opacity-100 hover:scale-110' : 'opacity-0 pointer-events-none'
                            }`}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:-mx-12 md:px-12"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {phases.map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                                className="flex-shrink-0 w-[85vw] md:w-[420px] snap-center group"
                            >
                                <div className="relative h-full">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-900/50 border border-white/10">
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <img
                                            src={phase.image}
                                            alt={phase.title}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        />

                                        {/* Phase Number Overlay */}
                                        <div className="absolute top-6 left-6">
                                            <div className="relative">
                                                <div className="text-8xl font-bold opacity-10 text-white leading-none">
                                                    {phase.phase}
                                                </div>
                                                <div className="absolute top-2 left-2 text-4xl font-bold text-white/90">
                                                    {phase.phase}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Period Badge */}
                                        <div className="absolute top-6 right-6">
                                            <div className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                                                <span className="text-xs font-mono text-accent tracking-wider">
                                                    {phase.period}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                                                {phase.title}
                                            </h3>
                                            <p className="text-sm font-medium text-white/40 uppercase tracking-wider">
                                                {phase.subtitle}
                                            </p>
                                        </div>

                                        <p className="text-white/70 text-sm leading-relaxed">
                                            {phase.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Scroll Indicator (Mobile) */}
                    <div className="md:hidden flex justify-center gap-2 mt-6">
                        {phases.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-white/20"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Timeline;
