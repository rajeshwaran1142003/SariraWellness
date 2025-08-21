"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Phone, Mail, Clock, MapPin, Send } from '@/components/icons/Icons';
import Link from "next/link";
import { WhatsappIcon } from '@/components/icons/Icons';
import { CONTACT_CONTENT, SITE_CONFIG } from '@/config/content';

const iconMap = {
  WhatsApp: WhatsappIcon,
  Mail: Mail,
  Clock: Clock,
  MapPin: MapPin,
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{CONTACT_CONTENT.title}</h2>
          <p className="text-xl text-muted-foreground">{CONTACT_CONTENT.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
            {/* Left Column */}
            <div className="lg:col-span-2">
                <Card className="p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                    <div className="space-y-2">
                        {CONTACT_CONTENT.contactInfo.map((item, index) => {
                          const IconComponent = iconMap[item.icon] || Mail;
                          return (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-lg transition-colors duration-300 hover:bg-primary/5">
                                <div className="bg-accent/10 p-3 rounded-full mt-1">
                                    <IconComponent className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                    {item.href ? (
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-accent font-medium hover:underline">{item.value}</a>
                                    ) : (
                                        <p className="text-sm text-muted-foreground font-medium">{item.value}</p>
                                    )}
                                </div>
                            </div>
                          );
                        })}
                    </div>
                    <div className="mt-8 space-y-4">
                        <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white transition-transform duration-300 hover:scale-105">
                            <Link href={SITE_CONFIG.contact.whatsapp} target="_blank">
                                <WhatsappIcon className="mr-2"/> Order on Whatsapp
                            </Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="w-full text-accent border-accent hover:bg-accent hover:text-accent-foreground transition-transform duration-300 hover:scale-105">
                            <Link href={`mailto:${SITE_CONFIG.contact.email}`}>
                                <Mail className="mr-2"/> Send Email
                            </Link>
                        </Button>
                    </div>
                </Card>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3">
                 <Card className="bg-primary/95 text-primary-foreground p-8 shadow-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-primary-foreground/80">First Name</label>
                                    <input id="first-name" placeholder="Your first name" required className="w-full bg-background/10 border border-white/20 text-white placeholder:text-white/50 rounded-lg px-3 py-2"/>
                                </div>
                                 <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-primary-foreground/80">Last Name</label>
                                    <input id="last-name" placeholder="Your last name" required className="w-full bg-background/10 border border-white/20 text-white placeholder:text-white/50 rounded-lg px-3 py-2"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-primary-foreground/80">Email</label>
                                <input id="email" type="email" placeholder="your.email@example.com" required className="w-full bg-background/10 border border-white/20 text-white placeholder:text-white/50 rounded-lg px-3 py-2"/>
                            </div>
                             <div className="space-y-2">
                                <label htmlFor="phone" className="text-primary-foreground/80">Phone Number</label>
                                <input id="phone" type="tel" placeholder="+91 98765 43210" className="w-full bg-background/10 border border-white/20 text-white placeholder:text-white/50 rounded-lg px-3 py-2"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-primary-foreground/80">Subject</label>
                                <select id="subject" className="w-full bg-background/10 border border-white/20 text-white placeholder:text-white/50 rounded-lg px-3 py-2">
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="order">Order Support</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="reseller">Reseller Inquiry</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-primary-foreground/80">Message</label>
                                <textarea id="message" placeholder="Tell us how we can help you..." required rows={5} className="w-full bg-background/10 border border-white/20 text-white placeholder:text-white/50 rounded-lg px-3 py-2"/>
                            </div>
                            <div className="text-right">
                                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl px-8 transition-transform duration-300 hover:scale-105">
                                    <Send className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-[400px] text-center">
                            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                            <p className="text-white/80">Thank you for reaching out to SARIRA! We will get back to you soon.</p>
                        </div>
                    )}
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}