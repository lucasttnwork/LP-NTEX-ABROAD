import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
    BlueprintBuildAnimation,
    AIAcceleratorAnimation,
    ClarityMatrixAnimation,
} from '../../animations';

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

                {/* Master Card Container - simplified background */}
                <div className="relative w-full rounded-[2.5rem] border border-white/10 bg-[#0a0b0b] shadow-[0_24px_90px_rgba(0,0,0,0.55)]">
                    <div className="relative flex flex-col w-full h-full rounded-[2.4rem] overflow-hidden bg-[#0e1011] border border-white/5">

                        {/* Inner Content */}
                        <div className="relative z-10 p-6 md:p-10">
                            {/* Optional Header inside Master Card */}
                            <div className="flex flex-col gap-2 mb-8 px-2">
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-white">Our Methodology</h3>
                                    <p className="text-gray-400 text-sm mt-1">Systematic growth engineering</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Card 1: We Don't Gamble. We Build. */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    whileHover={{ 
                                        y: -5,
                                        borderColor: 'rgba(59,130,246,0.3)',
                                    }}
                                    className="group relative rounded-2xl bg-black/40 border border-white/10 overflow-hidden transition-all duration-500 flex flex-col"
                                >
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <BlueprintBuildAnimation className="w-full h-full" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-heading font-bold mb-2 text-white">
                                            We Don't Gamble. We Build.
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            At NTEX, we treat Meta Ads as growth engineering. We use real scientific method: clear hypotheses, controlled tests, and statistical analysis.
                                        </p>
                                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-xs text-gray-500 font-medium">Engineering</span>
                                            <motion.div 
                                                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors"
                                                whileHover={{ scale: 1.1, rotate: 45 }}
                                            >
                                                <ArrowUpRight size={14} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Card 2: Accelerated by AI */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ 
                                        y: -5,
                                        borderColor: 'rgba(100,180,220,0.4)',
                                    }}
                                    className="group relative rounded-2xl bg-black/40 border border-white/10 overflow-hidden transition-all duration-500 flex flex-col"
                                >
                                     <div className="aspect-[4/3] overflow-hidden relative">
                                        <AIAcceleratorAnimation className="w-full h-full" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-heading font-bold mb-2 text-white">
                                            Accelerated by AI.
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            We accelerate everything with artificial intelligence — finding what works before competitors even start testing.
                                        </p>
                                         <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-xs text-gray-500 font-medium">Technology</span>
                                            <motion.div 
                                                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors"
                                                whileHover={{ scale: 1.1, rotate: 45 }}
                                            >
                                                <ArrowUpRight size={14} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Card 3: Predictability & Clarity */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ 
                                        y: -5,
                                        borderColor: 'rgba(34,197,94,0.3)',
                                    }}
                                    className="group relative rounded-2xl bg-black/40 border border-white/10 overflow-hidden transition-all duration-500 flex flex-col"
                                >
                                     <div className="aspect-[4/3] overflow-hidden relative">
                                        <ClarityMatrixAnimation className="w-full h-full" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-heading font-bold mb-2 text-white">
                                            Predictability & Clarity.
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            The result? A system that improves every week, not an endless experiment draining your budget. We don't guess — we prove.
                                        </p>
                                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-xs text-gray-500 font-medium">Results</span>
                                            <motion.div 
                                                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors"
                                                whileHover={{ scale: 1.1, rotate: 45 }}
                                            >
                                                <ArrowUpRight size={14} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewAdvantage;
