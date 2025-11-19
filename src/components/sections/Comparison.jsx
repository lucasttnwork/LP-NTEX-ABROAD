import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
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
        <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">The Difference</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
                        Why ELEE Beats Traditional Agency Approaches Every Time
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
                            <Card className="h-full border-slate-200 bg-slate-50 rounded-r-none md:rounded-r-none rounded-l-xl">
                                <CardContent className="p-8">
                                    <h3 className="text-xl font-bold text-slate-500 mb-8 text-center">Traditional Agencies</h3>
                                    <div className="space-y-8">
                                        {comparisons.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-slate-500">
                                                <X className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                                                <span className="text-sm">{item.traditional}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                                        <div className="text-sm text-slate-500 mb-1">Time to results</div>
                                        <div className="font-bold text-slate-700">6-12 Months</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* NTEX Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 relative z-10 -my-4 md:-ml-4 shadow-2xl rounded-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark rounded-xl transform rotate-1 opacity-10 -z-10" />
                            <Card className="h-full border-primary bg-navy text-white rounded-xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="20" />
                                    </svg>
                                </div>

                                <CardContent className="p-8 md:p-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-2xl font-bold text-white">NTEX with ELEE</h3>
                                        <Badge variant="elee">Recommended</Badge>
                                    </div>

                                    <div className="space-y-8">
                                        {comparisons.map((item, i) => (
                                            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                                <div className="text-sm text-slate-400 font-medium md:col-span-1">{item.feature}</div>
                                                <div className="flex items-start gap-3 md:col-span-2">
                                                    <Check className="w-5 h-5 shrink-0 text-success mt-0.5" />
                                                    <span className="text-base font-medium">{item.ntex}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-slate-400 mb-1">Time to results</div>
                                            <div className="text-2xl font-bold text-success">4-6 Weeks</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-slate-400 mb-1">Success Probability</div>
                                            <div className="text-2xl font-bold text-white">High</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
