import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemFailureAnimation = ({ className = '', isPlaying = false, ...rest }) => {
    const [cycleKey, setCycleKey] = useState(0);
    const [currentPhase, setCurrentPhase] = useState(0);
    const intervalRef = React.useRef(null);

    useEffect(() => {
        const phases = [0, 1, 2, 3, 4, 5];
        let phaseIndex = 0;

        if (isPlaying) {
            setCurrentPhase(0);
            setCycleKey((prev) => prev + 1);
            intervalRef.current = setInterval(() => {
                phaseIndex++;
                if (phaseIndex >= phases.length) {
                    phaseIndex = 0;
                    setCycleKey((prev) => prev + 1);
                }
                setCurrentPhase(phases[phaseIndex]);
            }, 1200);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            if (!isPlaying) {
                setCurrentPhase(0);
            }
        };
    }, [isPlaying]);

    // System modules representing campaign components
    const modules = [
        { id: 'research', label: 'RESEARCH', x: 15, y: 20, failAt: 1 },
        { id: 'targeting', label: 'TARGETING', x: 50, y: 15, failAt: 2 },
        { id: 'creative', label: 'CREATIVE', x: 85, y: 22, failAt: 2 },
        { id: 'budget', label: 'BUDGET', x: 25, y: 50, failAt: 3 },
        { id: 'optimize', label: 'OPTIMIZE', x: 75, y: 48, failAt: 3 },
        { id: 'measure', label: 'MEASURE', x: 50, y: 75, failAt: 4 },
    ];

    // Connection lines between modules
    const connections = [
        { from: 'research', to: 'targeting', x1: 22, y1: 25, x2: 43, y2: 18, failAt: 1 },
        { from: 'targeting', to: 'creative', x1: 57, y1: 18, x2: 78, y2: 24, failAt: 2 },
        { from: 'research', to: 'budget', x1: 18, y1: 28, x2: 22, y2: 45, failAt: 2 },
        { from: 'targeting', to: 'optimize', x1: 55, y1: 22, x2: 70, y2: 43, failAt: 2 },
        { from: 'creative', to: 'optimize', x1: 82, y1: 30, x2: 78, y2: 43, failAt: 3 },
        { from: 'budget', to: 'measure', x1: 30, y1: 55, x2: 45, y2: 70, failAt: 3 },
        { from: 'optimize', to: 'measure', x1: 70, y1: 55, x2: 55, y2: 70, failAt: 4 },
    ];

    // Floating error fragments
    const errorFragments = [
        { text: 'ERR_NO_METHOD', x: 10, y: 35, delay: 1.5 },
        { text: 'UNDEFINED_TARGET', x: 60, y: 30, delay: 2.2 },
        { text: 'NULL_STRATEGY', x: 35, y: 60, delay: 2.8 },
        { text: 'FATAL_DISCONNECT', x: 70, y: 65, delay: 3.4 },
        { text: 'BUDGET_OVERFLOW', x: 20, y: 80, delay: 3.8 },
    ];

    return (
            <div 
            key={cycleKey}
            className={`relative w-full h-full min-h-[300px] overflow-hidden ${className}`}
            {...rest}
                style={{
                background: 'linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,41,59,0.95) 35%, rgba(51,65,85,0.85) 65%, rgba(30,41,59,0.95) 100%)',
            }}
        >
            {/* Subtle noise texture */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Hexagonal Grid Background - more visible */}
            <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <pattern id="hexGrid" width="56" height="100" patternUnits="userSpaceOnUse">
                        <path 
                            d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z M28 64 L56 80 L56 100 M28 64 L0 80 L0 100"
                            fill="none" 
                            stroke="rgba(100,150,255,0.25)" 
                            strokeWidth="0.8"
                        />
                    </pattern>
                    <linearGradient id="hexFade" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
                        <stop offset="50%" stopColor="rgba(139,92,246,0.1)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,0.15)" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexGrid)" />
                <rect width="100%" height="100%" fill="url(#hexFade)" />
            </svg>

            {/* Ambient glow spots for depth */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 60% 40% at 20% 30%, rgba(59,130,246,0.08) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 50% at 80% 60%, rgba(139,92,246,0.06) 0%, transparent 50%),
                        radial-gradient(ellipse 70% 30% at 50% 80%, rgba(59,130,246,0.05) 0%, transparent 50%)
                    `,
                }}
            />

            {/* Animated gradient pulse */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: currentPhase >= 1 ? [
                        'radial-gradient(circle at 50% 50%, rgba(239,68,68,0) 0%, transparent 50%)',
                        'radial-gradient(circle at 50% 50%, rgba(239,68,68,0.12) 0%, transparent 60%)',
                        'radial-gradient(circle at 50% 50%, rgba(239,68,68,0) 0%, transparent 50%)',
                    ] : 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)',
                }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Connection Lines SVG Layer */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.6)" />
                        <stop offset="100%" stopColor="rgba(139,92,246,0.6)" />
                    </linearGradient>
                    <linearGradient id="lineGradientFail" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(239,68,68,0.3)" />
                        <stop offset="100%" stopColor="rgba(239,68,68,0.1)" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                
                {connections.map((conn, idx) => {
                    const isFailed = currentPhase >= conn.failAt;
                    return (
                        <g key={idx}>
                            {/* Background line */}
                            <motion.line
                                x1={`${conn.x1}%`}
                                y1={`${conn.y1}%`}
                                x2={`${conn.x2}%`}
                                y2={`${conn.y2}%`}
                                stroke={isFailed ? 'rgba(239,68,68,0.15)' : 'rgba(59,130,246,0.3)'}
                                strokeWidth="2"
                                strokeDasharray={isFailed ? "8 8" : "0"}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ 
                                    pathLength: 1, 
                                    opacity: isFailed ? 0.3 : 1,
                                }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                            />
                        </g>
                    );
                })}
                
                {/* Data flow particles - rendered separately for clean animation */}
                {connections.map((conn, idx) => {
                    const isFailed = currentPhase >= conn.failAt;
                    if (isFailed) return null;
                    return (
                        <motion.circle
                            key={`particle-${idx}`}
                            r="3"
                            fill="rgba(59,130,246,0.9)"
                            filter="url(#glow)"
                            initial={{ 
                                cx: `${conn.x1}%`, 
                                cy: `${conn.y1}%`,
                                opacity: 0 
                            }}
                            animate={{
                                opacity: [0, 1, 1, 0],
                                cx: [`${conn.x1}%`, `${conn.x2}%`],
                                cy: [`${conn.y1}%`, `${conn.y2}%`],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: idx * 0.3,
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}
            </svg>

            {/* System Modules */}
            {modules.map((module, idx) => {
                const isFailed = currentPhase >= module.failAt;
                const isWarning = currentPhase === module.failAt - 1;
                
                return (
                    <motion.div
                        key={module.id}
                        className="absolute"
                        style={{ 
                            left: `${module.x}%`, 
                            top: `${module.y}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                            scale: isFailed ? [1, 1.1, 0.9, 1] : 1, 
                            opacity: 1,
                            x: isFailed ? [0, -3, 3, -2, 2, 0] : 0,
                        }}
                        transition={{
                            duration: 0.5, 
                            delay: idx * 0.1,
                            x: { duration: 0.4, repeat: isFailed ? 2 : 0 }
                        }}
                    >
                        {/* Outer ring */}
                        <motion.div
                            className={`absolute -inset-3 rounded-xl border ${
                                isFailed 
                                    ? 'border-red-500/50' 
                                    : isWarning 
                                        ? 'border-yellow-500/40' 
                                        : 'border-blue-500/30'
                            }`}
                            animate={{
                                opacity: isFailed ? [0.5, 1, 0.5] : isWarning ? [0.3, 0.6, 0.3] : 0.3,
                                scale: isFailed ? [1, 1.1, 1] : 1,
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        
                        {/* Module box */}
                        <motion.div
                            className={`relative px-3 py-2 rounded-lg backdrop-blur-sm border ${
                                isFailed 
                                    ? 'bg-red-950/80 border-red-500/60' 
                                    : isWarning 
                                        ? 'bg-yellow-950/60 border-yellow-500/40'
                                        : 'bg-slate-900/80 border-blue-500/30'
                            }`}
                            animate={{
                                boxShadow: isFailed 
                                    ? ['0 0 20px rgba(239,68,68,0.3)', '0 0 40px rgba(239,68,68,0.5)', '0 0 20px rgba(239,68,68,0.3)']
                                    : isWarning
                                        ? '0 0 15px rgba(234,179,8,0.2)'
                                        : '0 0 15px rgba(59,130,246,0.15)',
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            {/* Status indicator */}
                            <div className="flex items-center gap-2">
                                <motion.div
                                    className={`w-2 h-2 rounded-full ${
                                        isFailed 
                                            ? 'bg-red-500' 
                                            : isWarning 
                                                ? 'bg-yellow-500'
                                                : 'bg-emerald-500'
                                    }`}
                                    animate={{
                                        opacity: isFailed ? [1, 0.3, 1] : 1,
                                        scale: isFailed ? [1, 0.8, 1] : isWarning ? [1, 1.2, 1] : 1,
                                    }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                />
                                <span className={`text-[10px] font-mono font-bold tracking-wider ${
                                    isFailed ? 'text-red-400' : isWarning ? 'text-yellow-400' : 'text-blue-300'
                                }`}>
                                    {module.label}
                                </span>
                            </div>
                            
                            {/* Status text */}
                            <motion.div
                                className={`text-[8px] font-mono mt-1 ${
                                    isFailed ? 'text-red-500/80' : isWarning ? 'text-yellow-500/70' : 'text-blue-400/60'
                                }`}
                                animate={{
                                    opacity: isFailed ? [0.8, 0.4, 0.8] : 1,
                                }}
                                transition={{ duration: 0.3, repeat: Infinity }}
                            >
                                {isFailed ? 'OFFLINE' : isWarning ? 'WARNING' : 'ONLINE'}
                            </motion.div>
                        </motion.div>

                        {/* Glitch fragments on failure */}
                        <AnimatePresence>
                            {isFailed && (
                                <>
                                    <motion.div
                                        className="absolute -top-2 -right-4 text-[8px] font-mono text-red-500/70"
                                        initial={{ opacity: 0, x: 0, y: 0 }}
                                        animate={{ 
                                            opacity: [0, 1, 0],
                                            x: [0, 10, 20],
                                            y: [0, -5, -10],
                                        }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        ERR
                                    </motion.div>
                                    <motion.div
                                        className="absolute -bottom-3 -left-6 text-[8px] font-mono text-red-500/50"
                                        initial={{ opacity: 0 }}
                                        animate={{ 
                                            opacity: [0, 0.8, 0],
                                            x: [0, -15],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                    >
                                        0x{Math.random().toString(16).slice(2, 6).toUpperCase()}
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}

            {/* Floating Error Messages */}
            <AnimatePresence>
                {errorFragments.map((fragment, idx) => (
                    currentPhase >= 2 && (
                        <motion.div
                            key={`error-${idx}`}
                            className="absolute font-mono text-[10px] text-red-500/60 whitespace-nowrap"
                            style={{ left: `${fragment.x}%`, top: `${fragment.y}%` }}
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ 
                                opacity: [0, 0.7, 0.5, 0.7, 0],
                                y: [10, 0, -5, 0, -10],
                                scale: [0.8, 1, 1, 1, 0.9],
                            }}
                            transition={{
                                duration: 4,
                                delay: idx * 0.4,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                        >
                            <span className="text-red-600/80">&gt;</span> {fragment.text}
                    </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Central Warning Display */}
            <AnimatePresence>
                {currentPhase >= 3 && (
                    <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <motion.div
                            className="relative px-6 py-4 bg-red-950/90 border-2 border-red-500/60 rounded-lg backdrop-blur-md"
                            animate={{
                                boxShadow: [
                                    '0 0 30px rgba(239,68,68,0.3)',
                                    '0 0 60px rgba(239,68,68,0.5)',
                                    '0 0 30px rgba(239,68,68,0.3)',
                                ],
                                borderColor: [
                                    'rgba(239,68,68,0.6)',
                                    'rgba(239,68,68,1)',
                                    'rgba(239,68,68,0.6)',
                                ],
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-4 h-4"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" className="text-red-500">
                                        <path 
                                            d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </motion.div>
                                <div>
                                    <motion.div 
                                        className="text-red-400 font-mono text-sm font-bold tracking-wider"
                                        animate={{ opacity: [1, 0.7, 1] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                    >
                                        SYSTEM FAILURE
                                    </motion.div>
                                    <div className="text-red-500/70 font-mono text-[10px]">
                                        NO METHOD DETECTED
                                    </div>
                                </div>
            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scan lines effect - mais sutil */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 3px,
                        rgba(255,255,255,0.01) 3px,
                        rgba(255,255,255,0.01) 4px
                    )`,
                }}
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Horizontal glitch bars */}
            <AnimatePresence>
                {currentPhase >= 2 && (
                    <>
                        <motion.div
                            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
                            initial={{ top: '20%', opacity: 0 }}
                            animate={{ 
                                top: ['20%', '80%', '40%', '60%'],
                                opacity: [0, 0.8, 0.4, 0],
                            }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                        />
                        <motion.div
                            className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
                            initial={{ top: '70%', opacity: 0 }}
                            animate={{ 
                                top: ['70%', '30%', '50%'],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, repeatDelay: 1.5 }}
                        />
                    </>
                )}
            </AnimatePresence>

            {/* Corner decorative elements */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
                <motion.div
                    className={`w-2 h-2 rounded-full ${currentPhase >= 1 ? 'bg-red-500' : 'bg-emerald-500'}`}
                    animate={{
                        opacity: currentPhase >= 1 ? [1, 0.3, 1] : 1,
                        scale: currentPhase >= 1 ? [1, 0.8, 1] : 1,
                    }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                />
                <span className={`text-[10px] font-mono ${currentPhase >= 1 ? 'text-red-400' : 'text-emerald-400'}`}>
                    {currentPhase >= 1 ? 'CRITICAL' : 'MONITORING'}
                </span>
            </div>

            <div className="absolute top-4 right-4 text-[10px] font-mono text-white/30">
                <motion.span
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    CAMPAIGN_SYS v2.1
                </motion.span>
            </div>

            {/* Bottom metrics bar */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {['ROI', 'CVR', 'CPA'].map((metric, idx) => (
                        <div key={metric} className="flex items-center gap-1">
                            <span className="text-[9px] font-mono text-white/40">{metric}</span>
                            <motion.span
                                className={`text-[10px] font-mono font-bold ${
                                    currentPhase >= 2 ? 'text-red-500' : 'text-blue-400'
                                }`}
                animate={{
                                    opacity: currentPhase >= 2 ? [1, 0.5, 1] : 1 
                                }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: idx * 0.2 }}
                            >
                                {currentPhase >= 2 ? '---' : ['2.4x', '3.2%', '$12'][idx]}
                            </motion.span>
                        </div>
                    ))}
                </div>
                <motion.div
                    className="text-[9px] font-mono text-white/30"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    {currentPhase >= 3 ? 'CONNECTION LOST' : 'LIVE DATA'}
                </motion.div>
            </div>

            {/* Subtle edge definition - muito mais suave */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(15,23,42,0.3) 100%)',
                }}
            />
        </div>
    );
};

export default SystemFailureAnimation;
