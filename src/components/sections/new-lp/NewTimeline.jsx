import React from 'react';
import { motion } from 'framer-motion';

const NewTimeline = () => {
    const timelineEvents = [
        {
            month: "MONTH 1",
            title: "Rapid Impact",
            subtitle: "Exploration + First Winners",
            description: "In the first week, we launch multiple ad variations using AI. Within 10-14 days, we identify the first \"winners\" — the angles and messages that resonate with your audience.",
            result: "Results start appearing. Waste gets cut. You know exactly what's working and why."
        },
        {
            month: "MONTH 2",
            title: "Optimisation + Protection",
            subtitle: "Lapidation + New Wave of Tests",
            description: "While we refine Month 1's winners for maximum performance, we launch the second wave of exploration. This ensures you always have fresh creatives ready before current ones lose momentum.",
            result: "Cost-per-result dropping. Stable results. No unpleasant surprises."
        },
        {
            month: "MONTH 3+",
            title: "Compounding Growth",
            subtitle: "Escalation + Extraction",
            description: "With a proven system running, we scale investment with confidence. Simultaneously, we activate remarketing and retention to maximise each customer's value.",
            result: "Month-on-month growth. A system that adapts and continuously improves. Real predictability."
        }
    ];

    return (
        <section id="process" className="py-32 bg-black relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 block"
                    >
                        How It Works In Practice
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white"
                    >
                        What to Expect:
                        <br />
                        <span className="text-gray-500">From Chaos to Clarity in 90 Days.</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400">
                        Here's what happens when you stop experimenting and start engineering growth:
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

                    <div className="space-y-24">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Side */}
                                <div className="flex-1 pl-20 md:pl-0 md:w-1/2">
                                    <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-bold mb-4 border border-white/10">
                                            {event.month}
                                        </span>
                                        <h3 className="text-3xl font-bold mb-2 text-white">{event.title}</h3>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">{event.subtitle}</p>

                                        <div className="space-y-6">
                                            <p className="text-gray-300 text-lg leading-relaxed">
                                                {event.description}
                                            </p>
                                            <div className={`p-4 rounded-xl bg-black/50 border border-white/5 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} inline-block`}>
                                                <span className="text-white font-bold text-sm block mb-1">WHAT YOU SEE:</span>
                                                <span className="text-gray-400 text-sm">{event.result}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 mt-8 shadow-[0_0_20px_rgba(255,255,255,0.5)] z-10 border-4 border-black" />

                                {/* Empty Side for Balance */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewTimeline;
