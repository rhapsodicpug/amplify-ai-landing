"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    {
        category: "General",
        questions: [
            { q: "What is Amplify AI?", a: "Amplify AI is a comprehensive suite of AI-powered tools designed to help marketing agencies create high-converting content faster and more efficiently." },
            { q: "Is there a free trial?", a: "Yes, you can get started for free with our Starter plan which includes a generous monthly credit for AI-generated words, with no credit card required." },
            { q: "What makes Amplify AI different?", a: "We specialize in maintaining a consistent brand voice across all generated content and focus on creating marketing copy that converts, not just generic text." },
        ]
    },
    {
        category: "Billing",
        questions: [
            { q: "What payment methods do you accept?", a: "We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also support invoicing." },
            { q: "Can I upgrade or downgrade my plan anytime?", a: "Absolutely. You can easily change your plan from your account dashboard whenever you need to. Changes will be pro-rated." },
            { q: "Is there a discount for yearly billing?", a: "Yes! We offer a discount equivalent to two months free when you choose to pay for any plan annually." },
        ]
    },
    {
        category: "Technical",
        questions: [
            { q: "How is my data used and is it secure?", a: "Security is our top priority. All your data is encrypted both in transit and at rest. We do not use your content to train our AI models without explicit consent." },
            { q: "Do you offer any integrations?", a: "Yes, our Pro and Enterprise plans include integrations with popular social media schedulers, CMS platforms, and other marketing tools." },
        ]
    }
];

export const FaqSection = () => {
    const [activeCategory, setActiveCategory] = useState(faqData[0].category);
    const activeQuestions = faqData.find(cat => cat.category === activeCategory)?.questions || [];

    return (
        <section id="faq" className="py-20 md:py-32">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">Frequently Asked Questions</h2>
                    <p className="mt-4 text-muted-foreground">
                        Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                </div>

                <Card className="mt-12 max-w-4xl mx-auto">
                    <CardContent className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Left Column: Category Buttons */}
                        <div className="flex flex-col gap-2 items-stretch">
                            {faqData.map((cat) => (
                                <Button
                                    key={cat.category}
                                    variant={activeCategory === cat.category ? "default" : "ghost"}
                                    onClick={() => setActiveCategory(cat.category)}
                                    // 👇 Added size="lg" for more padding and increased font size
                                    size="lg"
                                    className="justify-start text-lg font-semibold"
                                >
                                    {cat.category}
                                </Button>
                            ))}
                        </div>

                        {/* Right Column: Questions Accordion with Animation */}
                        <div className="lg:col-span-3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCategory}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Accordion type="single" collapsible className="w-full">
                                        {activeQuestions.map((faq, i) => (
                                            <AccordionItem value={`item-${i}`} key={i}>
                                                <AccordionTrigger className="text-lg text-left">{faq.q}</AccordionTrigger>
                                                <AccordionContent className="text-base text-muted-foreground">{faq.a}</AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </CardContent>
                    
                    <CardFooter className="border-t p-6 flex items-center justify-between">
                         <p className="text-muted-foreground">Can't find the answer you're looking for?</p>
                         <Button>Contact Support</Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    );
};