
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Sandwich, Soup, Baby } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from "next/image";

const uses = [
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function HowToUse() {
  return (
    <section id="how-to-use" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
            <Image 
                src="https://placehold.co/1200x400.png"
                alt="Person using SARIRA Fig Malt in a recipe"
                data-ai-hint="food preparation lifestyle"
                width={1200}
                height={400}
                className="w-full rounded-lg shadow-lg"
            />
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Versatile & Easy to Use</h2>
          <p className="text-xl text-muted-foreground">Incorporate SARIRA Fig Malt into your daily routine</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uses.map((use, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="text-center h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 text-accent p-4 rounded-full w-fit mb-4">
                    {use.icon}
                  </div>
                  <CardTitle>{use.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{use.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
