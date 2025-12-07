import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ZeroAdFatigueAnimation = ({ className = '', isPlaying = false, ...rest }) => {
    // Mini ad cards
    const adCards = [0, 1, 2];
    
    // Sparkles
    const sparkles = [0, 1, 2, 3, 4, 5];

    return (
        <div
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{ zIndex: 1 }}
            {...rest}
        >
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        key="animation-container"
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Ambient glow - bottom right area */}
                        <motion.div
                            className="absolute w-32 h-32"
                            style={{
                                bottom: '-10px',
                                right: '-10px',
                                background: 'radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 65%)',
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ 
                                opacity: [0.4, 0.7, 0.4],
                                scale: [0.8, 1.1, 0.8],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Mini Ad Cards - positioned at bottom right */}
                        <div 
                            className="absolute flex items-end gap-1.5"
                            style={{ bottom: '12px', right: '12px' }}
                        >
                            {adCards.map((index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ 
                                        opacity: 0, 
                                        y: 30, 
                                        scale: 0.5,
                                        rotate: -10,
                                    }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: [0, -5, 0, -3, 0],
                                        scale: 1,
                                        rotate: [0, 1, 0, -1, 0],
                                    }}
                                    transition={{
                                        opacity: { duration: 0.4, delay: index * 0.1 },
                                        y: { 
                                            duration: 2.5 + index * 0.2, 
                                            repeat: Infinity, 
                                            ease: 'easeInOut',
                                            delay: index * 0.3,
                                        },
                                        scale: { 
                                            duration: 0.5, 
                                            delay: index * 0.1,
                                            type: 'spring',
                                            stiffness: 200,
                                        },
                                        rotate: {
                                            duration: 3 + index * 0.3,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: index * 0.2,
                                        },
                                    }}
                                >
                                    {/* Card glow effect */}
                                    <motion.div
                                        className="absolute -inset-1 rounded-md blur-sm"
                                        style={{ background: 'rgba(34,211,238,0.4)' }}
                                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                            delay: index * 0.25,
                                            ease: 'easeInOut',
                                        }}
                                    />
                                    
                                    {/* The mini ad card */}
                                    <div 
                                        className="relative w-8 h-11 rounded-md overflow-hidden"
                                        style={{
                                            background: 'linear-gradient(145deg, rgba(15,30,50,0.98) 0%, rgba(20,40,60,0.95) 100%)',
                                            border: '1px solid rgba(34,211,238,0.5)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.4), 0 0 20px rgba(34,211,238,0.15)',
                                        }}
                                    >
                                        {/* Image/video area */}
                                        <motion.div 
                                            className="h-5 w-full"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(34,211,238,0.35) 0%, rgba(20,184,166,0.25) 100%)',
                                            }}
                                            animate={{ opacity: [0.7, 1, 0.7] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: index * 0.2,
                                            }}
                                        >
                                            {/* Play button */}
                                            <div className="flex items-center justify-center h-full">
                                                <div 
                                                    className="w-0 h-0"
                                                    style={{
                                                        borderLeft: '4px solid rgba(255,255,255,0.8)',
                                                        borderTop: '2.5px solid transparent',
                                                        borderBottom: '2.5px solid transparent',
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                        
                                        {/* Text lines */}
                                        <div className="p-1 space-y-0.5">
                                            <motion.div 
                                                className="h-[2px] rounded-full bg-white/40"
                                                style={{ width: '85%' }}
                                                animate={{ opacity: [0.4, 0.9, 0.4] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                                            />
                                            <motion.div 
                                                className="h-[2px] rounded-full bg-white/25"
                                                style={{ width: '65%' }}
                                                animate={{ opacity: [0.3, 0.7, 0.3] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 + 0.1 }}
                                            />
                                        </div>

                                        {/* Shimmer sweep */}
                                        <motion.div
                                            className="absolute inset-0"
                                            style={{
                                                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
                                            }}
                                            initial={{ x: '-100%' }}
                                            animate={{ x: '200%' }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                repeatDelay: 1.5,
                                                delay: 0.5 + index * 0.3,
                                                ease: 'easeInOut',
                                            }}
                                        />
                                    </div>

                                    {/* Green checkmark badge */}
                                    <motion.div
                                        className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
                                            boxShadow: '0 2px 8px rgba(16,185,129,0.5)',
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            delay: 0.4 + index * 0.15,
                                            type: 'spring',
                                            stiffness: 500,
                                            damping: 15,
                                        }}
                                    >
                                        <svg width="8" height="8" viewBox="0 0 10 10">
                                            <path
                                                d="M2 5 L4 7 L8 3"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating sparkles */}
                        {sparkles.map((i) => (
                            <motion.div
                                key={`sparkle-${i}`}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                    background: 'rgba(34,211,238,0.9)',
                                    boxShadow: '0 0 4px rgba(34,211,238,0.8)',
                                    bottom: `${20 + (i % 3) * 15}px`,
                                    right: `${15 + i * 12}px`,
                                }}
                                initial={{ opacity: 0, y: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    y: [0, -20 - i * 5, -35 - i * 8],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 1.8,
                                    delay: 0.3 + i * 0.2,
                                    repeat: Infinity,
                                    repeatDelay: 0.8,
                                    ease: 'easeOut',
                                }}
                            />
                        ))}

                        {/* Refresh icon rotating */}
                        <motion.div
                            className="absolute"
                            style={{ bottom: '50px', right: '65px' }}
                            initial={{ opacity: 0, scale: 0, rotate: 0 }}
                            animate={{ 
                                opacity: 1, 
                                scale: 1,
                                rotate: 360,
                            }}
                            transition={{
                                opacity: { duration: 0.3, delay: 0.2 },
                                scale: { duration: 0.4, delay: 0.2, type: 'spring' },
                                rotate: { duration: 3, repeat: Infinity, ease: 'linear', delay: 0.5 },
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path 
                                    d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" 
                                    stroke="rgba(34,211,238,0.7)" 
                                    strokeWidth="2" 
                                    strokeLinecap="round"
                                />
                                <path 
                                    d="M3 3v5h5" 
                                    stroke="rgba(34,211,238,0.7)" 
                                    strokeWidth="2" 
                                    strokeLinecap="round"
                                />
                                <path 
                                    d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" 
                                    stroke="rgba(34,211,238,0.7)" 
                                    strokeWidth="2" 
                                    strokeLinecap="round"
                                />
                                <path 
                                    d="M21 21v-5h-5" 
                                    stroke="rgba(34,211,238,0.7)" 
                                    strokeWidth="2" 
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>

                        {/* "FRESH" badge */}
                        <motion.div
                            className="absolute text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded"
                            style={{ 
                                bottom: '72px', 
                                right: '12px',
                                background: 'linear-gradient(135deg, rgba(34,211,238,0.25) 0%, rgba(20,184,166,0.2) 100%)',
                                border: '1px solid rgba(34,211,238,0.4)',
                                color: 'rgba(34,211,238,0.95)',
                            }}
                            initial={{ opacity: 0, x: 10, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{
                                delay: 0.5,
                                type: 'spring',
                                stiffness: 300,
                            }}
                        >
                            FRESH
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Static state hint - always visible when not playing */}
            {!isPlaying && (
                <div className="absolute inset-0">
                    <div 
                        className="absolute w-16 h-16 opacity-20"
                        style={{
                            bottom: '5px',
                            right: '5px',
                            background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)',
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default ZeroAdFatigueAnimation;
