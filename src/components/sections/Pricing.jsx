import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

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
        <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="elee" className="mb-4">Transparent Investment</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
                        Transparent Pricing for a <span className="text-primary">Transparent System</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
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
                        <Card className="h-full border-slate-200 shadow-lg">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-8">Your Monthly Investment</h3>

                                <div className="space-y-8">
                                    <div className="flex justify-between items-start pb-8 border-b border-slate-100">
                                        <div>
                                            <h4 className="font-bold text-lg text-navy dark:text-white mb-1">ELEE Management & AI Tools</h4>
                                            <p className="text-sm text-slate-500">Full implementation & optimisation</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-navy dark:text-white">£1,000</div>
                                            <div className="text-xs text-slate-400">/month</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="font-bold text-lg text-navy dark:text-white">Your Meta Ad Budget</h4>
                                            <div className="text-2xl font-bold text-primary">£{budget.toLocaleString()}</div>
                                        </div>

                                        <input
                                            type="range"
                                            min="2000"
                                            max="10000"
                                            step="500"
                                            value={budget}
                                            onChange={(e) => setBudget(parseInt(e.target.value))}
                                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary mb-2"
                                        />
                                        <div className="flex justify-between text-xs text-slate-400">
                                            <span>£2,000</span>
                                            <span>£10,000</span>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 rounded-xl p-6 space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Phase 1 (Exploration)</span>
                                            <span className="font-medium text-navy dark:text-white">~£{(budget * 0.2).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Phase 2 (Lapidation)</span>
                                            <span className="font-medium text-navy dark:text-white">~£{(budget * 0.1).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Phase 3 (Escalation)</span>
                                            <span className="font-medium text-navy dark:text-white">~£{(budget * 0.6).toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Phase 4 (Extraction)</span>
                                            <span className="font-medium text-navy dark:text-white">~£{(budget * 0.1).toLocaleString()}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-slate-700">Total Monthly Investment</span>
                                            <span className="text-3xl font-bold text-navy dark:text-white">£{(budget + 1000).toLocaleString()}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 text-right">Minimum commitment: 3 months</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* ROI Projection */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="bg-navy text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <h3 className="text-2xl font-bold mb-8 relative z-10">Projected Month 3 Return</h3>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-success" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400">Estimated Revenue</div>
                                        <div className="text-3xl font-bold text-success">
                                            £{revenueLow.toLocaleString()} - £{revenueHigh.toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                <div className="h-px bg-white/10 my-6" />

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary mt-0.5" />
                                        <p className="text-sm text-slate-300">
                                            Based on conservative 30% booking conversion
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary mt-0.5" />
                                        <p className="text-sm text-slate-300">
                                            Assumes £500 average treatment value (Clinics)
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary mt-0.5" />
                                        <p className="text-sm text-slate-300">
                                            Includes extraction from existing leads
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button
                                        variant="cta"
                                        className="w-full h-12 text-lg"
                                        onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Calculate Your Exact ROI
                                    </Button>
                                    <p className="text-xs text-center text-slate-500 mt-3">
                                        Book a strategy call for a custom analysis
                                    </p>
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
