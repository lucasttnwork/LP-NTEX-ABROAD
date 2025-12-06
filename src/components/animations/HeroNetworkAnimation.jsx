import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroNetworkAnimation = ({ className = '' }) => {
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

        // Network nodes
        const nodes = [];
        const maxNodes = 35;

        class Node {
            constructor(w, h) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.radius = 1.5 + Math.random() * 2;
                this.connections = [];

                // Color variations - silver, platinum, subtle blue
                const colors = [
                    { r: 180, g: 190, b: 210, a: 0.6 },
                    { r: 200, g: 210, b: 225, a: 0.5 },
                    { r: 140, g: 160, b: 200, a: 0.7 },
                    { r: 100, g: 140, b: 200, a: 0.5 },
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.pulsePhase = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.02 + Math.random() * 0.02;
            }

            update(w, h) {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges with soft padding
                const padding = 50;
                if (this.x < padding || this.x > w - padding) this.vx *= -1;
                if (this.y < padding || this.y > h - padding) this.vy *= -1;

                // Keep within bounds
                this.x = Math.max(0, Math.min(w, this.x));
                this.y = Math.max(0, Math.min(h, this.y));

                this.pulsePhase += this.pulseSpeed;
            }

            draw(ctx) {
                const pulse = 1 + Math.sin(this.pulsePhase) * 0.3;
                const { r, g, b, a } = this.color;

                // Outer glow
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * 3 * pulse, 0, Math.PI * 2);
                const glowGradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.radius * 3 * pulse
                );
                glowGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a * 0.3})`);
                glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = glowGradient;
                ctx.fill();

                // Core
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius * pulse, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
                ctx.fill();
            }
        }

        // Flowing data particles along connections
        const dataParticles = [];
        const maxParticles = 20;

        class DataParticle {
            constructor(startNode, endNode) {
                this.startNode = startNode;
                this.endNode = endNode;
                this.progress = 0;
                this.speed = 0.005 + Math.random() * 0.01;
                this.size = 1 + Math.random() * 1.5;
                this.alpha = 0.4 + Math.random() * 0.4;
            }

            update() {
                this.progress += this.speed;
                return this.progress < 1;
            }

            draw(ctx) {
                const x = this.startNode.x + (this.endNode.x - this.startNode.x) * this.progress;
                const y = this.startNode.y + (this.endNode.y - this.startNode.y) * this.progress;

                // Fade in and out
                const fadeAlpha = Math.sin(this.progress * Math.PI) * this.alpha;

                ctx.beginPath();
                ctx.arc(x, y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(150, 200, 255, ${fadeAlpha})`;
                ctx.shadowColor = 'rgba(150, 200, 255, 0.8)';
                ctx.shadowBlur = 6;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        // Initialize nodes
        const rect = canvas.getBoundingClientRect();
        for (let i = 0; i < maxNodes; i++) {
            nodes.push(new Node(rect.width, rect.height));
        }

        // Central attraction point (subtle gravity towards center-bottom)
        const getCenterGravity = (w, h) => ({
            x: w * 0.5,
            y: h * 0.6
        });

        let time = 0;
        let animationId;

        const animate = () => {
            const rect = canvas.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;

            ctx.clearRect(0, 0, w, h);

            time += 0.016;

            const center = getCenterGravity(w, h);
            const connectionDistance = Math.min(w, h) * 0.2;

            // Update and draw connections
            ctx.lineCap = 'round';

            for (let i = 0; i < nodes.length; i++) {
                const nodeA = nodes[i];

                // Apply subtle gravity towards center
                const dx = center.x - nodeA.x;
                const dy = center.y - nodeA.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                nodeA.vx += (dx / dist) * 0.0003;
                nodeA.vy += (dy / dist) * 0.0003;

                // Limit velocity
                const speed = Math.sqrt(nodeA.vx * nodeA.vx + nodeA.vy * nodeA.vy);
                if (speed > 0.5) {
                    nodeA.vx = (nodeA.vx / speed) * 0.5;
                    nodeA.vy = (nodeA.vy / speed) * 0.5;
                }

                nodeA.update(w, h);

                for (let j = i + 1; j < nodes.length; j++) {
                    const nodeB = nodes[j];
                    const dx = nodeB.x - nodeA.x;
                    const dy = nodeB.y - nodeA.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const alpha = (1 - distance / connectionDistance) * 0.15;

                        // Create gradient for connection
                        const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
                        gradient.addColorStop(0, `rgba(${nodeA.color.r}, ${nodeA.color.g}, ${nodeA.color.b}, ${alpha})`);
                        gradient.addColorStop(0.5, `rgba(160, 180, 220, ${alpha * 0.7})`);
                        gradient.addColorStop(1, `rgba(${nodeB.color.r}, ${nodeB.color.g}, ${nodeB.color.b}, ${alpha})`);

                        ctx.beginPath();
                        ctx.moveTo(nodeA.x, nodeA.y);
                        ctx.lineTo(nodeB.x, nodeB.y);
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.5 + (1 - distance / connectionDistance) * 0.5;
                        ctx.stroke();

                        // Randomly spawn data particles
                        if (Math.random() < 0.002 && dataParticles.length < maxParticles) {
                            dataParticles.push(new DataParticle(nodeA, nodeB));
                        }
                    }
                }
            }

            // Draw nodes
            nodes.forEach(node => node.draw(ctx));

            // Update and draw data particles
            for (let i = dataParticles.length - 1; i >= 0; i--) {
                if (dataParticles[i].update()) {
                    dataParticles[i].draw(ctx);
                } else {
                    dataParticles.splice(i, 1);
                }
            }

            // Draw subtle central glow
            const centralGlow = ctx.createRadialGradient(
                center.x, center.y, 0,
                center.x, center.y, Math.min(w, h) * 0.5
            );
            centralGlow.addColorStop(0, 'rgba(30, 64, 175, 0.08)');
            centralGlow.addColorStop(0.5, 'rgba(30, 64, 175, 0.03)');
            centralGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = centralGlow;
            ctx.fillRect(0, 0, w, h);

            // Pulsing rings from center (very subtle)
            const ringCount = 2;
            for (let i = 0; i < ringCount; i++) {
                const pulseTime = (time * 0.15 + i * 0.5) % 1;
                const pulseRadius = pulseTime * Math.min(w, h) * 0.45;
                const pulseAlpha = (1 - pulseTime) * 0.05;

                ctx.beginPath();
                ctx.arc(center.x, center.y, pulseRadius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(100, 140, 200, ${pulseAlpha})`;
                ctx.lineWidth = 1;
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
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.7 }}
            />

            {/* Ambient gradient overlays */}
            <motion.div
                className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(30,64,175,0.12) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-[-30%] left-[-20%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(100,116,139,0.06) 0%, transparent 60%)',
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
            />

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Noise texture */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default HeroNetworkAnimation;
