import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VanityMetricsAnimation = ({ className = '' }) => {
    const [cycleKey, setCycleKey] = useState(0);
    
    // Reset animation cycle
    useEffect(() => {
        const interval = setInterval(() => {
            setCycleKey(prev => prev + 1);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    // Vanity metrics data - these will animate UP with celebration
    const vanityBars = [
        { label: 'IMPRESSIONS', value: '2.4M', growth: '+847%', color: 'from-blue-500 to-cyan-400', delay: 0 },
        { label: 'REACH', value: '890K', growth: '+523%', color: 'from-purple-500 to-pink-400', delay: 0.15 },
        { label: 'CLICKS', value: '156K', growth: '+312%', color: 'from-amber-500 to-orange-400', delay: 0.3 },
        { label: 'ENGAGEMENT', value: '89K', growth: '+267%', color: 'from-emerald-500 to-teal-400', delay: 0.45 },
    ];

    // Floating celebration particles
    const confettiParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        size: Math.random() * 4 + 2,
        color: ['#60a5fa', '#a78bfa', '#f472b6', '#34d399', '#fbbf24'][Math.floor(Math.random() * 5)],
    }));

    return (
        <div 
            key={cycleKey}
            className={`relative w-full h-full min-h-[200px] overflow-hidden ${className}`}
            style={{
                background: 'linear-gradient(135deg, rgba(15,15,25,0.98) 0%, rgba(5,5,15,1) 100%)',
            }}
        >
            {/* Animated grid background */}
            <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <pattern id="vanityGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path 
                            d="M 40 0 L 0 0 0 40" 
                            fill="none" 
                            stroke="rgba(99,102,241,0.15)" 
                            strokeWidth="0.5"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#vanityGrid)" />
            </svg>

            {/* Celebration confetti particles - only on left side */}
            {confettiParticles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x * 0.6}%`,
                        backgroundColor: particle.color,
                        boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                    }}
                    initial={{ y: '120%', opacity: 0, rotate: 0 }}
                        animate={{
                        y: [120, -20],
                        opacity: [0, 1, 1, 0],
                        rotate: [0, 360],
                        x: [0, (Math.random() - 0.5) * 30],
                        }}
                        transition={{
                        duration: 3 + Math.random() * 2,
                        delay: particle.delay + 1,
                            repeat: Infinity,
                        repeatDelay: Math.random() * 2,
                    }}
                />
            ))}

            {/* SUCCESS badges floating */}
            <motion.div
                className="absolute top-4 left-4 px-2 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ 
                    opacity: [0, 1, 1, 0.8],
                    scale: [0.8, 1.1, 1, 1],
                    y: [10, 0, -2, 0],
                }}
                transition={{ delay: 1.5, duration: 1.5 }}
            >
                <span className="text-[8px] font-bold text-emerald-400 tracking-wider">🎉 TRENDING</span>
            </motion.div>

            <motion.div
                className="absolute top-4 right-[35%] px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ 
                    opacity: [0, 1, 1, 0.8],
                    scale: [0.8, 1.1, 1, 1],
                    y: [10, 0, -2, 0],
                }}
                transition={{ delay: 2, duration: 1.5 }}
            >
                <span className="text-[8px] font-bold text-purple-400 tracking-wider">✨ VIRAL</span>
            </motion.div>

            {/* Left side - Vanity Metrics with celebration */}
            <div className="absolute left-3 top-14 bottom-3 w-[55%] flex flex-col gap-2">
                {vanityBars.map((metric, idx) => (
                    <motion.div
                        key={metric.label}
                        className="relative flex-1 flex flex-col justify-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: metric.delay + 0.3 }}
                    >
                        {/* Label row */}
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[8px] font-mono text-white/50 tracking-wider">{metric.label}</span>
                        <motion.span
                                className="text-[9px] font-bold text-emerald-400 font-mono"
                                animate={{
                                    opacity: [0.7, 1, 0.7],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                            >
                                {metric.growth}
                            </motion.span>
                        </div>
                        
                        {/* Bar container */}
                        <div className="relative h-5 bg-white/5 rounded-md overflow-hidden border border-white/10">
                            {/* Animated bar fill */}
                            <motion.div
                                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${metric.color} rounded-md`}
                                initial={{ width: '0%' }}
                                animate={{ width: ['0%', '85%', '92%', '88%'] }}
                                transition={{
                                    delay: metric.delay + 0.5,
                                    duration: 2,
                                    ease: 'easeOut',
                                }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{
                                        delay: metric.delay + 2,
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                    }}
                                />
                            </motion.div>
                            
                            {/* Value label */}
                            <motion.div
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold font-mono text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: metric.delay + 1.5 }}
                            >
                                {metric.value}
                            </motion.div>
                        </div>
                        
                        {/* Sparkle on high growth */}
                        <motion.div
                            className="absolute -right-1 top-0"
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.2, 0.5],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                delay: metric.delay + 2,
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                        >
                            <svg className="w-3 h-3 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>
                        </svg>
                        </motion.div>
                    </motion.div>
                ))}
                </div>

            {/* Vertical divider - the "reality check" line */}
            <motion.div
                className="absolute top-14 bottom-3 left-[60%] w-[1px]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent)',
                }}
            />

            {/* Right side - REVENUE: The Empty Reality */}
            <div className="absolute right-3 top-14 bottom-3 w-[35%] flex flex-col items-center justify-center">
                {/* Revenue label */}
                <motion.div
                    className="text-center mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <span className="text-[9px] font-mono text-white/30 tracking-widest">REVENUE</span>
                </motion.div>

                {/* The big empty zero */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.8, duration: 0.5 }}
                >
                    {/* Broken/cracked effect background */}
                    <motion.div
                        className="absolute inset-0 -m-6"
                        animate={{
                            background: [
                                'radial-gradient(circle, rgba(239,68,68,0) 0%, transparent 70%)',
                                'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)',
                                'radial-gradient(circle, rgba(239,68,68,0) 0%, transparent 70%)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* The zero amount */}
                    <motion.span
                        className="text-4xl font-bold font-mono text-gray-600/80"
                        animate={{
                            opacity: [0.6, 0.8, 0.6],
                            textShadow: [
                                '0 0 20px rgba(0,0,0,0.5)',
                                '0 0 30px rgba(239,68,68,0.2)',
                                '0 0 20px rgba(0,0,0,0.5)',
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        £0
                    </motion.span>
                </motion.div>

                {/* Static/broken graph placeholder */}
                <motion.div
                    className="mt-4 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    {/* Flat line graph */}
                    <svg className="w-full h-8" viewBox="0 0 100 30">
                        <defs>
                            <linearGradient id="deadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(107,114,128,0.2)" />
                                <stop offset="100%" stopColor="rgba(107,114,128,0)" />
                            </linearGradient>
                        </defs>
                        {/* The flat reality line */}
                        <motion.path
                            d="M 0 25 L 100 25"
                            fill="none"
                            stroke="rgba(107,114,128,0.4)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 3.2, duration: 1 }}
                        />
                        {/* Attempted growth that flatlines */}
                        <motion.path
                            d="M 0 25 Q 15 25, 20 24 Q 30 22, 40 23 Q 50 24, 60 24.5 Q 80 25, 100 25"
                            fill="url(#deadGradient)"
                            stroke="rgba(239,68,68,0.5)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 3.5, duration: 1.5 }}
                        />
                    </svg>
                </motion.div>

                {/* Warning indicator */}
                <motion.div
                    className="mt-3 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                >
                    <motion.div
                        className="w-1.5 h-1.5 bg-red-500 rounded-full"
                        animate={{
                            opacity: [1, 0.4, 1],
                            scale: [1, 0.8, 1],
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="text-[8px] font-mono text-red-400/70">NO GROWTH</span>
                </motion.div>

                {/* Down arrow */}
                <motion.div
                    className="mt-2"
                    animate={{
                        y: [0, 3, 0],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5H7z"/>
                        </svg>
                    </motion.div>
                </div>

            {/* Bottom status bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                    {/* Left: Metrics summary (looks successful) */}
                    <div className="flex items-center gap-3">
                        <motion.div
                            className="flex items-center gap-1"
                            animate={{
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-[8px] font-mono text-emerald-400">4 METRICS UP</span>
                        </motion.div>
                    </div>
                    
                    {/* Right: Reality indicator */}
                    <motion.div
                        className="flex items-center gap-1 px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20"
                        animate={{
                            borderColor: ['rgba(239,68,68,0.2)', 'rgba(239,68,68,0.5)', 'rgba(239,68,68,0.2)'],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <svg className="w-2.5 h-2.5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="text-[8px] font-mono text-red-400 font-medium">ROI: 0%</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Diagonal "disconnect" visual between the two sides */}
            <AnimatePresence>
                <motion.svg
                    className="absolute top-14 bottom-10 left-[58%] w-8 pointer-events-none"
                    viewBox="0 0 30 200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                >
                    {/* Broken connection lines */}
                    {[30, 70, 110, 150].map((y, i) => (
                        <motion.g key={i}>
                            <motion.line
                                x1="5"
                                y1={y}
                                x2="12"
                                y2={y + 5}
                                stroke="rgba(239,68,68,0.3)"
                                strokeWidth="1"
                                strokeDasharray="3 2"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                            <motion.line
                                x1="18"
                                y1={y + 8}
                                x2="25"
                                y2={y + 10}
                                stroke="rgba(239,68,68,0.2)"
                                strokeWidth="1"
                                strokeDasharray="3 2"
                                animate={{
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2 + 0.3,
                                }}
                            />
                            {/* X mark for broken connection */}
                            <motion.text
                                x="12"
                                y={y + 8}
                                fill="rgba(239,68,68,0.4)"
                                fontSize="8"
                                fontFamily="monospace"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                                    delay: i * 0.3,
                                }}
                            >
                                ✕
                            </motion.text>
                        </motion.g>
                    ))}
                </motion.svg>
            </AnimatePresence>

            {/* Vignette */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)',
                }}
            />

            {/* Subtle scan lines */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    background: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(255,255,255,0.03) 2px,
                        rgba(255,255,255,0.03) 4px
                    )`,
                }}
            />
        </div>
    );
};

export default VanityMetricsAnimation;
