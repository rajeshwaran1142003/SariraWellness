"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { User, Mail, MapPin, Send } from "lucide-react";

export function StoreLocator() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="store-locator" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Find SARIRA Near You</h2>
          <p className="text-xl text-muted-foreground">Let us help you find our products in a store near you.</p>
        </div>

        <Card className="max-w-xl mx-auto shadow-lg border-primary/10">
           {!submitted ? (
            <>
                <CardHeader>
                    <CardTitle className="text-primary">Store Request Form</CardTitle>
                    <CardDescription>Fill out the form and we'll help you locate a nearby store.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2"><User className="w-4 h-4" /> Name</Label>
                        <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2"><Mail className="w-4 h-4" /> Email Address</Label>
                        <Input id="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="location" className="flex items-center gap-2"><MapPin className="w-4 h-4" /> City or Location</Label>
                        <Input id="location" placeholder="e.g., Adyar, Chennai" required />
                    </div>
                    <div className="text-right">
                        <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Send className="mr-2 h-4 w-4" /> Submit
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
                <h3 className="text-2xl font-bold text-primary mb-2">Thank you!</h3>
                <p className="text-muted-foreground">We will help you find SARIRA near you. Please check your email for updates.</p>
            </CardContent>
          )}
        </Card>
      </div>
    </section>
  );
}