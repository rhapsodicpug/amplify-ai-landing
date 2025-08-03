"use client";

import { BotMessageSquare, Mail, PenSquare, Megaphone, Repeat, SearchCheck, BarChart, ImageIcon, Languages, Sparkles, Users, FileText } from "lucide-react";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";

// 👇 Expanded to 12 unique features
const features = [
    { icon: <PenSquare size={32} />, title: "AI Ad Copy Engine" },
    { icon: <Megaphone size={32} />, title: "Social Content Creator" },
    { icon: <BotMessageSquare size={32} />, title: "Brand Voice Analysis" },
    { icon: <Mail size={32} />, title: "Email Campaigns" },
    { icon: <Repeat size={32} />, title: "Content Repurposing" },
    { icon: <SearchCheck size={32} />, title: "SEO Optimization" },
    { icon: <BarChart size={32} />, title: "Performance Analytics" },
    { icon: <ImageIcon size={32} />, title: "AI Ad Creatives" },
    { icon: <Languages size={32} />, title: "Campaign Translation" },
    { icon: <Sparkles size={32} />, title: "Viral Trend Prediction" },
    { icon: <Users size={32} />, title: "Audience Segmentation" },
    { icon: <FileText size={32} />, title: "Landing Page Copy" },
];

const firstRow = features.slice(0, features.length / 2);
const secondRow = features.slice(features.length / 2);

export const FeaturesSection = () => {
    const { theme } = useTheme();

    const gradientColor = theme === 'dark'
        ? "hsl(240 3.7% 15.9%)"
        : "hsl(240 4.8% 95.9%)";

    return (
        <section id="features" className="py-20 md:py-32 bg-secondary">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">
                        Everything You Need to Scale Your Content
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Stop the guesswork. Amplify AI gives you the tools to create better content, faster.
                    </p>
                </div>

                <div className="mt-16 flex flex-col gap-8">
                    <Marquee pauseOnHover speed={60} gradient gradientColor={gradientColor}>
                        {firstRow.map((feature, index) => (
                            <div
                                key={`top-${index}`}
                                className="flex items-center gap-4 mx-4 p-4 border rounded-lg bg-background transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
                            >
                                <div className="text-primary">{feature.icon}</div>
                                <span className="text-lg font-semibold">{feature.title}</span>
                            </div>
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover speed={60} gradient gradientColor={gradientColor} direction="right">
                        {secondRow.map((feature, index) => (
                            <div
                                key={`bottom-${index}`}
                                className="flex items-center gap-4 mx-4 p-4 border rounded-lg bg-background transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20"
                            >
                                <div className="text-primary">{feature.icon}</div>
                                <span className="text-lg font-semibold">{feature.title}</span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};