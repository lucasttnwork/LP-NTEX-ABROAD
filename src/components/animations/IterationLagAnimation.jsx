import React from 'react';
import { motion } from 'framer-motion';

const IterationLagAnimation = ({ className = '' }) => {
    const timelinePoints = [
        { active: true, label: 'W1' },
        { active: true, label: 'W2' },
        { active: false, label: 'W3' },
        { active: false, label: 'W4' },
        { active: false, label: 'W5' },
    ];

    // Paleta prateada/sóbria
    const colors = {
        silver: 'rgb(192, 192, 192)',
        silverLight: 'rgb(220, 220, 225)',
        silverDark: 'rgb(140, 140, 150)',
        mutedRose: 'rgb(180, 140, 145)',
    };

    return (
        <div className={`relative w-full h-full min-h-[120px] overflow-hidden p-4 flex flex-col justify-center ${className}`}
            style={{
                background: 'linear-gradient(135deg, rgba(20,20,22,0.95) 0%, rgba(30,30,35,0.9) 50%, rgba(25,25,28,0.95) 100%)',
            }}
        >
            {/* Subtle grid pattern overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                }}
            />

            {/* Subtle shine effect */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[1px] pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(192,192,192,0.15) 50%, transparent 100%)',
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Timeline */}
            <div className="relative flex items-center justify-between px-2">
                {/* Line behind - gradient from silver to dark */}
                <div 
                    className="absolute top-1/2 left-2 right-2 h-[1.5px] -translate-y-1/2"
                    style={{
                        background: 'linear-gradient(90deg, rgba(160,160,170,0.4) 0%, rgba(100,100,110,0.3) 40%, rgba(60,60,65,0.2) 100%)',
                    }}
                />
                
                {/* Progress line - silver glow */}
                <motion.div
                    className="absolute top-1/2 left-2 h-[2px] -translate-y-1/2"
                    style={{
                        background: `linear-gradient(90deg, ${colors.silver} 0%, ${colors.silverLight} 70%, rgba(192,192,192,0.3) 100%)`,
                        boxShadow: '0 0 8px rgba(192,192,192,0.25), 0 0 2px rgba(220,220,225,0.4)',
                    }}
                    animate={{
                        width: ['35%', '40%', '35%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {timelinePoints.map((point, index) => (
                    <div key={index} className="relative z-10 flex flex-col items-center gap-1.5">
                        <motion.div
                            className="w-3 h-3 rounded-full"
                            style={{
                                background: point.active 
                                    ? `radial-gradient(circle at 30% 30%, ${colors.silverLight} 0%, ${colors.silver} 60%, ${colors.silverDark} 100%)`
                                    : 'radial-gradient(circle at 30% 30%, rgba(70,70,75,1) 0%, rgba(50,50,55,1) 100%)',
                                border: point.active 
                                    ? `1.5px solid ${colors.silverLight}`
                                    : '1.5px solid rgba(80,80,85,0.6)',
                                boxShadow: point.active 
                                    ? '0 0 6px rgba(192,192,192,0.3), inset 0 1px 2px rgba(255,255,255,0.2)'
                                    : 'inset 0 1px 2px rgba(0,0,0,0.3)',
                            }}
                            animate={point.active ? {
                                scale: [1, 1.15, 1],
                                boxShadow: [
                                    '0 0 6px rgba(192,192,192,0.3), inset 0 1px 2px rgba(255,255,255,0.2)',
                                    '0 0 12px rgba(192,192,192,0.5), inset 0 1px 2px rgba(255,255,255,0.3)',
                                    '0 0 6px rgba(192,192,192,0.3), inset 0 1px 2px rgba(255,255,255,0.2)',
                                ],
                            } : {
                                opacity: [0.7, 0.85, 0.7],
                            }}
                            transition={{
                                duration: point.active ? 2 : 3,
                                repeat: Infinity,
                                delay: point.active ? 0 : index * 0.2,
                            }}
                        />
                        <span 
                            className="text-[9px] font-mono tracking-wide"
                            style={{
                                color: point.active ? colors.silverLight : 'rgba(120,120,130,0.7)',
                                textShadow: point.active ? '0 0 8px rgba(192,192,192,0.3)' : 'none',
                            }}
                        >
                            {point.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Loading cursor stuck - refined */}
            <motion.div
                className="absolute top-3 right-3 flex items-center gap-2 px-2 py-1 rounded-md"
                style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(192,192,192,0.1)',
                }}
            >
                <motion.div
                    className="w-3.5 h-3.5 rounded-full"
                    style={{
                        border: '1.5px solid rgba(100,100,105,0.6)',
                        borderTopColor: colors.silver,
                    }}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
                <motion.span 
                    className="text-[9px] font-mono tracking-wider"
                    style={{ color: colors.silverDark }}
                    animate={{
                        opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                >
                    WAITING
                </motion.span>
            </motion.div>

            {/* Gap indicator - muted rose/warm gray */}
            <motion.div
                className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5"
                animate={{
                    opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <motion.div 
                    className="w-6 h-[1px]"
                    style={{ 
                        background: `linear-gradient(90deg, transparent 0%, ${colors.mutedRose} 100%)`,
                    }}
                />
                <span 
                    className="text-[8px] font-mono tracking-widest px-1.5 py-0.5 rounded"
                    style={{ 
                        color: colors.mutedRose,
                        background: 'rgba(180,140,145,0.08)',
                        border: '1px solid rgba(180,140,145,0.15)',
                    }}
                >
                    GAP
                </span>
                <motion.div 
                    className="w-6 h-[1px]"
                    style={{ 
                        background: `linear-gradient(90deg, ${colors.mutedRose} 0%, transparent 100%)`,
                    }}
                />
            </motion.div>

            {/* Corner accents */}
            <div 
                className="absolute top-0 left-0 w-4 h-4 pointer-events-none"
                style={{
                    borderTop: '1px solid rgba(192,192,192,0.1)',
                    borderLeft: '1px solid rgba(192,192,192,0.1)',
                }}
            />
            <div 
                className="absolute bottom-0 right-0 w-4 h-4 pointer-events-none"
                style={{
                    borderBottom: '1px solid rgba(192,192,192,0.1)',
                    borderRight: '1px solid rgba(192,192,192,0.1)',
                }}
            />
        </div>
    );
};

export default IterationLagAnimation;



