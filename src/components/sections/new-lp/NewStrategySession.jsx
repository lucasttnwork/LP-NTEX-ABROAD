import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2, Clock, ShieldCheck, Users } from 'lucide-react';

const NewStrategySession = ({ onContactRequest }) => {
    return (
        <section className="relative overflow-hidden bg-black py-32 border-t border-white/5">
            {/* Atmospheric backdrop */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-24 -top-10 w-80 h-80 bg-slate-200/10 blur-[120px]" />
                <div className="absolute right-0 top-20 w-[420px] h-[420px] bg-cyan-200/10 blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.04),transparent_30%),linear-gradient(120deg,rgba(255,255,255,0.03),transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:48px_48px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="max-w-6xl mx-auto space-y-14">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="flex flex-col items-center text-center gap-3"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase text-white/70">
                            Next Step
                            <span className="inline-block h-1 w-6 rounded-full bg-gradient-to-r from-slate-100 to-slate-300" />
                        </span>
                        <p className="text-sm uppercase tracking-[0.28em] text-white/40">Strategy Lab Session</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
                            Your Free Strategy Analysis
                        </h2>
                        <p className="max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
                            30 minutes with the senior team to dissect your funnel, spot where money is leaking, and draw the shortest route to new revenue — no sales script, just clarity.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
                            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 md:p-12 shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-slate-200/10 pointer-events-none" />
                            <div className="relative space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { icon: <Clock className="w-5 h-5" />, label: '30 min', text: 'Intense and to the point — no fluff.' },
                                        { icon: <Users className="w-5 h-5" />, label: 'Senior team', text: 'Operators who have scaled and fixed live accounts.' },
                                        { icon: <Calendar className="w-5 h-5" />, label: 'Limited slots', text: 'Max 5 new clients per month to keep quality high.' },
                                    ].map((item, idx) => (
                                        <div key={idx} className="rounded-2xl border border-white/10 bg-black/40 px-5 py-5 min-h-[132px] flex flex-col justify-between">
                                            <div className="flex items-center gap-2 text-white font-semibold">
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </div>
                                            <p className="mt-2 text-sm text-gray-400">{item.text}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        'Diagnostic of current performance and bottlenecks.',
                                        'Mapping quick wins for the next 90 days.',
                                        'Honest ROI projection with and without NTEX.',
                                    ].map((text, idx) => (
                                        <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-6 min-h-[170px] flex flex-col justify-between">
                                            <div className="absolute right-3 top-3 text-sm font-bold text-white/20">0{idx + 1}</div>
                                            <p className="text-white font-medium leading-relaxed">{text}</p>
                                            <div className="mt-3 h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent group-hover:from-slate-100 group-hover:via-slate-200 group-hover:to-transparent transition-colors" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur">
                                    <div className="flex items-center gap-3 text-white">
                                        <ShieldCheck className="w-6 h-6 text-slate-100" />
                                        <span className="text-lg font-semibold">The Guarantee</span>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed">
                                        If you leave without 2 or 3 actionable ideas — even if you choose not to work with us — we apologise for wasting your time. Simple as that.
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                                        <CheckCircle2 className="w-4 h-4 text-slate-100" />
                                        <span>No sales pressure</span>
                                        <CheckCircle2 className="w-4 h-4 text-slate-100" />
                                        <span>Actionable next day</span>
                                        <CheckCircle2 className="w-4 h-4 text-slate-100" />
                                        <span>Fast-win oriented</span>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-4">
                                    <motion.button
                                        type="button"
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => onContactRequest?.()}
                                        className="shiny-cta group inline-flex justify-center items-center w-fit"
                                    >
                                        <span className="flex items-center gap-2 whitespace-nowrap">
                                            <Calendar className="w-5 h-5" />
                                            Book Your Free Strategy Analysis
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </motion.button>
                                    <p className="text-sm text-gray-400 italic">Bring your numbers. Leave with an attack plan.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                            className="rounded-[28px] border border-white/5 bg-black/70 p-8 md:p-9 backdrop-blur shadow-[0_25px_90px_rgba(0,0,0,0.4)] flex flex-col gap-8"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.24em] text-slate-200/80 mb-2">What happens</p>
                                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white">In 30 minutes, you get</h3>
                                </div>
                                <div className="rounded-full border border-slate-200/30 bg-slate-200/10 px-3 py-1 text-xs text-slate-100">
                                    Zero sales pitch. Only strategy.
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Clarity on your current funnel',
                                        copy: 'We analyse metrics, creatives, and offer-to-audience fit. We find leaks and media waste.',
                                    },
                                    {
                                        title: 'Quick-win opportunity map',
                                        copy: '3–5 actions for the next 90 days, prioritised by impact and feasibility for your team.',
                                    },
                                    {
                                        title: 'Honest ROI projection',
                                        copy: 'What is realistic with and without NTEX, so you decide with data — not promises.',
                                    },
                                ].map((item, idx) => (
                                    <div key={idx} className="group flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur hover:border-slate-200/40 transition-colors">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                                            0{idx + 1}
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-white font-semibold">{item.title}</p>
                                            <p className="text-gray-400 leading-relaxed">{item.copy}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-2xl border border-white/5 bg-gradient-to-r from-white/5 via-white/0 to-white/5 p-6 space-y-4">
                                <p className="text-sm uppercase tracking-[0.18em] text-white/50">Why we do it this way</p>
                                <p className="text-white font-medium leading-relaxed">
                                    The session exists to prove, fast, if there is a real fit. You leave with strategic direction — and we leave knowing if we can generate solid ROI without promising the impossible.
                                </p>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                                    <CheckCircle2 className="w-4 h-4 text-slate-100" />
                                    <span>No disguised pitch</span>
                                    <CheckCircle2 className="w-4 h-4 text-slate-100" />
                                    <span>Shareable material for the team</span>
                                    <CheckCircle2 className="w-4 h-4 text-slate-100" />
                                    <span>Call recording for review</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Closing note */}
                    <div className="relative max-w-4xl mx-auto rounded-3xl border border-white/5 bg-white/5 p-10 text-center overflow-hidden backdrop-blur">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            If you have tried ads and became sceptical, or never invested seriously and fear wasting budget, this conversation was built for you. Every month without a predictable system is space you leave to the competition.
                        </p>
                        <p className="mt-6 text-white font-semibold">In 30 minutes, you’ll see if there is a shorter path.</p>
                        <p className="mt-4 text-sm text-gray-500 italic">— NTEX Team</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewStrategySession;
