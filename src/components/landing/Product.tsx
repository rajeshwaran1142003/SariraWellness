import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import SariraFigMalt from '@/components/icons/SariraFigMalt';

const benefits = [
  "Supports digestive health naturally",
  "Boosts energy without artificial stimulants",
  "Rich in antioxidants and essential minerals",
  "Promotes healthy gut microbiome",
  "Safe for all ages - kids to seniors",
];

const nutritionFacts = [
  { label: "Energy", value: "320 kcal" },
  { label: "Protein", value: "5.2g" },
  { label: "Carbohydrates", value: "68g" },
  { label: "Dietary Fiber", value: "7.5g" },
  { label: "Natural Sugars", value: "52g" },
];

export function Product() {
  return (
    <section id="product" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Fig Malt – Tradition You Can Sip</h2>
          <p className="text-xl text-muted-foreground">A nourishing blend that carries the essence of Tamil heritage in every spoon</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <SariraFigMalt
              alt="Fig Malt"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl animate-floating"
            />
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-3 mt-1 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Nutrition Facts (per 100g)</h3>
              <div className="bg-secondary/50 p-4 rounded-lg">
                {nutritionFacts.map((fact, index) => (
                  <div key={index} className={`flex justify-between py-2 ${index < nutritionFacts.length - 1 ? 'border-b' : ''}`}>
                    <span className="text-muted-foreground">{fact.label}</span>
                    <span className="font-medium text-primary">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <div>
                <div className="text-3xl font-bold text-primary">₹299</div>
                <div className="text-muted-foreground">200g jar</div>
              </div>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/product">Buy Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
