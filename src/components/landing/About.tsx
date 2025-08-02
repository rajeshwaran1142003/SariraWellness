import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image 
              src="https://storage.googleapis.com/stedi-dev-images/sarira-traditional-kitchen.png"
              alt="Traditional Tamil Kitchen" 
              width={800}
              height={600}
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              SARIRA is born from a love for pure, traditional wellness. Our founder, inspired by the wisdom of Tamil grandmothers, envisioned a brand that brings ancient recipes to modern lives. We believe in food that heals, prepared with intention and care.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our Fig Malt is a tribute to this heritage—a blend of organic figs and premium nuts, crafted to nourish you from the inside out. It's more than a product; it's a piece of our culture, made for your well-being.
            </p>
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/tamil-culture">
                Explore Our Heritage <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
