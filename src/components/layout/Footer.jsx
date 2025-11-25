import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/40 backdrop-blur-lg">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading mb-2">NTEX</h3>
                        <p className="text-white/40 text-sm">High-Performance Meta Ads Management</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:hello@ntexads.co.uk"
                            className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
                        >
                            📧 hello@ntexads.co.uk
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-white/20 text-xs">
                    © {new Date().getFullYear()} NTEX. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
