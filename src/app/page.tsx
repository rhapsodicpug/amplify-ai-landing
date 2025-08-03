import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>
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