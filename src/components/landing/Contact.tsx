import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function Contact() {
  return (
    <section id="contact-form" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">We’d love to hear from you. Send us a message!</p>
        </div>
        <Card className="max-w-2xl mx-auto shadow-lg border-primary/10">
            <CardHeader>
                <CardTitle className="text-primary">Contact Form</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your Message" rows={5} />
                    </div>
                    <div className="text-right">
                        <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            Send Message
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
