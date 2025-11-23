import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CaseStudies = () => {
    const clinicData = [
        { month: 'M1', cpl: 31 },
        { month: 'M2', cpl: 19 },
        { month: 'M3', cpl: 19 },
    ];

    return (
        <section className="py-24 bg-linear-main relative overflow-hidden" id="results">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="text-xs font-medium text-primary tracking-wide uppercase">Proven Results</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Real ELEE Results from <span className="text-gradient-silver">Real UK Businesses</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Case Study 1: Aesthetic Clinic */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full glass-panel rounded-3xl overflow-hidden border-white/5">
                            <div className="bg-white/5 p-8 border-b border-white/5">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">Aesthetic Clinic</h3>
                                        <p className="text-slate-400 text-sm">Manchester, UK</p>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider">
                                        3.8x ROI
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <div className="text-xs text-slate-400 mb-1">Cost Per Lead</div>
                                        <div className="text-xl font-bold text-green-400">£19</div>
                                        <div className="text-xs text-slate-500">Down from £31</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 mb-1">Monthly Leads</div>
                                        <div className="text-xl font-bold text-white">42</div>
                                        <div className="text-xs text-slate-500">Up from 15</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 mb-1">New Clients</div>
                                        <div className="text-xl font-bold text-white">£73</div>
                                        <div className="text-xs text-slate-500">Acquisition Cost</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="mb-8">
                                    <h4 className="font-bold text-white mb-4">CPL Reduction Timeline</h4>
                                    <div className="h-64 w-full relative">
                                        <div className="absolute inset-0">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart data={clinicData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                                                    <XAxis
                                                        dataKey="month"
                                                        axisLine={false}
                                                        tickLine={false}
                                                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                                                        dy={10}
                                                    />
                                                    <YAxis
                                                        axisLine={false}
                                                        tickLine={false}
                                                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                                                        unit="£"
                                                        width={30}
                                                    />
                                                    <Tooltip
                                                        contentStyle={{
                                                            backgroundColor: '#0f172a',
                                                            borderRadius: '12px',
                                                            border: '1px solid rgba(255,255,255,0.1)',
                                                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)',
                                                            color: '#fff'
                                                        }}
                                                        cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1 }}
                                                        formatter={(value) => [`£${value}`, 'Cost Per Lead']}
                                                    />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="cpl"
                                                        stroke="#0066CC"
                                                        strokeWidth={3}
                                                        activeDot={{ r: 6, fill: '#0066CC', stroke: '#fff', strokeWidth: 2 }}
                                                        dot={{ r: 4, fill: '#0066CC', strokeWidth: 2, stroke: '#fff' }}
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                        <h5 className="font-bold text-sm text-white mb-2">The Strategy</h5>
                                        <p className="text-sm text-slate-400">
                                            Tested 18 variations in Exploration. Found "£50 off first treatment" + women 35-50 was the winning combo. Scaled budget to £4k/mo while maintaining CPL.
                                        </p>
                                    </div>
                                    <blockquote className="text-sm text-slate-500 italic border-l-2 border-primary pl-4">
                                        "Finally, I know exactly what I'm paying for each customer. It's like having a customer vending machine."
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Case Study 2: Boutique Gym */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="h-full glass-panel rounded-3xl overflow-hidden border-white/5">
                            <div className="bg-white/5 p-8 border-b border-white/5">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">Boutique Gym</h3>
                                        <p className="text-slate-400 text-sm">Bristol, UK</p>
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
                                        LTV Focus
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <div className="text-xs text-slate-400 mb-1">Cost Per Trial</div>
                                        <div className="text-xl font-bold text-green-400">£11</div>
                                        <div className="text-xs text-slate-500">Down from £18</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 mb-1">Trials/Month</div>
                                        <div className="text-xl font-bold text-white">67</div>
                                        <div className="text-xs text-slate-500">Scaled Volume</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 mb-1">LTV Increase</div>
                                        <div className="text-xl font-bold text-primary">+£460</div>
                                        <div className="text-xs text-slate-500">Per Member</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4 text-primary" />
                                            Scaling Success
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            Scaled to 67 trials/month with 34% conversion to full membership.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                            <Users className="w-4 h-4 text-primary" />
                                            Extraction Phase Impact
                                        </h4>
                                        <p className="text-sm text-slate-400">
                                            Increased Lifetime Value from £780 to £1,240 through automated upsell campaigns to existing members.
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-white/5">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-white">Total Revenue Impact</span>
                                            <span className="text-xl font-bold text-green-400">+£12.4k/mo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
