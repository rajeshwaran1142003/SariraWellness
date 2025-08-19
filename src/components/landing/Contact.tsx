"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MessageSquare, Send } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get in Touch with Us</h2>
          <p className="text-xl text-muted-foreground">We'd love to hear from you!</p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg border-primary/10 rounded-2xl">
           {!submitted ? (
            <>
                <CardHeader>
                    <CardTitle className="text-primary">Contact Form</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2 text-primary/80"><User className="w-4 h-4" /> Full Name</Label>
                        <Input id="name" placeholder="Your Name" required className="rounded-xl"/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="flex items-center gap-2 text-primary/80"><Mail className="w-4 h-4" /> Email Address</Label>
                            <Input id="email" type="email" placeholder="Your Email" required className="rounded-xl"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="flex items-center gap-2 text-primary/80"><Phone className="w-4 h-4" /> Phone Number (Optional)</Label>
                            <Input id="phone" type="tel" placeholder="Your Phone Number" className="rounded-xl"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message" className="flex items-center gap-2 text-primary/80"><MessageSquare className="w-4 h-4" /> Message</Label>
                        <Textarea id="message" placeholder="How can we help you?" required rows={5} className="rounded-xl"/>
                    </div>
                    <div className="text-right">
                        <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-6">
                            <Send className="mr-2 h-4 w-4" /> Send Message
                        </Button>
                    </div>
                    </form>
                </CardContent>
             </>
          ) : (
            <CardContent className="p-10 text-center">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                 </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Thank you for reaching out to SARIRA! We will get back to you soon.</p>
            </CardContent>
          )}
        </Card>
      </div>
    </section>
  );
}
