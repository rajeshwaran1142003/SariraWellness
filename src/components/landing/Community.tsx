import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Store, Instagram, Facebook, Utensils } from 'lucide-react';
import Link from 'next/link';

export function Community() {
  return (
    <section id="community" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Join the SARIRA Circle</h2>
          <p className="text-xl text-muted-foreground">Become part of our wellness community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Card className="bg-secondary/50 border-primary/10">
            <CardHeader>
              <div className="text-accent mb-4"><Home className="w-10 h-10" /></div>
              <CardTitle className="text-2xl font-bold text-primary">For Families</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6">Join our growing community of families who prioritize natural wellness. Get access to exclusive content and special offers.</CardDescription>
              <div className="space-y-4">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  <Link href="https://wa.me/917010422748" target="_blank">Join on WhatsApp</Link>
                </Button>
                 <div className="flex items-center justify-center space-x-4">
                    <Link href="https://www.instagram.com/sarira.wellness" target="_blank" className="text-primary hover:text-accent"><Instagram className="w-7 h-7" /></Link>
                    <Link href="#" className="text-primary hover:text-accent"><Facebook className="w-7 h-7" /></Link>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/50 border-primary/10">
            <CardHeader>
              <div className="text-accent mb-4"><Utensils className="w-10 h-10" /></div>
              <CardTitle className="text-2xl font-bold text-primary">Nourishing Recipes</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6">Discover creative and delicious ways to incorporate SARIRA Fig Malt into your daily meals and snacks.</CardDescription>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                 <Link href="/#recipes">Explore Recipes</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <div className="text-accent mb-4"><Store className="w-10 h-10" /></div>
              <CardTitle className="text-2xl font-bold text-primary-foreground">For Stores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-primary-foreground/80">Become an authorized SARIRA reseller and bring authentic Tamil wellness products to your community.</p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                 <Link href="mailto:sariranutrition@gmail.com">Become a Reseller</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
