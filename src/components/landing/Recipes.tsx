import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const recipes = [
  {
    title: "Classic Warm Fig Malt Drink",
    description: "A daily immunity booster drink for kids & elders. Best served warm on an empty stomach.",
    image: "https://placehold.co/800x600.png",
    hint: "warm drink mug"
  },
  {
    title: "Fig Malt Banana Smoothie Bowl",
    description: "A cool, creamy fiber-rich breakfast or post-workout boost. Top with fruits, nuts, and seeds.",
    image: "https://placehold.co/800x600.png",
    hint: "smoothie bowl"
  },
  {
    title: "Mini Fig Malt Muffins",
    description: "Kid-friendly, sugar-free snacks perfect for tiffin. Made with wheat, banana, and love.",
    image: "https://placehold.co/800x600.png",
    hint: "healthy muffins"
  },
  {
    title: "SARIRA Energy Balls",
    description: "No-bake snack bites for busy days and growing kids. Great for pre/post-workout energy.",
    image: "https://placehold.co/800x600.png",
    hint: "energy balls"
  },
  {
    title: "Toast Topper / Tiffin Tweak",
    description: "A sweet surprise in everyday meals. Sprinkle SARIRA on toast, idiyappam, or chapati.",
    image: "https://placehold.co/800x600.png",
    hint: "toast with topping"
  },
  {
    title: "Toddler & Postpartum Mixes",
    description: "Gentle porridge ideas for tiny tummies or new moms. Blends well with kanji, dal mash, or banana.",
    image: "https://placehold.co/800x600.png",
    hint: "baby food porridge"
  }
];

export function Recipes() {
  return (
    <section id="recipes" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">One Spoon, Many Possibilities</h2>
          <p className="text-xl text-muted-foreground">Explore creative, everyday ways to use SARIRA Fig Malt</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col">
              <CardHeader className="p-0">
                <Image src={recipe.image} data-ai-hint={recipe.hint} alt={recipe.title} width={800} height={600} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2 h-16">{recipe.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{recipe.description}</p>
                <Link href="#" className="font-semibold text-accent hover:underline mt-auto">
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
