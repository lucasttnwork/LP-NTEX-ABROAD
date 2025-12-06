import React from 'react';
import { motion } from 'framer-motion';

const BudgetTiltAnimation = ({ className = '' }) => {
    // Moedas deslizando na plataforma
    const slidingCoins = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        delay: i * 0.5,
        size: 14 + Math.random() * 8,
    }));

    // Partículas de perda
    const lossParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        delay: i * 0.2,
        x: 65 + Math.random() * 30,
        y: 50 + Math.random() * 30,
    }));

    return (
        <div className={`relative w-full h-full min-h-[160px] overflow-hidden ${className}`}>
            {/* Dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
            
            {/* Subtle grid */}
            <div 
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px'
                }}
            />

            {/* Danger zone - the "drain" area */}
            <motion.div 
                className="absolute -bottom-4 -right-4 w-[70%] h-[70%]"
                style={{
                    background: 'radial-gradient(ellipse at bottom right, rgba(220,38,38,0.25) 0%, rgba(220,38,38,0.08) 40%, transparent 70%)'
                }}
                animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />

            {/* The "black hole" drain effect */}
            <motion.div
                className="absolute bottom-4 right-6"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            >
                <div className="relative">
                    {/* Outer ring */}
                    <motion.div
                        className="absolute -inset-4 rounded-full border border-red-500/20"
                        animate={{ 
                            rotate: 360,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                            scale: { duration: 2, repeat: Infinity },
                        }}
                    />
                    <motion.div
                        className="absolute -inset-6 rounded-full border border-red-500/10"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Center vortex */}
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-900/80 to-black flex items-center justify-center">
                        <motion.div 
                            className="w-3 h-3 rounded-full bg-red-800/60"
                            animate={{
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                            }}
                        />
                    </div>
                </div>
            </motion.div>

            {/* THE MAIN TILTING SCALE */}
            <motion.div
                className="absolute left-[10%] right-[15%] top-[35%] h-[35%]"
                style={{ 
                    transformOrigin: 'center center',
                    perspective: '500px',
                }}
                animate={{
                    rotateZ: [12, 16, 12],
                    rotateX: [2, 0, 2],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                {/* Platform base with 3D effect */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                    {/* Main platform surface */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent backdrop-blur-sm border border-white/10 rounded-lg">
                        {/* Surface texture lines */}
                        <div className="absolute inset-0 opacity-30">
                            {[...Array(5)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="absolute h-[1px] left-0 right-0 bg-gradient-to-r from-white/20 via-white/5 to-transparent"
                                    style={{ top: `${20 + i * 15}%` }}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* Platform bottom edge (3D depth) */}
                    <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-b from-gray-800/50 to-gray-900/80 rounded-b-lg border-t border-white/5" />
                    
                    {/* Glowing edge on tilt */}
                    <motion.div 
                        className="absolute bottom-0 left-0 right-[50%] h-[2px] bg-gradient-to-r from-amber-500/60 via-amber-400/40 to-transparent rounded-full"
                        animate={{
                            opacity: [0.5, 0.9, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    />
                </div>

                {/* LEFT SIDE - "LAST Q" with coin stacks */}
                <div className="absolute left-4 top-0 bottom-0 flex items-center gap-3">
                    {/* Label */}
                    <div className="flex flex-col items-start gap-1">
                        <span className="text-[10px] font-mono text-amber-400/90 tracking-wider font-medium">LAST Q</span>
                        <motion.div 
                            className="flex gap-0.5"
                            animate={{
                                opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                        >
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-1 h-2 bg-amber-400/50 rounded-sm" />
                            ))}
                        </motion.div>
                    </div>

                    {/* Coin stacks */}
                    <div className="flex items-end gap-1 -mt-8">
                        {[32, 26, 18, 12].map((height, i) => (
                            <motion.div
                                key={i}
                                className="relative"
                                style={{ height: `${height}px` }}
                                animate={{
                                    height: [`${height}px`, `${height - 3}px`, `${height}px`],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                }}
                            >
                                {/* Stack of coins */}
                                {[...Array(Math.floor(height / 5))].map((_, j) => (
                                    <div 
                                        key={j}
                                        className="w-5 h-[5px] rounded-[2px] bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 border-t border-amber-200/40"
                                        style={{ 
                                            position: 'absolute',
                                            bottom: j * 4,
                                            boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
                                        }}
                                    />
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE - "ROI MODEL" faded/ignored */}
                <div className="absolute right-4 top-0 bottom-0 flex items-center">
                    <div className="flex flex-col items-end gap-1 opacity-30">
                        <span className="text-[9px] font-mono text-white/50 tracking-wider line-through">ROI MODEL</span>
                        <div className="flex gap-0.5">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-1 h-1.5 bg-white/20 rounded-sm" />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Central pivot point */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                    className="relative"
                    animate={{
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <div className="w-4 h-4 rounded-full bg-gray-800 border-2 border-white/20" />
                    <motion.div 
                        className="absolute inset-1 rounded-full bg-amber-500/60"
                        animate={{
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    />
                </motion.div>
            </div>

            {/* SLIDING COINS - falling off the platform */}
            {slidingCoins.map((coin) => (
                <motion.div
                    key={coin.id}
                    className="absolute z-20"
                    style={{
                        left: '35%',
                        top: '40%',
                    }}
                    animate={{
                        x: [0, 80, 150, 200],
                        y: [0, 20, 50, 100],
                        rotate: [0, 90, 180, 360],
                        opacity: [0, 1, 0.8, 0],
                        scale: [0.8, 1, 0.9, 0.5],
                    }}
                    transition={{
                        duration: 2.8,
                        delay: coin.delay,
                        repeat: Infinity,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                >
                    {/* Coin with shine effect */}
                    <div 
                        className="rounded-full relative"
                        style={{
                            width: coin.size,
                            height: coin.size,
                            background: 'linear-gradient(145deg, #fcd34d 0%, #f59e0b 40%, #b45309 100%)',
                            boxShadow: '0 2px 8px rgba(251, 191, 36, 0.4), inset 0 1px 2px rgba(255,255,255,0.3)',
                        }}
                    >
                        {/* Coin edge detail */}
                        <div className="absolute inset-[2px] rounded-full border border-amber-300/30" />
                        {/* $ symbol */}
                        <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-amber-900/60">$</span>
                    </div>
                </motion.div>
            ))}

            {/* Loss particles being sucked into drain */}
            {lossParticles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        background: 'radial-gradient(circle, rgba(239,68,68,0.8) 0%, rgba(185,28,28,0.4) 100%)',
                    }}
                    animate={{
                        x: [0, 30],
                        y: [0, 40],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1, 0.2],
                    }}
                    transition={{
                        duration: 1.5,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'easeIn',
                    }}
                />
            ))}

            {/* Floating negative percentages */}
            {['-18%', '-12%', '-24%', '-9%'].map((text, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{
                        right: `${12 + i * 8}%`,
                        top: `${50 + i * 8}%`,
                    }}
                    animate={{
                        y: [0, 30],
                        x: [0, 15],
                        opacity: [0, 0.9, 0],
                        scale: [0.7, 1, 0.5],
                    }}
                    transition={{
                        duration: 2.5,
                        delay: i * 0.6 + 0.3,
                        repeat: Infinity,
                    }}
                >
                    <span className="text-xs font-mono font-bold text-red-400/80 drop-shadow-lg">{text}</span>
                </motion.div>
            ))}

            {/* TOP LEFT - Warning indicator */}
            <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                <motion.div
                    className="relative"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                    }}
                >
                    <motion.div
                        className="absolute -inset-2 rounded-full bg-amber-500/20"
                        animate={{
                            scale: [1, 2],
                            opacity: [0.5, 0],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                        }}
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                </motion.div>
                <motion.span 
                    className="text-[10px] font-mono text-amber-400 tracking-wider font-medium"
                    animate={{
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                >
                    IMBALANCED
                </motion.span>
            </div>

            {/* BOTTOM LEFT - Budget misallocation indicator */}
            <div className="absolute bottom-3 left-3 flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                    <motion.div
                        className="flex gap-[2px]"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        {[1, 0.7, 0.4, 0.2].map((opacity, i) => (
                            <div 
                                key={i}
                                className="w-[3px] h-3 bg-amber-400 rounded-sm"
                                style={{ opacity }}
                            />
                        ))}
                    </motion.div>
                    <span className="text-[8px] font-mono text-amber-400/70 tracking-wide">ALLOCATION</span>
                </div>
            </div>

            {/* BOTTOM RIGHT - Draining status */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                >
                    <svg className="w-3 h-3 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
                    </svg>
                </motion.div>
                <span className="text-[9px] font-mono text-red-400/80 tracking-wide font-medium">DRAINING</span>
            </div>

            {/* Flow direction arrows */}
            <div className="absolute right-[30%] top-[30%]">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{ 
                            top: i * 10,
                            left: i * 6,
                        }}
                        animate={{
                            y: [0, 15],
                            x: [0, 8],
                            opacity: [0, 0.7, 0],
                        }}
                        transition={{
                            duration: 0.8,
                            delay: i * 0.15,
                            repeat: Infinity,
                        }}
                    >
                        <svg className="w-3 h-3 text-red-500/50" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-8 8h5v8h6v-8h5z" transform="rotate(135 12 12)"/>
                        </svg>
                    </motion.div>
                ))}
            </div>

            {/* Comparison lines showing misalignment */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                {/* Horizontal baseline (where balance SHOULD be) */}
                <motion.line
                    x1="15%"
                    y1="52%"
                    x2="75%"
                    y2="52%"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                    strokeDasharray="6 4"
                />
                {/* Actual tilted line */}
                <motion.line
                    x1="15%"
                    y1="45%"
                    x2="75%"
                    y2="60%"
                    stroke="rgba(239,68,68,0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="8 4"
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                />
            </svg>
        </div>
    );
};

export default BudgetTiltAnimation;
