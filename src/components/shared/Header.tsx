"use client";

import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Dock } from "./Dock";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full">
            {/* 👇 Re-implementing the 3-column grid for perfect alignment */}
            <div className="container mx-auto grid h-24 grid-cols-3 items-center">
                {/* Column 1: Logo */}
                <div className="flex justify-start">
                    <Link href="/" className="text-2xl font-bold font-heading text-primary">
                        Amplify AI
                    </Link>
                </div>

                {/* Column 2: The Centered Dock */}
                <div className="flex justify-center">
                    <Dock />
                </div>

                {/* Column 3: The Theme Toggle (extra buttons removed) */}
                <div className="flex items-center justify-end">
                   <ThemeToggle />
                </div>
            </div>
        </header>
    );
};