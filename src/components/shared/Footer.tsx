import Link from "next/link";
import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

// Data for the footer links to keep the JSX clean
const footerLinkSections = [
    {
        title: "Product",
        links: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Testimonials", href: "#testimonials" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Blog", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Help Center", href: "#" },
            { label: "API Status", href: "#" },
            { label: "Contact Us", href: "#" },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className="border-t py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Column 1: Brand/Logo */}
                    <div className="col-span-2 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold font-heading text-primary">
                            Amplify AI
                        </Link>
                        <p className="mt-4 text-muted-foreground max-w-sm">
                            Your AI co-pilot for creating high-converting marketing content.
                        </p>
                    </div>

                    {/* Columns 2, 3, 4: Link Sections */}
                    {footerLinkSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar: Copyright and Socials */}
                <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between">
                    <p className="text-muted-foreground text-sm">
                        &copy; {new Date().getFullYear()} ADmyBRAND Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                        <Link href="#" aria-label="Twitter">
                            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                        </Link>
                        <Link href="#" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                        </Link>
                        <Link href="#" aria-label="GitHub">
                            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};