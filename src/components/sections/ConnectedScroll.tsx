"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import { BotMessageSquare, Mail, PenSquare, Megaphone, Repeat, SearchCheck, BarChart, ImageIcon, Languages, Sparkles, Users, FileText } from "lucide-react";

const features = [
    { icon: <PenSquare size={32} />, title: "AI Ad Copy Engine" }, { icon: <Megaphone size={32} />, title: "Social Content Creator" }, { icon: <BotMessageSquare size={32} />, title: "Brand Voice Analysis" }, { icon: <Mail size={32} />, title: "Email Campaigns" }, { icon: <Repeat size={32} />, title: "Content Repurposing" }, { icon: <SearchCheck size={32} />, title: "SEO Optimization" }, { icon: <BarChart size={32} />, title: "Performance Analytics" }, { icon: <ImageIcon size={32} />, title: "AI Ad Creatives" }, { icon: <Languages size={32} />, title: "Campaign Translation" }, { icon: <Sparkles size={32} />, title: "Viral Trend Prediction" }, { icon: <Users size={32} />, title: "Audience Segmentation" }, { icon: <FileText size={32} />, title: "Landing Page Copy" },
];
const firstRow = features.slice(0, features.length / 2);
const secondRow = features.slice(features.length / 2);

export const ConnectedScroll = () => {
    const { theme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroRotateY = useTransform(scrollYProgress, [0, 0.5], [0, 90]);
    const heroOpacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);
    
    const featuresRotateY = useTransform(scrollYProgress, [0.5, 1], [-90, 0]);
    const featuresOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

    const gradientColor = theme === 'dark' ? "hsl(240 3.7% 15.9%)" : "hsl(240 4.8% 95.9%)";

    return (
        <div ref={containerRef} className="relative h-[200vh]">
            <div className="sticky top-0 h-screen" style={{ perspective: '1000px' }}>
                
                <motion.div
                    // 👇 Add initial and animate props for the hero content's entrance
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    style={{ rotateY: heroRotateY, opacity: heroOpacity }}
                    className="absolute inset-0 flex flex-col items-center justify-center [backface-visibility:hidden]"
                >
                    <div className="container mx-auto text-center">
                        <div className="bg-primary/10 text-primary font-medium border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-4">
                            Unleash Your Creative Power
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading">
                            From Idea to Impact. Instantly.
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Amplify AI is your new co-pilot for creating high-converting ad copy, engaging social media posts, and effective email campaigns in seconds.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    style={{ rotateY: featuresRotateY, opacity: featuresOpacity }}
                    className="absolute inset-0 flex flex-col items-center justify-center [backface-visibility:hidden]"
                >
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">
                            Everything You Need to Scale Your Content
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Stop the guesswork. Amplify AI gives you the tools to create better content, faster.
                        </p>
                        <div className="mt-8 flex flex-col gap-4">
                            <Marquee pauseOnHover speed={60} gradient gradientColor={gradientColor}>
                                {firstRow.map((f, i) => <FeatureItem key={`top-${i}`} {...f} />)}
                            </Marquee>
                            <Marquee pauseOnHover speed={60} gradient gradientColor={gradientColor} direction="right">
                                {secondRow.map((f, i) => <FeatureItem key={`bottom-${i}`} {...f} />)}
                            </Marquee>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const FeatureItem = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="flex items-center gap-4 mx-4 p-4 border rounded-lg bg-background/80 transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20">
        <div className="text-primary">{icon}</div>
        <span className="text-lg font-semibold">{title}</span>
    </div>
);