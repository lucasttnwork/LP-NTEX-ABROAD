import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
    BlueprintBuildAnimation,
    AIAcceleratorAnimation,
    ClarityMatrixAnimation,
} from '../../animations';

const NewAdvantage = () => {
    return (
        <section id="advantage" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 block"
                    >
                        The Turning Point
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-8 text-white"
                    >
                        What If You Could Treat Growth Like
                        <br />
                        <span className="font-serif italic text-gray-400">Engineering, Not Guesswork?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
                    >
                        Think about any serious area of your business. You don't leave finances to "gut feeling." You don't manage inventory "hoping for the best." Why should marketing be any different?
                    </motion.p>
                </div>

                {/* Master Card Container - Styled as Animated Stats Card */}
                <div className="rounded-[2.5rem] p-[1px] relative w-full"
                    style={{ background: 'radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d)' }}>
                    
                    <motion.div 
                        className="dot w-[5px] aspect-square absolute bg-white rounded-full z-[2]"
                        style={{
                            boxShadow: '0 0 10px #ffffff',
                            right: '20px',
                            top: '20px',
                        }}
                        animate={{
                            boxShadow: ['0 0 10px #ffffff', '0 0 20px #ffffff', '0 0 10px #ffffff'],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                    
                    <div className="relative flex flex-col w-full h-full border-[#202222] border rounded-[2.4rem] overflow-hidden"
                        style={{ background: 'radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d)' }}>
                        
                        <div className="ray absolute blur-[10px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]"
                            style={{
                                backgroundColor: '#c7c7c7',
                                boxShadow: '0 0 50px #fff',
                                transformOrigin: '10%'
                            }}></div>

                        <div className="line topl absolute w-full h-[1px]"
                            style={{ top: '20px', background: 'linear-gradient(90deg, #888888 30%, #1d1f1f 70%)' }}></div>
                        <div className="line leftl absolute w-[1px] h-full"
                            style={{ left: '20px', background: 'linear-gradient(180deg, #747474 30%, #222424 70%)' }}></div>
                        <div className="line bottoml absolute w-full h-[1px] bg-[#2c2c2c]" style={{ bottom: '20px' }}></div>
                        <div className="line rightl absolute w-[1px] h-full bg-[#2c2c2c]" style={{ right: '20px' }}></div>

                        {/* Inner Content */}
                        <div className="relative z-10 p-6 md:p-10">
                            {/* Optional Header inside Master Card */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 px-2 gap-4">
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-white">Our Methodology</h3>
                                    <p className="text-gray-400 text-sm mt-1">Systematic growth engineering</p>
                                </div>
                                <motion.button 
                                    className="text-sm text-white border border-white/20 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View process <ArrowUpRight size={14} />
                                </motion.button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Card 1: We Don't Gamble. We Build. */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    whileHover={{ 
                                        y: -5,
                                        borderColor: 'rgba(59,130,246,0.3)',
                                    }}
                                    className="group relative rounded-2xl bg-black/40 border border-white/10 overflow-hidden transition-all duration-500 flex flex-col"
                                >
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <BlueprintBuildAnimation className="w-full h-full" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-heading font-bold mb-2 text-white">
                                            We Don't Gamble. We Build.
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            At NTEX, we treat Meta Ads as growth engineering. We use real scientific method: clear hypotheses, controlled tests, and statistical analysis.
                                        </p>
                                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-xs text-gray-500 font-medium">Engineering</span>
                                            <motion.div 
                                                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors"
                                                whileHover={{ scale: 1.1, rotate: 45 }}
                                            >
                                                <ArrowUpRight size={14} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Card 2: Accelerated by AI */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ 
                                        y: -5,
                                        borderColor: 'rgba(100,180,220,0.4)',
                                    }}
                                    className="group relative rounded-2xl bg-black/40 border border-white/10 overflow-hidden transition-all duration-500 flex flex-col"
                                >
                                     <div className="aspect-[4/3] overflow-hidden relative">
                                        <AIAcceleratorAnimation className="w-full h-full" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-heading font-bold mb-2 text-white">
                                            Accelerated by AI.
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            We accelerate everything with artificial intelligence — finding what works before competitors even start testing.
                                        </p>
                                         <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-xs text-gray-500 font-medium">Technology</span>
                                            <motion.div 
                                                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors"
                                                whileHover={{ scale: 1.1, rotate: 45 }}
                                            >
                                                <ArrowUpRight size={14} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Card 3: Predictability & Clarity */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ 
                                        y: -5,
                                        borderColor: 'rgba(34,197,94,0.3)',
                                    }}
                                    className="group relative rounded-2xl bg-black/40 border border-white/10 overflow-hidden transition-all duration-500 flex flex-col"
                                >
                                     <div className="aspect-[4/3] overflow-hidden relative">
                                        <ClarityMatrixAnimation className="w-full h-full" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-heading font-bold mb-2 text-white">
                                            Predictability & Clarity.
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            The result? A system that improves every week, not an endless experiment draining your budget. We don't guess — we prove.
                                        </p>
                                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-xs text-gray-500 font-medium">Results</span>
                                            <motion.div 
                                                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors"
                                                whileHover={{ scale: 1.1, rotate: 45 }}
                                            >
                                                <ArrowUpRight size={14} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewAdvantage;
