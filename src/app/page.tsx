"use client";

import { ConnectedScroll } from "@/components/sections/ConnectedScroll";
import { FaqSection } from "@/components/sections/FaqSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  // 1. Track the scroll progress of the entire page
  const { scrollYProgress } = useScroll();

  // 2. Define the colors for each section for both light and dark themes
  const lightColors = ["#7c3aed", "#3b82f6", "#16a34a", "#ea580c"];
  const darkColors = ["#a78bfa", "#60a5fa", "#4ade80", "#fb923c"];
  const colors = theme === 'dark' ? darkColors : lightColors;

  // 3. Map the scroll progress (0 to 1) to our array of colors
  const logoColor = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], colors);

  // 4. When the color changes, update a CSS variable on the root element
  useMotionValueEvent(logoColor, "change", (latest) => {
    document.documentElement.style.setProperty('--logo-color', latest);
  });

  return (
    <>
      <ConnectedScroll />
      <AnimatedSection>
        <PricingSection />
      </AnimatedSection>
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection>
        <FaqSection />
      </AnimatedSection>
    </>
  );
}