import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Store } from 'lucide-react';
import Link from 'next/link';

export function Community() {
  return (
    <section id="community" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Join the SARIRA Circle</h2>
          <p className="text-xl text-muted-foreground">Become part of our wellness community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-secondary/50 border-primary/10">
            <CardHeader>
              <div className="text-accent mb-4"><Home className="w-10 h-10" /></div>
              <CardTitle className="text-2xl font-bold text-primary">For Families</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6">Join our growing community of families who prioritize natural wellness. Get access to exclusive recipes, wellness tips, and special offers.</CardDescription>
              <div className="space-y-4">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  <Link href="https://wa.me/917010422748" target="_blank">Join Now</Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground" size="lg">
                   <Link href="https://wa.me/917010422748" target="_blank">Ask on WhatsApp</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <div className="text-accent mb-4"><Store className="w-10 h-10" /></div>
              <CardTitle className="text-2xl font-bold text-primary-foreground">For Stores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-primary-foreground/80">Become an authorized SARIRA reseller and bring authentic Tamil wellness products to your community. Enjoy wholesale pricing and marketing support.</p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                 <Link href="#">Become a Reseller</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
