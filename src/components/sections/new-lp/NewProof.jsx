import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '../../../lib/utils';

// Dados dos resultados (simulando uma curadoria de galeria)
const resultsData = [
    {
        id: 1,
        client: "UK Fashion Boutique",
        category: "E-commerce",
        metric: "5.0x ROAS",
        description: "From skepticism to clarity. We transformed a limited budget into a predictable revenue engine using the ELEE framework.",
        stats: [
            { label: "Ad Spend", value: "£3k" },
            { label: "Revenue", value: "£15k+" },
            { label: "Return", value: "500%" }
        ],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop", // Placeholder visual (Fashion store vibe)
        quote: "It wasn't magic — it was clarity."
    },
    {
        id: 2,
        client: "SaaS Platform",
        category: "B2B Tech",
        metric: "320% Lead Vol",
        description: "Testing angles revealed an untapped audience segment. Scaled lead generation while lowering CPA by 40%.",
        stats: [
            { label: "CPA Drop", value: "-40%" },
            { label: "Leads", value: "3.2x" },
            { label: "Timeframe", value: "60 Days" }
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Placeholder visual (Data/Tech vibe)
        quote: "Finally, a system that feeds sales automatically."
    },
    {
        id: 3,
        client: "Luxury Consultant",
        category: "High Ticket",
        metric: "£50k Month",
        description: "High-ticket sales require trust. Our 'Lapidation' phase polished the offer positioning to attract premium clients only.",
        stats: [
            { label: "Deals", value: "12" },
            { label: "Avg. Value", value: "£4.2k" },
            { label: "ROI", value: "8.5x" }
        ],
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop", // Placeholder visual (Luxury/Meeting vibe)
        quote: "Quality over quantity. Exactly what I needed."
    }
];

const NewProof = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="results" className="pt-24 md:pt-32 pb-12 md:pb-16 bg-black relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-500 font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
                        >
                            The Collection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-heading font-bold text-white leading-[0.9]"
                        >
                            Real Results, <br />
                            <span className="font-serif italic text-gray-500 font-light">Not Promises.</span>
                        </motion.h2>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:block mb-4"
                    >
                        <p className="text-gray-400 max-w-xs text-sm border-l border-white/20 pl-4">
                            Select a case study below to explore the impact of the ELEE Method across different industries.
                        </p>
                    </motion.div>
                </div>

                {/* Gallery Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    
                    {/* Left Column: List/Menu */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {resultsData.map((result, index) => (
                            <motion.div
                                key={result.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    "group cursor-pointer p-6 rounded-3xl transition-all duration-500 border relative overflow-hidden",
                                    activeIndex === index 
                                        ? "bg-white/10 border-white/20" 
                                        : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/5"
                                )}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className={cn(
                                        "text-xs tracking-widest uppercase mb-2 block transition-colors",
                                        activeIndex === index ? "text-white" : "text-gray-500 group-hover:text-gray-400"
                                    )}>
                                        0{result.id} — {result.category}
                                    </span>
                                    <ArrowRight className={cn(
                                        "w-5 h-5 transition-transform duration-300",
                                        activeIndex === index ? "text-white rotate-0" : "text-gray-600 -rotate-45 opacity-0 group-hover:opacity-100"
                                    )} />
                                </div>
                                
                                <h3 className={cn(
                                    "text-2xl font-bold mb-2 transition-colors",
                                    activeIndex === index ? "text-white" : "text-gray-400 group-hover:text-white"
                                )}>
                                    {result.client}
                                </h3>
                                
                                <div className="flex items-center gap-3">
                                    <span className={cn(
                                        "text-3xl font-serif italic transition-colors",
                                        activeIndex === index ? "text-white" : "text-gray-600 group-hover:text-gray-500"
                                    )}>
                                        {result.metric}
                                    </span>
                                </div>

                                {/* Mobile Expand (Only visible on active item on mobile if we wanted, but keeping clean for now) */}
                                {activeIndex === index && (
                                    <motion.p 
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="mt-4 text-sm text-gray-300 leading-relaxed lg:hidden"
                                    >
                                        {result.description}
                                    </motion.p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Visual Showcase (Sticky) */}
                    <div className="lg:col-span-7 sticky top-24 min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-square xl:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 group"
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:bg-black/20" />
                                <img 
                                    src={resultsData[activeIndex].image} 
                                    alt={resultsData[activeIndex].client} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between">
                                    <div className="flex justify-end">
                                        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white text-sm font-medium flex items-center gap-2">
                                            <TrendingUp size={16} />
                                            Results Verified
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="hidden lg:block">
                                            <p className="text-lg md:text-xl text-white font-light leading-relaxed drop-shadow-lg max-w-md">
                                                "{resultsData[activeIndex].quote}"
                                            </p>
                                        </div>

                                        {/* Stats Grid Overlay */}
                                        <div className="grid grid-cols-3 gap-4">
                                            {resultsData[activeIndex].stats.map((stat, i) => (
                                                <div key={i} className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
                                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                                                    <p className="text-white font-bold text-lg md:text-2xl">{stat.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NewProof;
