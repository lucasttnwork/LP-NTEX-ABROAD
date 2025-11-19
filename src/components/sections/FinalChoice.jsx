import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const FinalChoice = () => {
    return (
        <section className="py-20 bg-navy dark:bg-slate-950 text-white transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        You Have Two Choices
                    </h2>
                    <p className="text-lg text-slate-300">
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
                        <Card className="h-full bg-slate-800 border-slate-700 text-slate-300">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mx-auto mb-6">
                                    <X className="w-8 h-8 text-slate-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Option 1: Do Nothing</h3>
                                <ul className="space-y-3 text-left mb-8">
                                    <li className="flex items-start gap-2">
                                        <span className="text-slate-500">•</span>
                                        Keep boosting posts randomly
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-slate-500">•</span>
                                        Accept unpredictable lead costs
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-slate-500">•</span>
                                        Let competitors steal your market share
                                    </li>
                                </ul>
                                <p className="text-sm text-slate-500">Risk: High (Opportunity Cost)</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Option 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full bg-primary border-primary text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                            <CardContent className="p-8 text-center relative z-10">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                                    <ArrowRight className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Option 2: Implement ELEE</h3>
                                <ul className="space-y-3 text-left mb-8">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/70">•</span>
                                        Build a predictable acquisition machine
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/70">•</span>
                                        Know your exact cost per customer
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/70">•</span>
                                        Scale with confidence and data
                                    </li>
                                </ul>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full font-bold text-primary hover:text-primary-dark bg-white hover:bg-slate-100"
                                    onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Book Strategy Call
                                </Button>
                                <p className="text-xs text-white/60 mt-4">Risk: Zero (Free Strategy Session)</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalChoice;
