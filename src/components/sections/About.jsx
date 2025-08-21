import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight } from '@/components/icons/Icons';
import { ABOUT_CONTENT, IMAGES } from '@/config/content';

export function About() {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">{ABOUT_CONTENT.title}</h2>
            <div className="bg-white/50 rounded-lg p-6 shadow-inner border border-primary/10">
                <p className="text-center text-2xl font-headline text-primary/80 mb-2">"{ABOUT_CONTENT.tamilQuote.text}"</p>
                <p className="text-center text-muted-foreground italic">— {ABOUT_CONTENT.tamilQuote.translation}</p>
            </div>
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <Button asChild variant="link" className="group text-accent hover:text-accent-foreground p-0 h-auto text-base">
              <Link href="/tamil-culture">
                {ABOUT_CONTENT.cta} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div>
            <Image 
              src={IMAGES.aboutImage}
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