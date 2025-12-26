import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Shield className="text-primary" size={20} />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Privacy Policy</h1>
      </div>

      <div className="bg-card rounded-lg border border-border p-6 space-y-6 text-sm text-muted-foreground">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, make transactions, or contact us for support. This may include your name, email address, phone number, wallet addresses, and transaction history.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send notifications, and respond to your requests. We may also use your information to detect and prevent fraud.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our platform, subject to confidentiality agreements.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">5. Cookies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">6. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications. Contact us to exercise these rights.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.</p>
        </section>

        <p className="text-xs text-muted-foreground pt-4 border-t border-border">Last updated: December 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
