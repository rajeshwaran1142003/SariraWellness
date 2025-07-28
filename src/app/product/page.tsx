import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Leaf, Sprout, Brain, Utensils, Sandwich, Soup, Baby } from 'lucide-react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import SariraFigMalt from '@/components/icons/SariraFigMalt';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const benefits = [
    { text: "Fertility Booster", icon: <Leaf /> },
    { text: "Postpartum Nourishment", icon: <Sprout /> },
    { text: "Improves Gut Health", icon: <Brain /> },
    { text: "Naturally Sweet, No Added Sugar", icon: <Leaf /> },
    { text: "Rich in Iron & Fiber", icon: <Sprout /> },
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

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <SariraFigMalt
                    alt="SARIRA Fig Malt"
                    className="w-full max-w-lg rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">SARIRA Fig Malt</h1>
                <p className="text-xl text-muted-foreground mb-6">Made with Organic Figs & Premium Nuts</p>
                
                <div className="flex items-center justify-between bg-secondary/50 p-4 rounded-lg mb-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">₹299</div>
                    <div className="text-muted-foreground">200g Pouch</div>
                  </div>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Buy Now
                  </Button>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                        <span className="text-muted-foreground">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
