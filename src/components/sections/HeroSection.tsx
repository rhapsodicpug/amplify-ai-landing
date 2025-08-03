"use client";

import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { LiquidGlassText } from "../shared/LiquidGlassText";

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 20;
      const rotateY = (rect.width / 2 - x) / 20;
      
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
      container.style.setProperty("--rotate-x", `${rotateX}deg`);
      container.style.setProperty("--rotate-y", `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
        container.style.setProperty("--rotate-x", '0deg');
        container.style.setProperty("--rotate-y", '0deg');
    }
    
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section ref={containerRef} className="aurora-background py-24 md:py-32">
      <div 
        className="container mx-auto text-center relative z-10 transition-transform duration-300 ease-out"
        style={{ transform: 'perspective(1000px) rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0))' }}
      >
        <div className="bg-primary/10 text-primary font-medium border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-4">
          Unleash Your Creative Power
        </div>
        
        <LiquidGlassText />

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Amplify AI is your new co-pilot for creating high-converting ad copy,
          engaging social media posts, and effective email campaigns in seconds.
        </p>

        {/* 👇 The div containing the buttons has been removed from here. */}

      </div>
    </section>
  );
};