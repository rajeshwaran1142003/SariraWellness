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
        question: "How do I consume SARIRA Fig Malt?",
        answer: "You can: Mix 1 tbsp with warm milk or water, Add to smoothies or porridge, Use as a toast topping, or bake into muffins or energy balls. Avoid boiling directly to preserve nutrients."
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
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-background border rounded-lg shadow-sm">
                <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">
                    Shipping & Delivery
                </AccordionTrigger>
                <AccordionContent className="px-6 text-base text-muted-foreground prose">
                    <p>We deliver across India, with free shipping on prepaid orders above ₹800. Orders are typically processed within 1 business day and delivered within 6-10 working days. You will receive tracking information via email once your order is dispatched. For more details, please see our <Link href="/shipping-and-delivery" className="text-accent hover:underline">full policy</Link>.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-background border rounded-lg shadow-sm">
                <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">
                    Returns & Refunds
                </AccordionTrigger>
                <AccordionContent className="px-6 text-base text-muted-foreground prose">
                    <p>We accept returns for unopened items within 7 days. If you receive a damaged or incorrect product, please contact us within 48 hours with a photo. Due to hygiene reasons, opened food products cannot be returned. Refunds are processed within 5-7 working days. See our <Link href="/returns-and-refunds" className="text-accent hover:underline">full policy</Link> for details.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-background border rounded-lg shadow-sm">
                <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">
                    Privacy Policy
                </AccordionTrigger>
                <AccordionContent className="px-6 text-base text-muted-foreground prose">
                    <p>We are committed to protecting your privacy. We collect personal information to process orders and improve our services. We do not sell your data. Your payment information is handled securely by our payment gateways. For more information, please review our <Link href="/privacy-policy" className="text-accent hover:underline">full privacy policy</Link>.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-background border rounded-lg shadow-sm">
                <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">
                    Terms of Service
                </AccordionTrigger>
                <AccordionContent className="px-6 text-base text-muted-foreground prose">
                    <p>By using our website, you agree to our terms. You must be 18 or older to purchase. All content on this site is the property of SARIRA. For complete details on orders, payments, and liability, please read our <Link href="/terms-of-service" className="text-accent hover:underline">full terms of service</Link>.</p>
                </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-5" className="bg-background border rounded-lg shadow-sm">
                <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">
                    General FAQ
                </AccordionTrigger>
                <AccordionContent className="px-6">
                    <Accordion type="single" collapsible className="w-full">
                        {generalFaqItems.map((item, index) => (
                             <AccordionItem key={index} value={`sub-item-${index}`} className="border-t first:border-t-0">
                                <AccordionTrigger className="text-base text-left hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground prose">
                                    <p>{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <div className="text-center mt-12 text-muted-foreground">
            <p>Still have questions? Feel free to <Link href="/#contact-form" className="text-accent hover:underline">contact our wellness team</Link>.</p>
        </div>
      </div>
    </section>
  );
}
