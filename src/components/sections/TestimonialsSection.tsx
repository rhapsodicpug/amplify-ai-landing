import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    { quote: "Amplify AI has revolutionized our content workflow. We're producing higher quality content in half the time.", name: "Sarah Johnson", company: "CEO, Creative Solutions" },
    { quote: "The brand voice feature is a game-changer for maintaining consistency across our client accounts. Highly recommended!", name: "Mike Chen", company: "Founder, Digital Growth Agency" },
    { quote: "I was skeptical at first, but the quality of the AI-generated copy is outstanding. It's an essential tool for our team now.", name: "Jessica Williams", company: "Marketing Director, Innovate Corp" }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Loved by Marketing Teams Worldwide</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
                <Card key={t.name}>
                    <CardContent className="pt-6">
                        <p className="italic">"{t.quote}"</p>
                        <p className="mt-4 font-semibold">{t.name}, <span className="text-muted-foreground">{t.company}</span></p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
};