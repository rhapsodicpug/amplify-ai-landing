import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  { title: "AI Ad Copy", description: "Generate persuasive ad copy for Google, Facebook, and more." },
  { title: "Social Content", description: "Create engaging posts for all your social media channels." },
  { title: "Brand Voice Analysis", description: "Maintain a consistent brand voice across all content." },
  { title: "Email Campaigns", description: "Draft compelling emails from subject lines to CTAs." },
  { title: "Content Repurposing", description: "Turn a single piece of content into multiple formats." },
  { title: "SEO Optimization", description: "Optimize your content with AI-powered keyword suggestions." },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Everything You Need to Scale Your Content</h2>
          <p className="mt-4 text-muted-foreground">
            Stop the guesswork. Amplify AI gives you the tools to create better content, faster.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};