import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqItems = [
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
    {
        question: "Where do you ship and how long does it take?",
        answer: "We ship across India. Orders are usually delivered in 3–7 business days depending on your location. Orders above ₹800 are eligible for free shipping."
    },
    {
        question: "What payment options do you accept?",
        answer: "We accept UPI, debit/credit cards, net banking, and Cash on Delivery (COD) in select locations."
    },
    {
        question: "Who do I contact for queries or returns?",
        answer: "For any support, email us at support@sarirawellness.com or WhatsApp us at +91-7010422748. We're available Mon–Sat, 10AM – 6PM."
    }
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">SARIRA Fig Malt – Wellness Made Simple</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
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
        <div className="text-center mt-12 text-muted-foreground">
            <p>Still have questions? Feel free to <Link href="/#contact-form" className="text-accent hover:underline">contact our wellness team</Link>.</p>
        </div>
      </div>
    </section>
  );
}
