"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { PricingCard } from "./PricingCard";

const pricingData = {
    monthly: [
        { name: 'Starter', price: '$29', who: 'For individuals and small teams' },
        { name: 'Pro', price: '$79', who: 'For growing teams and agencies', popular: true },
        { name: 'Enterprise', price: 'Custom', who: 'For large organizations' }
    ],
    yearly: [
        { name: 'Starter', price: '$290', who: 'For individuals and small teams' },
        { name: 'Pro', price: '$790', who: 'For growing teams and agencies', popular: true },
        { name: 'Enterprise', price: 'Custom', who: 'For large organizations' }
    ]
};

const featureComparisonData = [
    { feature: 'AI Word Count', starter: '10,000/mo', pro: '50,000/mo', enterprise: 'Unlimited' },
    { feature: 'Brand Voices', starter: '1', pro: '5', enterprise: 'Unlimited' },
    { feature: 'SEO Optimization', starter: true, pro: true, enterprise: true },
    { feature: 'Content Repurposing', starter: true, pro: true, enterprise: true },
    { feature: 'Performance Analytics', starter: false, pro: true, enterprise: true },
    { feature: 'Campaign Translation', starter: false, pro: true, enterprise: true },
    { feature: 'Priority Support', starter: false, pro: true, enterprise: true },
    { feature: 'Team Collaboration', starter: false, pro: 'Up to 5 Users', enterprise: 'Unlimited Users' },
    { feature: 'API Access', starter: false, pro: false, enterprise: true },
    { feature: 'Dedicated Account Manager', starter: false, pro: false, enterprise: true },
];

export const PricingSection = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <section id="pricing" className="py-20 md:py-32">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">Fair Pricing for Teams of All Sizes</h2>
                    <p className="mt-4 text-muted-foreground">Choose the plan that&apos;s right for you. No hidden fees.</p>
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
                        const yearlyTier = pricingData.yearly[index];
                        const displayPrice = billingCycle === 'monthly' ? tier.price : yearlyTier.price;

                        return (
                            <PricingCard
                                key={tier.name}
                                tier={tier}
                                displayPrice={displayPrice}
                                billingCycle={billingCycle}
                            />
                        );
                    })}
                </div>

                <div className="mt-24">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-center">Compare All Features</h3>
                    <div className="mt-8 overflow-x-auto">
                        <div className="grid grid-cols-4 items-center min-w-[800px] gap-x-8 gap-y-4">
                            <div className="font-semibold text-xl">Features</div>
                            <div className="font-semibold text-xl text-center">Starter</div>
                            <div className="font-semibold text-xl text-center p-2 rounded-lg bg-primary/10">Pro</div>
                            <div className="font-semibold text-xl text-center">Enterprise</div>

                            {featureComparisonData.map((item) => (
                                <div key={item.feature} className="contents">
                                    <div className="py-4 border-b">{item.feature}</div>
                                    {[item.starter, item.pro, item.enterprise].map((value, index) => (
                                        <div
                                            key={index}
                                            className={`py-4 border-b text-center ${index === 1 ? 'bg-primary/5' : ''}`}
                                        >
                                            {typeof value === 'boolean' ? (
                                                value ? <Check className="mx-auto text-primary" /> : <X className="mx-auto text-muted-foreground/50" />
                                            ) : (
                                                <span>{value}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};