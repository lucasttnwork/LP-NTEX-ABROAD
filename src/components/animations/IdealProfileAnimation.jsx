import React from 'react';
import { motion } from 'framer-motion';

const IdealProfileAnimation = ({ className = '' }) => {
    // Animation variants
    const ringVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -90 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                delay: i * 0.2,
                duration: 1.5,
                ease: "easeOut"
            }
        }),
        rotating: (i) => ({
            rotate: [0, 360],
            transition: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
            }
        })
    };

    const scannerVariants = {
        scan: {
            top: ["0%", "100%"],
            opacity: [0, 1, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1
            }
        }
    };

    const dataPointVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 1.5 + i * 0.5,
                duration: 0.5
            }
        })
    };

    const centralNodeVariants = {
        initial: { scale: 1, opacity: 1 },
        pulse: {
            scale: [1, 1.05, 1],
            boxShadow: [
                "0 0 0px rgba(59,130,246,0)",
                "0 0 15px rgba(59,130,246,0.2)",
                "0 0 0px rgba(59,130,246,0)"
            ],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        matched: {
            scale: 1.1,
            borderColor: "rgba(59,130,246,1)",
            backgroundColor: "rgba(59,130,246,0.2)",
            boxShadow: "0 0 30px rgba(59,130,246,0.6)",
            transition: {
                delay: 4,
                duration: 0.5
            }
        }
    };

    const iconVariants = {
        initial: { opacity: 0.5, stroke: "#71717a" },
        pulse: {
            opacity: [0.5, 0.8, 0.5],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        matched: {
            opacity: 1,
            stroke: "#3b82f6",
            transition: {
                delay: 4,
                duration: 0.5
            }
        }
    };

    return (
        <div className={`relative w-full h-full min-h-[220px] overflow-hidden bg-[#0a0a0a] ${className}`}>
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
                {/* Rotating Rings */}
                {[1, 2, 3].map((ring, i) => (
                    <motion.div
                        key={ring}
                        custom={i}
                        variants={ringVariants}
                        initial="hidden"
                        animate={["visible", "rotating"]}
                        className={`absolute rounded-full border border-blue-500/20 border-dashed`}
                        style={{
                            width: `${160 + i * 60}px`,
                            height: `${160 + i * 60}px`,
                            borderWidth: '1px'
                        }}
                    />
                ))}

                {/* Central Identity Node */}
                <div className="relative z-10">
                    <motion.div
                        variants={centralNodeVariants}
                        initial="initial"
                        animate={["pulse", "matched"]}
                        className="w-24 h-24 rounded-full border-2 border-zinc-700 bg-zinc-900/80 flex items-center justify-center backdrop-blur-md relative"
                    >
                        {/* Inner User Icon / Logo Placeholder */}
                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                            <motion.path
                                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                variants={iconVariants}
                                initial="initial"
                                animate={["pulse", "matched"]}
                            />
                            <motion.circle
                                cx="12" cy="7" r="4"
                                variants={iconVariants}
                                initial="initial"
                                animate={["pulse", "matched"]}
                            />
                        </svg>

                        {/* Success Checkmark Overlay */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 4.2, type: "spring" }}
                            className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1.5 shadow-lg shadow-blue-500/50"
                        >
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scanning Line */}
            <motion.div
                variants={scannerVariants}
                animate="scan"
                className="absolute left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 pointer-events-none"
            />

            {/* Floating Data Points */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    custom={0}
                    variants={dataPointVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="absolute top-10 left-10 bg-zinc-900/90 border border-zinc-700 rounded px-2 py-1 flex items-center gap-2"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-400">REV &gt; £20K</span>
                </motion.div>

                <motion.div
                    custom={1}
                    variants={dataPointVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="absolute bottom-12 right-12 bg-zinc-900/90 border border-zinc-700 rounded px-2 py-1 flex items-center gap-2"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-400">DATA_DRIVEN: YES</span>
                </motion.div>

                <motion.div
                    custom={2}
                    variants={dataPointVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="absolute top-1/2 right-4 bg-zinc-900/90 border border-zinc-700 rounded px-2 py-1 flex items-center gap-2"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-400">SCALABLE: TRUE</span>
                </motion.div>
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-zinc-900/80 border-t border-white/5 flex items-center justify-between px-4 backdrop-blur-sm z-20">
                <span className="text-[10px] font-mono text-zinc-500">SYS.ANALYSIS.v.2.4</span>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5 }}
                    className="flex items-center gap-2"
                >
                    <span className="text-[10px] font-bold text-blue-400 tracking-wider">MATCH CONFIRMED</span>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,1)]" />
                </motion.div>
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80 pointer-events-none" />
        </div>
    );
};

export default IdealProfileAnimation;



