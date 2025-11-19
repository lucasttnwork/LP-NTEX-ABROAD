import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

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
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm dark:shadow-slate-800/50 py-4'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                        N
                    </div>
                    <span className={cn("font-heading font-bold text-2xl tracking-tight", "text-navy dark:text-white")}>
                        NTEX
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary",
                                "text-slate-600 dark:text-slate-300"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Dark Mode Toggle Switch */}
                    <button
                        onClick={toggleTheme}
                        className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                        aria-label="Toggle dark mode"
                    >
                        <motion.div
                            className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center"
                            animate={{
                                x: isDarkMode ? 28 : 0,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                            }}
                        >
                            {isDarkMode ? (
                                <Moon className="h-3.5 w-3.5 text-slate-700" />
                            ) : (
                                <Sun className="h-3.5 w-3.5 text-amber-500" />
                            )}
                        </motion.div>
                    </button>

                    <Button
                        variant={isScrolled ? "default" : "cta"}
                        size="sm"
                        onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Book Strategy Call
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    {/* Dark Mode Toggle Switch for Mobile */}
                    <button
                        onClick={toggleTheme}
                        className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                        aria-label="Toggle dark mode"
                    >
                        <motion.div
                            className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center"
                            animate={{
                                x: isDarkMode ? 28 : 0,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30
                            }}
                        >
                            {isDarkMode ? (
                                <Moon className="h-3.5 w-3.5 text-slate-700" />
                            ) : (
                                <Sun className="h-3.5 w-3.5 text-amber-500" />
                            )}
                        </motion.div>
                    </button>

                    <button
                        className="p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="text-navy dark:text-white" />
                        ) : (
                            <Menu className="text-navy dark:text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg border-t border-slate-100 dark:border-slate-800 p-4 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 dark:text-slate-300 font-medium py-2 hover:text-primary dark:hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            className="w-full"
                            size="lg"
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
