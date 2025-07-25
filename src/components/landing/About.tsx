import Image from 'next/image';
import { Counter } from './Counter';

export function About() {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image 
              src="https://placehold.co/800x600.png"
              data-ai-hint="traditional kitchen"
              alt="Traditional Kitchen" 
              width={800}
              height={600}
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why We Exist</h2>
            <p className="text-xl italic text-foreground/80 mb-6">"In our homes, grandmothers didn't read labels. They just knew."</p>
            <p className="text-muted-foreground mb-4">SARIRA was born from a simple realization - the wisdom of our ancestors holds timeless value in today's fast-paced world. Our grandmothers created nourishing remedies without scientific studies, simply by understanding nature's gifts.</p>
            <p className="text-muted-foreground mb-8">We bridge the gap between this ancient wisdom and modern nutritional science, creating products that honor tradition while meeting today's standards of efficacy and convenience.</p>
            <div className="flex justify-around text-center">
              <div>
                <Counter target={100} className="text-4xl font-bold text-accent" />
                <span className="text-primary font-medium">% Natural</span>
              </div>
              <div>
                <Counter target={1000} className="text-4xl font-bold text-accent" />
                <span className="text-primary font-medium">Happy Families</span>
              </div>
              <div>
                <Counter target={5} className="text-4xl font-bold text-accent" />
                <span className="text-primary font-medium">Generations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
