import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const ingredients = [
  { name: "Organic Fig", description: "Rich in fiber for gut health and digestion support.", hint: "fig fruit" },
  { name: "Almonds", description: "Packed with vitamin E for brain function and skin health.", hint: "almonds nut" },
  { name: "Cashew", description: "Provides magnesium and copper for bone strength.", hint: "cashew nut" },
  { name: "Jaggery", description: "Natural sweetener rich in iron for sustained energy.", hint: "jaggery blocks" },
  { name: "Cardamom", description: "Aids digestion and adds aromatic flavor.", hint: "cardamom pods" }
];

export function Science() {
  return (
    <section id="science" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Crafted by Nature. Confirmed by Science.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Each ingredient is carefully selected for its proven health benefits</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {ingredients.map((ingredient) => (
            <Card key={ingredient.name} className="text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="w-24 h-24 p-4 bg-background rounded-full flex items-center justify-center">
                   <Image src={`https://placehold.co/80x80.png`} data-ai-hint={ingredient.hint} alt={ingredient.name} width={80} height={80} className="w-full h-full object-contain" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-bold text-primary mb-2">{ingredient.name}</h3>
                <p className="text-muted-foreground text-sm">{ingredient.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">100% Natural | No Chemicals | Kid & Senior Friendly</h3>
          <p className="text-muted-foreground">Our Fig Malt contains no artificial preservatives, colors, or flavors. Every ingredient is sourced from trusted organic farms and prepared using traditional methods that preserve nutritional value.</p>
        </div>
      </div>
    </section>
  );
}
