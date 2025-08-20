
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const recipes = [
  {
    title: "Classic Warm Fig Malt Drink",
    description: "A daily immunity booster for all ages. Best served warm on an empty stomach to aid absorption and kickstart your day.",
    image: "https://images.unsplash.com/photo-1747972918307-7fe79f01cd43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8d2FybSUyMGRyaW5rJTIwbXVnfGVufDB8fHx8MTc1NTY4NDg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "warm drink mug"
  },
  {
    title: "Fig Malt Banana Smoothie",
    description: "A cool, creamy, fiber-rich breakfast. Blend one banana, a cup of milk, and a spoonful of SARIRA for a filling start.",
    image: "https://images.unsplash.com/photo-1557568951-a691f75c810f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzbW9vdGhpZSUyMGJvd2x8ZW58MHx8fHwxNzU1Njg0ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "smoothie bowl"
  },
  {
    title: "Sugar-Free Fig Malt Muffins",
    description: "Kid-friendly, guilt-free snacks perfect for tiffin boxes. Use SARIRA as a natural sweetener in your favorite muffin recipe.",
    image: "https://images.unsplash.com/photo-1708989173661-545fc4c2c8d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxoZWFsdGh5JTIwbXVmZmluc3xlbnwwfHx8fDE3NTU2ODQ4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "healthy muffins"
  },
  {
    title: "SARIRA Energy Balls",
    description: "No-bake bites for busy days. Mix with oats, nuts, and a touch of ghee, then roll and refrigerate for an instant energy boost.",
    image: "https://images.unsplash.com/photo-1493808419309-a179d858ee5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxlbmVyZ3klMjBiYWxsc3xlbnwwfHx8fDE3NTU2ODQ4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "energy balls"
  },
  {
    title: "Wholesome Toast Topper",
    description: "A sweet surprise in everyday meals. Sprinkle SARIRA on ghee-laden toast, idiyappam, or a warm chapati.",
    image: "https://images.unsplash.com/photo-1676616561406-b88620ebf819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0b2FzdCUyMHdpdGglMjB0b3BwaW5nfGVufDB8fHx8MTc1NTY4NDg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "toast with topping"
  },
  {
    title: "Nourishing Porridge Mix",
    description: "Gentle porridge ideas for tiny tummies and new moms. Blends perfectly with ragi kanji, dal mash, or mashed banana.",
    image: "https://images.unsplash.com/photo-1548289227-b7d966b70003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxiYWJ5JTIwZm9vZCUyMHBvcnJpZGdlfGVufDB8fHx8MTc1NTY4NDg2OHww&ixlib=rb-4.1.0&q=80&w=1080",
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
                <Dialog>
                  <DialogTrigger asChild>
                     <Button variant="link" className="font-semibold text-accent hover:underline p-0 h-auto self-start mt-auto">View Details →</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{recipe.title}</DialogTitle>
                      <DialogDescription>
                        This recipe is coming soon! We are working on creating detailed instructions for you. Please check back later.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Dialog>
            <DialogTrigger asChild>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link href="#">Explore More Recipes</Link>
              </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                  <DialogTitle>More Recipes Coming Soon!</DialogTitle>
                  <DialogDescription>
                    Our team is busy in the kitchen crafting more delicious and healthy recipes for you. Follow us on social media for the latest updates!
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
