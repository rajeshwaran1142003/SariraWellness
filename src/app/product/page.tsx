
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CheckCircle2, Leaf, Sprout, Brain, Utensils, Sandwich, Soup, Baby, Minus, Plus, HeartHandshake, ShieldCheck, Star, Truck, RefreshCw, Lock, MessageSquare } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from 'react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';


const benefits = [
    { text: "Fertility Booster", icon: <Leaf /> },
    { text: "Postpartum Nourishment", icon: <HeartHandshake /> },
    { text: "Improves Gut Health", icon: <Brain /> },
    { text: "Naturally Sweet, No Added Sugar", icon: <Leaf /> },
    { text: "Rich in Iron & Fiber", icon: <ShieldCheck /> },
];

const ingredients = [
    { 
        name: "Organic Fig", 
        description: "Rich in fiber for gut health and digestion support.",
        icon: <Leaf />
    },
    { 
        name: "Almonds", 
        description: "Packed with vitamin E for brain function and skin health.",
        icon: <Brain />
    },
    { 
        name: "Cashew", 
        description: "Provides magnesium and copper for bone strength.",
        icon: <Sprout />
    },
];

const howToUse = [
    {
        title: "Toast Topper",
        description: "Spread ghee or nut butter on warm toast, then sprinkle 1 tsp of Fig Malt on top. Slightly melts and caramelizes—kids love it!",
        icon: <Sandwich />
    },
    {
        title: "String Hopper Topping",
        description: "Mix Fig Malt with grated coconut and serve over warm string hoppers for a traditional-style sweet breakfast.",
        icon: <Utensils />
    },
    {
        title: "Chapati / Paratha Filling",
        description: "Add Fig Malt and chopped nuts into a folded chapati or roll for a hidden energy-boosting surprise inside every bite!",
        icon: <Soup />
    },
    {
        title: "Toddler & Postpartum Meal",
        description: "Add to ragi/millet kanji, mashed bananas, or dal mash for a gentle, sweet, and nutrient-packed meal.",
        icon: <Baby />
    }
];

const trustBuilders = [
    { text: "Free Shipping on orders over ₹800", icon: <Truck className="w-5 h-5"/> },
    { text: "Easy 7-Day Returns", icon: <RefreshCw className="w-5 h-5"/> },
    { text: "Secure Payments", icon: <Lock className="w-5 h-5"/> },
    { text: "4.9/5 Star Rating", icon: <Star className="w-5 h-5"/> }
];

const galleryImages = [
    { src: "https://storage.googleapis.com/gcs-proxy/fstudio/v1/assets/948a313c_9b65_4487_98c1_823a0ff46d61/63345155_722a_49ed_a9bd_84f938a164c4", alt: "SARIRA Fig Malt Pouch", hint: "product pouch" },
    { src: "https://placehold.co/800x800.png", alt: "Spoonful of Fig Malt", hint: "fig malt lifestyle" },
    { src: "https://placehold.co/800x800.png", alt: "Organic Figs and Nuts", hint: "figs nuts" }
];

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative">
                 <Carousel className="w-full">
                  <CarouselContent>
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <Card className="overflow-hidden">
                           <Image
                              src={image.src}
                              alt={image.alt}
                              data-ai-hint={image.hint}
                              width={800}
                              height={800}
                              className="w-full h-full object-cover aspect-square"
                            />
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground border-none">Organic</Badge>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground border-none">No Added Sugar</Badge>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground border-none">Traditional Recipe</Badge>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <Badge variant="outline" className="mb-2 border-accent text-accent">Bestseller</Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">SARIRA Fig Malt</h1>
                  <p className="text-xl text-muted-foreground mb-6">Made with Organic Figs & Premium Nuts</p>
                </div>
                
                <Card className="bg-secondary/50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">₹299</span>
                      <span className="text-xl text-muted-foreground line-through">₹349</span>
                    </div>
                     <div className="text-sm text-green-600 font-semibold">15% Off</div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center border rounded-md">
                        <Button variant="ghost" size="icon" onClick={decrementQuantity} className="h-10 w-10">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-10 text-center font-bold text-lg">{quantity}</span>
                        <Button variant="ghost" size="icon" onClick={incrementQuantity} className="h-10 w-10">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                        <Link href="https://wa.me/917010422748" target="_blank">
                          <WhatsappIcon className="mr-2 h-5 w-5" /> Order now
                        </Link>
                      </Button>
                  </div>
                  <p className="text-xs text-center text-muted-foreground">One pouch lasts approximately 10-14 servings.</p>
                </Card>

                <Card className="border-dashed">
                  <CardContent className="p-4 flex items-center gap-4">
                     <MessageSquare className="w-8 h-8 text-accent shrink-0"/>
                     <p className="text-sm text-muted-foreground italic">"This was a game-changer for my energy levels! A must-have for mothers." - Priya, Chennai</p>
                  </CardContent>
                </Card>

                 <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Key Benefits</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg transition-all duration-300 hover:bg-accent/10 hover:shadow-md hover:scale-105">
                        <div className="text-accent">{benefit.icon}</div>
                        <span className="text-muted-foreground text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="w-full" defaultValue="ingredients">
                  <AccordionItem value="ingredients">
                    <AccordionTrigger className="text-xl font-bold text-primary">Ingredients</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-4 pt-4">
                        {ingredients.map((item) => (
                           <li key={item.name} className="flex items-center gap-4">
                                <div className="text-accent bg-accent/10 p-2 rounded-full">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary">{item.name}</h4>
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </div>
                           </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how-to-use">
                    <AccordionTrigger className="text-xl font-bold text-primary">How to Use</AccordionTrigger>
                    <AccordionContent>
                       <ul className="space-y-4 pt-4">
                        {howToUse.map((item) => (
                           <li key={item.title} className="flex items-center gap-4">
                                <div className="text-accent bg-accent/10 p-2 rounded-full">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </div>
                           </li>
                        ))}
                      </ul>
                       <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto object-cover rounded-lg mt-4"
                        >
                          <source src="https://storage.googleapis.com/stedi-dev-images/sarira-fig-tree.mp4" type="video/mp4" />
                      </video>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Our Promise</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {trustBuilders.map((item, index) => (
                           <div key={index} className="flex items-center gap-3 text-muted-foreground text-sm">
                                <div className="text-accent">{item.icon}</div>
                                <span>{item.text}</span>
                           </div>
                        ))}
                    </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">Your information is safe with us. We use bank-grade security.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
