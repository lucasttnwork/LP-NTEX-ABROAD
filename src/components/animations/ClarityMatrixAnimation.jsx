import { useMemo } from 'react';
import { motion } from 'framer-motion';

// Seeded random for consistent values (pure function)
const seededRandom = (seed) => {
    const x = Math.sin(seed * 9999) * 10000;
    return x - Math.floor(x);
};

// Pre-computed particle data (generated once at module level)
const PARTICLE_DATA = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    startX: seededRandom(i * 3 + 1) * 100,
    startY: seededRandom(i * 3 + 2) * 100,
    endX: 20 + (i % 6) * 12,
    endY: 20 + Math.floor(i / 6) * 15,
    delay: seededRandom(i * 3 + 3) * 1.5,
    size: 2 + seededRandom(i * 3 + 4) * 2,
    midOffsetX: (seededRandom(i * 5 + 1) - 0.5) * 20,
    midOffsetY: (seededRandom(i * 5 + 2) - 0.5) * 20,
}));

const ClarityMatrixAnimation = ({ className = '' }) => {
    // Use pre-computed particle data
    const particles = PARTICLE_DATA;

    // Radar sweep lines
    const sweepLines = useMemo(() => 
        Array.from({ length: 8 }, (_, i) => ({
            angle: i * 45,
            delay: i * 0.15,
        })), []);

    // Confidence rings
    const rings = [
        { radius: 12, opacity: 0.8, delay: 0 },
        { radius: 24, opacity: 0.5, delay: 0.2 },
        { radius: 36, opacity: 0.3, delay: 0.4 },
        { radius: 48, opacity: 0.15, delay: 0.6 },
    ];

    // Data streams converging to center
    const dataStreams = useMemo(() => 
        Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            return {
                id: i,
                startX: 50 + Math.cos(angle) * 60,
                startY: 50 + Math.sin(angle) * 50,
                endX: 50,
                endY: 50,
                delay: i * 0.12,
            };
        }), []);

    // Metrics data points
    const metrics = [
        { label: 'CAC', value: '-32%', x: 8, y: 15 },
        { label: 'ROAS', value: '4.2x', x: 75, y: 15 },
        { label: 'CVR', value: '+127%', x: 8, y: 85 },
        { label: 'LTV', value: '+89%', x: 75, y: 85 },
    ];

    // Weekly progress bars
    const weeklyProgress = [
        { week: 1, progress: 20 },
        { week: 2, progress: 35 },
        { week: 3, progress: 52 },
        { week: 4, progress: 71 },
        { week: 5, progress: 85 },
        { week: 6, progress: 94 },
    ];

    return (
        <div className={`relative w-full h-full min-h-[200px] overflow-hidden ${className}`}>
            {/* Deep gradient background - silver tones */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/40 to-black" />
            
            {/* Animated grid pattern - silver */}
            <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    backgroundImage: `
                        linear-gradient(90deg, rgba(200,210,220,0.04) 1px, transparent 1px),
                        linear-gradient(180deg, rgba(200,210,220,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: '16px 16px',
                }}
            />

            {/* Radial gradient overlay - silver */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,210,220,0.06)_0%,transparent_70%)]" />

            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                <defs>
                    {/* Gradient for the main pulse - silver with hint of blue */}
                    <radialGradient id="clarityPulseSilver" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(230,235,245,0.6)" />
                        <stop offset="40%" stopColor="rgba(180,200,220,0.3)" />
                        <stop offset="100%" stopColor="rgba(200,210,220,0)" />
                    </radialGradient>

                    {/* Glow filter */}
                    <filter id="glowSilver" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>

                    {/* Line gradient for streams - silver */}
                    <linearGradient id="streamGradientSilver" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(200,210,220,0)" />
                        <stop offset="50%" stopColor="rgba(230,235,245,0.8)" />
                        <stop offset="100%" stopColor="rgba(200,210,220,0.2)" />
                    </linearGradient>

                    {/* Accent gradient with subtle blue */}
                    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(140,180,220,0.3)" />
                        <stop offset="100%" stopColor="rgba(200,210,220,0.5)" />
                    </linearGradient>
                </defs>

                {/* Confidence rings - pulsing outward from center - silver */}
                {rings.map((ring, index) => (
                    <motion.circle
                        key={`ring-${index}`}
                        cx="50"
                        cy="50"
                        r={ring.radius}
                        fill="none"
                        stroke="rgba(200,210,220,0.35)"
                        strokeWidth="0.5"
                        strokeDasharray="2 3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [ring.opacity * 0.5, ring.opacity, ring.opacity * 0.5],
                        }}
                        transition={{
                            scale: {
                                delay: ring.delay + 1,
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            },
                            opacity: {
                                delay: ring.delay + 1,
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            },
                        }}
                        style={{ transformOrigin: '50px 50px' }}
                    />
                ))}

                {/* Radar sweep effect - silver */}
                <motion.g style={{ transformOrigin: '50px 50px' }}>
                    {sweepLines.map((line, index) => (
                        <motion.line
                            key={`sweep-${index}`}
                            x1="50"
                            y1="50"
                            x2={50 + Math.cos(line.angle * Math.PI / 180) * 45}
                            y2={50 + Math.sin(line.angle * Math.PI / 180) * 45}
                            stroke="rgba(200,210,220,0.12)"
                            strokeWidth="0.5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.4, 0] }}
                            transition={{
                                delay: line.delay + 1.5,
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                        />
                    ))}
                </motion.g>

                {/* Rotating sweep line - silver with blue hint */}
                <motion.line
                    x1="50"
                    y1="50"
                    x2="95"
                    y2="50"
                    stroke="url(#streamGradientSilver)"
                    strokeWidth="1"
                    filter="url(#glowSilver)"
                    style={{ transformOrigin: '50px 50px' }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {/* Data streams converging - silver */}
                {dataStreams.map((stream) => (
                    <motion.g key={`stream-${stream.id}`}>
                        {/* Stream line */}
                        <motion.line
                            x1={stream.startX}
                            y1={stream.startY}
                            x2={stream.startX}
                            y2={stream.startY}
                            stroke="rgba(200,210,220,0.25)"
                            strokeWidth="0.5"
                            initial={{ x2: stream.startX, y2: stream.startY }}
                            animate={{ x2: stream.endX, y2: stream.endY }}
                            transition={{
                                delay: stream.delay + 0.5,
                                duration: 1,
                                ease: 'easeOut',
                            }}
                        />
                        {/* Moving particle along stream - silver bright */}
                        <motion.circle
                            r="1.5"
                            fill="rgba(230,235,245,0.9)"
                            filter="url(#glowSilver)"
                            initial={{ 
                                cx: stream.startX, 
                                cy: stream.startY,
                                opacity: 0,
                            }}
                            animate={{
                                cx: [stream.startX, stream.endX],
                                cy: [stream.startY, stream.endY],
                                opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                                delay: stream.delay + 2,
                                duration: 1.2,
                                repeat: Infinity,
                                repeatDelay: 4,
                            }}
                        />
                    </motion.g>
                ))}

                {/* Chaos particles transforming to order - silver with blue/green hints */}
                {particles.map((particle) => (
                    <motion.circle
                        key={`particle-${particle.id}`}
                        r={particle.size / 2}
                        fill={particle.id % 5 === 0 ? "rgba(140,180,220,0.5)" : particle.id % 7 === 0 ? "rgba(160,200,180,0.4)" : "rgba(200,210,220,0.5)"}
                        initial={{ 
                            cx: particle.startX, 
                            cy: particle.startY,
                            opacity: 0.3,
                        }}
                        animate={{
                            cx: [particle.startX, particle.startX + particle.midOffsetX, particle.endX],
                            cy: [particle.startY, particle.startY + particle.midOffsetY, particle.endY],
                            opacity: [0.3, 0.6, 0.9],
                            scale: [1, 0.8, 1.2],
                        }}
                        transition={{
                            delay: particle.delay,
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            repeatDelay: 2,
                        }}
                    />
                ))}

                {/* Center clarity core - silver gradient */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="6"
                    fill="url(#clarityPulseSilver)"
                    initial={{ scale: 0 }}
                    animate={{ 
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        delay: 2,
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    style={{ transformOrigin: '50px 50px' }}
                />

                {/* Center core dot - bright silver */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="3"
                    fill="rgba(240,245,255,1)"
                    filter="url(#glowSilver)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2, duration: 0.3 }}
                />

                {/* Target lock indicators - silver */}
                {[0, 90, 180, 270].map((angle, index) => {
                    const x = 50 + Math.cos(angle * Math.PI / 180) * 8;
                    const y = 50 + Math.sin(angle * Math.PI / 180) * 8;
                    return (
                        <motion.rect
                            key={`lock-${index}`}
                            x={x - 1.5}
                            y={y - 0.5}
                            width="3"
                            height="1"
                            fill="rgba(230,235,245,0.9)"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                                opacity: [0.5, 1, 0.5],
                                scale: 1,
                            }}
                            style={{ 
                                transformOrigin: `${x}px ${y}px`,
                                transform: `rotate(${angle}deg)`,
                            }}
                            transition={{
                                opacity: {
                                    delay: 2.5 + index * 0.1,
                                    duration: 1.5,
                                    repeat: Infinity,
                                },
                                scale: {
                                    delay: 2.5 + index * 0.1,
                                    duration: 0.3,
                                }
                            }}
                        />
                    );
                })}
            </svg>

            {/* Corner metrics - silver text */}
            {metrics.map((metric, index) => (
                <motion.div
                    key={`metric-${index}`}
                    className="absolute flex flex-col"
                    style={{ 
                        left: `${metric.x}%`, 
                        top: `${metric.y}%`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5 + index * 0.15, duration: 0.3 }}
                >
                    <span className="text-[8px] font-mono text-slate-400/60 tracking-wider">{metric.label}</span>
                    <motion.span 
                        className="text-sm font-bold font-mono text-slate-200"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                        {metric.value}
                    </motion.span>
                </motion.div>
            ))}

            {/* Weekly progress visualization at bottom - silver tones */}
            <motion.div 
                className="absolute bottom-3 left-3 right-3 flex items-end gap-1 h-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
            >
                {weeklyProgress.map((week, index) => (
                    <motion.div
                        key={`week-${index}`}
                        className="flex-1 flex flex-col items-center gap-0.5"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 3 + index * 0.1, duration: 0.3 }}
                        style={{ originY: 1 }}
                    >
                        <motion.div 
                            className="w-full rounded-t-sm"
                            style={{ 
                                height: `${week.progress * 0.25}px`,
                                background: `linear-gradient(to top, rgba(140,150,165,0.3), rgba(200,210,220,${0.4 + week.progress / 200}))`,
                            }}
                            animate={{
                                boxShadow: [
                                    '0 0 0 rgba(200,210,220,0)',
                                    `0 0 ${week.progress / 10}px rgba(200,210,220,0.25)`,
                                    '0 0 0 rgba(200,210,220,0)',
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.15,
                            }}
                        />
                        <span className="text-[6px] font-mono text-slate-500/50">W{week.week}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Status indicator - silver/blue accent */}
            <motion.div
                className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full border border-slate-400/20"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8 }}
            >
                <motion.div
                    className="w-1.5 h-1.5 bg-slate-300 rounded-full"
                    animate={{
                        boxShadow: [
                            '0 0 2px rgba(200,210,220,0.5)',
                            '0 0 8px rgba(140,180,220,0.8)',
                            '0 0 2px rgba(200,210,220,0.5)',
                        ],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                />
                <span className="text-[8px] font-mono text-slate-300/80 tracking-wide">LOCKED</span>
            </motion.div>

            {/* Predictability score - silver text */}
            <motion.div
                className="absolute top-3 left-3 flex flex-col"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6 }}
            >
                <span className="text-[7px] font-mono text-slate-400/60 tracking-widest">PREDICTABILITY</span>
                <div className="flex items-baseline gap-1">
                    <motion.span 
                        className="text-2xl font-bold text-slate-200 font-mono"
                        animate={{
                            textShadow: [
                                '0 0 5px rgba(200,210,220,0.2)',
                                '0 0 15px rgba(140,180,220,0.4)',
                                '0 0 5px rgba(200,210,220,0.2)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        94
                    </motion.span>
                    <span className="text-[10px] text-slate-400/70 font-mono">%</span>
                </div>
            </motion.div>

            {/* Confidence band visualization - silver */}
            <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
            >
                <motion.div
                    className="w-24 h-24 rounded-full border border-slate-400/10"
                    animate={{
                        borderColor: ['rgba(200,210,220,0.08)', 'rgba(200,210,220,0.25)', 'rgba(200,210,220,0.08)'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.div>
        </div>
    );
};

export default ClarityMatrixAnimation;
