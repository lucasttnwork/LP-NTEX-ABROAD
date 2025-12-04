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
            {/* Background Lights */}
            <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-800/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slower pointer-events-none" />
            <div className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slower pointer-events-none delay-1000" />
            
            <div className="container mx-auto px-6 relative z-10">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Ideal Client Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-900/90 to-blue-600/20 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.2)]"
                    >
                        {/* Glare Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none" />
                        
                        {/* Top Bar */}
                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div className="flex gap-1.5">
                                <span className="text-xs font-mono text-zinc-500">01</span>
                                <div className="flex gap-1 pt-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></div>
                                </div>
                            </div>
                            <span className="text-xs text-zinc-500 border border-white/10 rounded-full px-3 py-1">
                                Recommended
                            </span>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Ideal Profile</h3>
                            <p className="text-zinc-400">For businesses ready to scale.</p>
                        </div>

                        <ul className="space-y-4 mt-auto">
                            {idealClients.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
                                    <div className="mt-0.5 min-w-4 flex justify-center">
                                        <Check className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not Ideal Client Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col p-8 rounded-3xl border border-white/10 bg-black relative overflow-hidden group hover:border-white/20 transition-colors"
                    >
                        {/* Top Bar */}
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex gap-1.5">
                                <span className="text-xs font-mono text-zinc-500">02</span>
                                <div className="flex gap-1 pt-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700/30"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700/30"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Not For You</h3>
                            <p className="text-zinc-400">We are not the right choice if you:</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            {notIdealClients.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 text-sm text-zinc-400">
                                    <div className="mt-0.5 min-w-4 flex justify-center">
                                        <X className="w-4 h-4 text-zinc-600" />
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-8 border-t border-white/5">
                            <p className="text-white font-medium text-sm text-center">
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
