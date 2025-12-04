import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const NewICP = () => {
    const idealClients = [
        "Already generate at least £20,000/month in revenue (need a solid foundation to scale)",
        "Are ready to invest £2,000–£10,000/month in real growth",
        "Want a proven system, not another experiment",
        "Value data and transparency — not reports full of vanity metrics",
        "Operate in the United Kingdom: local businesses, e-commerce, service providers, startups in growth phase"
    ];

    const notIdealClients = [
        "Want overnight magic results",
        "Don't have budget to invest in ads consistently",
        "Prefer \"gut feeling\" to data"
    ];

    return (
        <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 block"
                    >
                        Qualification
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white"
                    >
                        Is This Right
                        <br />
                        <span className="font-serif italic text-gray-400">For You?</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We don't work with just any business. Not because we're arrogant — but because our method works best for a specific profile.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Ideal Client Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl bg-white/5 border border-white/10"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-8 text-white flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                                <Check size={18} strokeWidth={3} />
                            </div>
                            We work with businesses that:
                        </h3>
                        <div className="space-y-6">
                            {idealClients.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <Check className="text-white shrink-0 mt-1" size={20} />
                                    <span className="text-gray-300 text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Not Ideal Client Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl border border-white/5 bg-black"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-8 text-gray-400 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 text-gray-400 flex items-center justify-center">
                                <X size={18} strokeWidth={3} />
                            </div>
                            We're not the right choice if you:
                        </h3>
                        <div className="space-y-6">
                            {notIdealClients.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <X className="text-gray-500 shrink-0 mt-1" size={20} />
                                    <span className="text-gray-500 text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/5">
                            <p className="text-white font-medium text-lg">
                                If you identified with the first group, let's talk.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NewICP;
