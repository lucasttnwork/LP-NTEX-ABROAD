import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    { name: 'Meta', url: 'https://cdn.simpleicons.org/meta/white' },
    { name: 'OpenAI', url: 'https://cdn.simpleicons.org/openai/white' },
    { name: 'Google Ads', url: 'https://cdn.simpleicons.org/googleads/white' },
    { name: 'HubSpot', url: 'https://cdn.simpleicons.org/hubspot/white' },
    { name: 'TikTok', url: 'https://cdn.simpleicons.org/tiktok/white' },
    { name: 'Zapier', url: 'https://cdn.simpleicons.org/zapier/white' },
    { name: 'Slack', url: 'https://cdn.simpleicons.org/slack/white' },
    { name: 'N8N', url: 'https://cdn.simpleicons.org/n8n/white' },
    { name: 'Instagram', url: 'https://cdn.simpleicons.org/instagram/white' },
    { name: 'Anthropic', url: 'https://cdn.simpleicons.org/anthropic/white' },
    { name: 'Google Gemini', url: 'https://cdn.simpleicons.org/google/white' },
    { name: 'Grok', url: 'https://cdn.simpleicons.org/x/white' },
];

const LogoSlider = () => {
    return (
        <div className="w-full overflow-hidden py-12">
            <div className="relative w-full max-w-7xl mx-auto px-4">
                <div className="flex items-center gap-4 mb-8 justify-center">
                    <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">Powering Growth With</span>
                </div>

                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                    <motion.div
                        className="flex gap-8 md:gap-16 items-center whitespace-nowrap"
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        }}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center group h-12 w-24 relative">
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="h-8 w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LogoSlider;
