import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BlueprintBuildAnimation = ({ className = '' }) => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const phases = [0, 1, 2, 3];
        let currentIndex = 0;
        
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % phases.length;
            setPhase(phases[currentIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Floating chaos elements
    const chaosElements = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 70,
        size: 4 + Math.random() * 8,
        delay: Math.random() * 0.8,
        duration: 2 + Math.random() * 2,
    }));

    // Silver/metallic color palette
    const colors = {
        // Chaos phase - muted silver-red
        chaosAccent: 'rgba(180,100,100,0.7)',
        chaosGlow: 'rgba(180,100,100,0.4)',
        chaosBorder: 'rgba(180,100,100,0.35)',
        chaosBackground: 'rgba(180,100,100,0.15)',
        chaosStrike: 'rgba(200,120,120,0.9)',
        
        // Build phase - silver/platinum
        silver: 'rgba(192,192,200,0.9)',
        silverMuted: 'rgba(160,165,175,0.7)',
        silverGlow: 'rgba(200,205,215,0.5)',
        silverBorder: 'rgba(180,185,195,0.4)',
        silverBackground: 'rgba(140,145,155,0.2)',
        silverDark: 'rgba(120,125,135,0.3)',
        
        // Success accent - muted teal/silver-green
        success: 'rgba(130,190,170,0.9)',
        successGlow: 'rgba(130,190,170,0.4)',
        successBg: 'rgba(130,190,170,0.15)',
        successBorder: 'rgba(130,190,170,0.4)',
    };

    return (
        <div className={`relative w-full h-full min-h-[220px] overflow-hidden ${className}`}
            style={{
                background: phase < 2 
                    ? 'linear-gradient(145deg, #151518 0%, #0d0d10 50%, #0a0a0d 100%)'
                    : 'linear-gradient(145deg, #12141a 0%, #0e1015 50%, #0a0c10 100%)',
                transition: 'background 0.8s ease-in-out',
            }}
        >
            {/* Grid background - silver tinted */}
            <motion.div 
                className="absolute inset-0"
                style={{
                    backgroundImage: phase < 2 
                        ? `linear-gradient(90deg, rgba(180,100,100,0.05) 1px, transparent 1px),
                           linear-gradient(180deg, rgba(180,100,100,0.05) 1px, transparent 1px)`
                        : `linear-gradient(90deg, rgba(192,192,200,0.08) 1px, transparent 1px),
                           linear-gradient(180deg, rgba(192,192,200,0.08) 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                    transition: 'all 0.8s ease-in-out',
                }}
            />

            {/* === PHASE 0-1: GAMBLING CHAOS === */}
            <AnimatePresence>
                {phase < 2 && (
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Floating silver-red particles - scattered */}
                        {chaosElements.map((el) => (
                            <motion.div
                                key={`chaos-${el.id}`}
                                className="absolute rounded-sm"
                                style={{
                                    left: `${el.x}%`,
                                    top: `${el.y}%`,
                                    width: el.size,
                                    height: el.size,
                                    background: colors.chaosAccent,
                                    boxShadow: `0 0 12px ${colors.chaosGlow}`,
                                }}
                                animate={{
                                    x: [0, (Math.random() - 0.5) * 40, 0],
                                    y: [0, (Math.random() - 0.5) * 40, 0],
                                    opacity: [0.4, 0.8, 0.4],
                                    scale: [0.8, 1.2, 0.8],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: el.duration,
                                    repeat: Infinity,
                                    delay: el.delay,
                                    ease: 'easeInOut',
                                }}
                            />
                        ))}

                        {/* Central dice icon - BIGGER */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="relative"
                                animate={{ 
                                    rotate: phase === 0 ? [0, 10, -8, 5, 0] : 0,
                                    scale: phase === 1 ? 0.85 : 1,
                                }}
                                transition={{
                                    duration: phase === 0 ? 1.5 : 0.3,
                                    repeat: phase === 0 ? Infinity : 0,
                                }}
                            >
                                {/* Dice container */}
                                <motion.div
                                    className="w-24 h-24 rounded-xl flex items-center justify-center relative"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.chaosBackground} 0%, rgba(180,100,100,0.05) 100%)`,
                                        border: `2px solid ${colors.chaosBorder}`,
                                        boxShadow: `0 0 40px ${colors.chaosGlow}, inset 0 0 30px rgba(180,100,100,0.08)`,
                                    }}
                                >
                                    {/* Dice dots */}
                                    <svg viewBox="0 0 40 40" className="w-14 h-14">
                                        <circle cx="10" cy="10" r="3.5" fill={colors.chaosAccent} />
                                        <circle cx="30" cy="10" r="3.5" fill={colors.chaosAccent} />
                                        <circle cx="10" cy="30" r="3.5" fill={colors.chaosAccent} />
                                        <circle cx="30" cy="30" r="3.5" fill={colors.chaosAccent} />
                                        <circle cx="20" cy="20" r="3.5" fill={colors.chaosAccent} />
                                    </svg>

                                    {/* Glowing pulse ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl"
                                        style={{ border: `2px solid ${colors.chaosBorder}` }}
                                        animate={{
                                            scale: [1, 1.15, 1],
                                            opacity: [0.5, 0, 0.5],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    />
                                </motion.div>

                                {/* X Strike through for phase 1 */}
                                {phase === 1 && (
                                    <>
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <motion.div
                                                className="w-32 h-1.5 rounded-full absolute"
                                                style={{ 
                                                    background: colors.chaosStrike,
                                                    boxShadow: `0 0 20px ${colors.chaosGlow}` 
                                                }}
                                                initial={{ scaleX: 0, rotate: 45 }}
                                                animate={{ scaleX: 1, rotate: 45 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                            />
                                            <motion.div
                                                className="w-32 h-1.5 rounded-full absolute"
                                                style={{ 
                                                    background: colors.chaosStrike,
                                                    boxShadow: `0 0 20px ${colors.chaosGlow}` 
                                                }}
                                                initial={{ scaleX: 0, rotate: -45 }}
                                                animate={{ scaleX: 1, rotate: -45 }}
                                                transition={{ duration: 0.3, delay: 0.2 }}
                                            />
                                        </motion.div>
                                    </>
                                )}
                            </motion.div>
                        </div>

                        {/* Floating question marks - silver tinted */}
                        {['?', '?', '?'].map((char, i) => (
                            <motion.div
                                key={`q-${i}`}
                                className="absolute font-bold text-2xl"
                                style={{
                                    left: `${20 + i * 30}%`,
                                    top: `${15 + (i % 2) * 55}%`,
                                    color: 'rgba(180,120,120,0.35)',
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                }}
                            >
                                {char}
                            </motion.div>
                        ))}

                        {/* Warning corners - muted */}
                        <motion.div
                            className="absolute top-3 left-3 text-[8px] font-mono flex items-center gap-1"
                            style={{ color: 'rgba(180,120,120,0.5)' }}
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(180,120,120,0.6)' }} />
                            NO STRATEGY
                        </motion.div>
                        <motion.div
                            className="absolute top-3 right-3 text-[8px] font-mono"
                            style={{ color: 'rgba(180,120,120,0.5)' }}
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        >
                            RANDOM
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* === PHASE 2-3: BUILDING SYSTEM === */}
            <AnimatePresence>
                {phase >= 2 && (
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Top glow - silver */}
                        <div 
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[80px]"
                            style={{
                                background: `radial-gradient(ellipse at center, ${colors.silverGlow} 0%, transparent 70%)`,
                            }}
                        />

                        {/* Building structure - LARGER and more detailed */}
                        <div className="relative w-full max-w-[280px]">
                            {/* Foundation beam - silver */}
                            <motion.div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-full"
                                style={{ 
                                    background: `linear-gradient(90deg, transparent, ${colors.silver}, transparent)`,
                                    boxShadow: `0 0 15px ${colors.silverGlow}` 
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Building blocks grid - 3 rows x 4 columns */}
                            <div className="grid grid-cols-4 gap-1.5 mb-2">
                                {/* Row 1 - Hypothesis */}
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center text-[10px] font-mono font-bold relative overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: `1px solid ${colors.silverBorder}`,
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                                >
                                    <span style={{ color: colors.silverMuted }}>H₁</span>
                                </motion.div>
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center text-[10px] font-mono font-bold"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: `1px solid ${colors.silverBorder}`,
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                >
                                    <span style={{ color: colors.silverMuted }}>TEST</span>
                                </motion.div>
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center text-[10px] font-mono font-bold"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: `1px solid ${colors.silverBorder}`,
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                                >
                                    <span style={{ color: colors.silverMuted }}>ANALYZE</span>
                                </motion.div>
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center relative"
                                    style={{
                                        background: phase >= 3 
                                            ? `linear-gradient(135deg, ${colors.successBg} 0%, rgba(130,190,170,0.08) 100%)`
                                            : `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: phase >= 3 
                                            ? `1px solid ${colors.successBorder}`
                                            : `1px solid ${colors.silverBorder}`,
                                        transition: 'all 0.3s ease',
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                                >
                                    {phase >= 3 ? (
                                        <motion.svg 
                                            viewBox="0 0 24 24" 
                                            className="w-5 h-5"
                                            style={{ color: colors.success }}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring' }}
                                        >
                                            <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M5 12l5 5L19 7"/>
                                        </motion.svg>
                                    ) : (
                                        <span className="text-[10px] font-mono" style={{ color: colors.silverMuted }}>...</span>
                                    )}
                                </motion.div>

                                {/* Row 2 */}
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center text-[10px] font-mono font-bold"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: `1px solid ${colors.silverBorder}`,
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                                >
                                    <span style={{ color: colors.silverMuted }}>H₂</span>
                                </motion.div>
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center text-[10px] font-mono font-bold"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: `1px solid ${colors.silverBorder}`,
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                                >
                                    <span style={{ color: colors.silverMuted }}>TEST</span>
                                </motion.div>
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center text-[10px] font-mono font-bold"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: `1px solid ${colors.silverBorder}`,
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                                >
                                    <span style={{ color: colors.silverMuted }}>ANALYZE</span>
                                </motion.div>
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center"
                                    style={{
                                        background: phase >= 3 
                                            ? `linear-gradient(135deg, ${colors.successBg} 0%, rgba(130,190,170,0.08) 100%)`
                                            : `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: phase >= 3 
                                            ? `1px solid ${colors.successBorder}`
                                            : `1px solid ${colors.silverBorder}`,
                                        transition: 'all 0.3s ease',
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                                >
                                    {phase >= 3 ? (
                                        <motion.svg 
                                            viewBox="0 0 24 24" 
                                            className="w-5 h-5"
                                            style={{ color: colors.success }}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', delay: 0.1 }}
                                        >
                                            <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M5 12l5 5L19 7"/>
                                        </motion.svg>
                                    ) : (
                                        <span className="text-[10px] font-mono" style={{ color: colors.silverMuted }}>...</span>
                                    )}
                                </motion.div>

                                {/* Row 3 */}
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center text-[10px] font-mono font-bold"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: `1px solid ${colors.silverBorder}`,
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                                >
                                    <span style={{ color: colors.silverMuted }}>H₃</span>
                                </motion.div>
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center text-[10px] font-mono font-bold"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: `1px solid ${colors.silverBorder}`,
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 1.0, type: 'spring', stiffness: 200 }}
                                >
                                    <span style={{ color: colors.silverMuted }}>TEST</span>
                                </motion.div>
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center text-[10px] font-mono font-bold"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: `1px solid ${colors.silverBorder}`,
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
                                >
                                    <span style={{ color: colors.silverMuted }}>ANALYZE</span>
                                </motion.div>
                                <motion.div
                                    className="col-span-1 h-10 rounded-md flex items-center justify-center"
                                    style={{
                                        background: phase >= 3 
                                            ? `linear-gradient(135deg, ${colors.successBg} 0%, rgba(130,190,170,0.08) 100%)`
                                            : `linear-gradient(135deg, ${colors.silverDark} 0%, ${colors.silverBackground} 100%)`,
                                        border: phase >= 3 
                                            ? `1px solid ${colors.successBorder}`
                                            : `1px solid ${colors.silverBorder}`,
                                        transition: 'all 0.3s ease',
                                    }}
                                    initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                                >
                                    {phase >= 3 ? (
                                        <motion.svg 
                                            viewBox="0 0 24 24" 
                                            className="w-5 h-5"
                                            style={{ color: colors.success }}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: 'spring', delay: 0.2 }}
                                        >
                                            <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M5 12l5 5L19 7"/>
                                        </motion.svg>
                                    ) : (
                                        <span className="text-[10px] font-mono" style={{ color: colors.silverMuted }}>...</span>
                                    )}
                                </motion.div>
                            </div>

                            {/* Column arrows connecting blocks - silver */}
                            <motion.div
                                className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-around px-8 pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                transition={{ delay: 1.3 }}
                            >
                                {[0, 1, 2].map((i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="w-4 h-[1px]" style={{ background: colors.silverBorder }} />
                                        <div 
                                            className="w-0 h-0" 
                                            style={{ 
                                                borderTop: '3px solid transparent',
                                                borderBottom: '3px solid transparent',
                                                borderLeft: `5px solid ${colors.silverBorder}`,
                                            }} 
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Metrics bar at bottom */}
                        {phase >= 3 && (
                            <motion.div 
                                className="absolute bottom-4 left-4 right-4 flex justify-between items-center"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="flex gap-4">
                                    <motion.div 
                                        className="text-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.4, type: 'spring' }}
                                    >
                                        <div className="text-lg font-bold" style={{ color: colors.silver }}>3</div>
                                        <div className="text-[7px] uppercase tracking-wider" style={{ color: 'rgba(140,145,155,0.6)' }}>Hypotheses</div>
                                    </motion.div>
                                    <motion.div 
                                        className="text-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5, type: 'spring' }}
                                    >
                                        <div className="text-lg font-bold" style={{ color: colors.silver }}>9</div>
                                        <div className="text-[7px] uppercase tracking-wider" style={{ color: 'rgba(140,145,155,0.6)' }}>Tests</div>
                                    </motion.div>
                                    <motion.div 
                                        className="text-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.6, type: 'spring' }}
                                    >
                                        <div className="text-lg font-bold" style={{ color: colors.success }}>100%</div>
                                        <div className="text-[7px] uppercase tracking-wider" style={{ color: 'rgba(140,145,155,0.6)' }}>Validated</div>
                                    </motion.div>
                                </div>
                                
                                {/* Success badge */}
                                <motion.div
                                    className="flex items-center gap-1.5 px-2 py-1 rounded-full"
                                    style={{
                                        background: colors.successBg,
                                        border: `1px solid ${colors.successBorder}`,
                                    }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.7, type: 'spring' }}
                                >
                                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: colors.success }} />
                                    <span className="text-[8px] font-mono" style={{ color: colors.success }}>BUILT</span>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Top corner labels - silver */}
                        <motion.div
                            className="absolute top-3 left-3 text-[8px] font-mono flex items-center gap-1"
                            style={{ color: 'rgba(180,185,195,0.5)' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.silver }} />
                            METHOD ACTIVE
                        </motion.div>
                        <motion.div
                            className="absolute top-3 right-3 text-[8px] font-mono"
                            style={{ color: 'rgba(180,185,195,0.5)' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            SYSTEMATIC
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Phase indicator dots - silver themed */}
            <div className="absolute bottom-2 right-3 flex items-center gap-1">
                {[0, 1, 2, 3].map((p) => (
                    <motion.div
                        key={p}
                        className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                        style={{
                            background: p <= phase 
                                ? (phase < 2 ? 'rgba(180,120,120,0.7)' : colors.silver) 
                                : 'rgba(60,65,75,0.5)'
                        }}
                        animate={{
                            scale: p === phase ? [1, 1.4, 1] : 1,
                        }}
                        transition={{ duration: 0.5 }}
                    />
                ))}
            </div>

            {/* Status label */}
            <motion.div
                className="absolute bottom-2 left-3 text-[9px] font-mono flex items-center gap-1.5"
                key={phase}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: phase < 2 ? 'rgba(180,120,120,0.7)' : colors.silver }}
                    animate={{
                        boxShadow: phase < 2 
                            ? ['0 0 4px rgba(180,120,120,0.4)', '0 0 10px rgba(180,120,120,0.6)', '0 0 4px rgba(180,120,120,0.4)']
                            : [`0 0 4px ${colors.silverGlow}`, `0 0 10px ${colors.silverGlow}`, `0 0 4px ${colors.silverGlow}`],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                />
                <span style={{ color: phase < 2 ? 'rgba(180,120,120,0.6)' : 'rgba(180,185,195,0.6)' }}>
                    {phase === 0 && 'GAMBLING MODE'}
                    {phase === 1 && 'REJECTED'}
                    {phase === 2 && 'BUILDING SYSTEM'}
                    {phase === 3 && 'SYSTEM COMPLETE'}
                </span>
            </motion.div>
        </div>
    );
};

export default BlueprintBuildAnimation;
