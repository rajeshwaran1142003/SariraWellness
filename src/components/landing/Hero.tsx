"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, HeartPulse, Baby, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const benefits = [
    { text: "Fertility Boost", icon: <HeartPulse /> },
    { text: "Postpartum Support", icon: <Baby /> },
    { text: "Immunity", icon: <ShieldCheck /> },
    { text: "No Preservatives", icon: <Sparkles /> }
];

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const textToType = "Feed Your Roots. Fuel Your Rise.";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && typedText.length < textToType.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(textToType.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [isMounted, typedText]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-to-b from-background to-secondary">
       <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/stedi-dev-images/sarira-bg-texture.png')] bg-repeat bg-center opacity-5"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="w-full text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 min-h-[144px] md:min-h-[168px] lg:min-h-[192px]">
            {typedText}
            <span className="opacity-50 animate-ping">|</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Functional wellness rooted in Tamil tradition, blended for today's lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/product">Try Fig Malt</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="https://wa.me/917010422748" target="_blank">Join Our WhatsApp Circle</Link>
            </Button>
          </div>
           <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {benefits.map(benefit => (
                    <div key={benefit.text} className="flex flex-col items-center gap-2">
                        <div className="text-accent">{benefit.icon}</div>
                        <span className="text-sm font-medium text-primary">{benefit.text}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
