import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      q: "Is there a free trial?",
      a: "Yes, you can get started for free with our Starter plan which includes 10,000 AI-generated words per month, with no credit card required.",
    },
    {
      q: "Can I upgrade or downgrade my plan at any time?",
      a: "Absolutely. You can easily change your plan from your account dashboard whenever you need to.",
    },
    {
      q: "What makes Amplify AI different from other AI writers?",
      a: "We specialize in maintaining a consistent brand voice across all generated content and focus on creating high-converting marketing copy, not just generic text.",
    },
    {
      q: "How is my data used?",
      a: "Your data is used solely to provide and improve the service. We do not use your content to train our AI models without your explicit consent.",
    },
    {
      q: "Is my data secure?",
      a: "Yes, security is our top priority. All your data is encrypted both in transit and at rest using industry-standard protocols.",
    },
  ];
  
  export const FaqSection = () => {
    return (
      <section id="faq" className="py-20 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full mt-12">
            {faqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };