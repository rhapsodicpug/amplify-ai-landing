import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

const pricingTiers = [
    { name: 'Starter', price: '$29', who: 'For individuals and small teams', features: ['10,000 AI Words/mo', 'Basic Content Tools', '1 Brand Voice', 'Community Support'] },
    { name: 'Pro', price: '$79', who: 'For growing teams and agencies', features: ['50,000 AI Words/mo', 'Advanced Content Tools', '5 Brand Voices', 'Priority Support'], popular: true },
    { name: 'Enterprise', price: 'Custom', who: 'For large organizations', features: ['Unlimited AI Words', 'Custom Integrations', 'Dedicated Account Manager', 'Enterprise-grade Security'] }
]

export const PricingSection = () => {
    return (
        <section id="pricing" className="py-20 md:py-24">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">Fair Pricing for Teams of All Sizes</h2>
                    <p className="mt-4 text-muted-foreground">Choose the plan that's right for you. No hidden fees.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map(tier => (
                        <Card key={tier.name} className={tier.popular ? 'border-primary' : ''}>
                            <CardHeader>
                                <CardTitle>{tier.name}</CardTitle>
                                <CardDescription>{tier.who}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold font-heading">{tier.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                                <ul className="mt-6 space-y-2">
                                    {tier.features.map(feature => <li key={feature}>✓ {feature}</li>)}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">
                                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};