import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Sandwich, Soup, Baby } from 'lucide-react';

const uses = [
    {
        title: "Toast Topper",
        description: "Spread on warm toast for a delicious and nutritious breakfast.",
        icon: <Sandwich />
    },
    {
        title: "String Hopper Topping",
        description: "A healthy and tasty topping for traditional string hoppers.",
        icon: <Utensils />
    },
    {
        title: "Chapati / Paratha Filling",
        description: "Use as a sweet and savory filling for your flatbreads.",
        icon: <Soup />
    },
    {
        title: "Baby Food / Postpartum Porridge",
        description: "A nourishing meal for new mothers and a healthy option for babies.",
        icon: <Baby />
    }
];

export function HowToUse() {
  return (
    <section id="how-to-use" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Versatile & Easy to Use</h2>
          <p className="text-xl text-muted-foreground">Incorporate SARIRA Fig Malt into your daily routine</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uses.map((use, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/10 text-accent p-4 rounded-full w-fit mb-4">
                  {use.icon}
                </div>
                <CardTitle>{use.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{use.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
