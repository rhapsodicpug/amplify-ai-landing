"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";

// 👇 Expanded to 8 unique testimonials
const testimonials = [
    { quote: "Amplify AI has revolutionized our content workflow. We're producing higher quality content in half the time.", name: "Sarah Johnson", company: "CEO, Creative Solutions" },
    { quote: "The brand voice feature is a game-changer for maintaining consistency across our client accounts. Highly recommended!", name: "Mike Chen", company: "Founder, Digital Growth Agency" },
    { quote: "I was skeptical at first, but the quality of the AI-generated copy is outstanding. It's an essential tool for our team now.", name: "Jessica Williams", company: "Marketing Director, Innovate Corp" },
    { quote: "The speed and efficiency are unmatched. What used to take hours now takes minutes.", name: "David Lee", company: "Lead Strategist, MarketPro" },
    { quote: "Our conversion rates are up 30% since using Amplify AI for our ad campaigns. The ROI is undeniable.", name: "Emily Rodriguez", company: "Head of Growth, ScaleUp Ltd." },
    { quote: "The landing page copywriter is a lifesaver for new product launches. It nails the messaging every single time.", name: "Alex Thompson", company: "Product Manager, TechFront" },
    { quote: "We were up and running in minutes, and the UI is beautiful. The easiest and most powerful tool in our stack.", name: "Ben Carter", company: "Founder, Startup Hub" },
    { quote: "It has streamlined our entire content approval process. Collaboration has never been smoother.", name: "Olivia Green", company: "Content Lead, MediaFlow" },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

export const TestimonialsSection = () => {
    const { theme } = useTheme();

    const gradientColor = theme === 'dark'
        ? "hsl(240 10% 3.9%)"
        : "hsl(0 0% 100%)";

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">
                        Loved by Marketing Teams Worldwide
                    </h2>
                </div>

                <div className="mt-16 flex flex-col gap-8">
                    <Marquee pauseOnHover speed={50} gradient gradientColor={gradientColor}>
                        {firstRow.map((testimonial, index) => (
                            <Card
                                key={`top-${index}`}
                                className="w-96 mx-4 bg-secondary/50 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
                            >
                                <CardContent className="p-6">
                                    <Quote className="w-8 h-8 text-primary mb-4" />
                                    <p className="italic text-lg">"{testimonial.quote}"</p>
                                    <p className="mt-4 font-semibold">{testimonial.name}, <span className="text-muted-foreground">{testimonial.company}</span></p>
                                </CardContent>
                            </Card>
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover speed={50} gradient gradientColor={gradientColor} direction="right">
                        {secondRow.map((testimonial, index) => (
                            <Card
                                key={`bottom-${index}`}
                                className="w-96 mx-4 bg-secondary/50 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
                            >
                                <CardContent className="p-6">
                                    <Quote className="w-8 h-8 text-primary mb-4" />
                                    <p className="italic text-lg">"{testimonial.quote}"</p>
                                    <p className="mt-4 font-semibold">{testimonial.name}, <span className="text-muted-foreground">{testimonial.company}</span></p>
                                </CardContent>
                            </Card>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};