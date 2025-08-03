"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const pricingData = {
    monthly: [
        { name: 'Starter', price: '$29', who: 'For individuals and small teams', features: ['10,000 AI Words/mo', 'Basic Content Tools', '1 Brand Voice', 'Community Support'] },
        { name: 'Pro', price: '$79', who: 'For growing teams and agencies', features: ['50,000 AI Words/mo', 'Advanced Content Tools', '5 Brand Voices', 'Priority Support'], popular: true },
        { name: 'Enterprise', price: 'Custom', who: 'For large organizations', features: ['Unlimited AI Words', 'Custom Integrations', 'Dedicated Account Manager', 'Enterprise-grade Security'] }
    ],
    yearly: [
        { name: 'Starter', price: '$290', who: 'For individuals and small teams', features: ['10,000 AI Words/mo', 'Basic Content Tools', '1 Brand Voice', 'Community Support'] },
        { name: 'Pro', price: '$790', who: 'For growing teams and agencies', features: ['50,000 AI Words/mo', 'Advanced Content Tools', '5 Brand Voices', 'Priority Support'], popular: true },
        { name: 'Enterprise', price: 'Custom', who: 'For large organizations', features: ['Unlimited AI Words', 'Custom Integrations', 'Dedicated Account Manager', 'Enterprise-grade Security'] }
    ]
};

export const PricingSection = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <section id="pricing" className="py-20 md:py-24">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">Fair Pricing for Teams of All Sizes</h2>
                    <p className="mt-4 text-muted-foreground">Choose the plan that's right for you. No hidden fees.</p>
                </div>

                <div className="flex justify-center items-center gap-4 mt-8">
                    <span className="font-medium">Monthly</span>
                    <Switch
                        checked={billingCycle === 'yearly'}
                        onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
                        aria-label="Toggle billing cycle"
                    />
                    <span className="flex items-center font-medium">
                        Yearly
                        <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary border-primary/20">2 Months Free</Badge>
                    </span>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {pricingData.monthly.map((tier, index) => {
                        // Corrected logic to get the yearly price
                        const yearlyTier = pricingData.yearly[index];
                        const displayPrice = billingCycle === 'monthly' ? tier.price : yearlyTier.price;

                        return (
                            <Card
                                key={tier.name}
                                // Note: Simplified the class string for clarity
                                className={`relative flex flex-col h-full overflow-hidden rounded-lg border transition-all 
                                    ${tier.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'}
                                    hover:shadow-xl hover:-translate-y-1`}
                            >
                                <CardHeader>
                                    <CardTitle className="font-heading">{tier.name}</CardTitle>
                                    <CardDescription>{tier.who}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="h-16">
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
                                    </div>
                                    <ul className="mt-6 space-y-3">
                                        {tier.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-2">
                                                <Check className="text-primary h-5 w-5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" variant={tier.popular ? 'default' : 'secondary'}>
                                        {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};