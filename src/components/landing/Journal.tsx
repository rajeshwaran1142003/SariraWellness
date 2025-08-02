import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const posts = [
  {
    title: "The Role of Figs in Tamil Tradition",
    description: "Discover the ancient wisdom and health benefits of figs in traditional Tamil culture and cuisine.",
    image: "https://placehold.co/800x600.png",
    hint: "figs on a plate",
    link: "#"
  },
  {
    title: "Rich in antioxidants and essential minerals",
    description: "Learn how plant-based nutrition, including powerful ingredients like figs, can support your fertility journey.",
    image: "https://placehold.co/800x600.png",
    hint: "woman healthy food",
    link: "#"
  },
  {
    title: "Safe for all ages – kids to seniors",
    description: "Nourish your body and mind after childbirth with these gentle, effective plant-based wellness tips.",
    image: "https://placehold.co/800x600.png",
    hint: "mother baby food",
    link: "#"
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
                <Link href={post.link}>
                  <Image src={post.image} data-ai-hint={post.hint} alt={post.title} width={800} height={600} className="w-full h-48 object-cover" />
                </Link>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 h-20">{post.title}</h3>
                <p className="text-muted-foreground mb-4 h-24 overflow-hidden">{post.description}</p>
                <Link href={post.link} className="font-semibold text-accent hover:underline">
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
