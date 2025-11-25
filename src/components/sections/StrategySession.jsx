import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const StrategySession = () => {
    return (
        <section id="strategy-session" className="section-padding relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">Next Steps</span>
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            <span className="text-gradient-silver-fade">Stop Experimenting. <br />
                                Get a Strategy.</span>
                        </h2>
                        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                            We invite you to a <strong className="text-white">Free Strategy Session</strong>. This is not a sales pitch. It is a mathematical analysis of your business to see if our system fits your goals.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left max-w-3xl mx-auto">
                            {[
                                { title: "1. Analyze", desc: "We analyze your current ad performance." },
                                { title: "2. Map", desc: "We map out a growth plan using our data-driven approach." },
                                { title: "3. Project", desc: "We give you a clear projection of results." }
                            ].map((step, index) => (
                                <div key={index} className="glass-panel p-6 rounded-xl bg-white/5">
                                    <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                                    <p className="text-white/60 text-sm">{step.desc}</p>
                                </div>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <a
                                href="https://calendly.com/your-link" // Replace with actual link if available, or keep generic
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                            >
                                <Calendar className="w-6 h-6" />
                                Book Your Free Strategy Session
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                        <p className="mt-6 text-white/40 text-sm font-medium tracking-wide uppercase">
                            Come with your numbers, leave with clarity.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StrategySession;
