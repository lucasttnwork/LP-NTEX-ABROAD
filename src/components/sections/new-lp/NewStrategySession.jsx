import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Users } from 'lucide-react';

const NewStrategySession = () => {
    return (
        <section className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">

                {/* The Offer */}
                <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden relative mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-white text-black text-sm font-bold mb-8">
                            NEXT STEP
                        </span>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-white">
                            Your Free Strategy Analysis
                        </h2>

                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Let's be direct: we don't do "sales calls" disguised as consultations. We offer a 30-minute conversation where we analyse your current situation and show you, clearly, whether our system makes sense for your business.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left max-w-4xl mx-auto">
                            <div className="p-6 rounded-3xl bg-black/40 border border-white/5">
                                <span className="text-4xl font-bold text-white/20 mb-4 block">01</span>
                                <p className="text-gray-300 font-medium">We analyse your current ad performance (or situation).</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-black/40 border border-white/5">
                                <span className="text-4xl font-bold text-white/20 mb-4 block">02</span>
                                <p className="text-gray-300 font-medium">We map out specific opportunities using our methodology.</p>
                            </div>
                            <div className="p-6 rounded-3xl bg-black/40 border border-white/5">
                                <span className="text-4xl font-bold text-white/20 mb-4 block">03</span>
                                <p className="text-gray-300 font-medium">We give you an honest projection of results.</p>
                            </div>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-6 mb-12 max-w-2xl mx-auto border border-white/10">
                            <p className="text-gray-300 text-sm">
                                <span className="text-white font-bold block mb-2 text-lg">Our Guarantee</span>
                                If you leave the call without at least 2-3 actionable insights about your business — even if you decide not to work with us — we apologise for wasting your time. Simple as that.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                <Users size={16} />
                                <span>Capacity Limit: Only 5 new clients per month.</span>
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://calendly.com/your-link"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="shiny-cta group inline-flex justify-center items-center w-fit"
                            >
                                <span className="flex items-center gap-2 whitespace-nowrap">
                                    <Calendar className="w-5 h-5" />
                                    Book Your Free Strategy Analysis
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>

                            <p className="text-gray-500 text-sm italic">
                                Come with your numbers. Leave with clarity.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* PS Section */}
                <div className="max-w-3xl mx-auto text-center pb-20">
                    <h3 className="text-2xl font-heading font-bold text-white mb-6">P.S. — One Final Thought</h3>
                    <div className="text-gray-400 space-y-6 text-lg leading-relaxed">
                        <p>
                            If you've read this far, you're probably in one of two situations: You've tried ads before and are sceptical, or you've never tried seriously and are worried about wasting money.
                        </p>
                        <p>
                            In both cases, we understand. That's why we created the no-strings-attached free analysis.
                        </p>
                        <p className="text-white font-medium">
                            But here's something to consider: Every month that passes without a predictable acquisition system is a month you're letting customers go to your competition.
                        </p>
                        <p>
                            You don't need to decide to work with us today. But it's worth finding out, in 30 minutes, if there's a better path.
                        </p>
                        <p className="text-gray-500 italic mt-8">
                            — The NTEX Team
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NewStrategySession;
