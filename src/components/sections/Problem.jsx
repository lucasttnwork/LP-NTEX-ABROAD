import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const Problem = () => {
    return (
        <section id="reality" className="section-padding relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Visual (Phone Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto lg:mx-0 max-w-[320px] lg:max-w-[380px]"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50" />

                        {/* Phone Frame */}
                        <div className="relative z-10 bg-[#0a0a0a] border-[8px] border-[#1a1a1a] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/50 aspect-[9/19]">
                            {/* Status Bar */}
                            <div className="h-6 bg-black flex items-center justify-between px-6 pt-2">
                                <div className="text-[10px] text-white font-medium">9:41</div>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                </div>
                            </div>

                            {/* App Header */}
                            <div className="px-6 py-4 flex items-center gap-3 border-b border-white/5 bg-black/40 backdrop-blur-md absolute top-6 left-0 right-0 z-20">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-purple-500 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-bold">
                                        NT
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">NTEX Growth</div>
                                    <div className="text-[10px] text-accent">Active Campaign</div>
                                </div>
                            </div>

                            {/* Screen Content */}
                            <div className="h-full w-full bg-[#050505] relative pt-20">
                                {/* Main Visual - Abstract AI Art */}
                                <div className="mx-4 h-[60%] rounded-2xl overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-purple-500/20 to-blue-500/20 animate-pulse-slow" />
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay" />

                                    {/* Floating Stats Cards inside the image */}
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                                        <div className="flex-1 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
                                            <div className="text-[10px] text-white/60">ROAS</div>
                                            <div className="text-sm font-bold text-accent">4.8x</div>
                                        </div>
                                        <div className="flex-1 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
                                            <div className="text-[10px] text-white/60">Conv. Rate</div>
                                            <div className="text-sm font-bold text-white">3.2%</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Metrics */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-xs text-white/60">Daily Spend</div>
                                        <div className="text-xs font-mono text-white">£450.00</div>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full w-[75%] bg-accent rounded-full" />
                                    </div>
                                    <div className="flex items-center justify-between pt-2">
                                        <div className="text-xs text-white/60">AI Optimization</div>
                                        <div className="text-xs text-accent flex items-center gap-1">
                                            <Zap className="w-3 h-3" /> Active
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="mb-2 flex items-center gap-2">
                            <div className="h-[1px] w-8 bg-accent"></div>
                            <span className="text-accent font-mono text-xs tracking-widest uppercase">The NTEX Reality</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            We Don't Hope. <br />
                            <span className="text-gradient-platinum">We Engineer.</span>
                        </h2>

                        <p className="text-lg text-white/60 mb-10 leading-relaxed">
                            Most agencies treat Meta Ads like a creative lottery. We replace the guesswork with a mathematical approach that turns ad spend into profit with mechanical consistency.
                        </p>

                        <div className="space-y-8">
                            {/* Feature 1 */}
                            <div className="flex gap-5 group">
                                <div className="mt-1">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors duration-300">
                                        <Brain className="w-5 h-5 text-white/80 group-hover:text-accent transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">AI-Driven Precision</h3>
                                    <p className="text-white/50 leading-relaxed">
                                        Our systems analyze top-performing market patterns to generate high-converting creative variations 5x faster than traditional teams.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-5 group">
                                <div className="mt-1">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors duration-300">
                                        <BarChart3 className="w-5 h-5 text-white/80 group-hover:text-accent transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Statistical Significance</h3>
                                    <p className="text-white/50 leading-relaxed">
                                        We don't optimize based on "gut feeling." We track 20+ data points to ensure every decision is mathematically proven to drive revenue.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-5 group">
                                <div className="mt-1">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors duration-300">
                                        <CheckCircle2 className="w-5 h-5 text-white/80 group-hover:text-accent transition-colors" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Mechanical Consistency</h3>
                                    <p className="text-white/50 leading-relaxed">
                                        A continuous engine that monitors performance 24/7, preventing ad fatigue and spotting scaling opportunities the moment they appear.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a href="#strategy-session" className="inline-flex items-center gap-2 text-white font-medium border-b border-accent/50 pb-1 hover:text-accent hover:border-accent transition-all duration-300">
                                See how we scale
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
