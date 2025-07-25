import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "My kids finally enjoy a healthy breakfast without complaints. The Fig Malt tastes like childhood memories.",
    name: "Rajesh K.",
    location: "Chennai",
    initials: "RK"
  },
  {
    quote: "As a senior, I find this so much easier to digest than other health drinks. I feel more energetic throughout the day.",
    name: "Priya S.",
    location: "Coimbatore",
    initials: "PS"
  },
  {
    quote: "Authentic taste and pure ingredients. It's rare to find a product that is both healthy and genuinely traditional.",
    name: "Anand M.",
    location: "Madurai",
    initials: "AM"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Voices From Our Community</h2>
          <p className="text-xl text-muted-foreground">Real stories from families who've embraced our traditions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background border-primary/10">
              <CardContent className="p-8">
                <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={`https://placehold.co/48x48.png`} data-ai-hint="portrait person" />
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{testimonial.initials}</AvatarFallback>
                  </Avatar>
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
