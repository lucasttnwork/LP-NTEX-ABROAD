import React from 'react';
import { motion } from 'framer-motion';

const CreativeLoopAnimation = ({ className = '' }) => {
    return (
        <div className={`relative w-full h-full min-h-[120px] overflow-hidden bg-black/40 flex items-center justify-center ${className}`}>
            {/* Outer rotating ring */}
            <motion.div
                className="absolute w-20 h-20 rounded-full border-2 border-dashed border-blue-500/30"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Inner rotating ring (opposite direction) */}
            <motion.div
                className="absolute w-14 h-14 rounded-full border border-blue-400/40"
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {/* Dots on the ring */}
                {[0, 90, 180, 270].map((angle) => (
                    <div
                        key={angle}
                        className="absolute w-1.5 h-1.5 bg-blue-400/60 rounded-full"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${angle}deg) translateX(28px) translateY(-50%)`,
                        }}
                    />
                ))}
            </motion.div>

            {/* Center refresh icon */}
            <motion.div
                className="relative z-10"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: 1,
                }}
            >
                <svg
                    className="w-6 h-6 text-blue-500/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                </svg>
            </motion.div>

            {/* Static result indicator */}
            <motion.div
                className="absolute bottom-2 left-2 right-2 flex items-center justify-between"
            >
                <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="w-4 h-1 bg-gray-600 rounded-full"
                            animate={{
                                backgroundColor: ['rgb(75, 85, 99)', 'rgb(75, 85, 99)'],
                            }}
                        />
                    ))}
                </div>
                <span className="text-[10px] font-mono text-gray-500">0% change</span>
            </motion.div>

            {/* Pulsing background */}
            <motion.div
                className="absolute inset-0 bg-blue-500/5 rounded-lg"
                animate={{
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            />
        </div>
    );
};

export default CreativeLoopAnimation;




