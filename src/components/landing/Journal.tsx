import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const posts = [
  {
    title: "The Unsung Hero of Tamil Kitchens: The Humble Fig",
    description: "Long before superfoods became a buzzword, the fig (അத்திப்பழം) was a cornerstone of wellness in Tamil households. We explore its journey from ancient scriptures to your kitchen.",
    image: "https://storage.googleapis.com/stedi-dev-images/sarira-journal-1.png",
    hint: "figs on a plate",
    link: "/tamil-culture"
  },
  {
    title: "Postpartum Care, the Paatti Way: A Guide for New Mothers",
    description: "A new mother's body is a temple deserving of gentle, powerful nourishment. Learn how traditional Tamil postpartum care focuses on healing from within, with ingredients that restore strength and balance.",
    image: "https://storage.googleapis.com/stedi-dev-images/sarira-journal-2.png",
    hint: "mother baby food",
    link: "/tamil-culture"
  },
  {
    title: "Why Your Gut Is Your Second Brain: A Tamil Perspective",
    description: "Modern science is catching up to what Tamil grandmothers always knew: a healthy gut is the key to overall well-being. Dive into the timeless food habits that promote a thriving inner ecosystem.",
    image: "https://storage.googleapis.com/stedi-dev-images/sarira-journal-3.png",
    hint: "healthy food bowl",
    link: "/tamil-culture"
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
            <Link href="/tamil-culture">Explore Our Heritage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
