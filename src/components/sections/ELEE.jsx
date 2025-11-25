import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Gem, TrendingUp, Repeat, ArrowRight } from 'lucide-react';

const ELEE = () => {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 40vh", "end end"]
    });

    const phases = [
        {
            letter: "E",
            title: "Exploration",
            number: "01",
            desc: "Rapidly test offers, angles, and creatives using AI to find winners fast.",
            fullDesc: "Speed wins. While others take weeks to design one concept, our AI systems analyze top-performing market patterns to generate high-converting creative variations 5x faster.",
            icon: <Search className="w-5 h-5 text-white" />,
            color: "from-blue-400 to-blue-600",
            tags: ["AI TESTING", "RAPID DEPLOYMENT"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        },
        {
            letter: "L",
            title: "Lapidation",
            number: "02",
            desc: "Polish the 'diamonds' with surgical A/B testing to lower costs.",
            fullDesc: "Math over magic. We track over 20 data points to understand exactly why an ad works. We optimize based on statistical significance, not gut feeling.",
            icon: <Gem className="w-5 h-5 text-white" />,
            color: "from-purple-400 to-purple-600",
            tags: ["A/B TESTING", "OPTIMIZATION"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        },
        {
            letter: "E",
            title: "Escalation",
            number: "03",
            desc: "Scale budgets confidently on campaigns that are statistically proven to convert.",
            fullDesc: "Our systems monitor performance 24/7, identifying fatigue before it happens and spotting scaling opportunities the moment they appear.",
            icon: <TrendingUp className="w-5 h-5 text-white" />,
            color: "from-emerald-400 to-emerald-600",
            tags: ["SCALING", "PERFORMANCE"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        },
        {
            letter: "E",
            title: "Extraction",
            number: "04",
            desc: "Maximize customer lifetime value through smart retention and remarketing sequences.",
            fullDesc: "The work never stops. Continuous optimization ensures we maximize every customer relationship and identify new opportunities in real-time.",
            icon: <Repeat className="w-5 h-5 text-white" />,
            color: "from-orange-400 to-orange-600",
            tags: ["RETENTION", "LTV MAXIMIZATION"],
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
        }
    ];

    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            const step = Math.min(Math.floor(latest * phases.length), phases.length - 1);
            setActiveStep(step);
        });
    }, [scrollYProgress, phases.length]);

    return (
        <section
            ref={sectionRef}
            id="methodology"
            className="relative bg-black"
            style={{ height: `${phases.length * 75}vh` }}
        >
            {/* Fixed container */}
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">

                        {/* Left side - Navigation */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
                                    Our Framework
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    <span className="text-gradient-platinum">Powered by the ELEE Method</span>
                                </h2>
                                <p className="text-xl text-white/60">
                                    A continuous 4-phase cycle engineered for consistent growth
                                </p>
                            </motion.div>

                            {/* Step Navigation */}
                            <div className="space-y-4">
                                {phases.map((phase, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`relative group cursor-pointer transition-all duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-30 hover:opacity-60'
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            {/* Number indicator */}
                                            <div className="relative">
                                                <span className={`text-sm font-mono text-white/40 transition-colors duration-300 ${activeStep === index ? 'text-accent' : ''
                                                    }`}>
                                                    {phase.number}
                                                </span>
                                                {activeStep === index && (
                                                    <motion.div
                                                        layoutId="activeIndicator"
                                                        className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-full"
                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    />
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <h3 className={`text-2xl md:text-3xl font-medium mb-2 transition-all duration-300 ${activeStep === index
                                                    ? 'text-white'
                                                    : 'text-white/50'
                                                    }`}>
                                                    {phase.title}
                                                </h3>
                                                <p className={`text-sm text-white/60 transition-all duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-0 h-0'
                                                    }`}>
                                                    {phase.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right side - Card Display */}
                        <div className="relative h-[600px] flex items-center justify-center">
                            {phases.map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{
                                        opacity: activeStep === index ? 1 : 0,
                                        scale: activeStep === index ? 1 : 0.9,
                                        y: activeStep === index ? 0 : 20
                                    }}
                                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{ pointerEvents: activeStep === index ? 'auto' : 'none' }}
                                >
                                    {/* Glass Card */}
                                    <div
                                        className="glass-effect w-full max-w-xl h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em]"
                                        style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
                                    >
                                        {/* Border effects */}
                                        <div
                                            className="absolute inset-0 border-white/20 border rounded-[1.2em]"
                                            style={{ maskImage: 'linear-gradient(135deg, white, transparent 60%)' }}
                                        />
                                        <div
                                            className="absolute inset-0 border-white/10 border rounded-[1.2em]"
                                            style={{ maskImage: 'linear-gradient(135deg, transparent 60%, white)' }}
                                        />

                                        <div className="flex flex-col h-full pt-6 pr-6 pb-7 pl-6">
                                            {/* Header */}
                                            <div className="flex mb-2 items-start justify-between">
                                                <div className="w-full">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${phase.color}`}>
                                                            {phase.icon}
                                                        </span>
                                                        <h3 className="text-lg font-semibold tracking-tight font-sans">
                                                            {phase.title}
                                                        </h3>
                                                    </div>
                                                    <p className="text-neutral-300 text-sm font-light mb-4 font-sans">
                                                        {phase.fullDesc}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Inner dark card */}
                                            <article className="relative overflow-hidden sm:p-5 h-80 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
                                                <div className="absolute inset-0"></div>
                                                <div className="relative z-10 h-full flex flex-col">
                                                    {/* Browser dots */}
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex items-center gap-1">
                                                            <span className="h-1 w-1 rounded-full bg-zinc-300"></span>
                                                            <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
                                                            <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
                                                        </div>
                                                        <span className="text-[11px] text-zinc-500 font-normal font-mono">
                                                            {phase.number}
                                                        </span>
                                                    </div>

                                                    {/* Image area */}
                                                    <div
                                                        className="flex-1 flex flex-col bg-cover bg-center rounded-lg mt-2 mb-2 pt-6 pb-6 items-center justify-center relative overflow-hidden"
                                                        style={{
                                                            backgroundImage: `url(${phase.image})`,
                                                        }}
                                                    >
                                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                                                        {/* Large letter overlay */}
                                                        <div className="relative z-10 text-8xl font-bold text-white/10 font-mono">
                                                            {phase.letter}
                                                        </div>
                                                    </div>

                                                    {/* Bottom content */}
                                                    <div className="mt-auto">
                                                        <h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100">
                                                            {phase.desc}
                                                        </h3>
                                                        <p className="mt-1 text-sm text-zinc-400">
                                                            Phase {phase.number} of continuous optimization
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            {/* Divider */}
                                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-3"></div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {phase.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-300 font-sans"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Learn more link */}
                                            <div className="mt-2 inline-flex items-center text-sm font-medium text-neutral-300 font-sans group cursor-pointer">
                                                Learn more
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ELEE;
