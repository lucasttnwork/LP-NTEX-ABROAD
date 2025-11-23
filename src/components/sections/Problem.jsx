import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, HelpCircle, Frown, Activity, Search, TrendingDown, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const BentoCard = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className={cn(
            "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 group",
            className
        )}
    >
        {children}
    </motion.div>
);

const Problem = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="problem">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            {/* Seamless Transition Gradient */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent z-0 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"
                    >
                        97% of Meta Ads Campaigns Follow the Same <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-200">Failing Pattern</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400"
                    >
                        Here's what we see every day when we audit UK clinics and studios.
                        The problem isn't Meta. The problem is <strong className="text-white">lack of methodology</strong>.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Week 1-2: The Boost */}
                    <BentoCard className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/10">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 h-full">
                            <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 shrink-0">
                                <Activity className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-mono border border-blue-500/20">Week 1-2</span>
                                    <h3 className="text-xl font-bold text-white">"Let's boost some posts!"</h3>
                                </div>
                                <p className="text-slate-400 leading-relaxed">Random testing without strategy. Throwing budget at the wall to see what sticks, often relying on "Boost Post" buttons or simplified setups without proper tracking.</p>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Week 3-4: The Confusion */}
                    <BentoCard className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-500/10" delay={0.1}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="mb-6 p-4 rounded-2xl bg-orange-500/10 text-orange-400 w-fit">
                                    <HelpCircle className="w-8 h-8" />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-300 text-xs font-mono border border-orange-500/20 mb-4 inline-block">Week 3-4</span>
                                <h3 className="text-xl font-bold text-white mb-3">"Why only likes?"</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">Vanity metrics vs Real results. You see clicks and likes, but your calendar remains empty. The disconnect between engagement and revenue starts to show.</p>
                            </div>
                            <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-slate-500 font-medium">Ad Spend</span>
                                    <div className="h-1.5 w-16 bg-red-500/20 rounded-full overflow-hidden">
                                        <div className="h-full w-[80%] bg-red-500 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-500 font-medium">Bookings</span>
                                    <div className="h-1.5 w-16 bg-slate-700/30 rounded-full overflow-hidden">
                                        <div className="h-full w-[10%] bg-slate-500 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Week 5-8: The Panic */}
                    <BentoCard className="md:col-span-1 bg-gradient-to-br from-red-500/5 to-pink-500/5 border-red-500/10" delay={0.2}>
                        <div className="p-4 rounded-2xl bg-red-500/10 text-red-400 w-fit mb-6">
                            <Search className="w-8 h-8" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-300 text-xs font-mono border border-red-500/20 mb-4 inline-block">Week 5-8</span>
                        <h3 className="text-xl font-bold text-white mb-2">Panic Changes</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Changing audiences, creatives, and offers daily. Zero data accumulation.</p>
                    </BentoCard>

                    {/* Week 9+: The End */}
                    <BentoCard className="md:col-span-1 bg-gradient-to-br from-slate-800/50 to-black/50 border-slate-700/30" delay={0.3}>
                        <div className="p-4 rounded-2xl bg-slate-700/50 text-slate-400 w-fit mb-6">
                            <Frown className="w-8 h-8" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs font-mono border border-slate-600/20 mb-4 inline-block">Week 9+</span>
                        <h3 className="text-xl font-bold text-white mb-2">"Meta doesn't work"</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Giving up on a goldmine because the approach was flawed from the start.</p>
                    </BentoCard>

                    {/* The Core Issue Summary */}
                    <BentoCard className="md:col-span-3 bg-white/5 border-white/10 hover:border-white/20" delay={0.4}>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-left max-w-2xl">
                                <h3 className="text-2xl font-bold text-white mb-2">But Meta Ads is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">mathematics</span>, not magic.</h3>
                                <p className="text-slate-400">The common denominator in all these failing campaigns is the lack of a data-driven methodology. Without a system, you're just gambling.</p>
                            </div>
                            <div className="flex gap-4 shrink-0">
                                <div className="px-6 py-4 rounded-2xl bg-black/40 border border-white/5 text-center min-w-[100px]">
                                    <div className="text-red-400 font-bold text-2xl mb-1">0</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Predictability</div>
                                </div>
                                <div className="px-6 py-4 rounded-2xl bg-black/40 border border-white/5 text-center min-w-[100px]">
                                    <div className="text-red-400 font-bold text-2xl mb-1">High</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">Stress</div>
                                </div>
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
};

export default Problem;
