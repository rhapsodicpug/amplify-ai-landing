import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold font-heading">
          From Idea to Impact. Instantly.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Amplify AI is your new co-pilot for creating high-converting ad copy,
          engaging social media posts, and effective email campaigns in seconds.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#pricing">Get Started For Free</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};