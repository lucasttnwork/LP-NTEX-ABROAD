import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const ICP = () => {
    return (
        <section className="section-padding relative bg-black/40">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">Is This For You?</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-gradient-platinum">Built for Businesses <br />
                                <span className="font-serif italic">Ready to Scale</span></span>
                        </h2>
                        <p className="text-xl text-white/60">
                            We work exclusively with Growth-Focused Businesses who meet specific criteria.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10"
                    >
                        <div className="space-y-6">
                            {[
                                "Currently generating £20k+ monthly revenue.",
                                "Ready to invest £2,000–£10,000/month in growth.",
                                "Want a proven system, not a creative experiment.",
                                "Value data and transparency over fluff."
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-lg md:text-xl text-white/90 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ICP;
