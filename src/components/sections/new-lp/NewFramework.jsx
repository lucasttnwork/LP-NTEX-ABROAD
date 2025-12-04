import React from 'react';
import { motion } from 'framer-motion';
import { Search, Gem, TrendingUp, Repeat } from 'lucide-react';

const NewFramework = () => {
    const steps = [
        {
            letter: "E",
            title: "EXPLORATION",
            subtitle: "Find what works — fast.",
            description: "While traditional agencies take weeks to create 3-4 ads, our AI systems generate and test dozens of variations in days. We analyse market patterns, identify promising angles, and discover what resonates with your audience before the competition.",
            icon: <Search size={24} />
        },
        {
            letter: "L",
            title: "LAPIDATION",
            subtitle: "Turn good into excellent.",
            description: "Ads that show potential go through surgical refinement. A/B testing on headlines, images, copy, CTAs — every element is optimised until cost-per-result hits its sweet spot. Mathematics, not guesswork.",
            icon: <Gem size={24} />
        },
        {
            letter: "E",
            title: "ESCALATION",
            subtitle: "Scale with confidence, not hope.",
            description: "We only increase investment on statistically proven campaigns. No \"let's see what happens.\" When we scale, we know — with data — that returns will follow.",
            icon: <TrendingUp size={24} />
        },
        {
            letter: "E",
            title: "EXTRACTION",
            subtitle: "Maximise the value of every customer.",
            description: "Acquisition is just the beginning. We activate remarketing and retention sequences to increase the lifetime value of each customer. You don't just win customers — you profit more from each one.",
            icon: <Repeat size={24} />
        }
    ];

    return (
        <section id="framework" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 block"
                    >
                        The Unique Mechanism
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-8 text-white"
                    >
                        Meet the <span className="text-gray-400 italic font-serif">ELEE Method</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Our proprietary framework to transform Meta Ads from "necessary expense" into a "predictable growth engine." It's not a linear process that ends. It's a continuous cycle that self-optimises.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="shrink-0">
                                    <span className="text-6xl md:text-8xl font-heading font-bold text-white/10 group-hover:text-white/20 transition-colors block leading-none">
                                        {step.letter}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                                    </div>
                                    <p className="text-lg text-white/80 font-medium mb-4 italic font-serif">
                                        {step.subtitle}
                                    </p>
                                    <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 p-8 rounded-2xl bg-white/5 border-l-4 border-white max-w-4xl mx-auto"
                >
                    <p className="text-xl text-gray-300 italic">
                        <span className="font-bold text-white not-italic block mb-2">The crucial part: these phases run simultaneously.</span>
                        While we scale your winners, we're already testing the next generation of creatives. This means you never suffer "ad fatigue" — and your results never plateau because the system never stops evolving.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default NewFramework;
