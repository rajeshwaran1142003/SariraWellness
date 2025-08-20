
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Info, Share2, Cookie, Lock, BadgeCheck, Users, RefreshCcw, Landmark } from "lucide-react";

const policySections = [
  {
    id: "info",
    title: "1. Information We Collect",
    icon: <Info className="w-5 h-5" />,
    content: (
      <div className="prose-sm md:prose-base max-w-none text-muted-foreground">
        <p>When you use our website or place an order, we may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name, phone number, email address, shipping address, billing address.</li>
          <li><strong>Payment Information:</strong> Processed securely via third-party payment gateways (we do not store your card details).</li>
          <li><strong>Order History:</strong> Items purchased, quantity, order value, and delivery records.</li>
          <li><strong>Device/Usage Data:</strong> IP address, browser type, referring URL, and time spent on pages (for analytics).</li>
          <li><strong>Communication:</strong> Emails, WhatsApp, or feedback shared with us.</li>
        </ul>
      </div>
    )
  },
  {
    id: "usage",
    title: "2. How We Use Your Information",
    icon: <Shield className="w-5 h-5" />,
    content: (
        <div className="prose-sm md:prose-base max-w-none text-muted-foreground">
            <p>We use your data to:</p>
            <ul>
                <li>Process and fulfill your orders.</li>
                <li>Send order confirmations and delivery updates.</li>
                <li>Provide customer support.</li>
                <li>Send promotional emails (only with your consent).</li>
                <li>Improve our website, services, and user experience.</li>
                <li>Prevent fraud and ensure secure transactions.</li>
            </ul>
      </div>
    )
  },
  {
    id: "sharing",
    title: "3. Sharing Your Information",
    icon: <Share2 className="w-5 h-5" />,
    content: (
        <div className="prose-sm md:prose-base max-w-none text-muted-foreground">
            <p>We do not sell, rent, or trade your personal information. We only share it with:</p>
            <ul>
                <li>Logistics and courier partners (to deliver your order).</li>
                <li>Payment gateways (to securely process your transaction).</li>
                <li>Email/SMS marketing tools (only if you opt-in for updates).</li>
            </ul>
            <p>All partners are expected to comply with strict data protection standards. A list of our key sub-processors is available upon request.</p>
      </div>
    )
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking",
    icon: <Cookie className="w-5 h-5" />,
    content: (
        <div className="prose-sm md:prose-base max-w-none text-muted-foreground">
            <p>Our website uses cookies to enhance your browsing experience and help us understand user behavior. You can adjust your browser settings to disable cookies at any time, although this may impact site functionality.</p>
        </div>
    )
  },
  {
    id: "security",
    title: "5. Data Security",
    icon: <Lock className="w-5 h-5" />,
    content: (
        <div className="prose-sm md:prose-base max-w-none text-muted-foreground">
            <p>We use industry-standard encryption and security protocols to protect your data from unauthorized access, misuse, or disclosure. Your payment details are handled by trusted third-party gateways that are PCI-DSS compliant.</p>
        </div>
    )
  },
    {
    id: "rights",
    title: "6. Your Rights",
    icon: <BadgeCheck className="w-5 h-5" />,
    content: (
        <div className="prose-sm md:prose-base max-w-none text-muted-foreground">
            <p>You may:</p>
            <ul>
                <li>Request access to your personal data.</li>
                <li>Ask for corrections or deletions.</li>
                <li>Opt out of promotional emails at any time.</li>
                <li>Request account deactivation.</li>
            </ul>
            <p>For any of the above, email us at <a href="mailto:sariranutrition@gmail.com" className="text-accent hover:underline">sariranutrition@gmail.com</a>. We will respond to all legitimate requests within 30 days.</p>
        </div>
    )
  },
  {
    id: "children",
    title: "7. Children’s Privacy",
    icon: <Users className="w-5 h-5" />,
    content: (
        <div className="prose-sm md:prose-base max-w-none text-muted-foreground">
            <p>Our products are intended for purchase by adults. We do not knowingly collect personal data from children under 18.</p>
        </div>
    )
  },
    {
    id: "updates",
    title: "8. Policy Updates",
    icon: <RefreshCcw className="w-5 h-5" />,
    content: (
        <div className="prose-sm md:prose-base max-w-none text-muted-foreground">
            <p>We may update this Privacy Policy from time to time. The latest version will always be available on our website, and your continued use indicates acceptance.</p>
        </div>
    )
  },
  {
    id: "contact",
    title: "9. Contact Us",
    icon: <Landmark className="w-5 h-5" />,
    content: (
        <div className="prose-sm md:prose-base max-w-none text-muted-foreground">
            <p>
              For questions, feedback, or privacy concerns, contact:
              <br />
              SARIRA Wellness
              <br />
              Email: <a href="mailto:sariranutrition@gmail.com" className="text-accent hover:underline">sariranutrition@gmail.com</a>
              <br />
              Phone: <a href="tel:+917010422748" className="text-accent hover:underline">+91-7010422748</a>
              <br />
              Website: www.sarirawellness.com
            </p>
            <p>We aim to respond to all privacy-related inquiries within 48 hours.</p>
      </div>
    )
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Privacy Policy
                </h1>
                <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {policySections.map((section) => (
                <AccordionItem 
                    key={section.id} 
                    value={section.id} 
                    className="bg-white rounded-lg shadow-sm border border-border data-[state=open]:border-primary transition-all duration-300 hover:shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-primary hover:no-underline data-[state=open]:text-primary">
                    <div className="flex items-center gap-3">
                      <span className="text-accent">{section.icon}</span>
                      <span>{section.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-base">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
