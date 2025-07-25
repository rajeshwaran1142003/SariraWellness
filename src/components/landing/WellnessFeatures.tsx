import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, FlaskConical, Heart } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-accent" />,
    title: "Rooted in Tradition",
    description: "Ancient Tamil wisdom passed down through generations, now available for modern lifestyles.",
    bgColor: "bg-background"
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-accent" />,
    title: "Backed by Science",
    description: "Every ingredient is carefully selected for its proven health benefits and nutritional value.",
    bgColor: "bg-secondary"
  },
  {
    icon: <Heart className="w-8 h-8 text-accent" />,
    title: "Made with Love",
    description: "Prepared with the same care and attention as in our grandmothers' kitchens.",
    bgColor: "bg-secondary"
  }
];

export function WellnessFeatures() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Wellness You Can Taste. Trust. Share.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">We're not selling powders. We're reviving practices.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.bgColor} border-primary/10 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-lg`}>
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
