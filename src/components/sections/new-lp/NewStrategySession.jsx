import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2, Clock, ShieldCheck, Users } from 'lucide-react';

const NewStrategySession = ({ onContactRequest }) => {
    return (
        <section className="relative overflow-hidden bg-black py-40 border-t border-white/5">
            {/* Atmospheric backdrop */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-24 -top-10 w-80 h-80 bg-slate-200/10 blur-[120px]" />
                <div className="absolute right-0 top-20 w-[420px] h-[420px] bg-cyan-200/10 blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_30%),linear-gradient(120deg,rgba(255,255,255,0.03),transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:48px_48px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-6xl mx-auto space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="flex flex-col items-center text-center gap-5"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                            Next Step · Strategy Lab
                            <span className="inline-block h-1 w-6 rounded-full bg-gradient-to-r from-slate-100 to-slate-300" />
                        </span>
                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white leading-[1.05] max-w-4xl">
                            Your Free Strategy Analysis
                        </h2>
                        <p className="max-w-4xl text-xl md:text-2xl text-gray-200 leading-relaxed">
                            30 minutes with the senior team to see where money is leaking and align the fastest route to new revenue — zero sales script.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
                            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-12 md:p-14 shadow-[0_30px_140px_rgba(0,0,0,0.5)] space-y-10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-slate-200/10 pointer-events-none" />
                            <div className="relative space-y-10">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
                                        30 min live
                                    </span>
                                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-200/10 px-4 py-2 text-xs font-semibold text-emerald-100">
                                        5 slots/month
                                        <span className="inline-block h-1 w-6 rounded-full bg-gradient-to-r from-emerald-200 to-cyan-200" />
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-heading font-semibold text-white leading-tight">
                                        No sales script. Only strategy that moves the needle.
                                    </h3>
                                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
                                        You show up with your numbers. We open the funnel, surface leaks, and align the shortest path to cash.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { icon: <Clock className="w-6 h-6" />, title: 'Intense pace', text: '30 focused minutes: rapid diagnosis, direct questions, and alignment on what truly shifts revenue.' },
                                        { icon: <Users className="w-6 h-6" />, title: 'Senior operators', text: 'People who have scaled and fixed live accounts — no stage theory, only field execution.' },
                                        { icon: <Calendar className="w-6 h-6" />, title: 'Lean calendar', text: 'Few onboardings per month to keep depth. If it is not a fit, we say it plainly.' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur">
                                            <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                                                {item.icon}
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-white font-semibold text-lg">{item.title}</p>
                                                <p className="text-gray-300 leading-relaxed">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-7 backdrop-blur">
                                    <div className="flex items-center gap-3 text-white">
                                        <ShieldCheck className="w-7 h-7 text-slate-50" />
                                        <span className="text-xl font-semibold">The Guarantee</span>
                                    </div>
                                    <p className="text-gray-200 leading-relaxed text-lg">
                                        Leave without 2–3 practical moves for the next quarter? We apologise for taking your time. Zero pressure, only clarity.
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                                        <CheckCircle2 className="w-4 h-4 text-slate-100" />
                                        <span>No disguised pitch</span>
                                        <CheckCircle2 className="w-4 h-4 text-slate-100" />
                                        <span>Shareable summary</span>
                                        <CheckCircle2 className="w-4 h-4 text-slate-100" />
                                        <span>Call recording</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => onContactRequest?.()}
                                        className="shiny-cta group inline-flex justify-center items-center w-full md:w-auto px-8 py-4 text-lg"
                                    >
                                        <span className="flex items-center gap-3 whitespace-nowrap">
                                            <Calendar className="w-5 h-5" />
                                            Book Your Free Strategy Analysis
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </motion.button>
                                    <p className="text-sm text-gray-400 italic">Bring your numbers. Leave with a plan.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                            className="rounded-[32px] border border-white/5 bg-black/70 p-10 md:p-12 backdrop-blur shadow-[0_25px_110px_rgba(0,0,0,0.45)]"
                        />
                    </div>

                    {/* Closing note */}
                    <div className="relative max-w-5xl mx-auto rounded-3xl border border-white/5 bg-white/5 p-12 md:p-14 text-center overflow-hidden backdrop-blur">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                            If you tried ads and got sceptical, or never invested seriously and fear burning budget, this conversation was built for you. Every month without a predictable system is room you leave for competitors.
                        </p>
                        <p className="mt-8 text-white font-semibold text-lg">In 30 minutes, you’ll know if there is a shorter path.</p>
                        <p className="mt-4 text-sm text-gray-500 italic">— NTEX Team</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewStrategySession;
