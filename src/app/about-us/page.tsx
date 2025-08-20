import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { About } from '@/components/landing/About';
import { HowToUse } from '@/components/landing/HowToUse';
import { Gallery } from '@/components/landing/Gallery';
import { Journal } from '@/components/landing/Journal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-20">
        <About />
        <HowToUse />
        <Gallery />
        <Journal />
        <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline mb-8">
              Ready to begin your wellness journey?
            </h2>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/product">Shop Fig Malt</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
