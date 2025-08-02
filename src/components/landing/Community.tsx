"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Store, Instagram, Facebook, Utensils } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function Community() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="community" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Join the SARIRA Circle</h2>
          <p className="text-xl text-muted-foreground">Become part of our wellness community</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Card className="bg-secondary/50 border-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
            <CardHeader>
              <div className="text-accent group-hover:text-accent mb-4"><Home className="w-10 h-10" /></div>
              <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary-foreground">For Families</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6 text-muted-foreground group-hover:text-primary-foreground/80">Join our growing community of families who prioritize natural wellness. Get access to exclusive content and special offers.</CardDescription>
              <div className="space-y-4">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  <Link href="https://wa.me/917010422748" target="_blank">Join on WhatsApp</Link>
                </Button>
                 <div className="flex items-center justify-center space-x-4">
                    <Link href="https://www.instagram.com/sarira.wellness" target="_blank" className="text-primary group-hover:text-primary-foreground hover:text-accent"><Instagram className="w-7 h-7" /></Link>
                    <Link href="#" className="text-primary group-hover:text-primary-foreground hover:text-accent"><Facebook className="w-7 h-7" /></Link>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/50 border-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
            <CardHeader>
              <div className="text-accent group-hover:text-accent mb-4"><Utensils className="w-10 h-10" /></div>
              <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary-foreground">Nourishing Recipes</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-6 text-muted-foreground group-hover:text-primary-foreground/80">Discover creative and delicious ways to incorporate SARIRA Fig Malt into your daily meals and snacks.</CardDescription>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                 <Link href="/#recipes">Explore Recipes</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50 border-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
            <CardHeader>
              <div className="text-accent group-hover:text-accent mb-4"><Store className="w-10 h-10" /></div>
              <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary-foreground">For Stores &amp; Retailers</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <p className={cn("text-muted-foreground group-hover:text-primary-foreground/80 mb-4 transition-all duration-300", { 'line-clamp-3': !isExpanded })}>
                Bring SARIRA to Your Shelf — and to Your Community. Join our growing network of trusted resellers bringing authentic Tamil wellness to homes across India. Whether you run a health store, organic outlet, or neighborhood supermarket, SARIRA Fig Malt is the perfect addition to your shelf.
              </p>
               <Button variant="link" onClick={() => setIsExpanded(!isExpanded)} className="text-accent p-0 h-auto self-start mb-4">
                  {isExpanded ? 'Read Less' : 'Read More'}
                </Button>
              <div className="mt-auto">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                   <Link href="mailto:sariranutrition@gmail.com">Become a Reseller</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
