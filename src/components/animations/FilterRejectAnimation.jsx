import React from 'react';
import { motion } from 'framer-motion';

const FilterRejectAnimation = ({ className = '' }) => {
    const items = [
        { y: 15, rejected: true, delay: 0 },
        { y: 35, rejected: true, delay: 0.3 },
        { y: 55, rejected: true, delay: 0.6 },
    ];

    return (
        <div className={`relative w-full h-full min-h-[140px] overflow-hidden ${className}`}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
                {/* Filter line */}
                <motion.line
                    x1="50"
                    y1="5"
                    x2="50"
                    y2="75"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    strokeDasharray="4 2"
                />

                {/* Filter gate */}
                <motion.rect
                    x="45"
                    y="30"
                    width="10"
                    height="20"
                    rx="2"
                    fill="none"
                    stroke="rgba(107,114,128,0.5)"
                    strokeWidth="1"
                    animate={{
                        stroke: ['rgba(107,114,128,0.3)', 'rgba(107,114,128,0.6)', 'rgba(107,114,128,0.3)'],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                />

                {/* Items being filtered */}
                {items.map((item, index) => (
                    <motion.g key={`item-${index}`}>
                        {/* Item coming from left */}
                        <motion.circle
                            r="4"
                            fill="rgba(239,68,68,0.3)"
                            stroke="rgba(239,68,68,0.5)"
                            strokeWidth="1"
                            initial={{ cx: 20, cy: item.y, opacity: 0 }}
                            animate={{
                                cx: [20, 40, 40, 25],
                                cy: [item.y, item.y, item.y + 5, item.y + 20],
                                opacity: [0, 1, 1, 0],
                                scale: [1, 1, 0.8, 0.5],
                            }}
                            transition={{
                                delay: item.delay,
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                times: [0, 0.4, 0.6, 1],
                            }}
                        />

                        {/* X mark appearing */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 1, 0] }}
                            transition={{
                                delay: item.delay + 0.8,
                                duration: 1.2,
                                repeat: Infinity,
                                repeatDelay: 1.8,
                            }}
                        >
                            <motion.line
                                x1="37"
                                y1={item.y - 3}
                                x2="43"
                                y2={item.y + 3}
                                stroke="rgba(239,68,68,0.7)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <motion.line
                                x1="43"
                                y1={item.y - 3}
                                x2="37"
                                y2={item.y + 3}
                                stroke="rgba(239,68,68,0.7)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </motion.g>
                    </motion.g>
                ))}

                {/* "Blocked" text */}
                <motion.text
                    x="70"
                    y="42"
                    fontSize="6"
                    fill="rgba(107,114,128,0.5)"
                    fontFamily="monospace"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    FILTERED
                </motion.text>
            </svg>

            {/* Status */}
            <motion.div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <motion.div
                    className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                />
                <span className="text-[9px] font-mono text-gray-500">NOT A MATCH</span>
            </motion.div>
        </div>
    );
};

export default FilterRejectAnimation;


