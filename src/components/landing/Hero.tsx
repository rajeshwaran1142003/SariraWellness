"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, HeartPulse, Baby, Sparkles } from 'lucide-react';

const benefits = [
    { text: "Fertility Boost", icon: <HeartPulse /> },
    { text: "Postpartum Support", icon: <Baby /> },
    { text: "Immunity", icon: <ShieldCheck /> },
    { text: "No Preservatives", icon: <Sparkles /> }
];

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
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-gradient-to-b from-background to-secondary">
       <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/stedi-dev-images/sarira-bg-texture.png')] bg-repeat bg-center opacity-5"></div>
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
        <div className="md:w-1/2 flex justify-center">
            <Image
                src="https://storage.googleapis.com/stedi-dev-images/sarira-fig-malt.png"
                alt="SARIRA Fig Malt"
                width={500}
                height={500}
                priority
                className="w-full max-w-md rounded-lg shadow-2xl animate-floating"
            />
        </div>
      </div>
    </section>
  );
}
