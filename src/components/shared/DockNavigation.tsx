"use client";

import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
];

export const DockNavigation = ({ mouseX }: { mouseX: MotionValue<number> }) => {
    return (
        <nav
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="flex h-16 items-center justify-center gap-10 px-8"
        >
            {navLinks.map((link) => (
                <DockLink key={link.href} mouseX={mouseX} href={link.href}>
                    {link.label}
                </DockLink>
            ))}
        </nav>
    );
};

function DockLink({ children, mouseX, href }: { children: React.ReactNode, mouseX: MotionValue<number>, href: string }) {
    const ref = useRef<HTMLAnchorElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    // ✨ NEW: Reduced the max scale for a more subtle effect.
    const scale = useTransform(distance, [-100, 0, 100], [1, 1.3, 1]);

    // ✨ NEW: Added a transform for horizontal movement (pulls the link towards the cursor).
    const x = useTransform(distance, [-100, 0, 100], [0, 20, 0]);

    // ✨ NEW: Reduced the vertical movement for a more subtle "pop".
    const y = useTransform(distance, [-100, 0, 100], [0, -14, 0]);

    return (
        <motion.div
            // Apply all three transforms: x, y, and scale
            style={{ x, y, scale }}
            transition={{ type: 'spring', stiffness: 150, damping: 12 }}
            className="flex items-center"
        >
            <Link
                href={href}
                ref={ref}
                className="text-xl font-bold text-muted-foreground/80 hover:text-primary transition-colors"
            >
                {children}
            </Link>
        </motion.div>
    );
}