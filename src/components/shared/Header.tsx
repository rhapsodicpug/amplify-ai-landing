import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold font-heading text-primary"
        >
          Amplify AI
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex gap-2">
           <Button variant="secondary">Log In</Button>
           <Button>Get Started Free</Button>
        </div>
      </div>
    </header>
  );
};