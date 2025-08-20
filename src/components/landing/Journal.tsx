
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

const posts = [
  {
    title: "The Unsung Hero of Tamil Kitchens: The Humble Fig",
    description: "Long before superfoods became a buzzword, the fig (അത്തിப்பழം) was a cornerstone of wellness in Tamil households. We explore its journey from ancient scriptures to your kitchen.",
    image: "https://images.unsplash.com/photo-1616264630975-c98543fbe751?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmaWdzJTIwb24lMjBhJTIwcGxhdGV8ZW58MHx8fHwxNzU1Njg0MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "figs on a plate",
    link: "/tamil-culture"
  },
  {
    title: "Postpartum Care, the Paatti Way: A Guide for New Mothers",
    description: "A new mother's body is a temple deserving of gentle, powerful nourishment. Learn how traditional Tamil postpartum care focuses on healing from within, with ingredients that restore strength and balance.",
    image: "https://images.unsplash.com/photo-1557939663-0619f304af9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwZm9vZHxlbnwwfHx8fDE3NTU2ODQxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "mother baby food",
    link: "/tamil-culture"
  },
  {
    title: "Why Your Gut Is Your Second Brain: A Tamil Perspective",
    description: "Modern science is catching up to what Tamil grandmothers always knew: a healthy gut is the key to overall well-being. Dive into the timeless food habits that promote a thriving inner ecosystem.",
    image: "https://images.unsplash.com/photo-1675962292427-062dc596171e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxoZWFsdGh5JTIwZm9vZCUyMGJvd2x8ZW58MHx8fHwxNzU1Njg0MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "healthy food bowl",
    link: "/tamil-culture"
  },
  {
    title: "Beyond Sugar: The Ancient Art of Sweetening with Nature",
    description: "Discover how traditional Tamil diets used natural sweeteners like fig, honey, and jaggery to create delicious and healthy treats, long before refined sugar became common.",
    image: "https://images.unsplash.com/photo-1655169947079-5b2a38815147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc3dlZXRlbmVycyUyMGhvbmV5fGVufDB8fHx8MTc1NTY4NDM5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "natural sweeteners honey",
    link: "/tamil-culture"
  },
  {
    title: "Fueling the Future: Timeless Nutrition for Growing Kids",
    description: "Learn about the traditional foods and practices that have nourished generations of healthy, active children in Tamil culture, focusing on immunity and energy.",
    image: "https://images.unsplash.com/photo-1752652012704-565483c5d1fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwY2hpbGQlMjBlYXRpbmd8ZW58MHx8fHwxNzU1Njg0Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "healthy child eating",
    link: "/tamil-culture"
  },
  {
    title: "Food as Medicine: The Siddha Philosophy in Your Kitchen",
    description: "Explore the ancient Siddha wisdom that views food not just as sustenance, but as a powerful tool for maintaining balance and preventing illness.",
    image: "https://images.unsplash.com/photo-1730596628352-08a13f00f5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxoZXJicyUyMHNwaWNlc3xlbnwwfHx8fDE3NTU2ODQzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "herbs spices",
    link: "/tamil-culture"
  }
];

export function Journal() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="journal" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">SARIRA Journal – Where Food Meets Philosophy</h2>
          <p className="text-xl text-muted-foreground">Discover the stories behind our ingredients and traditions</p>
        </div>
        
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {posts.map((post, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                    <CardHeader className="p-0">
                      <Link href={post.link}>
                        <Image src={post.image} data-ai-hint={post.hint} alt={post.title} width={800} height={600} className="w-full h-48 object-cover" />
                      </Link>
                    </CardHeader>
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-primary mb-2 h-20">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 h-24 overflow-hidden flex-grow">{post.description}</p>
                      <Link href={post.link} className="font-semibold text-accent hover:underline mt-auto">
                        Read More →
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="/tamil-culture">Explore Our Heritage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
