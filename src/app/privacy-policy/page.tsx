import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl prose lg:prose-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Privacy Policy
            </h1>
            <p>
              Your privacy is important to us. This Privacy Policy explains how SARIRA Wellness ("we", "us", or "our") collects, uses, discloses, and safeguards your information when you visit our website.
            </p>

            <h2>Information Collection</h2>
            <p>We may collect personal information such as your name, shipping address, email address, and phone number when you place an order or contact us.</p>

            <h2>Use of Information</h2>
            <p>The information we collect is used to process your orders, communicate with you, and improve our services. We may also use it to send you promotional materials if you opt-in.</p>
            
            <h2>Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of the site.</p>

            <h2>Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and is only accessible by a limited number of persons who have special access rights.</p>
            
            <h2>Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications at any time. To exercise these rights, please contact us at support@sarirawellness.com.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
