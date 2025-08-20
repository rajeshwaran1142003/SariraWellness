
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { OrganicBabyFoodIcon } from "@/components/icons/benefits/OrganicBabyFoodIcon";
import { PregnancyIcon } from "@/components/icons/benefits/PregnancyIcon";
import { BeautyIcon } from "@/components/icons/benefits/BeautyIcon";
import { ImmunityBoosterIcon } from "@/components/icons/benefits/ImmunityBoosterIcon";
import { HerbalPowderIcon } from "@/components/icons/benefits/HerbalPowderIcon";
import { HealthyBreakfastIcon } from "@/components/icons/benefits/HealthyBreakfastIcon";
import { NutsSpicesIcon } from "@/components/icons/benefits/NutsSpicesIcon";
import { HoneyIcon } from "@/components/icons/benefits/HoneyIcon";
import { HealthySnackIcon } from "@/components/icons/benefits/HealthySnackIcon";

const benefits = [
    { 
        name: "Organic Baby Foods", 
        icon: <OrganicBabyFoodIcon className="w-12 h-12" />
    },
    { 
        name: "Pregnancy & Lactation", 
        icon: <PregnancyIcon className="w-12 h-12" />
    },
    { 
        name: "Beauty Essentials", 
        icon: <BeautyIcon className="w-12 h-12" />
    },
     { 
        name: "Immunity Booster", 
        icon: <ImmunityBoosterIcon className="w-12 h-12" />
    },
    { 
        name: "Herbal Powder", 
        icon: <HerbalPowderIcon className="w-12 h-12" />
    },
    { 
        name: "Healthy Breakfast", 
        icon: <HealthyBreakfastIcon className="w-12 h-12" />
    },
    { 
        name: "Healthy Snack & Sweets", 
        icon: <HealthySnackIcon className="w-12 h-12" />
    },
    { 
        name: "Honey Based Products", 
        icon: <HoneyIcon className="w-12 h-12" />
    },
    { 
        name: "Nuts & Spices", 
        icon: <NutsSpicesIcon className="w-12 h-12" />
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

export function Benefits() {
  return (
    <section id="benefits" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Wellness for Every Chapter</h2>
          <p className="text-xl text-muted-foreground">Nourishing solutions for every stage of life’s journey.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="text-center h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-primary/10 p-6">
                <div className="mx-auto bg-accent/10 text-primary p-4 rounded-full w-fit mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-primary">{benefit.name}</CardTitle>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
