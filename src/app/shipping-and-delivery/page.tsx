import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ShippingAndDeliveryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Shipping & Delivery
            </h1>
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Delivery Areas</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  We currently ship to all major cities and towns across India. If you are in a remote location, please contact us at support@sarirawellness.com to confirm delivery feasibility.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">Shipping Charges</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  We offer free shipping on all orders above ₹800. For orders below this amount, a flat shipping fee of ₹70 is applicable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">Processing Timelines</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Orders are typically processed within 1-2 business days. You will receive a shipping confirmation email with tracking details once your order is dispatched. Delivery usually takes 3-7 business days depending on your location.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">Failed Delivery</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  If our shipping partner is unable to deliver the product, we will attempt to contact you. If the order is returned to us, we will issue a refund for the product amount, excluding any shipping charges.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl">Order Cancellation</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  You can cancel your order within 24 hours of placing it for a full refund. Please contact our support team at support@sarirawellness.com with your order details to request a cancellation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
