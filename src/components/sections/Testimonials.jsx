import { Card, CardContent } from "@/components/ui/Card";
import { TESTIMONIALS_CONTENT } from '@/config/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{TESTIMONIALS_CONTENT.title}</h2>
          <p className="text-xl text-muted-foreground">{TESTIMONIALS_CONTENT.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS_CONTENT.testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="bg-background border-primary/10 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-8 flex flex-col h-full">
                <p className="text-muted-foreground italic mb-6 text-lg leading-relaxed flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 mr-4 bg-primary/10 text-primary font-bold rounded-full flex items-center justify-center">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}