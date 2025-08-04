"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface PricingCardProps {
  tier: {
    name: string;
    who: string;
    popular?: boolean;
  };
  displayPrice: string;
  billingCycle: 'monthly' | 'yearly';
}

export const PricingCard = ({ tier, displayPrice, billingCycle }: PricingCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Card
      ref={cardRef}
      className={`mouse-aware-gradient-card flex flex-col h-full ${tier.popular ? 'border-primary shadow-primary/20 shadow-lg' : ''}`}
    >
      <CardHeader className="relative z-10">
        <CardTitle className="font-heading">{tier.name}</CardTitle>
        <CardDescription>{tier.who}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10 flex-grow">
        <AnimatePresence mode="wait">
          <motion.p
            key={billingCycle}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-4xl font-extrabold font-heading"
          >
            {displayPrice}
            <span className="text-sm font-normal text-muted-foreground">
              /{billingCycle === 'monthly' ? 'mo' : 'yr'}
            </span>
          </motion.p>
        </AnimatePresence>
      </CardContent>
      <CardFooter className="relative z-10">
        <Button className="w-full" variant={tier.popular ? 'default' : 'secondary'}>
          {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
        </Button>
      </CardFooter>
    </Card>
  );
};