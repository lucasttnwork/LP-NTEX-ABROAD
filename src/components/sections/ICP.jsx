import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Building2, Brain, Target, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const ICP = () => {
    const idealClient = {
        business: [
            'UK aesthetic clinic OR boutique fitness studio',
            'Average customer value £200+ (clinics) or £60+/month (gyms)',
            'Capacity for 20+ new clients monthly',
            'Currently doing £20k+ monthly revenue'
        ],
        mindset: [
            'Tired of random testing without system',
            'Want predictable customer acquisition costs',
            'Ready to invest £2,000-10,000/month for 3+ months',
            'Prefer data over creative guesswork'
        ],
        goals: [
            'Know your cost per customer within 30 days',
            'Scale confidently based on proven data',
            'Build a customer acquisition machine'
        ]
    };

    const notIdeal = [
        'You need results in 14 days (ELEE needs 4-6 weeks)',
        'Your budget is under £2,000/month',
        'You want to "try Facebook for a month"',
        'You don\'t know your customer lifetime value',
        'You prefer creative experiments over systematic testing'
    ];

    return (
        <section className="py-24 bg-linear-main relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="text-xs font-medium text-primary tracking-wide uppercase">Ideal Client Profile</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Who is ELEE <span className="text-gradient-silver">Engineered For?</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        We don't work with everyone. Our system is designed for businesses ready to scale with precision.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Ideal Client - Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-full glass-panel rounded-3xl p-1 border-primary/30">
                            <div className="h-full bg-navy/50 rounded-[20px] p-8 md:p-10 overflow-hidden relative">
                                {/* Green Glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] pointer-events-none" />

                                <div className="flex items-center gap-4 mb-10 relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/20">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">The Perfect Match</h3>
                                        <p className="text-slate-400 text-sm">Ready for systematic growth</p>
                                    </div>
                                </div>

                                <div className="space-y-10 relative z-10">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4 text-green-400 font-bold uppercase text-xs tracking-wider">
                                            <Building2 className="w-4 h-4" />
                                            <span>Business Criteria</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {idealClient.business.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-4 text-green-400 font-bold uppercase text-xs tracking-wider">
                                            <Brain className="w-4 h-4" />
                                            <span>Required Mindset</span>
                                        </div>
                                        <ul className="space-y-3">
                                            {idealClient.mindset.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Not Ideal Client - Muted Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-full"
                    >
                        <div className="h-full rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.04] transition-colors">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/10">
                                    <XCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-200">Not a Good Fit</h3>
                                    <p className="text-slate-500 text-sm">When we step back</p>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {notIdeal.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400">
                                        <XCircle className="w-5 h-5 shrink-0 text-red-500/50 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    "We prefer to be transparent. If you're not ready for a systematic approach, we're not the right partner for you."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ICP;
