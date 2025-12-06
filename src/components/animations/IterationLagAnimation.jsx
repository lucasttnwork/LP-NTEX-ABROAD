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

    return (
        <div className={`relative w-full h-full min-h-[120px] overflow-hidden bg-black/40 p-4 flex flex-col justify-center ${className}`}>
            {/* Timeline */}
            <div className="relative flex items-center justify-between px-2">
                {/* Line behind */}
                <div className="absolute top-1/2 left-2 right-2 h-[2px] bg-gray-700 -translate-y-1/2" />
                
                {/* Progress line */}
                <motion.div
                    className="absolute top-1/2 left-2 h-[2px] bg-blue-500/60 -translate-y-1/2"
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
                    <div key={index} className="relative z-10 flex flex-col items-center gap-1">
                        <motion.div
                            className={`w-3 h-3 rounded-full border-2 ${
                                point.active 
                                    ? 'bg-blue-500 border-blue-400' 
                                    : 'bg-gray-800 border-gray-600'
                            }`}
                            animate={point.active ? {
                                scale: [1, 1.2, 1],
                                boxShadow: ['0 0 0 0 rgba(59,130,246,0.4)', '0 0 0 4px rgba(59,130,246,0)', '0 0 0 0 rgba(59,130,246,0.4)'],
                            } : {}}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                        <span className={`text-[9px] font-mono ${point.active ? 'text-blue-400' : 'text-gray-600'}`}>
                            {point.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Loading cursor stuck */}
            <motion.div
                className="absolute top-4 right-4 flex items-center gap-2"
            >
                <motion.div
                    className="w-4 h-4 border-2 border-gray-500 border-t-blue-500 rounded-full"
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
                <span className="text-[10px] font-mono text-gray-500">WAITING...</span>
            </motion.div>

            {/* Gap indicator */}
            <motion.div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1"
                animate={{
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                <div className="w-8 h-[1px] bg-red-500/50" />
                <span className="text-[9px] font-mono text-red-400/70">GAP</span>
                <div className="w-8 h-[1px] bg-red-500/50" />
            </motion.div>
        </div>
    );
};

export default IterationLagAnimation;



