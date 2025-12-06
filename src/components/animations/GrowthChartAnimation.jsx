import React from 'react';
import { motion } from 'framer-motion';

const GrowthChartAnimation = ({ className = '' }) => {
    const dataPoints = [
        { x: 10, y: 75 },
        { x: 25, y: 65 },
        { x: 40, y: 60 },
        { x: 55, y: 50 },
        { x: 70, y: 40 },
        { x: 85, y: 30 },
        { x: 100, y: 18 },
        { x: 115, y: 12 },
        { x: 130, y: 8 },
    ];

    const pathD = dataPoints.reduce((path, point, index) => {
        if (index === 0) return `M ${point.x} ${point.y}`;
        const prevPoint = dataPoints[index - 1];
        const cpX = (prevPoint.x + point.x) / 2;
        return `${path} C ${cpX} ${prevPoint.y}, ${cpX} ${point.y}, ${point.x} ${point.y}`;
    }, '');

    return (
        <div className={`relative w-full h-full min-h-[180px] overflow-hidden bg-black/40 p-4 ${className}`}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 150 90" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                {[20, 40, 60].map((y) => (
                    <line
                        key={`grid-${y}`}
                        x1="5"
                        y1={y}
                        x2="145"
                        y2={y}
                        stroke="rgba(255,255,255,0.05)"
                        strokeDasharray="2 4"
                    />
                ))}

                {/* Growth area fill */}
                <motion.path
                    d={`${pathD} L 130 85 L 10 85 Z`}
                    fill="url(#growthGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                />

                {/* Gradient definition */}
                <defs>
                    <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(34,197,94,0.3)" />
                        <stop offset="100%" stopColor="rgba(34,197,94,0)" />
                    </linearGradient>
                </defs>

                {/* Main line */}
                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="rgba(34,197,94,0.8)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        ease: 'easeOut',
                    }}
                />

                {/* Data points */}
                {dataPoints.map((point, index) => (
                    <motion.g key={`point-${index}`}>
                        {/* Outer glow */}
                        <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="6"
                            fill="none"
                            stroke="rgba(34,197,94,0.3)"
                            strokeWidth="2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0, 0.3],
                            }}
                            transition={{
                                delay: index * 0.2 + 0.5,
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                        {/* Point */}
                        <motion.circle
                            cx={point.x}
                            cy={point.y}
                            r="3"
                            fill="rgba(34,197,94,0.9)"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: index * 0.15 + 0.3,
                                duration: 0.3,
                                ease: 'backOut',
                            }}
                        />
                    </motion.g>
                ))}

                {/* Trend arrow */}
                <motion.path
                    d="M 115 20 L 125 10 L 125 15 L 140 15 L 140 25 L 125 25 L 125 30 Z"
                    fill="rgba(34,197,94,0.6)"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2, duration: 0.3 }}
                />
            </svg>

            {/* Metrics */}
            <motion.div
                className="absolute top-3 left-3 flex flex-col"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
            >
                <span className="text-xs text-gray-500 font-mono">GROWTH</span>
                <motion.span
                    className="text-xl font-bold text-green-400 font-mono"
                    animate={{
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    +127%
                </motion.span>
            </motion.div>

            {/* Consistency indicator */}
            <motion.div
                className="absolute bottom-3 right-3 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
            >
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1 bg-green-500/60 rounded-full"
                            style={{ height: `${i * 3 + 4}px` }}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 2.8 + i * 0.1 }}
                        />
                    ))}
                </div>
                <span className="text-[9px] font-mono text-green-400/70">CONSISTENT</span>
            </motion.div>
        </div>
    );
};

export default GrowthChartAnimation;




