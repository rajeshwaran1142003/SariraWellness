
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Brain, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const ingredients = [
    { 
        name: "Organic Fig (அத்திப்பழம்)", 
        description: "A powerhouse of dietary fiber, figs support excellent gut health, aid digestion, and are naturally rich in iron and calcium, making them ideal for postpartum recovery and boosting fertility.",
        icon: <Leaf className="w-8 h-8" />
    },
    { 
        name: "Almonds (பாதாம்)", 
        description: "Packed with Vitamin E and healthy fats, almonds are renowned for enhancing brain function, promoting radiant skin, and providing sustained energy throughout the day.",
        icon: <Brain className="w-8 h-8" />
    },
    { 
        name: "Cashews (முந்திரி)", 
        description: "A creamy, delicious source of essential minerals like magnesium and copper, which are vital for maintaining strong bones, a healthy immune system, and robust nerve function.",
        icon: <Sprout className="w-8 h-8" />
    },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export function Ingredients() {
  return (
    <section id="ingredients" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The Power of Our Ingredients</h2>
          <p className="text-xl text-muted-foreground">Simple, pure, and chosen with purpose.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="text-center h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-primary/10">
                <CardHeader>
                  <div className="mx-auto bg-accent/10 text-accent p-4 rounded-full w-fit mb-4">
                    {ingredient.icon}
                  </div>
                  <CardTitle className="text-2xl font-semibold text-primary">{ingredient.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{ingredient.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
