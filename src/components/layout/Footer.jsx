import React from 'react';
import { cn } from '../../lib/utils';

const Footer = () => {
    return (
        <footer className="relative bg-linear-main pt-24 pb-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-5">
                        <a href="#" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-80 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src="/favicon.png"
                                    alt="NTEX"
                                    className="relative z-10 w-full h-full object-cover mix-blend-overlay"
                                />
                            </div>
                            <span className="font-heading font-bold text-3xl tracking-tight text-white">
                                NTEX
                            </span>
                        </a>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                            Engineering predictable growth for aesthetic clinics and boutique gyms through data-driven Meta Ads.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-2 md:col-start-7">
                        <h4 className="font-heading font-bold text-white mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {['Methodology', 'Results', 'Pricing', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-heading font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About', 'Careers', 'Contact', 'Privacy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-heading font-bold text-white mb-6">Socials</h4>
                        <ul className="space-y-4">
                            {['LinkedIn', 'Twitter', 'Instagram'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} NTEX Ads. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-slate-400 text-sm">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
