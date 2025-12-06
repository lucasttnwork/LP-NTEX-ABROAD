import React from 'react';
import { motion } from 'framer-motion';

const NeuralNetworkAnimation = ({ className = '' }) => {
    const layers = [
        { nodes: 3, x: 20 },
        { nodes: 5, x: 50 },
        { nodes: 5, x: 80 },
        { nodes: 3, x: 110 },
        { nodes: 2, x: 140 },
    ];

    const getNodePositions = () => {
        const positions = [];
        layers.forEach((layer, layerIndex) => {
            const spacing = 100 / (layer.nodes + 1);
            for (let i = 0; i < layer.nodes; i++) {
                positions.push({
                    x: layer.x,
                    y: spacing * (i + 1),
                    layer: layerIndex,
                    index: i,
                });
            }
        });
        return positions;
    };

    const nodes = getNodePositions();

    const getConnections = () => {
        const connections = [];
        layers.forEach((layer, layerIndex) => {
            if (layerIndex < layers.length - 1) {
                const currentLayerNodes = nodes.filter(n => n.layer === layerIndex);
                const nextLayerNodes = nodes.filter(n => n.layer === layerIndex + 1);
                
                currentLayerNodes.forEach(fromNode => {
                    nextLayerNodes.forEach(toNode => {
                        connections.push({
                            from: fromNode,
                            to: toNode,
                            delay: layerIndex * 0.2 + Math.random() * 0.3,
                        });
                    });
                });
            }
        });
        return connections;
    };

    const connections = getConnections();

    return (
        <div className={`relative w-full h-full min-h-[180px] overflow-hidden bg-gradient-to-br from-black/60 to-purple-950/20 ${className}`}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid meet">
                {/* Connections */}
                {connections.map((conn, index) => (
                    <motion.line
                        key={`conn-${index}`}
                        x1={conn.from.x}
                        y1={conn.from.y}
                        x2={conn.to.x}
                        y2={conn.to.y}
                        stroke="rgba(147,51,234,0.15)"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            delay: conn.delay,
                            duration: 0.5,
                        }}
                    />
                ))}

                {/* Data pulses along connections */}
                {connections.slice(0, 8).map((conn, index) => (
                    <motion.circle
                        key={`pulse-${index}`}
                        r="1.5"
                        fill="rgba(168,85,247,0.8)"
                        initial={{ 
                            cx: conn.from.x, 
                            cy: conn.from.y,
                            opacity: 0,
                        }}
                        animate={{
                            cx: [conn.from.x, conn.to.x],
                            cy: [conn.from.y, conn.to.y],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            delay: index * 0.4 + 1,
                            duration: 0.8,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                    />
                ))}

                {/* Nodes */}
                {nodes.map((node, index) => (
                    <motion.g key={`node-${index}`}>
                        {/* Glow effect */}
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="4"
                            fill="none"
                            stroke="rgba(168,85,247,0.3)"
                            strokeWidth="2"
                            initial={{ scale: 0 }}
                            animate={{ 
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                delay: node.layer * 0.1,
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                        {/* Node */}
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="2.5"
                            fill={node.layer === 0 ? 'rgba(59,130,246,0.8)' : node.layer === layers.length - 1 ? 'rgba(34,197,94,0.8)' : 'rgba(168,85,247,0.8)'}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: node.layer * 0.15 + node.index * 0.05,
                                duration: 0.3,
                                ease: 'backOut',
                            }}
                        />
                    </motion.g>
                ))}
            </svg>

            {/* Labels */}
            <motion.div
                className="absolute top-2 left-3 text-[9px] font-mono text-blue-400/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                INPUT
            </motion.div>
            <motion.div
                className="absolute top-2 right-3 text-[9px] font-mono text-green-400/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                OUTPUT
            </motion.div>

            {/* Processing indicator */}
            <motion.div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <motion.div
                    className="flex gap-1"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1 h-1 bg-purple-400 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.2,
                                repeat: Infinity,
                            }}
                        />
                    ))}
                </motion.div>
                <span className="text-[9px] font-mono text-purple-400/70">AI PROCESSING</span>
            </motion.div>
        </div>
    );
};

export default NeuralNetworkAnimation;



