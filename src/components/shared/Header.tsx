"use client";

import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Dock } from "./Dock";
import { motion } from "framer-motion"; // Import motion

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full">
            {/* 👇 Wrap the content in a motion.div for the entrance animation */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="container mx-auto flex h-24 items-center justify-between py-4"
            >
                <div className="flex justify-start">
                    <Link
                        href="/"
                        className="text-2xl font-bold font-heading transition-colors duration-300"
                        style={{ color: 'var(--logo-color, #7c3aed)' }}
                    >
                        Amplify AI
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Dock />
                </div>

                <div className="flex items-center justify-end">
                   <ThemeToggle />
                </div>
            </motion.div>
        </header>
    );
};