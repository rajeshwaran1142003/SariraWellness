import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Leaf, Brain, Sprout } from '@/components/icons/Icons';
import { INGREDIENTS_CONTENT } from '@/config/content';

const iconMap = {
  Leaf: Leaf,
  Brain: Brain,
  Sprout: Sprout,
};

export function Ingredients() {
  return (
    <section id="ingredients" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{INGREDIENTS_CONTENT.title}</h2>
          <p className="text-xl text-muted-foreground">{INGREDIENTS_CONTENT.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {INGREDIENTS_CONTENT.ingredients.map((ingredient, index) => {
            const IconComponent = iconMap[ingredient.icon];
            return (
              <Card key={index} className="text-center h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-primary/10">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 text-accent p-4 rounded-full w-fit mb-4">
                    {IconComponent && <IconComponent className="w-8 h-8" />}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">{ingredient.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{ingredient.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}