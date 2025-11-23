import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: "Is ELEE just another agency framework?",
            answer: "No. ELEE is a mathematical system, not marketing fluff. Most frameworks are creative theory. ELEE is operational methodology based on testing thousands of campaigns. It's reproducible, measurable, and independent of 'creative genius'. We've documented every step, every decision tree, every optimisation trigger. It's engineering, not art."
        },
        {
            question: "What if my business is different?",
            answer: "ELEE works because it adapts to data, not assumptions. Whether you're selling Botox or boxing classes, the mathematics are the same: Test to find what converts, Optimise to reduce costs, Scale what's proven, Extract maximum value. The tactics change. The methodology doesn't."
        },
        {
            question: "Why can't I just do this myself?",
            answer: "You could. But consider: 1. Time: ELEE requires daily management across 4 phases. 2. Tools: Our AI stack costs £3,000+/month to replicate. 3. Experience: We've run ELEE on hundreds of campaigns. 4. Objectivity: We make decisions on data, not emotion. Most importantly: You should focus on delivering your service, not becoming a Meta Ads expert."
        },
        {
            question: "What happens after 3 months?",
            answer: "By month 3, you'll have: Your proven 'vending machine buttons', predictable cost per customer, scaled campaigns running profitably, and extraction systems in place. You can then: Continue with us to maintain and expand, take it in-house with our documentation, or scale to other platforms using ELEE. No lock-in. You own everything we build."
        }
    ];

    return (
        <section className="py-24 bg-linear-main relative overflow-hidden" id="faq">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <HelpCircle className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium text-primary tracking-wide uppercase">Common Questions</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Questions About <span className="text-gradient-silver">ELEE</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="glass-panel rounded-2xl px-6 border-white/5 data-[state=open]:bg-white/5 transition-all duration-300"
                            >
                                <AccordionTrigger className="text-left font-bold text-white hover:no-underline hover:text-primary py-6 text-lg">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-400 leading-relaxed pb-6 text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
