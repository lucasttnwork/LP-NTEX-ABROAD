import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Diamond, TrendingUp, Filter, ArrowRight, Check } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const ELEE = () => {
    const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
            id: 'E1',
            letter: 'E',
            name: 'Exploration',
            days: 'Days 1-10',
            icon: Compass,
            color: 'text-blue-500',
            bg: 'bg-blue-50',
            border: 'border-blue-200',
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
            color: 'text-emerald-500',
            bg: 'bg-emerald-50',
            border: 'border-emerald-200',
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
            color: 'text-orange-500',
            bg: 'bg-orange-50',
            border: 'border-orange-200',
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
            color: 'text-purple-500',
            bg: 'bg-purple-50',
            border: 'border-purple-200',
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
        <section className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300" id="methodology">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="elee" className="mb-4">The Methodology</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
                        Introducing <span className="text-primary">ELEE</span>: The Only Meta Ads System Built for Predictable Growth
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        ELEE is our proprietary 4-phase methodology that transforms Meta Ads from gambling into engineering.
                        It's a continuous cycle that maximises every £1 of ad spend.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Interactive Diagram */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto relative z-10">
                            {phases.map((phase, index) => (
                                <motion.button
                                    key={phase.id}
                                    onClick={() => setActivePhase(index)}
                                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${activePhase === index
                                        ? `${phase.bg} ${phase.border} shadow-lg scale-105`
                                        : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600 hover:shadow-md'
                                        }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className={`w-12 h-12 rounded-full ${phase.bg} ${phase.color} flex items-center justify-center mb-4 text-xl font-bold`}>
                                        <phase.icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-4xl font-bold text-slate-200 absolute top-4 right-4 opacity-50">
                                        {phase.letter}
                                    </div>
                                    <h3 className={`font-bold text-lg mb-1 ${activePhase === index ? 'text-navy' : 'text-slate-700 dark:text-slate-300'}`}>
                                        {phase.name}
                                    </h3>
                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/50 text-slate-500">
                                        {phase.days}
                                    </span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Connecting Circle Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl -z-10 transform scale-150" />
                    </div>

                    {/* Phase Details */}
                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePhase}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="border-none shadow-xl bg-white dark:bg-slate-800 overflow-hidden">
                                    <div className={`h-2 w-full ${phases[activePhase].bg.replace('bg-', 'bg-').replace('50', '500')}`} />
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`p-3 rounded-xl ${phases[activePhase].bg} ${phases[activePhase].color}`}>
                                                {React.createElement(phases[activePhase].icon, { className: "w-8 h-8" })}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-navy dark:text-white">{phases[activePhase].name}</h3>
                                                <p className="text-slate-500 font-medium">{phases[activePhase].desc}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            {phases[activePhase].details.map((detail, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className={`mt-1 p-0.5 rounded-full ${phases[activePhase].bg} ${phases[activePhase].color}`}>
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-4 border border-slate-100 dark:border-slate-600">
                                            <h4 className="font-bold text-sm text-navy dark:text-white mb-2 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                                AI Advantage
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                                Our AI analyses performance patterns across 50+ data points to identify which micro-changes drive macro results in this phase.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ELEE;
