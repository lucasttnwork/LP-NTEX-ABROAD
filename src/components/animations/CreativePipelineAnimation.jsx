import React from 'react';
import { motion } from 'framer-motion';

const CreativePipelineAnimation = ({ className = '', isPlaying = false, ...rest }) => {
    // Partículas fluindo pelo pipeline
    const flowParticles = Array.from({ length: 4 }, (_, i) => ({
        id: i,
        delay: i * 0.7,
    }));

    if (!isPlaying) {
        return (
            <div
                className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
                {...rest}
            >
                {/* Static glow */}
                <div
                    className="absolute top-1/2 left-0 right-0 h-8 -translate-y-1/2 opacity-20"
                    style={{
                        background: 'linear-gradient(90deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.3) 50%, rgba(52,211,153,0.3) 100%)'
                    }}
                />

                {/* Static pipeline line */}
                <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-violet-400/30 via-blue-400/30 to-emerald-400/30 rounded-full" />

                {/* Static dots */}
                <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400/40" />
                <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/40" />
                <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400/40" />
            </div>
        );
    }

    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} {...rest}>
            {/* Animated glow */}
            <motion.div
                className="absolute top-1/2 left-0 right-0 h-12 -translate-y-1/2"
                style={{
                    background: 'linear-gradient(90deg, rgba(139,92,246,0.2) 0%, rgba(59,130,246,0.2) 50%, rgba(52,211,153,0.2) 100%)'
                }}
                animate={{
                    opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Pipeline base line */}
            <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-violet-400/20 via-blue-400/20 to-emerald-400/20 rounded-full" />

            {/* Animated flow on pipeline */}
            <motion.div
                className="absolute top-1/2 left-[15%] h-[2px] w-8 -translate-y-1/2 rounded-full"
                style={{
                    background: 'linear-gradient(90deg, rgba(139,92,246,0.8), rgba(59,130,246,0.8), rgba(52,211,153,0.8))',
                    boxShadow: '0 0 8px rgba(139,92,246,0.5)',
                }}
                animate={{
                    x: [0, 'calc(70vw * 0.7 - 2rem)'],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Pulsing dots */}
            <motion.div 
                className="absolute top-1/2 left-[20%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-violet-400/60"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            />
            <motion.div 
                className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-400/60"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.3,
                    repeat: Infinity,
                }}
            />
            <motion.div 
                className="absolute top-1/2 right-[20%] -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400/60"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0.9, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.6,
                    repeat: Infinity,
                }}
            />

            {/* Flow particles */}
            {flowParticles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                    style={{
                        left: '15%',
                        background: 'linear-gradient(90deg, rgba(139,92,246,0.9), rgba(52,211,153,0.9))',
                        boxShadow: '0 0 6px rgba(139,92,246,0.6)',
                    }}
                    animate={{
                        x: [0, 'calc(70vw * 0.7)'],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}

            {/* Output burst effect */}
            <motion.div
                className="absolute top-1/2 right-[15%] -translate-y-1/2"
                animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                <div className="w-6 h-6 rounded-full bg-emerald-400/20 blur-sm" />
            </motion.div>
        </div>
    );
};

export default CreativePipelineAnimation;
