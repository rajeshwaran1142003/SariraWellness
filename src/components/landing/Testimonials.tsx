import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "My 4-year-old is a picky eater, but she loves her 'figgy milk' every morning. It's such a relief to know she's getting the iron she needs without any fuss. A must-have for mothers!",
    name: "Priya S.",
    location: "Chennai",
    initials: "PS"
  },
  {
    quote: "I've replaced my evening coffee with a warm cup of Fig Malt, and the difference is amazing. I sleep better and feel more energetic. It has an authentic, earthy taste that feels so pure.",
    name: "Anand M.",
    location: "Coimbatore",
    initials: "AM"
  },
  {
    quote: "As someone recovering from a long illness, SARIRA has been a blessing. It’s gentle on my stomach and has helped me regain my strength. This isn't just a product; it's nourishment.",
    name: "Kavitha R.",
    location: "Madurai",
    initials: "KR"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Voices From Our Community</h2>
          <p className="text-xl text-muted-foreground">Real stories from families who've embraced our traditions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background border-primary/10">
              <CardContent className="p-8">
                <p className="text-muted-foreground italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
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
