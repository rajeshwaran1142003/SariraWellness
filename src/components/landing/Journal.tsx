import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const posts = [
  {
    title: "The Fig in Tamil Culture: More Than Just a Fruit",
    description: "Explore how the humble fig has been revered in Tamil tradition for centuries, from medicinal uses to spiritual significance.",
    image: "https://placehold.co/800x600.png",
    hint: "traditional kitchen"
  },
  {
    title: "Grandmother's Wisdom: Ancient Nutrition Practices",
    description: "How traditional Tamil kitchen practices align with modern nutritional science and why they still matter today.",
    image: "https://placehold.co/800x600.png",
    hint: "spices herbs"
  },
  {
    title: "Gut Health: The Tamil Way",
    description: "Traditional Tamil approaches to digestive wellness and how they compare with modern probiotic trends.",
    image: "https://placehold.co/800x600.png",
    hint: "healthy food"
  }
];

export function Journal() {
  return (
    <section id="journal" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">SARIRA Journal – Where Food Meets Philosophy</h2>
          <p className="text-xl text-muted-foreground">Discover the stories behind our ingredients and traditions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader className="p-0">
                <Image src={post.image} data-ai-hint={post.hint} alt={post.title} width={800} height={600} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 h-20">{post.title}</h3>
                <p className="text-muted-foreground mb-4 h-24 overflow-hidden">{post.description}</p>
                <Link href="#" className="font-semibold text-accent hover:underline">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="#">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
