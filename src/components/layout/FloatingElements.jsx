import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

const FloatingElements = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
                style={{ scaleX }}
            />

            {/* Floating WhatsApp / Contact Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-6 right-6 z-40 flex flex-col gap-4"
            >
                <a
                    href="https://wa.me/447000000000" // Replace with actual number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors hover:scale-110"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="w-8 h-8" />
                </a>
            </motion.div>
        </>
    );
};

export default FloatingElements;
