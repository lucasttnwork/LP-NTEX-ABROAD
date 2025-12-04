import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Gem, TrendingUp, Repeat } from 'lucide-react';

import heroBg from '../../../assets/hero-visual.png';

const Card = ({ step, index, range, targetScale, progress }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${index * 25}px)`,
                }}
                className="relative -top-[25%] w-full max-w-5xl h-[60vh] rounded-3xl overflow-hidden shadow-2xl origin-top"
            >
                 {/* Background Image */}
                 <div className="absolute inset-0 overflow-hidden">
                    <motion.div className="w-full h-full absolute inset-0" style={{ scale: imageScale }}>
                        <img 
                            src={step.image} 
                            alt={step.title} 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    {/* Minimal Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 md:p-16 text-center">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                            {step.icon}
                        </div>
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
                        {step.title}
                    </h3>
                    
                    <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 italic font-serif">
                        {step.subtitle}
                    </p>
                    
                    <p className="text-gray-200 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto">
                        {step.description}
                    </p>

                    <div className="absolute top-6 right-8">
                        <span className="text-8xl font-heading font-bold text-white/10 select-none">
                            {step.letter}
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const NewFramework = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const steps = [
        {
            letter: "E",
            title: "EXPLORATION",
            subtitle: "Find what works — fast.",
            description: "While traditional agencies take weeks to create 3-4 ads, our AI systems generate and test dozens of variations in days. We analyse market patterns, identify promising angles, and discover what resonates with your audience before the competition.",
            icon: <Search size={24} />,
            image: heroBg,
        },
        {
            letter: "L",
            title: "LAPIDATION",
            subtitle: "Turn good into excellent.",
            description: "Ads that show potential go through surgical refinement. A/B testing on headlines, images, copy, CTAs — every element is optimised until cost-per-result hits its sweet spot. Mathematics, not guesswork.",
            icon: <Gem size={24} />,
            image: heroBg,
        },
        {
            letter: "E",
            title: "ESCALATION",
            subtitle: "Scale with confidence, not hope.",
            description: "We only increase investment on statistically proven campaigns. No \"let's see what happens.\" When we scale, we know — with data — that returns will follow.",
            icon: <TrendingUp size={24} />,
            image: heroBg,
        },
        {
            letter: "E",
            title: "EXTRACTION",
            subtitle: "Maximise the value of every customer.",
            description: "Acquisition is just the beginning. We activate remarketing and retention sequences to increase the lifetime value of each customer. You don't just win customers — you profit more from each one.",
            icon: <Repeat size={24} />,
            image: heroBg,
        }
    ];

    return (
        <section ref={containerRef} id="framework" className="bg-black relative border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10 pt-32">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-500 font-medium tracking-widest uppercase text-sm mb-4 block"
                    >
                        The Unique Mechanism
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-8 text-white"
                    >
                        Meet the <span className="text-gray-400 italic font-serif">ELEE Method</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Our proprietary framework to transform Meta Ads from "necessary expense" into a "predictable growth engine." It's not a linear process that ends. It's a continuous cycle that self-optimises.
                    </motion.p>
                </div>
                                </div>

            <div className="container mx-auto px-6 relative z-10 pb-32">
                {steps.map((step, index) => {
                    const targetScale = 1 - ( (steps.length - index) * 0.05);
                    return (
                        <Card 
                            key={index} 
                            index={index} 
                            step={step} 
                            range={[index * 0.25, 1]} 
                            targetScale={targetScale}
                            progress={scrollYProgress} 
                        />
                    );
                })}
                </div>

            <div className="container mx-auto px-6 relative z-10 pb-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-white/5 border-l-4 border-white max-w-4xl mx-auto"
                >
                    <p className="text-xl text-gray-300 italic">
                        <span className="font-bold text-white not-italic block mb-2">The crucial part: these phases run simultaneously.</span>
                        While we scale your winners, we're already testing the next generation of creatives. This means you never suffer "ad fatigue" — and your results never plateau because the system never stops evolving.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default NewFramework;
