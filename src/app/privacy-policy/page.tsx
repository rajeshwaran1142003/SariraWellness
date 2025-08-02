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
              Welcome to SARIRA! Your privacy is important to us, and we are committed to protecting the personal information you share with us.
            </p>

            <h2>1. Information We Collect</h2>
            <p>When you use our website or place an order, we may collect the following types of information:</p>
            <ul>
                <li><strong>Personal Information:</strong> Name, phone number, email address, shipping address, billing address</li>
                <li><strong>Payment Information:</strong> Processed securely via third-party payment gateways (we do not store your card details)</li>
                <li><strong>Order History:</strong> Items purchased, quantity, order value, and delivery records</li>
                <li><strong>Device/Usage Data:</strong> IP address, browser type, referring URL, and time spent on pages (for analytics)</li>
                <li><strong>Communication:</strong> Emails, WhatsApp, or feedback shared with us</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul>
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and delivery updates</li>
                <li>Provide customer support</li>
                <li>Send promotional emails (only with your consent)</li>
                <li>Improve our website, services, and user experience</li>
                <li>Prevent fraud and ensure secure transactions</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>We do not sell, rent, or trade your personal information. We only share it with:</p>
            <ul>
                <li>Logistics and courier partners (to deliver your order)</li>
                <li>Payment gateways (to securely process your transaction)</li>
                <li>Email/SMS marketing tools (only if you opt-in for updates)</li>
            </ul>
            <p>All partners are expected to comply with strict data protection standards.</p>

            <h2>4. Cookies &amp; Tracking</h2>
            <p>Our website uses cookies to enhance your browsing experience and help us understand user behavior. You can adjust your browser settings to disable cookies at any time, although this may impact site functionality.</p>

            <h2>5. Data Security</h2>
            <p>We use industry-standard encryption and security protocols to protect your data from unauthorized access, misuse, or disclosure. Your payment details are handled by trusted third-party gateways that are PCI-DSS compliant.</p>

            <h2>6. Your Rights</h2>
            <p>You may:</p>
            <ul>
                <li>Request access to your personal data</li>
                <li>Ask for corrections or deletions</li>
                <li>Opt out of promotional emails at any time</li>
                <li>Request account deactivation</li>
            </ul>
            <p>For any of the above, email us at sariranutrition@gmail.com.</p>

            <h2>7. Children’s Privacy</h2>
            <p>Our products are intended for purchase by adults. We do not knowingly collect personal data from children under 18.</p>

            <h2>8. Policy Updates</h2>
            <p>We may update this Privacy Policy from time to time. The latest version will always be available on our website, and your continued use indicates acceptance.</p>

            <h2>Contact Us</h2>
            <p>
              For questions, feedback, or privacy concerns, contact:
              <br />
              SARIRA Wellness
              <br />
              Email: sariranutrition@gmail.com
              <br />
              Phone: +91-7010422748
              <br />
              Website: www.sarirawellness.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
