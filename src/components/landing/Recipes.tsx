import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const recipes = [
  {
    title: "Fig Malt Energy Balls",
    description: "A quick, no-bake snack perfect for a midday boost. Packed with fiber and natural sweetness.",
    image: "https://placehold.co/800x600.png",
    hint: "energy balls"
  },
  {
    title: "Creamy Fig Malt Smoothie",
    description: "A delicious and filling smoothie that's great for postpartum recovery and digestive health.",
    image: "https://placehold.co/800x600.png",
    hint: "healthy smoothie"
  },
  {
    title: "Savory Fig & Nut Spread",
    description: "A unique twist on a classic spread, perfect for pairing with cheese and crackers.",
    image: "https://placehold.co/800x600.png",
    hint: "savory spread"
  }
];

export function Recipes() {
  return (
    <section id="recipes" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nourishing Recipes</h2>
          <p className="text-xl text-muted-foreground">Creative ways to enjoy your Fig Malt</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader className="p-0">
                <Image src={recipe.image} data-ai-hint={recipe.hint} alt={recipe.title} width={800} height={600} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 h-16">{recipe.title}</h3>
                <p className="text-muted-foreground mb-4 h-24 overflow-hidden">{recipe.description}</p>
                <Link href="#" className="font-semibold text-accent hover:underline">
                  View Recipe →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="#">Explore More Recipes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
