import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-navy dark:bg-slate-950 text-white py-12 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-lg">
                                N
                            </div>
                            <span className="font-heading font-bold text-xl tracking-tight">
                                NTEX
                            </span>
                        </div>
                        <p className="text-slate-400 dark:text-slate-500 max-w-md mb-6">
                            The ELEE Methodology + AI Optimisation = Predictable Meta Ads.
                            Stop experimenting and start engineering your growth.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-lg">Contact</h4>
                        <ul className="space-y-2 text-slate-400 dark:text-slate-500">
                            <li>
                                <a href="mailto:hello@ntexads.co.uk" className="hover:text-primary transition-colors">
                                    hello@ntexads.co.uk
                                </a>
                            </li>
                            <li>WhatsApp: +44 [Number]</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-lg">Resources</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    The ELEE Methodology PDF
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Case Studies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-600">
                    <p>&copy; {new Date().getFullYear()} NTEX Ads. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
