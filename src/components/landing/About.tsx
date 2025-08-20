
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Story: From Ancient Wisdom to Modern Wellness</h2>
            <div className="bg-white/50 rounded-lg p-6 shadow-inner border border-primary/10">
                <p className="text-center text-2xl font-headline text-primary/80 mb-2">"அந்தணர்நூல் வழி நின் றார்அத்திப்பழம் பபால்"</p>
                <p className="text-center text-muted-foreground italic">— A Sangam poetry metaphor comparing pure character to a fig's sweetness.</p>
            </div>
            <p className="text-lg text-muted-foreground">
              SARIRA is born from a love for pure, traditional wellness. Our founder, inspired by the wisdom of Tamil grandmothers, envisioned a brand that brings ancient recipes to modern lives. We believe in food that heals, prepared with intention and care.
            </p>
            <p className="text-lg text-muted-foreground">
              Our Fig Malt is a tribute to this heritage—a blend of organic figs and premium nuts, crafted to nourish you from the inside out. It's more than a product; it's a piece of our culture, made for your well-being.
            </p>
            <Button asChild variant="link" className="group text-accent hover:text-accent-foreground p-0 h-auto text-base">
              <Link href="/tamil-culture">
                Explore Our Heritage <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div>
            <Image 
              src="https://storage.googleapis.com/stedi-dev-images/sarira-traditional-kitchen.png"
              alt="Traditional Tamil Kitchen" 
              width={800}
              height={600}
              className="w-full rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
