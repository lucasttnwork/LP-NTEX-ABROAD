import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Diamond, TrendingUp, Filter, ArrowRight, Check, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

const ELEE = () => {
    const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
            id: 'E1',
            letter: 'E',
            name: 'Exploration',
            days: 'Days 1-10',
            icon: Compass,
            color: 'text-blue-400',
            gradient: 'from-blue-500 to-cyan-400',
            desc: 'Test Wide, Fail Fast, Learn Faster',
            details: [
                'Test 10-20 variations simultaneously',
                'AI generates 4-6 offer angles',
                'Identify "diamonds in the rough"',
                'Output: 2-3 winning combinations'
            ]
        },
        {
            id: 'L',
            letter: 'L',
            name: 'Lapidation',
            days: 'Days 10-15',
            icon: Diamond,
            color: 'text-emerald-400',
            gradient: 'from-emerald-500 to-teal-400',
            desc: 'Polish the Diamonds',
            details: [
                'Surgical A/B testing of headlines/creatives',
                'Micro-optimisation of winning ads',
                'Reduce cost per booking by 20-40%',
                'Output: High-converting, stable ads'
            ]
        },
        {
            id: 'E2',
            letter: 'E',
            name: 'Escalation',
            days: 'Days 15-25',
            icon: TrendingUp,
            color: 'text-orange-400',
            gradient: 'from-orange-500 to-amber-400',
            desc: 'Bet Big on Certainty',
            details: [
                'Scale budget on proven winners (70% spend)',
                'Audience expansion algorithms',
                'Volume increases 3-5x',
                'Output: Scaled volume at stable CPL'
            ]
        },
        {
            id: 'E3',
            letter: 'E',
            name: 'Extraction',
            days: 'Ongoing',
            icon: Filter,
            color: 'text-purple-400',
            gradient: 'from-purple-500 to-pink-400',
            desc: 'Maximise Lifetime Value',
            details: [
                'Remarketing to non-converters',
                'Upsell campaigns for existing clients',
                'Reactivation of dormant leads',
                'Output: 30-50% revenue increase'
            ]
        }
    ];

    return (
        <section className="py-24 bg-linear-main relative overflow-hidden" id="methodology">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium text-primary tracking-wide uppercase">The Methodology</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        From Gambling to <span className="text-gradient-silver">Engineering</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        ELEE is our proprietary 4-phase cycle that transforms ad spend into predictable revenue.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Phase Navigation */}
                    <div className="lg:col-span-5 space-y-4">
                        {phases.map((phase, index) => (
                            <button
                                key={phase.id}
                                onClick={() => setActivePhase(index)}
                                className={cn(
                                    "w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group",
                                    activePhase === index
                                        ? "bg-white/5 border-primary/50 shadow-[0_0_30px_-10px_rgba(94,106,210,0.3)]"
                                        : "bg-transparent border-white/5 hover:bg-white/[0.02] hover:border-white/10"
                                )}
                            >
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-300",
                                        activePhase === index
                                            ? `bg-gradient-to-br ${phase.gradient} text-white shadow-lg`
                                            : "bg-white/5 text-slate-500 group-hover:text-slate-300"
                                    )}>
                                        <phase.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className={cn(
                                                "text-lg font-bold transition-colors",
                                                activePhase === index ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                                            )}>
                                                {phase.name}
                                            </h3>
                                            <span className="text-xs font-mono text-slate-500 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                                                {phase.days}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-500">
                                            {phase.desc}
                                        </p>
                                    </div>
                                </div>
                                {activePhase === index && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Phase Details Display */}
                    <div className="lg:col-span-7 relative min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePhase}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                transition={{ duration: 0.4 }}
                                className="h-full"
                            >
                                <div className="h-full glass-panel rounded-3xl p-1 border-white/10 relative overflow-hidden">
                                    {/* Dynamic Background Gradient */}
                                    <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${phases[activePhase].gradient} opacity-10 blur-[100px] rounded-full pointer-events-none`} />

                                    <div className="bg-navy/80 backdrop-blur-xl rounded-[20px] p-8 md:p-10 h-full relative z-10 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className={`p-3 rounded-xl bg-gradient-to-br ${phases[activePhase].gradient} bg-opacity-10`}>
                                                    {React.createElement(phases[activePhase].icon, { className: "w-8 h-8 text-white" })}
                                                </div>
                                                <div>
                                                    <h3 className="text-3xl font-bold text-white mb-1">{phases[activePhase].name} Phase</h3>
                                                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${phases[activePhase].gradient} font-medium`}>
                                                        {phases[activePhase].desc}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                {phases[activePhase].details.map((detail, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 + i * 0.1 }}
                                                        className="flex items-start gap-4 group"
                                                    >
                                                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phases[activePhase].gradient}`} />
                                                        <span className="text-slate-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                                                            {detail}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-12 pt-8 border-t border-white/5">
                                            <div className="bg-white/5 rounded-xl p-6 border border-white/5 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
                                                <h4 className="font-bold text-sm text-white mb-2 flex items-center gap-2 relative z-10">
                                                    <Sparkles className="w-4 h-4 text-primary" />
                                                    AI Advantage
                                                </h4>
                                                <p className="text-sm text-slate-400 relative z-10">
                                                    Our AI analyses performance patterns across 50+ data points to identify which micro-changes drive macro results in this phase.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ELEE;
