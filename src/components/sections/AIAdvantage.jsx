import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Bolt,
    BarChart3,
    Globe2,
    Repeat,
    Star,
    ShieldCheck,
    BadgeCheck,
    Languages,
    Boxes,
    Inbox,
    MessageSquare,
    Calendar,
    Database,
    Workflow,
    UserPlus,
    Clock,
    BellRing,
    BarChart,
    Sparkles,
    Zap,
    Target,
    TrendingUp,
    Cpu
} from 'lucide-react';

const AIAdvantage = () => {
    return (
        <section className="md:px-10 md:pt-28 max-w-6xl mr-auto ml-auto pt-20 pr-6 pl-6 pb-20">
            {/* Badge */}
            <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur">
                    <Bolt className="h-4 w-4 text-sky-300" />
                    <span className="text-sm text-sky-200/90">The NTEX Advantage</span>
                </div>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-center text-4xl md:text-6xl font-semibold tracking-tight text-white">
                High-Performance <span className="font-serif italic">Management.</span>
                <span className="block text-white/50">Accelerated by <span className="font-serif italic text-white/50">AI.</span></span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-white/70 font-normal">
                We don't just run ads; we build a data-driven ecosystem for your business.
            </p>

            {/* Grid */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

                {/* Card 1: Ruthless Data Analysis */}
                <CardRealtime />

                {/* Card 2: Continuous Optimization */}
                <CardOptimization />

                {/* Card 3: AI-Driven Creative Strategy */}
                <CardCreative />

                {/* Card 4: Predictable Growth */}
                <CardGrowth />

            </div>
        </section>
    );
};

// Card 1: Ruthless Data Analysis (was Realtime KPI Monitor)
const CardRealtime = () => {
    const [width1, setWidth1] = useState(0);
    const [width2, setWidth2] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Animate progress bars
                    setTimeout(() => setWidth1(76), 100);
                    setTimeout(() => setWidth2(44), 300);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

            {/* Inset UI preview */}
            <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                    <BarChart3 className="h-4 w-4 text-sky-300" />
                    <span className="font-medium">Live Performance Tracker</span>
                </div>

                <div className="space-y-3">
                    {/* Row 1 */}
                    <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-5 rounded-full bg-sky-500/20 flex items-center justify-center ring-1 ring-white/20 text-[10px] font-bold text-sky-300">A</div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-white/90">Campaign ROAS</p>
                                    <p className="text-xs text-white/60">4.2x</p>
                                </div>
                                <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-1000 ease-out"
                                        style={{ width: `${width1}%` }}
                                    />
                                </div>
                            </div>
                            <span className="text-xs text-white/70">{width1 > 0 ? 'Top 5%' : '0%'}</span>
                        </div>
                        <p className="mt-2 text-[11px] text-white/50">E-commerce Scaling</p>
                    </div>

                    {/* Row 2 */}
                    <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center ring-1 ring-white/20 text-[10px] font-bold text-emerald-300">B</div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-white/90">Conversion Rate</p>
                                    <p className="text-xs text-white/60">3.8%</p>
                                </div>
                                <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-1000 ease-out"
                                        style={{ width: `${width2}%` }}
                                    />
                                </div>
                            </div>
                            <span className="text-xs text-white/70">{width2 > 0 ? '+12%' : '0%'}</span>
                        </div>
                        <p className="mt-2 text-[11px] text-white/50">Lead Gen Optimization</p>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <button className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-3 py-1.5 text-xs text-sky-200 ring-1 ring-sky-400/30 hover:bg-sky-500/20 transition">
                        <Target className="h-4 w-4" />
                        Data Insights
                    </button>
                    <div className="flex items-center gap-2 text-[11px] text-white/50">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                        Live
                    </div>
                </div>
            </div>

            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight text-white">Ruthless Data Analysis</h3>
            <p className="mt-1.5 text-sm text-white/70">
                Math over magic. We track over 20 data points to understand exactly why an ad works, optimizing based on statistical significance.
            </p>
        </div>
    );
};

// Card 2: Continuous Optimization (was Worldwide Clients)
const CardOptimization = () => {
    const listRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        // Clone items for infinite scroll
        const items = Array.from(list.children);
        items.forEach(item => list.appendChild(item.cloneNode(true)));

        let y = 0;
        const speed = 0.5;
        let animationId;

        const step = () => {
            y += speed;
            // Height of one set of items (3 items * (40px height + padding/margin approx))
            // Better to measure dynamically but for now let's rely on scrollHeight/2
            if (y >= list.scrollHeight / 2) {
                y = 0;
            }
            list.style.transform = `translateY(-${y}px)`;
            animationId = requestAnimationFrame(step);
        };

        animationId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

            {/* Inset UI preview */}
            <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Globe2 className="h-4 w-4 text-indigo-300" />
                        <span className="font-medium">Live Optimization Log</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] text-white/60">24/7</span>
                        <Repeat className="h-4 w-4 text-white/40" />
                    </div>
                </div>

                {/* Sliding list */}
                <div className="overflow-hidden h-36 rounded-xl ring-white/10 ring-1 mt-3 relative">
                    <ul ref={listRef} className="absolute w-full">
                        <li className="flex px-3 py-2 items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center ring-1 ring-white/20">
                                    <Zap className="h-3 w-3 text-purple-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/90">Bid Adjusted</p>
                                    <p className="text-[11px] text-white/50">Campaign #12 • +15%</p>
                                </div>
                            </div>
                            <Star className="h-4 w-4 text-amber-300" />
                        </li>
                        <li className="flex items-center justify-between px-3 py-2 border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center ring-1 ring-white/20">
                                    <ShieldCheck className="h-3 w-3 text-emerald-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/90">Creative Paused</p>
                                    <p className="text-[11px] text-white/50">Ad Set B • Fatigue Detected</p>
                                </div>
                            </div>
                            <ShieldCheck className="h-4 w-4 text-emerald-300" />
                        </li>
                        <li className="flex items-center justify-between px-3 py-2 border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-sky-500/20 flex items-center justify-center ring-1 ring-white/20">
                                    <TrendingUp className="h-3 w-3 text-sky-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/90">Budget Scaled</p>
                                    <p className="text-[11px] text-white/50">Winner Found • +20% Spend</p>
                                </div>
                            </div>
                            <BadgeCheck className="h-4 w-4 text-sky-300" />
                        </li>
                    </ul>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[11px] text-white/60">
                    <Languages className="h-3.5 w-3.5" />
                    Multi-channel monitoring
                </div>
            </div>

            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight text-white">Continuous Optimization</h3>
            <p className="mt-1.5 text-sm text-white/70">
                The work never stops. Our systems monitor performance 24/7, identifying fatigue before it happens and spotting scaling opportunities.
            </p>
        </div>
    );
};

// Card 3: AI-Driven Creative Strategy (was Collaborate Seamlessly)
const CardCreative = () => {
    const cardRef = useRef(null);
    const shimmerRef = useRef(null);

    useEffect(() => {
        let x = -96;
        let animationId;

        const move = () => {
            if (!shimmerRef.current || !shimmerRef.current.parentElement) return;
            x += 1.2;
            const parentWidth = shimmerRef.current.parentElement.clientWidth;
            if (x > parentWidth + 96) x = -96;
            shimmerRef.current.style.transform = `translateX(${x}px)`;
            animationId = requestAnimationFrame(move);
        };

        animationId = requestAnimationFrame(move);
        return () => cancelAnimationFrame(animationId);
    }, []);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const r = cardRef.current.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${dy * -2}deg) rotateY(${dx * 2}deg)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) cardRef.current.style.transform = '';
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6 transition-transform duration-200 ease-out"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Boxes className="h-4 w-4 text-emerald-300" />
                    <span className="font-medium">AI Creative Engine</span>
                </div>

                <div className="mt-3 grid grid-cols-4 gap-3">
                    {/* Tool tiles */}
                    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <Sparkles className="h-5 w-5 text-white/80" />
                        <span className="text-xs text-white/70">Gen AI</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <MessageSquare className="h-5 w-5 text-white/80" />
                        <span className="text-xs text-white/70">Copy</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <Inbox className="h-5 w-5 text-white/80" />
                        <span className="text-xs text-white/70">Assets</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                        <Database className="h-5 w-5 text-white/80" />
                        <span className="text-xs text-white/70">Data</span>
                    </div>
                </div>

                <div className="mt-3 overflow-hidden rounded-xl bg-white/[0.04] ring-1 ring-white/10 relative">
                    <div className="relative grid grid-cols-6 gap-2 p-3">
                        <div className="h-2 rounded-full bg-white/10 col-span-2" />
                        <div className="h-2 rounded-full bg-white/10 col-span-3" />
                        <div className="h-2 rounded-full bg-white/10 col-span-1" />
                        <div className="h-2 rounded-full bg-white/10 col-span-4" />
                        <div className="h-2 rounded-full bg-white/10 col-span-2" />
                        <div ref={shimmerRef} className="absolute inset-y-0 -left-1 w-24 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                    </div>
                    <div className="flex items-center gap-2 border-t border-white/10 px-3 py-2">
                        <div className="flex -space-x-2">
                            <div className="h-5 w-5 rounded-full ring-1 ring-white/20 bg-purple-500/50" />
                            <div className="h-5 w-5 rounded-full ring-1 ring-white/20 bg-blue-500/50" />
                            <div className="h-5 w-5 rounded-full ring-1 ring-white/20 bg-emerald-500/50" />
                        </div>
                        <span className="ml-1 text-[11px] text-white/60">5x Faster Production</span>
                    </div>
                </div>
            </div>

            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight text-white">AI-Driven Creative Strategy</h3>
            <p className="mt-1.5 text-sm text-white/70">
                Speed wins. We analyze top-performing market patterns to generate and deploy high-converting creative variations 5x faster.
            </p>
        </div>
    );
};

// Card 4: Predictable Growth (was Automate Workflows)
const CardGrowth = () => {
    const [members, setMembers] = useState([
        { name: 'Campaign Alpha', role: 'Scaling', imgColor: 'bg-emerald-500/20', icon: Clock, iconColor: 'text-emerald-300', status: 'Active' },
        { name: 'Campaign Beta', role: 'Testing', imgColor: 'bg-blue-500/20', icon: BellRing, iconColor: 'text-blue-300', status: 'Learning' },
        { name: 'Retargeting', role: 'High ROAS', imgColor: 'bg-purple-500/20', icon: BarChart, iconColor: 'text-purple-300', status: 'Optimized' },
    ]);

    const addMember = () => {
        const newMember = {
            name: 'New Winner',
            role: 'Just Launched',
            imgColor: 'bg-sky-500/20',
            icon: Sparkles,
            iconColor: 'text-sky-300',
            status: 'Scaling'
        };
        setMembers(prev => [newMember, ...prev.slice(0, 2)]);
    };

    return (
        <div className="group relative overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

            <div className="rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Workflow className="h-4 w-4 text-fuchsia-300" />
                        <span className="font-medium">Growth Engine</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <button
                            onClick={addMember}
                            className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[11px] text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition cursor-pointer"
                        >
                            <UserPlus className="h-3.5 w-3.5" />
                            Scale
                        </button>
                    </div>
                </div>

                {/* Tabs mock */}
                <div className="mt-3 flex items-center gap-2 text-xs">
                    <button className="rounded-full bg-white/10 px-2 py-1 text-white/90 ring-1 ring-white/10">Campaigns</button>
                    <button className="rounded-full bg-transparent px-2 py-1 text-white/60 ring-1 ring-white/10">Audiences</button>
                    <button className="rounded-full bg-transparent px-2 py-1 text-white/60 ring-1 ring-white/10">Creatives</button>
                </div>

                <div className="mt-3 space-y-2 relative min-h-[160px]">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.name + index}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-between rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`h-7 w-7 rounded-full ${member.imgColor} ring-1 ring-white/20 flex items-center justify-center`}>
                                    <Zap className="h-3.5 w-3.5 text-white/80" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/90">{member.name}</p>
                                    <p className="text-[11px] text-white/50">{member.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-white/60">
                                <member.icon className={`h-3.5 w-3.5 ${member.iconColor}`} />
                                {member.status}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <h3 className="mt-5 text-xl md:text-2xl font-semibold tracking-tight text-white">Predictable Growth</h3>
            <p className="mt-1.5 text-sm text-white/70">
                Turn ad spend into profit with mechanical consistency. We scale budgets confidently on campaigns that are statistically proven to convert.
            </p>
        </div>
    );
};

export default AIAdvantage;
