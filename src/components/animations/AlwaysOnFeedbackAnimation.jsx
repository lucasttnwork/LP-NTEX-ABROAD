import React from 'react';
import { motion } from 'framer-motion';

const AlwaysOnFeedbackAnimation = ({ className = '', isPlaying = false, ...rest }) => {
    // Partículas orbitando
    const orbitParticles = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        delay: i * 0.4,
        angle: (i * 72) * (Math.PI / 180),
    }));

    if (!isPlaying) {
        return (
            <div
                className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
                {...rest}
            >
                {/* Static ambient glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)'
                    }}
                />

                {/* Static rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 rounded-full border border-blue-400/20" />
                    <div className="absolute inset-2 rounded-full border border-cyan-400/15" />
                </div>

                {/* Static infinity hint */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg className="w-8 h-8 text-blue-400/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.24 0-4.24 8 0 8 5.606 0 7.644-8 12.74-8z" />
                    </svg>
                </div>
            </div>
        );
    }

    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} {...rest}>
            {/* Animated ambient glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28"
                style={{
                    background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(34,211,238,0.2) 50%, transparent 70%)'
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Rotating rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                    className="w-24 h-24 rounded-full border border-blue-400/30"
                    style={{
                        borderStyle: 'dashed',
                        borderDasharray: '4 6',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
                
                <motion.div 
                    className="absolute inset-2 rounded-full border border-cyan-400/25"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
                
                <motion.div 
                    className="absolute inset-5 rounded-full border border-white/15"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Animated infinity symbol */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.svg 
                    className="w-10 h-10" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="url(#infinityGrad)" 
                    strokeWidth="1.5"
                >
                    <defs>
                        <linearGradient id="infinityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
                            <stop offset="50%" stopColor="rgba(34,211,238,0.8)" />
                            <stop offset="100%" stopColor="rgba(59,130,246,0.6)" />
                        </linearGradient>
                    </defs>
                    <motion.path 
                        d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.24 0-4.24 8 0 8 5.606 0 7.644-8 12.74-8z"
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.svg>
            </div>

            {/* Orbiting particles */}
            {orbitParticles.map((particle) => {
                const radius = 32;
                return (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1.5 h-1.5 rounded-full"
                        style={{
                            left: '50%',
                            top: '50%',
                            background: particle.id % 2 === 0 ? 'rgba(59,130,246,0.8)' : 'rgba(34,211,238,0.8)',
                            boxShadow: `0 0 6px ${particle.id % 2 === 0 ? 'rgba(59,130,246,0.5)' : 'rgba(34,211,238,0.5)'}`,
                        }}
                        animate={{
                            x: [
                                Math.cos(particle.angle) * radius,
                                Math.cos(particle.angle + Math.PI) * radius,
                                Math.cos(particle.angle + Math.PI * 2) * radius,
                            ],
                            y: [
                                Math.sin(particle.angle) * radius,
                                Math.sin(particle.angle + Math.PI) * radius,
                                Math.sin(particle.angle + Math.PI * 2) * radius,
                            ],
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 4,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                );
            })}
        </div>
    );
};

export default AlwaysOnFeedbackAnimation;
