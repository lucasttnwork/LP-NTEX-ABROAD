import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Target } from 'lucide-react';

const NewAdvantage = () => {
    return (
        <section id="advantage" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 block"
                    >
                        The Turning Point
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-8 text-white"
                    >
                        What If You Could Treat Growth Like
                        <br />
                        <span className="font-serif italic text-gray-400">Engineering, Not Guesswork?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
                    >
                        Think about any serious area of your business. You don't leave finances to "gut feeling." You don't manage inventory "hoping for the best." Why should marketing be any different?
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
                    >
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white">
                            <Brain size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                            We Don't Gamble. We Build.
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            At NTEX, we treat Meta Ads as growth engineering. We use real scientific method: clear hypotheses, controlled tests, and statistical analysis.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-black border border-white/10 hover:border-white/20 transition-all duration-500"
                    >
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-white">
                            <BarChart3 size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                            Accelerated by AI.
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            We accelerate everything with artificial intelligence — finding what works before competitors even start testing.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
                    >
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white">
                            <Target size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                            Predictability & Clarity.
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            The result? A system that improves every week, not an endless experiment draining your budget. We don't guess — we prove.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewAdvantage;
