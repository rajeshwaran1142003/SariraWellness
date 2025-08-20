"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const supportTopics = [
  {
    id: 'shipping',
    title: 'Shipping & Delivery',
    content: (
        <div className="prose">
            <p>We deliver across India. Orders are typically processed within 1-2 business days and delivered within 6-10 working days. You'll receive a tracking link once your order is dispatched.</p>
            <Link href="/shipping-and-delivery" className="text-accent font-semibold hover:underline">Learn More →</Link>
        </div>
    )
  },
  {
    id: 'returns',
    title: 'Returns & Refunds',
    content: (
         <div className="prose">
            <p>We accept returns of unopened items in their original packaging within 7 days of delivery. If you receive a damaged or incorrect product, please contact us within 48 hours for a replacement or full refund.</p>
            <Link href="/returns-and-refunds" className="text-accent font-semibold hover:underline">Learn More →</Link>
        </div>
    )
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    content: (
         <div className="prose">
            <p>Your privacy is important to us. We collect personal information for order processing but do not store payment details. We never sell your data to third parties. Your trust is our priority.</p>
            <Link href="/privacy-policy" className="text-accent font-semibold hover:underline">Learn More →</Link>
        </div>
    )
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    content: (
         <div className="prose">
            <p>By using our website, you agree to our terms of service. This includes using the site lawfully and for its intended purpose. All content is the property of SARIRA Wellness.</p>
            <Link href="/terms-of-service" className="text-accent font-semibold hover:underline">Learn More →</Link>
        </div>
    )
  },
];

export function Support() {
  const [activeTab, setActiveTab] = useState(supportTopics[0].id);
  const activeTopic = supportTopics.find(topic => topic.id === activeTab);

  return (
    <section id="support" className="bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-5xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="bg-white p-6 border-b">
            <CardTitle className="text-2xl md:text-3xl font-bold text-primary text-center">Support Center</CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Tabs Navigation */}
              <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible -mx-2 px-2 md:border-r md:pr-8">
                {supportTopics.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id ? 'text-accent' : 'text-muted-foreground hover:text-primary'
                    } relative whitespace-nowrap text-left text-lg font-medium p-3 transition-colors duration-300`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId="bubble"
                        className="absolute inset-x-0 bottom-0 md:bottom-auto md:top-0 md:-left-1 md:h-full md:w-1 bg-accent"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 min-h-[150px]">
                <h3 className="text-2xl font-bold text-primary mb-4">{activeTopic?.title}</h3>
                <div className="text-muted-foreground leading-relaxed">
                  {activeTopic?.content}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
