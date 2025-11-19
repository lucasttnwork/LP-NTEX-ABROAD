import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Building2, Brain, Target } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

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
        <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">Ideal Client Profile</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
                        ELEE Works Best For Businesses Ready to <span className="text-primary">Stop Guessing</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Ideal Client */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-success/20 shadow-lg overflow-hidden">
                            <div className="bg-success/10 p-6 border-b border-success/10">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-success rounded-full text-white">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy dark:text-white">You're Perfect for ELEE If:</h3>
                                </div>
                            </div>

                            <CardContent className="p-8 space-y-8">
                                <div>
                                    <div className="flex items-center gap-2 mb-4 text-success font-bold">
                                        <Building2 className="w-5 h-5" />
                                        <h4>Your Business</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {idealClient.business.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                                <CheckCircle className="w-5 h-5 shrink-0 text-success mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-4 text-success font-bold">
                                        <Brain className="w-5 h-5" />
                                        <h4>Your Mindset</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {idealClient.mindset.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                                <CheckCircle className="w-5 h-5 shrink-0 text-success mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-4 text-success font-bold">
                                        <Target className="w-5 h-5" />
                                        <h4>Your Goals</h4>
                                    </div>
                                    <ul className="space-y-3">
                                        {idealClient.goals.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                                <CheckCircle className="w-5 h-5 shrink-0 text-success mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Not Ideal Client */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="h-full border-slate-200 bg-white/50">
                            <div className="bg-slate-100 p-6 border-b border-slate-200">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-slate-400 rounded-full text-white">
                                        <XCircle className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-600">ELEE Isn't Right If:</h3>
                                </div>
                            </div>

                            <CardContent className="p-8">
                                <ul className="space-y-6">
                                    {notIdeal.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-500">
                                            <XCircle className="w-5 h-5 shrink-0 text-slate-400 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-12 p-6 bg-slate-100 rounded-xl border border-slate-200 text-center">
                                    <p className="text-slate-600 text-sm">
                                        We prefer to be transparent. If you're not ready for a systematic approach, we're not the right partner for you.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ICP;
