"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, HeartPulse, Baby, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const benefits = [
    { text: "Fertility Boost", icon: <HeartPulse className="w-8 h-8" /> },
    { text: "Postpartum Support", icon: <Baby className="w-8 h-8" /> },
    { text: "Immunity", icon: <ShieldCheck className="w-8 h-8" /> },
    { text: "No Preservatives", icon: <Sparkles className="w-8 h-8" /> }
];

const headline = "Feed Your Roots. Fuel Your Rise.";

export function Hero() {
  const [typedHeadline, setTypedHeadline] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      let currentIndex = 0;
      let isDeleting = false;

      const type = () => {
        if (isDeleting) {
          if (currentIndex > 0) {
            setTypedHeadline(headline.substring(0, currentIndex - 1));
            currentIndex--;
          } else {
            isDeleting = false;
          }
        } else {
          if (currentIndex < headline.length) {
            setTypedHeadline(headline.substring(0, currentIndex + 1));
            currentIndex++;
          } else {
            // Pause at the end before starting to delete
            setTimeout(() => {
              isDeleting = true;
            }, 2000); 
          }
        }
      };

      const interval = setInterval(type, isDeleting ? 60 : 120);

      return () => clearInterval(interval);
    }
  }, [isMounted]);


  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-to-b from-background to-secondary">
       <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/stedi-dev-images/sarira-bg-texture.png')] bg-repeat bg-center opacity-5"></div>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center relative z-10 gap-12">
        <div className="w-full text-center">
            <p className="text-4xl md:text-5xl lg:text-6xl font-headline text-primary mb-4">Welcome to SARIRA Wellness</p>
            <h1 className="text-accent font-body mb-2 text-2xl h-8">
              <span>{typedHeadline}</span>
              <span className="animate-pulse">|</span>
            </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ancient Tamil wisdom meets modern nutrition. Discover SARIRA's Fig Malt — your gateway to holistic wellness, crafted with time-honored traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/product">Try Fig Malt</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="https://wa.me/917010422748" target="_blank">Join Our WhatsApp Circle</Link>
            </Button>
          </div>
           <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {benefits.map(benefit => (
                    <div key={benefit.text} className="flex flex-col items-center gap-3">
                        <div className="text-accent">{benefit.icon}</div>
                        <span className="text-base font-medium text-primary">{benefit.text}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
