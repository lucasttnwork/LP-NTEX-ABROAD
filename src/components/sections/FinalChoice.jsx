import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const FinalChoice = () => {
    return (
        <section className="py-24 bg-linear-main relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        You Have Two Choices
                    </h2>
                    <p className="text-lg text-slate-400">
                        The definition of insanity is doing the same thing and expecting different results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Option 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full glass-panel rounded-3xl p-8 text-center border-white/5 bg-white/[0.02]">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                                <X className="w-8 h-8 text-slate-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Option 1: Do Nothing</h3>
                            <ul className="space-y-3 text-left mb-8">
                                <li className="flex items-start gap-2 text-slate-400">
                                    <span className="text-slate-600">•</span>
                                    Keep boosting posts randomly
                                </li>
                                <li className="flex items-start gap-2 text-slate-400">
                                    <span className="text-slate-600">•</span>
                                    Accept unpredictable lead costs
                                </li>
                                <li className="flex items-start gap-2 text-slate-400">
                                    <span className="text-slate-600">•</span>
                                    Let competitors steal your market share
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500">Risk: High (Opportunity Cost)</p>
                        </div>
                    </motion.div>

                    {/* Option 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full rounded-3xl p-1 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/10 opacity-50" />
                            <div className="h-full bg-navy/90 backdrop-blur-xl rounded-[20px] p-8 text-center relative z-10">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                                    <ArrowRight className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Option 2: Implement ELEE</h3>
                                <ul className="space-y-3 text-left mb-8">
                                    <li className="flex items-start gap-2 text-slate-300">
                                        <span className="text-primary">•</span>
                                        Build a predictable acquisition machine
                                    </li>
                                    <li className="flex items-start gap-2 text-slate-300">
                                        <span className="text-primary">•</span>
                                        Know your exact cost per customer
                                    </li>
                                    <li className="flex items-start gap-2 text-slate-300">
                                        <span className="text-primary">•</span>
                                        Scale with confidence and data
                                    </li>
                                </ul>
                                <Button
                                    variant="cta"
                                    size="lg"
                                    className="w-full font-bold"
                                    onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Book Strategy Call
                                </Button>
                                <p className="text-xs text-slate-400 mt-4">Risk: Zero (Free Strategy Session)</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalChoice;
