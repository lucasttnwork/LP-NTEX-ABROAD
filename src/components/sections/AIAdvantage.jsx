import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, BarChart3, Layers, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const AIAdvantage = () => {
    const features = [
        {
            title: 'AI in Exploration',
            desc: 'Generate 20+ ad variations in minutes, not days. Predict success probability before spending a penny.',
            icon: Zap,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
        },
        {
            title: 'AI in Lapidation',
            desc: 'Identify micro-patterns humans miss. Calculate statistical significance in real-time.',
            icon: Cpu,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
        },
        {
            title: 'AI in Escalation',
            desc: 'Predict scaling breakpoints. Optimise budgets across campaigns automatically 24/7.',
            icon: BarChart3,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
        },
        {
            title: 'AI in Extraction',
            desc: 'Segment audiences by behaviour. Personalise messaging at scale for maximum LTV.',
            icon: Layers,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
        },
    ];

    return (
        <section className="py-20 bg-navy text-white overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:32px_32px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <Badge variant="elee" className="mb-6">Powered by Intelligence</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            How AI Supercharges <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                Every Phase of ELEE
                            </span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-8">
                            We don't use AI as a buzzword. We use it as a force multiplier.
                            AI doesn't replace strategy — it executes strategy at a speed and precision impossible for humans alone.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                                >
                                    <div className={`w-10 h-10 rounded-lg ${feature.bg} ${feature.color} flex items-center justify-center mb-4`}>
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual / Dashboard Mockup */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
                                {/* Fake Browser Header */}
                                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="ml-4 bg-slate-900 px-3 py-1 rounded text-xs text-slate-400 font-mono flex-1">
                                        ntex-ai-engine.internal/dashboard
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="p-6 grid gap-6">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Active Campaign</div>
                                            <div className="font-bold text-white">Summer Glow Offer - V2</div>
                                        </div>
                                        <Badge variant="success" className="animate-pulse">Optimising</Badge>
                                    </div>

                                    {/* Chart Area */}
                                    <div className="h-32 bg-slate-800/50 rounded-lg relative overflow-hidden flex items-end px-2 pb-2 gap-1">
                                        {[40, 65, 45, 70, 55, 80, 60, 85, 75, 90, 65, 95].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                                className="flex-1 bg-primary/50 hover:bg-primary transition-colors rounded-t-sm"
                                            />
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-800/50 p-4 rounded-lg">
                                            <div className="text-xs text-slate-400 mb-1">Variations Tested</div>
                                            <div className="text-2xl font-bold text-white">24</div>
                                            <div className="text-xs text-success flex items-center gap-1 mt-1">
                                                <ArrowRight className="w-3 h-3 rotate-[-45deg]" /> +12 today
                                            </div>
                                        </div>
                                        <div className="bg-slate-800/50 p-4 rounded-lg">
                                            <div className="text-xs text-slate-400 mb-1">Cost Per Result</div>
                                            <div className="text-2xl font-bold text-white">£14.20</div>
                                            <div className="text-xs text-success flex items-center gap-1 mt-1">
                                                <ArrowRight className="w-3 h-3 rotate-[45deg]" /> -18% vs avg
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Elements behind */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAdvantage;
