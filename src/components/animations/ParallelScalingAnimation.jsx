import React from 'react';
import { motion } from 'framer-motion';

const ParallelScalingAnimation = ({ className = '', isPlaying = false, ...rest }) => {
    // Barras principais (proven campaigns) - crescendo
    const mainBars = [
        { id: 0, height: 35, delay: 0 },
        { id: 1, height: 50, delay: 0.1 },
        { id: 2, height: 65, delay: 0.2 },
    ];

    // Partículas de moedas fluindo
    const coinParticles = Array.from({ length: 4 }, (_, i) => ({
        id: i,
        delay: i * 0.5,
    }));

    if (!isPlaying) {
        return (
            <div
                className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
                {...rest}
            >
                {/* Static glow */}
                <div 
                    className="absolute bottom-0 left-1/4 w-1/2 h-20 opacity-20"
                    style={{
                        background: 'radial-gradient(ellipse at bottom, rgba(52,211,153,0.4) 0%, transparent 70%)'
                    }}
                />

                {/* Static bars */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-16">
                    {mainBars.map((bar) => (
                        <div
                            key={bar.id}
                            className="w-3 rounded-t bg-gradient-to-t from-emerald-500/40 to-emerald-400/30"
                            style={{ height: `${bar.height}%` }}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} {...rest}>
            {/* Animated glow */}
            <motion.div
                className="absolute bottom-0 left-1/4 w-1/2 h-24"
                style={{
                    background: 'radial-gradient(ellipse at bottom, rgba(52,211,153,0.3) 0%, transparent 70%)'
                }}
                animate={{
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Animated bars */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-20">
                {mainBars.map((bar, index) => (
                    <motion.div
                        key={bar.id}
                        className="w-3 rounded-t bg-gradient-to-t from-emerald-500/60 to-emerald-400/40 relative overflow-hidden"
                        style={{ originY: 1 }}
                        animate={{
                            height: [`${bar.height}%`, `${bar.height + 20}%`, `${bar.height}%`],
                        }}
                        transition={{
                            duration: 2.5,
                            delay: bar.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                                x: ['-100%', '200%'],
                            }}
                            transition={{
                                duration: 2,
                                delay: index * 0.3,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Floating particles */}
            {coinParticles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/70"
                    style={{
                        left: '50%',
                        bottom: '30%',
                        boxShadow: '0 0 6px rgba(52,211,153,0.5)',
                    }}
                    animate={{
                        y: [0, -30, -50],
                        x: [-10, 5, 10],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* Growth arrow */}
            <motion.div
                className="absolute top-1/3 left-1/2 -translate-x-1/2"
                animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            >
                <svg className="w-4 h-4 text-emerald-400/70" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-8 8h16z" />
                </svg>
            </motion.div>
        </div>
    );
};

export default ParallelScalingAnimation;
