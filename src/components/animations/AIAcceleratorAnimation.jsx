import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AIAcceleratorAnimation = ({ className = '' }) => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        
        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };
        
        resize();
        window.addEventListener('resize', resize);
        
        // Particles flowing through the core - SLOWER
        const particles = [];
        const maxParticles = 45; // Reduced count
        
        class Particle {
            constructor(w, h) {
                this.reset(w, h);
            }
            
            reset(w, h) {
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.max(w, h) * 0.7;
                this.x = w / 2 + Math.cos(angle) * distance;
                this.y = h / 2 + Math.sin(angle) * distance;
                this.targetX = w / 2;
                this.targetY = h / 2;
                this.speed = 0.4 + Math.random() * 0.6; // Much slower: was 2-5, now 0.4-1
                this.size = 1 + Math.random() * 2;
                this.alpha = 0.3 + Math.random() * 0.7;
                this.trail = [];
                this.maxTrail = 12 + Math.floor(Math.random() * 8);
                
                // Color variations - silver, cyan, white
                const colors = [
                    { r: 200, g: 210, b: 220 }, // Silver
                    { r: 100, g: 200, b: 230 }, // Cyan
                    { r: 180, g: 230, b: 255 }, // Light cyan
                    { r: 220, g: 220, b: 230 }, // Platinum
                    { r: 140, g: 180, b: 200 }, // Steel blue
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            
            update(w, h) {
                this.trail.push({ x: this.x, y: this.y, alpha: this.alpha });
                if (this.trail.length > this.maxTrail) {
                    this.trail.shift();
                }
                
                const dx = this.targetX - this.x;
                const dy = this.targetY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 25) {
                    // Reset when reaching the brain
                    this.reset(w, h);
                } else {
                    // Gentle acceleration as it gets closer
                    const acceleration = 1 + (1 - dist / (Math.max(w, h) * 0.7)) * 0.5; // Reduced from 2 to 0.5
                    this.x += (dx / dist) * this.speed * acceleration;
                    this.y += (dy / dist) * this.speed * acceleration;
                }
            }
            
            draw(ctx) {
                // Draw trail
                this.trail.forEach((point, i) => {
                    const trailAlpha = (i / this.trail.length) * point.alpha * 0.5;
                    const trailSize = this.size * (i / this.trail.length);
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${trailAlpha})`;
                    ctx.fill();
                });
                
                // Draw particle with glow
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
                ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.8)`;
                ctx.shadowBlur = 10;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }
        
        // Initialize particles
        const rect = canvas.getBoundingClientRect();
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle(rect.width, rect.height));
        }
        
        // Data streams (horizontal lines rushing in) - SLOWER
        const dataStreams = [];
        const maxStreams = 6; // Reduced count
        
        class DataStream {
            constructor(w, h) {
                this.reset(w, h);
            }
            
            reset(w, h) {
                const side = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
                
                if (side === 0) {
                    this.x = Math.random() * w;
                    this.y = -10;
                    this.targetX = w / 2;
                    this.targetY = h / 2;
                } else if (side === 1) {
                    this.x = w + 10;
                    this.y = Math.random() * h;
                    this.targetX = w / 2;
                    this.targetY = h / 2;
                } else if (side === 2) {
                    this.x = Math.random() * w;
                    this.y = h + 10;
                    this.targetX = w / 2;
                    this.targetY = h / 2;
                } else {
                    this.x = -10;
                    this.y = Math.random() * h;
                    this.targetX = w / 2;
                    this.targetY = h / 2;
                }
                
                this.length = 25 + Math.random() * 40;
                this.speed = 1 + Math.random() * 1.5; // Much slower: was 4-8, now 1-2.5
                this.alpha = 0.15 + Math.random() * 0.3;
                this.width = 1 + Math.random();
            }
            
            update(w, h) {
                const dx = this.targetX - this.x;
                const dy = this.targetY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 35) {
                    this.reset(w, h);
                } else {
                    const acceleration = 1 + (1 - dist / (Math.max(w, h) * 0.8)) * 0.8; // Reduced from 3 to 0.8
                    this.x += (dx / dist) * this.speed * acceleration;
                    this.y += (dy / dist) * this.speed * acceleration;
                }
            }
            
            draw(ctx) {
                const dx = this.targetX - this.x;
                const dy = this.targetY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                const endX = this.x - (dx / dist) * this.length;
                const endY = this.y - (dy / dist) * this.length;
                
                const gradient = ctx.createLinearGradient(endX, endY, this.x, this.y);
                gradient.addColorStop(0, 'rgba(100, 180, 220, 0)');
                gradient.addColorStop(0.5, `rgba(150, 200, 230, ${this.alpha * 0.5})`);
                gradient.addColorStop(1, `rgba(200, 230, 255, ${this.alpha})`);
                
                ctx.beginPath();
                ctx.moveTo(endX, endY);
                ctx.lineTo(this.x, this.y);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = this.width;
                ctx.lineCap = 'round';
                ctx.stroke();
            }
        }
        
        for (let i = 0; i < maxStreams; i++) {
            dataStreams.push(new DataStream(rect.width, rect.height));
        }
        
        // AI Chip/Processor drawing function
        const drawAIChip = (ctx, centerX, centerY, size, time) => {
            ctx.save();
            ctx.translate(centerX, centerY);
            
            // Outer glow effect
            const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2.5);
            glowGradient.addColorStop(0, 'rgba(150, 200, 230, 0.5)');
            glowGradient.addColorStop(0.4, 'rgba(100, 180, 220, 0.2)');
            glowGradient.addColorStop(1, 'rgba(80, 150, 200, 0)');
            ctx.beginPath();
            ctx.arc(0, 0, size * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = glowGradient;
            ctx.fill();
            
            const chipSize = size * 0.9;
            const pinLength = size * 0.35;
            const pinWidth = size * 0.06;
            const pinCount = 5;
            const pinSpacing = chipSize * 0.8 / (pinCount - 1);
            
            // Pulsing effect
            const pulse = 1 + Math.sin(time * 1.5) * 0.03;
            ctx.scale(pulse, pulse);
            
            // Draw pins on all sides
            ctx.strokeStyle = 'rgba(180, 210, 235, 0.8)';
            ctx.lineWidth = pinWidth;
            ctx.lineCap = 'round';
            
            for (let i = 0; i < pinCount; i++) {
                const offset = -chipSize * 0.4 + i * pinSpacing;
                
                // Animated glow on pins
                const pinGlow = 0.3 + Math.sin(time * 3 + i * 0.5) * 0.2;
                ctx.strokeStyle = `rgba(150, 200, 230, ${pinGlow + 0.3})`;
                
                // Top pins
                ctx.beginPath();
                ctx.moveTo(offset, -chipSize / 2);
                ctx.lineTo(offset, -chipSize / 2 - pinLength);
                ctx.stroke();
                
                // Bottom pins
                ctx.beginPath();
                ctx.moveTo(offset, chipSize / 2);
                ctx.lineTo(offset, chipSize / 2 + pinLength);
                ctx.stroke();
                
                // Left pins
                ctx.beginPath();
                ctx.moveTo(-chipSize / 2, offset);
                ctx.lineTo(-chipSize / 2 - pinLength, offset);
                ctx.stroke();
                
                // Right pins
                ctx.beginPath();
                ctx.moveTo(chipSize / 2, offset);
                ctx.lineTo(chipSize / 2 + pinLength, offset);
                ctx.stroke();
            }
            
            // Chip body - dark metallic background
            const chipGradient = ctx.createLinearGradient(-chipSize/2, -chipSize/2, chipSize/2, chipSize/2);
            chipGradient.addColorStop(0, 'rgba(40, 50, 60, 0.95)');
            chipGradient.addColorStop(0.5, 'rgba(30, 40, 50, 0.98)');
            chipGradient.addColorStop(1, 'rgba(25, 35, 45, 0.95)');
            
            ctx.fillStyle = chipGradient;
            ctx.beginPath();
            const cornerRadius = chipSize * 0.1;
            ctx.roundRect(-chipSize/2, -chipSize/2, chipSize, chipSize, cornerRadius);
            ctx.fill();
            
            // Chip border - metallic edge
            const borderGradient = ctx.createLinearGradient(-chipSize/2, -chipSize/2, chipSize/2, chipSize/2);
            borderGradient.addColorStop(0, 'rgba(200, 220, 240, 0.9)');
            borderGradient.addColorStop(0.5, 'rgba(150, 180, 210, 0.7)');
            borderGradient.addColorStop(1, 'rgba(180, 200, 220, 0.9)');
            
            ctx.strokeStyle = borderGradient;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Inner chip area (die)
            const innerSize = chipSize * 0.7;
            const innerGradient = ctx.createLinearGradient(-innerSize/2, -innerSize/2, innerSize/2, innerSize/2);
            innerGradient.addColorStop(0, 'rgba(60, 80, 100, 0.9)');
            innerGradient.addColorStop(0.5, 'rgba(50, 70, 90, 0.95)');
            innerGradient.addColorStop(1, 'rgba(45, 65, 85, 0.9)');
            
            ctx.fillStyle = innerGradient;
            ctx.beginPath();
            ctx.roundRect(-innerSize/2, -innerSize/2, innerSize, innerSize, cornerRadius * 0.6);
            ctx.fill();
            
            ctx.strokeStyle = 'rgba(100, 150, 200, 0.5)';
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Circuit traces inside chip
            ctx.strokeStyle = 'rgba(100, 180, 220, 0.3)';
            ctx.lineWidth = 1;
            
            // Horizontal traces
            for (let i = -2; i <= 2; i++) {
                if (i === 0) continue; // Skip center for AI text
                ctx.beginPath();
                ctx.moveTo(-innerSize * 0.4, i * innerSize * 0.15);
                ctx.lineTo(innerSize * 0.4, i * innerSize * 0.15);
                ctx.stroke();
            }
            
            // Vertical traces
            for (let i = -2; i <= 2; i++) {
                if (i === 0) continue;
                ctx.beginPath();
                ctx.moveTo(i * innerSize * 0.15, -innerSize * 0.4);
                ctx.lineTo(i * innerSize * 0.15, innerSize * 0.4);
                ctx.stroke();
            }
            
            // AI Text - main feature
            const textGlow = 0.7 + Math.sin(time * 2) * 0.3;
            ctx.font = `bold ${chipSize * 0.35}px "SF Pro Display", -apple-system, sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Text glow effect
            ctx.shadowColor = `rgba(100, 200, 255, ${textGlow})`;
            ctx.shadowBlur = 15;
            
            // Text gradient
            const textGradient = ctx.createLinearGradient(0, -chipSize * 0.15, 0, chipSize * 0.15);
            textGradient.addColorStop(0, 'rgba(220, 240, 255, 1)');
            textGradient.addColorStop(0.5, 'rgba(150, 210, 250, 1)');
            textGradient.addColorStop(1, 'rgba(100, 180, 230, 1)');
            
            ctx.fillStyle = textGradient;
            ctx.fillText('AI', 0, 0);
            
            ctx.shadowBlur = 0;
            
            // Corner indicators (like real processors)
            const indicatorSize = chipSize * 0.08;
            const cornerOffset = chipSize * 0.35;
            
            // Animated corner dots
            const corners = [
                [-cornerOffset, -cornerOffset],
                [cornerOffset, -cornerOffset],
                [-cornerOffset, cornerOffset],
                [cornerOffset, cornerOffset]
            ];
            
            corners.forEach((corner, i) => {
                const dotAlpha = 0.4 + Math.sin(time * 2.5 + i * 1.5) * 0.4;
                ctx.beginPath();
                ctx.arc(corner[0], corner[1], indicatorSize, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 200, 255, ${dotAlpha})`;
                ctx.shadowColor = 'rgba(100, 200, 255, 0.8)';
                ctx.shadowBlur = 6;
                ctx.fill();
            });
            
            // Data flow indicators on edges
            const flowCount = 8;
            for (let i = 0; i < flowCount; i++) {
                const progress = ((time * 0.3 + i / flowCount) % 1);
                const alpha = Math.sin(progress * Math.PI) * 0.6;
                
                if (alpha > 0.1) {
                    const side = i % 4;
                    let x, y;
                    
                    if (side === 0) { // Top
                        x = -innerSize * 0.3 + progress * innerSize * 0.6;
                        y = -innerSize / 2 - 2;
                    } else if (side === 1) { // Right
                        x = innerSize / 2 + 2;
                        y = -innerSize * 0.3 + progress * innerSize * 0.6;
                    } else if (side === 2) { // Bottom
                        x = innerSize * 0.3 - progress * innerSize * 0.6;
                        y = innerSize / 2 + 2;
                    } else { // Left
                        x = -innerSize / 2 - 2;
                        y = innerSize * 0.3 - progress * innerSize * 0.6;
                    }
                    
                    ctx.beginPath();
                    ctx.arc(x, y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(150, 220, 255, ${alpha})`;
                    ctx.shadowBlur = 4;
                    ctx.fill();
                }
            }
            
            ctx.shadowBlur = 0;
            ctx.restore();
        };
        
        let time = 0;
        let animationId;
        
        const animate = () => {
            const rect = canvas.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;
            const centerX = w / 2;
            const centerY = h / 2;
            
            ctx.clearRect(0, 0, w, h);
            
            time += 0.016;
            
            // Background gradient - dark with subtle metallic sheen
            const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(w, h) * 0.6);
            bgGradient.addColorStop(0, 'rgba(25, 35, 45, 0.95)');
            bgGradient.addColorStop(0.5, 'rgba(12, 18, 22, 0.98)');
            bgGradient.addColorStop(1, 'rgba(5, 8, 12, 1)');
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, w, h);
            
            // Draw data streams
            dataStreams.forEach(stream => {
                stream.update(w, h);
                stream.draw(ctx);
            });
            
            // Draw rotating rings - SLOWER rotation
            const ringCount = 4;
            for (let i = 0; i < ringCount; i++) {
                const radius = 30 + i * 20; // Slightly larger rings for brain
                const rotation = time * (0.4 - i * 0.08) * (i % 2 === 0 ? 1 : -1); // Much slower rotation
                const alpha = 0.12 + (ringCount - i) * 0.06;
                
                ctx.save();
                ctx.translate(centerX, centerY);
                ctx.rotate(rotation);
                
                // Dashed ring with gradient
                const dashCount = 12 + i * 4;
                const dashAngle = (Math.PI * 2) / dashCount;
                const dashLength = dashAngle * 0.6;
                
                for (let j = 0; j < dashCount; j++) {
                    const startAngle = j * dashAngle;
                    const endAngle = startAngle + dashLength;
                    ctx.beginPath();
                    ctx.arc(0, 0, radius, startAngle, endAngle);
                    
                    // Color based on ring
                    const colors = [
                        `rgba(180, 200, 220, ${alpha})`, // Silver
                        `rgba(100, 180, 220, ${alpha})`, // Cyan
                        `rgba(150, 170, 200, ${alpha})`, // Steel
                        `rgba(200, 220, 240, ${alpha})`, // Platinum
                    ];
                    ctx.strokeStyle = colors[i];
                    ctx.lineWidth = 1.5 - i * 0.2;
                    ctx.stroke();
                }
                
                ctx.restore();
            }
            
            // Energy pulses emanating from center - SLOWER
            const pulseCount = 3;
            for (let i = 0; i < pulseCount; i++) {
                const pulseTime = (time * 0.25 + i * 0.33) % 1; // Slower pulses
                const pulseRadius = pulseTime * Math.min(w, h) * 0.4;
                const pulseAlpha = (1 - pulseTime) * 0.2;
                
                ctx.beginPath();
                ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(150, 200, 230, ${pulseAlpha})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
            
            // Draw particles
            particles.forEach(particle => {
                particle.update(w, h);
                particle.draw(ctx);
            });
            
            // Draw the AI chip in the center
            const chipSize = Math.min(w, h) * 0.18; // Responsive chip size
            drawAIChip(ctx, centerX, centerY, chipSize, time);
            
            // Connection lines from chip outward - data flowing out
            const connectionCount = 8;
            for (let i = 0; i < connectionCount; i++) {
                const angle = (i / connectionCount) * Math.PI * 2 + Math.PI / 8; // Offset to align with pins
                const innerR = chipSize * 0.8;
                const outerR = chipSize * 1.3 + Math.sin(time * 1.2 + i) * 4;
                
                const x1 = centerX + Math.cos(angle) * innerR;
                const y1 = centerY + Math.sin(angle) * innerR;
                const x2 = centerX + Math.cos(angle) * outerR;
                const y2 = centerY + Math.sin(angle) * outerR;
                
                const lineAlpha = 0.2 + Math.sin(time * 2 + i) * 0.15;
                const lineGradient = ctx.createLinearGradient(x1, y1, x2, y2);
                lineGradient.addColorStop(0, `rgba(150, 200, 230, ${lineAlpha + 0.2})`);
                lineGradient.addColorStop(1, 'rgba(100, 180, 220, 0)');
                
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = lineGradient;
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';
                ctx.stroke();
            }
            
            animationId = requestAnimationFrame(animate);
        };
        
        animate();
        
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);
    
    return (
        <div className={`relative w-full h-full min-h-[200px] overflow-hidden ${className}`}>
            <canvas 
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
            
            {/* Overlay decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Corner accents */}
                <motion.div 
                    className="absolute top-3 right-3 w-16 h-16 border-t border-r border-cyan-400/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                />
                <motion.div 
                    className="absolute bottom-3 left-3 w-16 h-16 border-b border-l border-cyan-400/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                />
            </div>
            
            {/* Status indicators */}
            <motion.div
                className="absolute top-3 left-3 flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                <motion.div 
                    className="w-2 h-2 rounded-full bg-cyan-400"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                />
                <span className="text-[10px] font-mono text-gray-400 tracking-wider">ACTIVE</span>
            </motion.div>
            
            {/* Speed indicator */}
            <motion.div
                className="absolute bottom-3 right-3 flex items-center gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <motion.div
                    className="flex gap-0.5"
                >
                    {[0, 1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="w-0.5 bg-gradient-to-t from-cyan-400 to-white/80"
                            animate={{
                                height: [4 + i * 2, 8 + i * 3, 4 + i * 2],
                            }}
                            transition={{
                                duration: 0.4,
                                delay: i * 0.1,
                                repeat: Infinity,
                            }}
                        />
                    ))}
                </motion.div>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider">10x SPEED</span>
            </motion.div>
            
            {/* Processing text */}
            <motion.div
                className="absolute bottom-3 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <div className="flex items-center gap-2">
                    <motion.span 
                        className="text-[10px] font-mono tracking-[0.2em]"
                        style={{
                            background: 'linear-gradient(90deg, #64b4dc, #c8e4ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                        animate={{
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        ACCELERATING
                    </motion.span>
                </div>
            </motion.div>
        </div>
    );
};

export default AIAcceleratorAnimation;

