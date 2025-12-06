import React from 'react';
import { motion } from 'framer-motion';

const BlindSignalsAnimation = ({ className = '' }) => {
    const dataPoints = [
        { x: 25, y: 30 },
        { x: 50, y: 60 },
        { x: 75, y: 40 },
        { x: 40, y: 75 },
        { x: 65, y: 25 },
    ];

    return (
        <div className={`relative w-full h-full min-h-[120px] overflow-hidden bg-black/40 ${className}`}>
            {/* Radar center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Radar circles */}
                {[1, 2, 3].map((ring) => (
                    <motion.div
                        key={ring}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
                        style={{
                            width: `${ring * 60}px`,
                            height: `${ring * 60}px`,
                        }}
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{
                            duration: 2,
                            delay: ring * 0.2,
                            repeat: Infinity,
                        }}
                    />
                ))}

                {/* Radar sweep */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[90px] h-[2px] origin-left"
                    style={{
                        background: 'linear-gradient(90deg, rgba(59,130,246,0.8) 0%, transparent 100%)',
                    }}
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {/* Center dot */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"
                    animate={{
                        boxShadow: ['0 0 10px rgba(59,130,246,0.5)', '0 0 20px rgba(59,130,246,0.8)', '0 0 10px rgba(59,130,246,0.5)'],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                />
            </div>

            {/* Data points that are being missed */}
            {dataPoints.map((point, index) => (
                <motion.div
                    key={index}
                    className="absolute w-2 h-2 rounded-full bg-gray-500/50"
                    style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                    }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 2,
                        delay: index * 0.3,
                        repeat: Infinity,
                    }}
                />
            ))}

            {/* "Missed" indicator */}
            <motion.div
                className="absolute bottom-2 right-2 text-[10px] font-mono text-gray-500 flex items-center gap-1"
                animate={{
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                SIGNALS MISSED
            </motion.div>
        </div>
    );
};

export default BlindSignalsAnimation;



