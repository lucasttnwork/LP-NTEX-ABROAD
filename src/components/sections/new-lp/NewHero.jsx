import React, { useMemo, useState } from 'react';
import { ArrowRight, Brain, TrendingUp, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================================
// PRISMATIC BACKGROUND - Orbs de luz animadas (FIXED - Higher z-index and opacity)
// ============================================================================
const PrismaticBackground = () => {
    const orbs = [
        { size: 400, x: '5%', y: '10%', delay: 0, duration: 14, colors: ['rgba(59,130,246,0.25)', 'rgba(139,92,246,0.15)', 'rgba(6,182,212,0.1)'] },
        { size: 500, x: '60%', y: '50%', delay: 2, duration: 18, colors: ['rgba(139,92,246,0.2)', 'rgba(59,130,246,0.12)', 'rgba(236,72,153,0.08)'] },
        { size: 350, x: '80%', y: '5%', delay: 4, duration: 12, colors: ['rgba(6,182,212,0.3)', 'rgba(59,130,246,0.15)', 'rgba(139,92,246,0.08)'] },
        { size: 300, x: '-5%', y: '60%', delay: 1, duration: 16, colors: ['rgba(59,130,246,0.18)', 'rgba(6,182,212,0.2)', 'rgba(139,92,246,0.1)'] },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
            {orbs.map((orb, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: orb.x,
                        top: orb.y,
                        background: `radial-gradient(circle at 30% 30%, ${orb.colors[0]}, ${orb.colors[1]} 50%, ${orb.colors[2]} 80%, transparent 100%)`,
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        x: [0, 40, -30, 20, 0],
                        y: [0, -50, 30, -20, 0],
                        scale: [1, 1.15, 0.9, 1.1, 1],
                        opacity: [0.7, 1, 0.6, 0.9, 0.7],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

// ============================================================================
// FLOATING PARTICLES - Partículas flutuantes (FIXED - Higher visibility)
// ============================================================================
const FloatingParticles = () => {
    const particles = useMemo(() => [
        { id: 0, size: 4.2, x: 12, y: 8, duration: 8, delay: 0.5 },
        { id: 1, size: 3.5, x: 28, y: 45, duration: 10, delay: 1.2 },
        { id: 2, size: 5.8, x: 65, y: 12, duration: 7, delay: 0.8 },
        { id: 3, size: 3.1, x: 82, y: 35, duration: 9, delay: 2.1 },
        { id: 4, size: 4.7, x: 45, y: 78, duration: 11, delay: 0.3 },
        { id: 5, size: 6.2, x: 18, y: 62, duration: 8.5, delay: 1.8 },
        { id: 6, size: 3.8, x: 72, y: 88, duration: 9.5, delay: 2.5 },
        { id: 7, size: 5.1, x: 92, y: 22, duration: 7.5, delay: 0.9 },
        { id: 8, size: 4.4, x: 38, y: 15, duration: 10.5, delay: 1.5 },
        { id: 9, size: 3.3, x: 55, y: 55, duration: 8.8, delay: 3.2 },
        { id: 10, size: 5.5, x: 8, y: 85, duration: 9.2, delay: 0.4 },
        { id: 11, size: 4.0, x: 78, y: 65, duration: 7.8, delay: 2.8 },
        { id: 12, size: 6.5, x: 25, y: 32, duration: 11.5, delay: 1.1 },
        { id: 13, size: 3.6, x: 88, y: 48, duration: 8.2, delay: 3.5 },
        { id: 14, size: 4.9, x: 42, y: 92, duration: 10.2, delay: 0.7 },
        { id: 15, size: 5.3, x: 15, y: 25, duration: 9.8, delay: 2.3 },
        { id: 16, size: 3.9, x: 68, y: 5, duration: 7.2, delay: 1.9 },
        { id: 17, size: 4.6, x: 95, y: 72, duration: 8.6, delay: 0.2 },
        { id: 18, size: 5.7, x: 32, y: 68, duration: 10.8, delay: 3.8 },
        { id: 19, size: 4.1, x: 58, y: 38, duration: 9.4, delay: 1.4 },
    ], []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        background: `radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(59,130,246,0.4) 50%, transparent 100%)`,
                        boxShadow: '0 0 6px rgba(139,92,246,0.5)',
                    }}
                    animate={{
                        y: [0, -80, 0],
                        x: [0, 30, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

// ============================================================================
// INFINITY CARD MOTION - Símbolo de infinito para o card do bento grid
// ============================================================================
const InfinityCardMotion = () => (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.svg
            className="w-full h-full"
            viewBox="0 0 400 80"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
        >
            <defs>
                {/* Gradiente prateado principal */}
                <linearGradient id="infinityCardGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(148,163,184,0.3)" />
                    <stop offset="25%" stopColor="rgba(203,213,225,0.5)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
                    <stop offset="75%" stopColor="rgba(203,213,225,0.5)" />
                    <stop offset="100%" stopColor="rgba(148,163,184,0.3)" />
                </linearGradient>
                
                {/* Gradiente para glow difuso */}
                <linearGradient id="infinityCardGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(100,116,139,0.1)" />
                    <stop offset="50%" stopColor="rgba(148,163,184,0.2)" />
                    <stop offset="100%" stopColor="rgba(100,116,139,0.1)" />
                </linearGradient>
                
                {/* Gradiente para partícula */}
                <radialGradient id="infinityParticle" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                    <stop offset="60%" stopColor="rgba(226,232,240,0.4)" />
                    <stop offset="100%" stopColor="rgba(148,163,184,0)" />
                </radialGradient>
                
                {/* Filtro de glow */}
                <filter id="infinityCardBlur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                
                {/* Filtro de glow intenso para background */}
                <filter id="infinityCardBlurIntense" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="coloredBlur" />
                    </feMerge>
                </filter>
                
                {/* Glow central */}
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="50%" stopColor="rgba(203,213,225,0.1)" />
                    <stop offset="100%" stopColor="transparent" />
                </radialGradient>
            </defs>
            
            {/* Camada de fundo difusa */}
            <motion.path
                d="M80,40 C80,15 120,15 200,40 C280,65 320,65 320,40 C320,15 280,15 200,40 C120,65 80,65 80,40"
                stroke="url(#infinityCardGlow)"
                strokeWidth="20"
                strokeLinecap="round"
                fill="none"
                filter="url(#infinityCardBlurIntense)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{
                    pathLength: { duration: 2, ease: "easeInOut", delay: 1 },
                    opacity: { duration: 1.5, delay: 1 }
                }}
            />
            
            {/* Linha principal */}
            <motion.path
                d="M80,40 C80,15 120,15 200,40 C280,65 320,65 320,40 C320,15 280,15 200,40 C120,65 80,65 80,40"
                stroke="url(#infinityCardGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                filter="url(#infinityCardBlur)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    pathLength: { duration: 2, ease: "easeInOut", delay: 1.2 },
                }}
            />
            
            {/* Linha interna fina */}
            <motion.path
                d="M80,40 C80,15 120,15 200,40 C280,65 320,65 320,40 C320,15 280,15 200,40 C120,65 80,65 80,40"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="0.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    pathLength: { duration: 2, ease: "easeInOut", delay: 1.5 },
                }}
            />
            
            {/* Partícula viajante */}
            <motion.circle
                r="4"
                fill="url(#infinityParticle)"
                filter="url(#infinityCardBlur)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, delay: 2.5, repeat: Infinity, repeatDelay: 1 }}
            >
                <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    begin="2.5s"
                    path="M80,40 C80,15 120,15 200,40 C280,65 320,65 320,40 C320,15 280,15 200,40 C120,65 80,65 80,40"
                />
            </motion.circle>
            
            {/* Glow central pulsante */}
            <motion.circle
                cx="200"
                cy="40"
                r="15"
                fill="url(#centerGlow)"
                animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                    scale: [0.9, 1.2, 0.9]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.svg>
    </div>
);

// ============================================================================
// GRID NOISE OVERLAY
// ============================================================================
const GridOverlay = () => (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        {/* Grid pattern */}
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
            }}
        />
        {/* Noise texture */}
        <div
            className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
        />
    </div>
);

// ============================================================================
// BENTO CARD - Card com espaço para animações e hover state
// ============================================================================
const BentoCard = ({
    children,
    className = '',
    delay = 0,
    glowColor = 'blue',
    onHoverChange,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const glowColors = {
        blue: 'rgba(59,130,246,0.2)',
        purple: 'rgba(139,92,246,0.2)',
        cyan: 'rgba(6,182,212,0.2)',
        emerald: 'rgba(52,211,153,0.2)',
        silver: 'rgba(148,163,184,0.25)',
    };
    
    const glowColorsHover = {
        blue: 'rgba(59,130,246,0.4)',
        purple: 'rgba(139,92,246,0.4)',
        cyan: 'rgba(6,182,212,0.4)',
        emerald: 'rgba(52,211,153,0.4)',
        silver: 'rgba(203,213,225,0.4)',
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        onHoverChange?.(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
        onHoverChange?.(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
        >
            {/* Card background */}
            <motion.div 
                className="absolute inset-0 backdrop-blur-xl"
                animate={{
                    background: isHovered 
                        ? 'linear-gradient(to bottom right, rgba(255,255,255,0.12), rgba(255,255,255,0.06), transparent)'
                        : 'linear-gradient(to bottom right, rgba(255,255,255,0.08), rgba(255,255,255,0.03), transparent)'
                }}
                transition={{ duration: 0.3 }}
            />
            
            {/* Border */}
            <motion.div 
                className="absolute inset-0 rounded-2xl"
                animate={{
                    borderColor: isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                    boxShadow: isHovered 
                        ? `0 0 30px ${glowColorsHover[glowColor]}, inset 0 0 20px rgba(255,255,255,0.05)`
                        : 'none'
                }}
                style={{ border: '1px solid' }}
                transition={{ duration: 0.3 }}
            />
            
            {/* Inner glow */}
            <motion.div
                className="absolute -inset-1 rounded-2xl"
                style={{ filter: 'blur(20px)' }}
                animate={{ 
                    opacity: isHovered ? 0.7 : 0.3,
                    background: isHovered ? glowColorsHover[glowColor] : glowColors[glowColor],
                }}
                transition={{ duration: 0.4 }}
            />
            
            {/* Shimmer on hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none"
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: '200%', opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                )}
            </AnimatePresence>
            
            {/* Content - passing hover state to children */}
            <div className="relative z-10 h-full">
                {typeof children === 'function' ? children(isHovered) : children}
            </div>
        </motion.div>
    );
};

// ============================================================================
// MOTION GRAPHIC ANIMATIONS FOR BENTO CARDS
// ============================================================================

// AI Neural Network Animation - Cores Cyan/Teal com Hover Trigger
const NeuralNetworkMotion = ({ isActive = false }) => {
    const nodes = [
        { x: 20, y: 30 }, { x: 50, y: 20 }, { x: 80, y: 35 },
        { x: 15, y: 60 }, { x: 50, y: 55 }, { x: 85, y: 60 },
        { x: 25, y: 85 }, { x: 50, y: 90 }, { x: 75, y: 80 },
    ];
    
    const connections = [
        [0, 3], [0, 4], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5],
        [3, 6], [3, 7], [4, 6], [4, 7], [4, 8], [5, 7], [5, 8],
    ];

    // Cores atualizadas - Cyan/Teal dominantes
    const nodeColor = isActive ? 'rgba(6,182,212,0.95)' : 'rgba(6,182,212,0.5)';
    const connectionColor = isActive ? 'rgba(6,182,212,0.5)' : 'rgba(6,182,212,0.15)';
    const pulseColor = isActive ? 'rgba(34,211,238,1)' : 'rgba(34,211,238,0.4)';
    const glowColor = isActive ? 'rgba(6,182,212,0.6)' : 'rgba(6,182,212,0.2)';

    return (
        <div className="absolute inset-0 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(34,211,238,1)" />
                        <stop offset="70%" stopColor="rgba(6,182,212,0.8)" />
                        <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                    </radialGradient>
                    <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                
                {/* Connections - linhas entre nós */}
                {connections.map(([from, to], i) => (
                    <motion.line
                        key={i}
                        x1={nodes[from].x}
                        y1={nodes[from].y}
                        x2={nodes[to].x}
                        y2={nodes[to].y}
                        stroke={connectionColor}
                        initial={{ pathLength: 1, opacity: 0.15, strokeWidth: 0.5 }}
                        animate={{ 
                            opacity: isActive ? [0.3, 0.7, 0.3] : 0.15,
                            strokeWidth: isActive ? [0.5, 0.8, 0.5] : 0.5
                        }}
                        transition={{ 
                            duration: 1.5, 
                            delay: i * 0.08,
                            repeat: isActive ? Infinity : 0,
                            repeatType: "reverse"
                        }}
                    />
                ))}
                
                {/* Traveling pulses - ativados no hover */}
                {isActive && connections.slice(0, 6).map(([from, to], i) => (
                    <motion.circle
                        key={`pulse-${i}`}
                        cx={nodes[from].x}
                        cy={nodes[from].y}
                        r="2.5"
                        fill={pulseColor}
                        filter="url(#nodeGlow)"
                        initial={{ opacity: 0, cx: nodes[from].x, cy: nodes[from].y }}
                        animate={{
                            cx: [nodes[from].x, nodes[to].x],
                            cy: [nodes[from].y, nodes[to].y],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 1.2,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
                
                {/* Nodes - nós da rede */}
                {nodes.map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={node.x}
                        cy={node.y}
                        fill={nodeColor}
                        filter={isActive ? "url(#nodeGlow)" : "none"}
                        initial={{ r: 3, opacity: 0.6 }}
                        animate={{ 
                            r: isActive ? [3, 4, 3] : 3,
                            opacity: isActive ? 1 : 0.6
                        }}
                        transition={{ 
                            duration: 1.5, 
                            delay: i * 0.1,
                            repeat: isActive ? Infinity : 0,
                            repeatType: "reverse"
                        }}
                    />
                ))}
                
                {/* Central glow ring - pulsante no hover */}
                <motion.circle
                    cx="50"
                    cy="55"
                    fill="none"
                    stroke={glowColor}
                    strokeWidth="0.5"
                    initial={{ r: 8, opacity: 0.3 }}
                    animate={{ 
                        r: isActive ? [8, 18, 8] : 8, 
                        opacity: isActive ? [0.5, 0.1, 0.5] : 0.2 
                    }}
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                />
                
                {/* Secondary pulse ring */}
                {isActive && (
                    <motion.circle
                        cx="50"
                        cy="55"
                        fill="none"
                        stroke="rgba(34,211,238,0.3)"
                        strokeWidth="0.3"
                        initial={{ r: 5, opacity: 0 }}
                        animate={{ 
                            r: [5, 25], 
                            opacity: [0.6, 0] 
                        }}
                        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.3 }}
                    />
                )}
            </svg>
        </div>
    );
};

// Growth Chart Animation - Cores Prateadas com Hover Trigger
const GrowthChartMotion = ({ isActive = false }) => {
    const bars = [35, 48, 42, 65, 55, 78, 85, 92];
    
    // Cores prateadas (silver palette)
    const getBarBackground = (index, isLast) => {
        if (isLast) {
            return isActive 
                ? 'linear-gradient(to top, rgba(226,232,240,0.95), rgba(255,255,255,0.8))'
                : 'linear-gradient(to top, rgba(148,163,184,0.6), rgba(203,213,225,0.3))';
        }
        return isActive 
            ? 'linear-gradient(to top, rgba(148,163,184,0.8), rgba(203,213,225,0.5))'
            : 'linear-gradient(to top, rgba(100,116,139,0.4), rgba(148,163,184,0.2))';
    };
    
    return (
        <div className="absolute inset-0 flex items-end justify-center gap-1.5 p-4 pb-6">
            {bars.map((height, i) => {
                const isLast = i === bars.length - 1;
                const targetHeight = isActive ? height : height * 0.3;
                
                return (
                    <motion.div
                        key={i}
                        className="flex-1 rounded-t-sm relative overflow-hidden"
                        style={{
                            background: getBarBackground(i, isLast),
                            boxShadow: isActive && isLast 
                                ? '0 0 25px rgba(226,232,240,0.5), 0 0 10px rgba(255,255,255,0.3)' 
                                : 'none',
                        }}
                        initial={{ height: `${height * 0.3}%`, opacity: 0.6 }}
                        animate={{ 
                            height: `${targetHeight}%`,
                            opacity: isActive ? 1 : 0.6
                        }}
                        transition={{
                            duration: 0.6,
                            delay: isActive ? i * 0.08 : 0,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        {/* Shimmer effect on bars when active */}
                        {isActive && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent"
                                initial={{ y: '100%' }}
                                animate={{ y: '-100%' }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.8 + i * 0.1,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                            />
                        )}
                    </motion.div>
                );
            })}
            
            {/* Trend line - prateada */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="silverTrendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(148,163,184,0.3)" />
                        <stop offset="50%" stopColor="rgba(226,232,240,0.8)" />
                        <stop offset="100%" stopColor="rgba(148,163,184,0.3)" />
                    </linearGradient>
                    <filter id="trendGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                
                <motion.path
                    d="M 5 70 Q 20 60, 35 55 T 65 40 T 95 15"
                    stroke="url(#silverTrendGradient)"
                    strokeWidth={isActive ? "2" : "1"}
                    fill="none"
                    filter={isActive ? "url(#trendGlow)" : "none"}
                    initial={{ pathLength: 0.3, opacity: 0.3 }}
                    animate={{ 
                        pathLength: isActive ? 1 : 0.3, 
                        opacity: isActive ? 1 : 0.3 
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
                
                {/* Moving dot on trend line */}
                {isActive && (
                    <motion.circle
                        r="3"
                        fill="rgba(255,255,255,0.95)"
                        filter="url(#trendGlow)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <animateMotion
                            dur="2.5s"
                            repeatCount="indefinite"
                            path="M 5 70 Q 20 60, 35 55 T 65 40 T 95 15"
                        />
                    </motion.circle>
                )}
            </svg>
            
            {/* Floating particles when active */}
            {isActive && (
                <>
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={`particle-${i}`}
                            className="absolute w-1 h-1 rounded-full bg-white/60"
                            style={{ left: `${20 + i * 20}%` }}
                            initial={{ bottom: '20%', opacity: 0 }}
                            animate={{ 
                                bottom: ['20%', '80%'],
                                opacity: [0, 0.8, 0],
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.4,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

// Speed Gauge Animation - Hover Trigger
const SpeedGaugeMotion = ({ isActive = false }) => {
    // Valores do gauge baseados no estado de hover
    const progressOffset = isActive ? 30 : 150; // 30 = quase cheio, 150 = quase vazio
    
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-24 h-24" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(6,182,212,1)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,1)" />
                    </linearGradient>
                    <linearGradient id="gaugeGradientDim" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(6,182,212,0.4)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,0.4)" />
                    </linearGradient>
                    <filter id="gaugeGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                
                {/* Background arc */}
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="188 63"
                    transform="rotate(135 50 50)"
                />
                
                {/* Progress arc */}
                <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={isActive ? "url(#gaugeGradient)" : "url(#gaugeGradientDim)"}
                    strokeWidth={isActive ? "7" : "6"}
                    strokeLinecap="round"
                    strokeDasharray="188 63"
                    transform="rotate(135 50 50)"
                    filter={isActive ? "url(#gaugeGlow)" : "none"}
                    initial={{ strokeDashoffset: 150 }}
                    animate={{ strokeDashoffset: progressOffset }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
                
                {/* Tick marks around gauge */}
                {isActive && [...Array(8)].map((_, i) => {
                    const angle = 135 + (i * 33.75); // Spread across the arc
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 50 + 32 * Math.cos(rad);
                    const y1 = 50 + 32 * Math.sin(rad);
                    const x2 = 50 + 36 * Math.cos(rad);
                    const y2 = 50 + 36 * Math.sin(rad);
                    return (
                        <motion.line
                            key={i}
                            x1={x1} y1={y1}
                            x2={x2} y2={y2}
                            stroke="rgba(6,182,212,0.5)"
                            strokeWidth="1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                        />
                    );
                })}
                
                {/* Center text */}
                <motion.text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-lg font-bold"
                    fill={isActive ? "white" : "rgba(255,255,255,0.5)"}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: isActive ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                >
                    10x
                </motion.text>
                <motion.text
                    x="50"
                    y="62"
                    textAnchor="middle"
                    className="text-[8px] uppercase tracking-wider"
                    fill={isActive ? "rgba(148,163,184,1)" : "rgba(148,163,184,0.5)"}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: isActive ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                >
                    Faster
                </motion.text>
                
                {/* Pulse rings - only when active */}
                {isActive && (
                    <>
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="rgba(6,182,212,0.4)"
                            strokeWidth="1"
                            initial={{ r: 35, opacity: 0.5 }}
                            animate={{ r: [35, 48], opacity: [0.5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="rgba(59,130,246,0.3)"
                            strokeWidth="0.5"
                            initial={{ r: 30, opacity: 0.3 }}
                            animate={{ r: [30, 45], opacity: [0.4, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
                        />
                    </>
                )}
                
                {/* Static subtle ring when not active */}
                {!isActive && (
                    <circle
                        cx="50"
                        cy="50"
                        r="35"
                        fill="none"
                        stroke="rgba(6,182,212,0.15)"
                        strokeWidth="0.5"
                    />
                )}
            </svg>
        </div>
    );
};

// ============================================================================
// MAIN HERO COMPONENT
// ============================================================================
const NewHero = () => {
    const handleScrollToStrategy = () => {
        const target = document.querySelector('#strategy-session');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.3 }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay, ease: "easeOut" }
        })
    };

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#020617]">

            {/* ================================================================
                BACKGROUND LAYERS
            ================================================================ */}
            <PrismaticBackground />
            <FloatingParticles />
            <GridOverlay />

            {/* ================================================================
                MAIN CONTENT - TWO COLUMN LAYOUT
            ================================================================ */}
            <div className="container mx-auto px-6 relative" style={{ zIndex: 10 }}>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">

                    {/* ========================================================
                        LEFT COLUMN - BENTO GRID
                    ======================================================== */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="order-2 lg:order-1"
                    >
                        {/* Bento Grid Container */}
                        <div className="grid grid-rows-[auto_1fr] gap-4">
                            
                            {/* Row 1: Main Image */}
                            <BentoCard className="relative h-[320px] md:h-[380px]" delay={0.3} glowColor="purple">
                                {/* Image */}
                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                    <motion.img
                                        src="/images/hero-woman-v3.webp"
                                        alt="AI-Powered Growth"
                                        className="w-full h-full object-cover object-center"
                                        style={{
                                            maskImage: 'radial-gradient(ellipse 90% 85% at 50% 40%, black 60%, transparent 100%)',
                                            WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 40%, black 60%, transparent 100%)',
                                        }}
                                        initial={{ scale: 1.1, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1.2, delay: 0.5 }}
                                    />
                                    
                                    {/* Prismatic overlay */}
                                    <motion.div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, transparent 40%, rgba(6,182,212,0.1) 100%)',
                                        }}
                                        animate={{
                                            background: [
                                                'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, transparent 40%, rgba(6,182,212,0.1) 100%)',
                                                'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, transparent 40%, rgba(139,92,246,0.1) 100%)',
                                                'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, transparent 40%, rgba(6,182,212,0.1) 100%)',
                                            ]
                                        }}
                                        transition={{ duration: 6, repeat: Infinity }}
                                    />
                                </div>
                            </BentoCard>
                            
                            {/* Row 2: Three Cards */}
                            <div className="grid grid-cols-3 gap-4">
                                
                                {/* Card 1: AI/Neural Network */}
                                <BentoCard className="h-[140px] md:h-[160px]" delay={0.5} glowColor="cyan">
                                    {(isHovered) => (
                                        <>
                                            <NeuralNetworkMotion isActive={isHovered} />
                                            <motion.div 
                                                className="absolute bottom-3 left-3 right-3 z-10"
                                                animate={{ y: isHovered ? -2 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Technology</p>
                                                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                                                    <motion.span animate={{ scale: isHovered ? 1.1 : 1 }} transition={{ duration: 0.3 }}>
                                                        <Brain className="w-3.5 h-3.5 text-cyan-400" />
                                                    </motion.span>
                                                    AI-Powered
                                                </p>
                                            </motion.div>
                                        </>
                                    )}
                                </BentoCard>
                                
                                {/* Card 2: Growth/ROAS - Cores Prateadas */}
                                <BentoCard className="h-[140px] md:h-[160px]" delay={0.6} glowColor="silver">
                                    {(isHovered) => (
                                        <>
                                            <GrowthChartMotion isActive={isHovered} />
                                            <motion.div 
                                                className="absolute bottom-3 left-3 right-3 z-10"
                                                animate={{ y: isHovered ? -2 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Avg. Return</p>
                                                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                                                    <motion.span animate={{ scale: isHovered ? 1.1 : 1 }} transition={{ duration: 0.3 }}>
                                                        <TrendingUp className="w-3.5 h-3.5 text-slate-300" />
                                                    </motion.span>
                                                    5x ROAS
                                                </p>
                                            </motion.div>
                                        </>
                                    )}
                                </BentoCard>
                                
                                {/* Card 3: Speed */}
                                <BentoCard className="h-[140px] md:h-[160px]" delay={0.7} glowColor="cyan">
                                    {(isHovered) => (
                                        <>
                                            <SpeedGaugeMotion isActive={isHovered} />
                                            <motion.div 
                                                className="absolute bottom-3 left-3 right-3 z-10"
                                                animate={{ y: isHovered ? -2 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Testing</p>
                                                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                                                    <motion.span animate={{ scale: isHovered ? 1.1 : 1 }} transition={{ duration: 0.3 }}>
                                                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                                                    </motion.span>
                                                    10x Faster
                                                </p>
                                            </motion.div>
                                        </>
                                    )}
                                </BentoCard>
                            </div>
                            
                            {/* Row 3: Infinity Symbol Card - Full Width */}
                            <BentoCard className="h-[70px] md:h-[80px]" delay={0.8} glowColor="blue">
                                <InfinityCardMotion />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Continuous</p>
                                    <p className="text-xs font-medium text-slate-300">Optimization Loop</p>
                                </div>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-right">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Data-Driven</p>
                                    <p className="text-xs font-medium text-slate-300">Growth System</p>
                                </div>
                            </BentoCard>
                        </div>
                    </motion.div>

                    {/* ========================================================
                        RIGHT COLUMN - CONTENT
                    ======================================================== */}
                    <div className="order-1 lg:order-2 text-center lg:text-left">

                        {/* Headline */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="mb-8"
                        >
                            <h1 className="font-heading leading-[1.05] tracking-tight">
                                <motion.span
                                    variants={wordVariants}
                                    className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2"
                                >
                                    Are Your Ads
                                </motion.span>
                                <motion.span
                                    variants={wordVariants}
                                    className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                                    Driving Growth
                                    </span>
                                </motion.span>
                                <motion.span
                                    variants={wordVariants}
                                    className="block text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-slate-400 to-slate-600 mt-3"
                                >
                                    — or Just Draining Budget?
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Subheadline */}
                        <motion.p
                            custom={0.8}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
                        >
                            Most businesses treat Meta Ads like an endless experiment. We turn them into a{' '}
                            <span className="text-white font-semibold">growth system</span> — using scientific method and{' '}
                            <span className="text-white font-semibold">
                                artificial intelligence
                            </span>{' '}
                            so every pound you invest works with clear purpose.
                        </motion.p>

                        {/* CTA Group */}
                        <motion.div
                            custom={1.0}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col items-center lg:items-start gap-5"
                        >
                            <button
                                onClick={handleScrollToStrategy}
                                className="shiny-cta group"
                            >
                                <span className="flex items-center gap-2">
                                    Book Your Free Strategy Analysis
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4, duration: 0.6 }}
                                className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <motion.span
                                            className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                                            animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                                    </span>
                                    <span className="font-medium tracking-wide">Only 5 spots per month</span>
                                </div>
                                <span className="hidden sm:inline text-slate-600">•</span>
                                <span className="font-medium tracking-wide">Come with numbers, leave with clarity</span>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* ================================================================
                BOTTOM GRADIENT FADE
            ================================================================ */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent pointer-events-none z-20" />
        </section>
    );
};

export default NewHero;
