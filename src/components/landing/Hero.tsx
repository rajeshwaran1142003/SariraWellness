"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SariraFigMalt from '@/components/icons/SariraFigMalt';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const textToType = "Feed Your Roots. Fuel Your Rise.";

  useEffect(() => {
    if (typedText.length < textToType.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(textToType.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [typedText]);

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-background to-white">
      <div className="absolute inset-0 opacity-10 z-0">
          <Image src="https://placehold.co/100x100.png" data-ai-hint="leaf pattern" alt="leaf decoration" width={100} height={100} className="absolute top-10 left-10 w-20 h-20" />
          <Image src="https://placehold.co/80x80.png" data-ai-hint="leaf pattern" alt="leaf decoration" width={80} height={80} className="absolute top-1/4 right-10 w-16 h-16" />
          <Image src="https://placehold.co/120x120.png" data-ai-hint="leaf pattern" alt="leaf decoration" width={120} height={120} className="absolute bottom-20 left-1/4 w-24 h-24" />
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 min-h-[144px] md:min-h-[168px] lg:min-h-[192px]">
            {typedText}
            <span className="opacity-50 animate-ping">|</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Functional wellness rooted in Tamil tradition, blended for today's lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#product">Try Fig Malt</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="#community">Join Our WhatsApp Circle</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <SariraFigMalt
            alt="SARIRA Fig Malt"
            className="w-full max-w-md rounded-lg shadow-2xl animate-floating"
          />
        </div>
      </div>
    </section>
  );
}
