"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const generalFaqItems = [
    {
        question: "What is SARIRA Fig Malt made of?",
        answer: "SARIRA Fig Malt is made from 100% organic figs and premium nuts. No preservatives, no refined sugar, and no artificial flavors — just clean, plant-based nutrition."
    },
    {
        question: "Is SARIRA safe for children and elders?",
        answer: "Yes! SARIRA is gentle, nutritious, and family-friendly, suitable for children above 1 year and elders alike. It supports digestion, immunity, and energy in all age groups."
    },
    {
        question: "Can I use SARIRA as a sugar substitute?",
        answer: "Absolutely. SARIRA Fig Malt has a naturally sweet taste from figs and can be used in place of refined sugar in milk, tea, porridge, baking, or toast toppings."
    },
    {
        question: "What are the health benefits of SARIRA?",
        answer: (
            <ul className="list-disc pl-5 space-y-1">
                <li>Digestive health (rich in fiber)</li>
                <li>Energy and stamina</li>
                <li>Iron and calcium intake</li>
                <li>Gut-friendly sweetness</li>
                <li>Gentle detox and immunity support</li>
            </ul>
        )
    },
    {
        question: "How do I consume SARIRA Fig Malt?",
        answer: (
             <ul className="list-disc pl-5 space-y-1">
                <li>Mix 1 tbsp with warm milk or water</li>
                <li>Add to smoothies or porridge</li>
                <li>Use as a toast topping</li>
                <li>Bake into muffins or energy balls</li>
                <li className="font-medium">Avoid boiling directly to preserve nutrients.</li>
            </ul>
        )
    },
    {
        question: "Does SARIRA contain grains, preservatives, or added sugar?",
        answer: "No. SARIRA is grain-free, preservative-free, and refined sugar-free. Just figs and nuts — nothing more."
    },
    {
        question: "What is the shelf life of SARIRA Fig Malt?",
        answer: "SARIRA has a shelf life of 6 months when stored in a cool, dry place. Always close the lid tightly after use."
    },
];

const ShippingContent = () => (
    <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="shipping-1" className="bg-background border rounded-lg shadow-sm">
            <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">Shipping Coverage & Charges</AccordionTrigger>
            <AccordionContent className="px-6 text-base text-muted-foreground prose">
                <ul>
                <li>We deliver across India (local areas in Tamil Nadu included), excluding certain remote regions.</li>
                <li>Free shipping on prepaid orders above ₹800.</li>
                <li>For orders below ₹800, delivery charges vary by location.</li>
                </ul>
                <p className="mt-4">For more details, see our full <Link href="/shipping-and-delivery" className="text-accent">Shipping & Delivery Policy</Link>.</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping-2" className="bg-background border rounded-lg shadow-sm">
            <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">Order Processing Time</AccordionTrigger>
            <AccordionContent className="px-6 text-base text-muted-foreground prose">
                <ul>
                    <li>Orders placed before 5 PM are processed within 1 business day.</li>
                    <li>Weekends & public holidays are not processing days.</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping-3" className="bg-background border rounded-lg shadow-sm">
            <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">Delivery Timeline</AccordionTrigger>
            <AccordionContent className="px-6 text-base text-muted-foreground prose">
                <ul>
                    <li>Estimated delivery: 6–10 working days across India, depending on your location.</li>
                    <li>Courier tracking via email or SMS provided at dispatch.</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
);

const ReturnsContent = () => (
    <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="returns-1" className="bg-background border rounded-lg shadow-sm">
            <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">Return Policy</AccordionTrigger>
            <AccordionContent className="px-6 text-base text-muted-foreground">
                We accept returns of unopened items in their original packaging within 7 days of delivery. To initiate a return, please contact us at sariranutrition@gmail.com. For more details, see our full <Link href="/returns-and-refunds" className="text-accent">Returns & Refunds Policy</Link>.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns-2" className="bg-background border rounded-lg shadow-sm">
            <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">Damaged or Incorrect Products</AccordionTrigger>
            <AccordionContent className="px-6 text-base text-muted-foreground">
                If you receive a damaged or incorrect product, please send a photo of the item to our support team within 48 hours of delivery. We will arrange for a replacement or a full refund at no extra cost to you.
            </AccordionContent>
        </AccordionItem>
    </Accordion>
);

const PrivacyContent = () => (
    <div className="prose lg:prose-xl mx-auto bg-background p-6 rounded-lg shadow-sm">
        <p>
        Welcome to SARIRA! Your privacy is important to us, and we are committed to protecting the personal information you share with us. We collect information to process orders, improve our services, and communicate with you (with your consent). We do not sell your data and only share it with essential partners like logistics and payment gateways. For more details, please see our full <Link href="/privacy-policy" className="text-accent">Privacy Policy</Link>.
        </p>
    </div>
);

const TermsContent = () => (
     <div className="prose lg:prose-xl mx-auto bg-background p-6 rounded-lg shadow-sm">
        <p>
            By using www.sarirawellness.com, you agree to our terms. You must be 18 or older to purchase. All content is our intellectual property. We are not liable for damages from product misuse or website use. These terms are governed by Indian law. For complete details, please read our full <Link href="/terms-of-service" className="text-accent">Terms of Service</Link>.
        </p>
    </div>
);

const GeneralFaqContent = () => (
     <Accordion type="single" collapsible className="w-full space-y-4">
        {generalFaqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg shadow-sm">
                <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">
                    {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-base text-muted-foreground prose">
                    {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
);

function FaqContent() {
    const searchParams = useSearchParams();
    const topic = searchParams.get('topic');

    let content;
    let title;

    switch (topic) {
        case 'shipping':
            content = <ShippingContent />;
            title = 'Shipping & Delivery';
            break;
        case 'returns':
            content = <ReturnsContent />;
            title = 'Returns & Refunds';
            break;
        case 'privacy':
            content = <PrivacyContent />;
            title = 'Privacy Policy';
            break;
        case 'terms':
            content = <TermsContent />;
            title = 'Terms of Service';
            break;
        default:
            content = <GeneralFaqContent />;
            title = 'Frequently Asked Questions';
    }

    return (
        <>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {title}
                </h2>
                {topic === 'faq' && <p className="text-xl text-muted-foreground">SARIRA Fig Malt – Wellness Made Simple</p>}
            </div>
            {content}
            <div className="text-center mt-12 text-muted-foreground">
                <p>Still have questions? Feel free to <Link href="/#contact" className="text-accent hover:underline">contact our wellness team</Link>.</p>
            </div>
        </>
    );
}

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/50 py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Suspense fallback={<div>Loading...</div>}>
            <FaqContent />
        </Suspense>
      </div>
    </section>
  );
}