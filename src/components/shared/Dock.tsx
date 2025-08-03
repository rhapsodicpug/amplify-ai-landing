"use client";

import {
    motion,
    useMotionValue,
    useTransform,
    useSpring,
    MotionValue
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
];

export const Dock = () => {
    const mouseX = useMotionValue(Infinity);

    return (
        <nav
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="mx-auto flex h-16 items-center gap-6 rounded-2xl bg-secondary/80 px-4 shadow-lg backdrop-blur-md"
        >
            {navLinks.map((link) => (
                <DockItem key={link.href} mouseX={mouseX}>
                    {/* 👇 Font is now large and bold */}
                    <Link
                        href={link.href}
                        className="px-3 py-2 text-lg font-bold text-muted-foreground/80 hover:text-primary transition-colors rounded-md"
                    >
                        {link.label}
                    </Link>
                </DockItem>
            ))}

            <div className="h-1/2 w-px bg-border" />

            <DockItem mouseX={mouseX}>
                {/* 👇 Button is now large and bold */}
                <Button variant="ghost" size="lg" className="text-lg font-bold">Log In</Button>
            </DockItem>
            <DockItem mouseX={mouseX}>
                {/* 👇 Button is now large and bold */}
                <Button size="lg" className="text-lg font-bold">Get Started Free</Button>
            </DockItem>

        </nav>
    );
};

function DockItem({ children, mouseX }: { children: React.ReactNode; mouseX: MotionValue<number>; }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const scale = useTransform(distance, [-150, 0, 150], [1, 1.25, 1]);
    const y = useTransform(distance, [-150, 0, 150], [0, -16, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, y }}
            transition={{ type: 'spring', stiffness: 150, damping: 12 }}
            className="flex items-center"
        >
            {children}
        </motion.div>
    );
}