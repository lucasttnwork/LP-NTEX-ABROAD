import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const Pricing = () => {
    const [budget, setBudget] = useState(3000);

    const calculateROI = (adSpend) => {
        // Logic based on copy: Month 3 generates £5,250-6,000 revenue from £3,000 investment
        // Ratio approx 2x revenue on ad spend in Month 3
        const revenueLow = Math.round(adSpend * 1.75);
        const revenueHigh = Math.round(adSpend * 2.0);
        return { revenueLow, revenueHigh };
    };

    const { revenueLow, revenueHigh } = calculateROI(budget);

    return (
        <section className="py-24 bg-linear-main relative overflow-hidden" id="pricing">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="text-xs font-medium text-primary tracking-wide uppercase">Transparent Investment</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Transparent Pricing for a <span className="text-gradient-silver">Transparent System</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        No hidden fees. No "percentage of spend" surprises. Just a flat fee for our engineering + your ad budget.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Investment Breakdown */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full glass-panel rounded-3xl p-8 md:p-10">
                            <h3 className="text-2xl font-bold text-white mb-8">Your Monthly Investment</h3>

                            <div className="space-y-8">
                                <div className="flex justify-between items-start pb-8 border-b border-white/10">
                                    <div>
                                        <h4 className="font-bold text-lg text-white mb-1">ELEE Management & AI Tools</h4>
                                        <p className="text-sm text-slate-400">Full implementation & optimisation</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-white">£1,000</div>
                                        <div className="text-xs text-slate-500">/month</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h4 className="font-bold text-lg text-white">Your Meta Ad Budget</h4>
                                        <div className="text-2xl font-bold text-primary">£{budget.toLocaleString()}</div>
                                    </div>

                                    <input
                                        type="range"
                                        min="2000"
                                        max="10000"
                                        step="500"
                                        value={budget}
                                        onChange={(e) => setBudget(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary mb-2 hover:bg-white/20 transition-colors"
                                    />
                                    <div className="flex justify-between text-xs text-slate-500">
                                        <span>£2,000</span>
                                        <span>£10,000</span>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-xl p-6 space-y-3 border border-white/5">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Phase 1 (Exploration)</span>
                                        <span className="font-medium text-white">~£{(budget * 0.2).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Phase 2 (Lapidation)</span>
                                        <span className="font-medium text-white">~£{(budget * 0.1).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Phase 3 (Escalation)</span>
                                        <span className="font-medium text-white">~£{(budget * 0.6).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-400">Phase 4 (Extraction)</span>
                                        <span className="font-medium text-white">~£{(budget * 0.1).toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-bold text-slate-300">Total Monthly Investment</span>
                                        <span className="text-3xl font-bold text-white">£{(budget + 1000).toLocaleString()}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 text-right">Minimum commitment: 3 months</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ROI Projection */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-1 border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div className="bg-navy/90 backdrop-blur-xl rounded-[20px] p-8 md:p-10 h-full relative z-10">
                                <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                    <Sparkles className="w-6 h-6 text-accent" />
                                    Projected Month 3 Return
                                </h3>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/20">
                                            <TrendingUp className="w-8 h-8 text-green-400" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-400 mb-1">Estimated Revenue</div>
                                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                                                £{revenueLow.toLocaleString()} - £{revenueHigh.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-px bg-white/10" />

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <p className="text-sm text-slate-300">
                                                Based on conservative 30% booking conversion
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <p className="text-sm text-slate-300">
                                                Assumes £500 average treatment value (Clinics)
                                            </p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <p className="text-sm text-slate-300">
                                                Includes extraction from existing leads
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <Button
                                            variant="cta"
                                            className="w-full h-14 text-lg"
                                            onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                                        >
                                            Calculate Your Exact ROI
                                        </Button>
                                        <p className="text-xs text-center text-slate-500 mt-4">
                                            Book a strategy call for a custom analysis
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
