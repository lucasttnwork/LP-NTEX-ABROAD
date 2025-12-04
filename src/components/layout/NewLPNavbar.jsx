import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const NewLPNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'The Reality', href: '#reality' },
        { name: 'Our Advantage', href: '#advantage' },
        { name: 'Framework', href: '#framework' },
        { name: 'Process', href: '#process' },
        { name: 'Results', href: '#results' },
    ];

    return (
        <nav className="absolute top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div
                className={cn(
                    "flex items-center justify-between max-w-6xl w-full",
                    "bg-black/5 backdrop-blur-md border border-white/5 rounded-full py-3 px-6",
                    "shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                )}
            >
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-400 via-slate-200 to-slate-300 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <img
                            src="/favicon.png"
                            alt="NTEX"
                            className="relative z-10 w-full h-full object-cover mix-blend-overlay"
                        />
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-white to-slate-300">
                        NTEX
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-300 to-white transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        className="p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 left-4 right-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 font-medium py-3 border-b border-white/5 hover:text-white hover:pl-2 transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NewLPNavbar;
