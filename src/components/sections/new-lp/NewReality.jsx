import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, HelpCircle } from 'lucide-react';

const NewReality = () => {
    return (
        <section id="reality" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">

                {/* Section 1: The Problem */}
                <div className="max-w-4xl mx-auto mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 block"
                    >
                        The Reality
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-8 text-white"
                    >
                        Let's Be Honest About
                        <br />
                        <span className="font-serif italic text-gray-400">What's Happening.</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 leading-relaxed space-y-6"
                    >
                        <p>
                            You've probably been through this: Hired an agency (or tried it yourself). Invested a decent budget. Waited. Reports arrived full of metrics — impressions, clicks, reach — but when you looked at the actual revenue... nothing concrete.
                        </p>
                        <p>
                            Or worse: some results appeared early on, then... silence. The agency said "the algorithm changed" or "it needs more time." You kept paying. Results stayed uncertain.
                        </p>
                        <p className="text-white font-medium">
                            This isn't your fault. And it probably isn't your product's fault either.
                        </p>
                        <p>
                            The problem is that most agencies operate in the dark. They don't have a real method — they have "experience" and "gut feeling." And when gut feeling fails, you pay the price.
                        </p>
                    </motion.div>
                </div>

                {/* Section 2: The Common Enemy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6 text-white">
                            Why Most Campaigns Disappoint
                            <br />
                            <span className="text-gray-500 text-3xl">(And What Nobody Tells You)</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Here's the uncomfortable truth agencies don't like to admit: <span className="text-white font-bold">The problem isn't Meta Ads. It's the method — or lack thereof.</span>
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <AlertCircle className="text-gray-400 shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">The Standard Approach</h4>
                                    <p className="text-gray-400 text-sm">Create 3-4 ads based on "what worked for another client". Let them run. Check numbers. Adjust by "feel". Blame algorithm.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <HelpCircle className="text-gray-400 shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-1">The Result</h4>
                                    <p className="text-gray-400 text-sm">You're stuck in a cycle of uncertainty — never knowing if the ads are actually working or if you're simply throwing money away.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10"
                    >
                        <div className="absolute top-0 right-0 p-4">
                            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full border border-white/20">
                                THE REALITY
                            </span>
                        </div>
                        <h3 className="text-3xl font-heading font-bold mb-6 text-white">Trial and Error with Your Money.</h3>
                        <p className="text-gray-400 text-lg mb-8">
                            "Test and pray." Random creative testing, emotional decision making, and inconsistent results that kill cash flow.
                        </p>
                        <div className="h-px w-full bg-white/10 mb-8" />
                        <p className="text-white text-lg font-medium">
                            The good news: it doesn't have to be this way.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewReality;
