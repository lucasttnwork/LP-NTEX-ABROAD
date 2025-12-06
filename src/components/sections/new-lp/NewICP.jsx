import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles } from 'lucide-react';
import {
    IdealProfileAnimation,
    FilterRejectAnimation,
} from '../../animations';

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
        <section className="py-32 bg-[#020202] relative overflow-hidden text-white border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-zinc-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-zinc-500 font-medium tracking-[0.2em] uppercase text-sm mb-6 block"
                    >
                        Qualification
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight text-white"
                    >
                        Is This Right
                        <span className="block font-serif italic font-light text-zinc-400 mt-2">For You?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        We don't work with just any business. Not because we're arrogant — but because our method works best for a specific profile.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto items-start">

                    {/* IDEAL PROFILE CARD (Larger, Highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 relative group"
                    >
                        <div className="absolute inset-0 bg-blue-600/5 rounded-[2.5rem] blur-xl group-hover:bg-blue-600/10 transition-all duration-700" />

                        <div className="relative h-full bg-[#080808] border border-white/10 rounded-[2.5rem] overflow-hidden p-1 flex flex-col">
                            {/* Premium Border Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none rounded-[2.5rem]" />

                            {/* Inner Content Container */}
                            <div className="bg-[#0c0c0c] rounded-[2.3rem] overflow-hidden flex flex-col h-full relative z-10 transition-colors duration-500 group-hover:bg-[#111]">

                                {/* Header / Visual */}
                                <div className="h-64 relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-black border-b border-white/5">
                                    <div className="absolute top-6 left-6 z-20">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                                            <Sparkles className="w-3 h-3" /> Recommended
                                        </span>
                                    </div>
                                    <IdealProfileAnimation className="w-full h-full opacity-90" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
                                </div>

                                {/* Body */}
                                <div className="p-8 md:p-10 flex flex-col flex-grow">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-2">Ideal Profile</h3>
                                    <p className="text-zinc-400 mb-8">For businesses ready to scale with science.</p>

                                    <ul className="space-y-5">
                                        {idealClients.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + (index * 0.1) }}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                                    <Check className="w-3.5 h-3.5 text-blue-400" />
                                                </div>
                                                <span className="text-zinc-300 text-sm md:text-base font-light leading-relaxed">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-sm text-zinc-500">Matches your profile?</span>
                                        <button className="text-white flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors group/btn">
                                            Let's talk <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* NOT FOR YOU CARD (Smaller, Muted) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 relative h-full"
                    >
                        <div className="relative h-full bg-[#050505] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col hover:border-white/10 transition-colors duration-500 group">

                            {/* Visual */}
                            <div className="h-48 relative overflow-hidden bg-zinc-900/20 border-b border-white/5">
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-white/10 text-zinc-500 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                                        Not a Match
                                    </span>
                                </div>
                                <FilterRejectAnimation className="w-full h-full opacity-60 grayscale mix-blend-screen" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
                            </div>

                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <h3 className="text-2xl font-heading font-bold text-zinc-400 group-hover:text-zinc-300 transition-colors mb-2">Not For You</h3>
                                <p className="text-zinc-600 group-hover:text-zinc-500 transition-colors mb-8 text-sm">We are not the right choice if you:</p>

                                <ul className="space-y-5">
                                    {notIdealClients.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 + (index * 0.1) }}
                                            className="flex items-start gap-4 opacity-50 group-hover:opacity-70 transition-opacity"
                                        >
                                            <div className="mt-1 w-6 h-6 rounded-full bg-zinc-900/50 border border-zinc-800 flex items-center justify-center shrink-0">
                                                <X className="w-3.5 h-3.5 text-zinc-600" />
                                            </div>
                                            <span className="text-zinc-500 text-sm font-light leading-relaxed">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-10">
                                    <div className="bg-zinc-900/20 rounded-2xl p-4 text-center border border-white/5">
                                        <p className="text-xs text-zinc-600">
                                            We value transparency. It saves your time and ours.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default NewICP;
