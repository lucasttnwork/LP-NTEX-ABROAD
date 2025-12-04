import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PoundSterling, PieChart } from 'lucide-react';

const NewProof = () => {
    return (
        <section id="results" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 block"
                    >
                        Proof
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white"
                    >
                        Real Results,
                        <br />
                        <span className="font-serif italic text-gray-400">Not Promises.</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400">
                        We'd rather show than tell. Here's what happens when method replaces guesswork:
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 bg-white text-black font-bold rounded-full text-sm mb-6">
                                CASE STUDY: UK FASHION BOUTIQUE
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6">From Skepticism to 5x ROAS</h3>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <h4 className="text-white font-bold mb-2">Situation:</h4>
                                    <p className="text-gray-400">Sceptical owner who had tried ads before without clear results. Limited budget, fear of "throwing money away" again.</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">What we did:</h4>
                                    <p className="text-gray-400">Applied the complete ELEE Method. Intensive exploration in week one to identify winning angles. Lapidation of best creatives. Controlled escalation.</p>
                                </div>
                            </div>

                            <blockquote className="border-l-4 border-white pl-6 py-2 italic text-gray-300">
                                "For the first time, I understood exactly where my customers were coming from and how much each sale cost me. It wasn't magic — it was clarity."
                            </blockquote>
                        </div>

                        <div className="bg-black/50 rounded-3xl p-8 border border-white/5">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="flex items-center gap-4 mb-2">
                                        <PoundSterling className="text-gray-400" size={24} />
                                        <span className="text-gray-400 text-sm uppercase tracking-wider">Ad Spend</span>
                                    </div>
                                    <p className="text-3xl font-bold text-white">Under £3,000</p>
                                </div>

                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <div className="flex items-center gap-4 mb-2">
                                        <TrendingUp className="text-gray-400" size={24} />
                                        <span className="text-gray-400 text-sm uppercase tracking-wider">Revenue Generated</span>
                                    </div>
                                    <p className="text-3xl font-bold text-white">Over £15,000</p>
                                </div>

                                <div className="p-6 bg-white text-black rounded-2xl border border-white/10">
                                    <div className="flex items-center gap-4 mb-2">
                                        <PieChart className="text-black/60" size={24} />
                                        <span className="text-black/60 text-sm uppercase tracking-wider">ROAS</span>
                                    </div>
                                    <p className="text-5xl font-bold">5.0x</p>
                                    <p className="text-sm mt-2 text-black/60">Every £1 invested returned £5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm italic">
                        We're constantly updating this section with new results. If you become our client, your case could be next here.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NewProof;
