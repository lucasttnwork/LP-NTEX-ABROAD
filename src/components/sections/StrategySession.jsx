import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, Calculator, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const StrategySession = () => {
    const steps = [
        {
            icon: Search,
            title: 'Analyse your current situation',
            desc: 'What you\'re spending vs what you\'re getting. Where the gaps are.',
        },
        {
            icon: Calendar,
            title: 'Map out your ELEE implementation',
            desc: 'Which offers to test. Expected costs. Realistic timeline.',
        },
        {
            icon: Calculator,
            title: 'Calculate your numbers',
            desc: 'Probable cost per booking. ROI projections. Break-even point.',
        },
        {
            icon: CheckCircle,
            title: 'Decide on fit',
            desc: 'If ELEE makes sense, we explain next steps. If not, we tell you why.',
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300" id="strategy">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
                            See How ELEE Would Work for <span className="text-primary">Your Specific Business</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                            No pitch. No pressure. Just mathematical analysis of whether ELEE fits your business.
                        </p>

                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <step.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-navy dark:text-white text-lg mb-1">{step.title}</h3>
                                        <p className="text-slate-500">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl rotate-2 opacity-20 blur-xl" />
                        <Card className="relative border-slate-200 shadow-2xl">
                            <CardContent className="p-10 text-center">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Calendar className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy dark:text-white mb-2">Free ELEE Strategy Session</h3>
                                <p className="text-slate-500 mb-8">30 Minute Video Call • Expert Analysis</p>

                                <Button variant="cta" size="lg" className="w-full h-14 text-lg mb-4">
                                    Book Your Free Session
                                </Button>

                                <p className="text-xs text-slate-400">
                                    "This isn't a sales call. It's a business analysis. Come with your numbers, leave with clarity."
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default StrategySession;
