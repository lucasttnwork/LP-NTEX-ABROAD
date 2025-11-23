import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Badge } from '../ui/badge';

const Comparison = () => {
    const comparisons = [
        {
            feature: 'Testing Volume',
            traditional: 'Test 3-5 ads',
            ntex: 'Test 15-20 variations systematically',
        },
        {
            feature: 'Strategy',
            traditional: 'Guess what might work',
            ntex: 'Use data to identify patterns',
        },
        {
            feature: 'Scaling',
            traditional: 'Scale randomly',
            ntex: 'Scale only proven winners',
        },
        {
            feature: 'Focus',
            traditional: 'New customers only',
            ntex: 'Acquisition AND Retention',
        },
        {
            feature: 'Optimization',
            traditional: 'Change everything when failing',
            ntex: 'Isolate variables & optimise precisely',
        },
        {
            feature: 'Reporting',
            traditional: 'Monthly reporting',
            ntex: 'Real-time AI analysis',
        },
    ];

    return (
        <section className="py-24 bg-linear-main relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="text-xs font-medium text-primary tracking-wide uppercase">The Difference</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Why ELEE Beats Traditional <span className="text-gradient-silver">Agency Approaches</span>
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-0">
                        {/* Traditional Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-1"
                        >
                            <div className="h-full border border-white/5 bg-white/[0.02] rounded-2xl md:rounded-r-none md:rounded-l-3xl p-8">
                                <h3 className="text-xl font-bold text-slate-400 mb-8 text-center">Traditional Agencies</h3>
                                <div className="space-y-8">
                                    {comparisons.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-slate-500">
                                            <X className="w-5 h-5 shrink-0 text-red-500/50 mt-0.5" />
                                            <span className="text-sm">{item.traditional}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                                    <div className="text-sm text-slate-500 mb-1">Time to results</div>
                                    <div className="font-bold text-slate-400">6-12 Months</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* NTEX Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 relative z-10 -my-4 md:-ml-4"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-20" />
                            <div className="h-full glass-panel rounded-3xl p-1 border-primary/30 relative">
                                <div className="bg-navy/80 backdrop-blur-xl rounded-[20px] p-8 md:p-10 h-full overflow-hidden relative">
                                    {/* Background Glow */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                                    <div className="flex items-center justify-between mb-8 relative z-10">
                                        <h3 className="text-2xl font-bold text-white">NTEX with ELEE</h3>
                                        <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
                                            Recommended
                                        </div>
                                    </div>

                                    <div className="space-y-8 relative z-10">
                                        {comparisons.map((item, i) => (
                                            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                                <div className="text-sm text-slate-400 font-medium md:col-span-1">{item.feature}</div>
                                                <div className="flex items-start gap-3 md:col-span-2">
                                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    <span className="text-base font-medium text-white">{item.ntex}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between relative z-10">
                                        <div>
                                            <div className="text-sm text-slate-400 mb-1">Time to results</div>
                                            <div className="text-2xl font-bold text-green-400">4-6 Weeks</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-slate-400 mb-1">Success Probability</div>
                                            <div className="text-2xl font-bold text-white">High</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
