import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Badge } from '../ui/badge';

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
        <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300" id="faq">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">Common Questions</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
                        Questions About <span className="text-primary">ELEE</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4">
                                <AccordionTrigger className="text-left font-bold text-navy dark:text-white hover:no-underline hover:text-primary">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 dark:text-slate-300 leading-relaxed">
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
