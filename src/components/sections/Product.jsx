import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from '@/components/icons/Icons';
import Link from 'next/link';
import { SITE_CONFIG, IMAGES } from '@/config/content';

const benefits = [
    { text: "Fertility booster" },
    { text: "Postpartum nourishment" },
    { text: "Improves gut health" },
    { text: "Naturally sweet – no added sugar" },
    { text: "Rich in iron & fiber" },
];

export function Product() {
  return (
    <section id="product" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Fig Malt – Tradition You Can Sip</h2>
          <p className="text-xl text-muted-foreground">{SITE_CONFIG.product.subtitle}</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
             <Image
                src={IMAGES.productImage}
                alt="SARIRA Fig Malt Pouch"
                width={500}
                height={500}
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
                    <span className="text-muted-foreground">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <div>
                <div className="text-3xl font-bold text-primary">{SITE_CONFIG.product.price}</div>
                <div className="text-muted-foreground">{SITE_CONFIG.product.weight}</div>
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