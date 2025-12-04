import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import OptimizedImage from '../ui/OptimizedImage';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Methodology', href: '#methodology' },
        { name: 'Results', href: '#results' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-6 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4',
                isScrolled ? 'top-4' : 'top-6'
            )}
        >
            <div
                className={cn(
                    "flex items-center justify-between transition-all duration-500 max-w-6xl w-full",
                    "bg-slate-900/30 backdrop-blur-2xl border border-white/10 rounded-full py-3 px-6 shadow-2xl shadow-black/40"
                )}
            >
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-300 via-slate-100 to-slate-400 opacity-90 group-hover:opacity-100 transition-opacity" />
                        <OptimizedImage
                            src="/favicon.png"
                            alt="NTEX"
                            className="relative z-10 w-full h-full object-cover mix-blend-overlay"
                        />
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300">
                        NTEX
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                    <div className="h-4 w-px bg-white/10" />

                    <Button
                        variant="cta"
                        size="sm"
                        className="rounded-full"
                        onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Book Strategy Call
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        className="p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
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
                        className="absolute top-24 left-4 right-4 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-2xl shadow-purple-900/20"
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
                        <Button
                            variant="cta"
                            size="lg"
                            className="w-full mt-2 rounded-full"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Book Strategy Call
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
