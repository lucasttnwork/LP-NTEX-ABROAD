import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, HelpCircle, Frown } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const Problem = () => {
    const timelineEvents = [
        {
            week: 'Week 1-2',
            title: "Let's boost some posts!",
            description: "Random testing without strategy",
            icon: AlertTriangle,
            color: 'text-yellow-500',
            bg: 'bg-yellow-50',
        },
        {
            week: 'Week 3-4',
            title: "Why only likes, no bookings?",
            description: "Vanity metrics vs Real results",
            icon: HelpCircle,
            color: 'text-orange-500',
            bg: 'bg-orange-50',
        },
        {
            week: 'Week 5-8',
            title: "Try different everything...",
            description: "Panic changes, zero data",
            icon: XCircle,
            color: 'text-red-500',
            bg: 'bg-red-50',
        },
        {
            week: 'Week 9+',
            title: "Meta Ads don't work.",
            description: "Giving up on a goldmine",
            icon: Frown,
            color: 'text-slate-500',
            bg: 'bg-slate-100',
        },
    ];

    const problems = [
        { title: 'Lack of Methodology', desc: 'Throwing ideas at the wall hoping something sticks' },
        { title: 'Random Testing', desc: 'Changing variables without isolating what works' },
        { title: 'Scaling Too Early', desc: 'Spending budget on unproven campaigns' },
        { title: 'Ignoring LTV', desc: 'Focusing only on the first sale, not the relationship' },
    ];

    return (
        <section className="py-20 bg-white dark:bg-slate-800 overflow-hidden transition-colors duration-300" id="problem">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6"
                    >
                        97% of Meta Ads Campaigns Follow the Same <span className="text-alert">Failing Pattern</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-300"
                    >
                        Here's what we see every day when we audit UK clinics and studios.
                        The problem isn't Meta. The problem is <strong>lack of methodology</strong>.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto mb-20">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="flex-1 w-full md:w-auto text-center md:text-left">
                                    <div className={`md:hidden mb-4 inline-flex p-3 rounded-full ${event.bg} ${event.color}`}>
                                        <event.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy dark:text-white mb-1">{event.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400">{event.description}</p>
                                </div>

                                <div className="relative z-10 flex-shrink-0">
                                    <div className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${event.bg} ${event.color} hidden md:flex`}>
                                        <event.icon className="w-8 h-8" />
                                    </div>
                                </div>

                                <div className={`flex-1 w-full md:w-auto text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <span className="inline-block px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm">
                                        {event.week}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Key Statement */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-navy dark:text-white">
                        But Meta Ads is <span className="text-primary">mathematics</span>, not magic.
                    </h3>
                </motion.div>

                {/* Problems Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((prob, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-md transition-shadow border-slate-200 dark:border-slate-700 dark:bg-slate-900">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <XCircle className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-navy dark:text-white mb-2">{prob.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{prob.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
