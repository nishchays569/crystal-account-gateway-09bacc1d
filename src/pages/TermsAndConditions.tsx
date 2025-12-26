import { FileText } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <FileText className="text-primary" size={20} />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Terms and Conditions</h1>
      </div>

      <div className="bg-card rounded-lg border border-border p-6 space-y-6 text-sm text-muted-foreground">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p>By accessing and using this platform, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">2. Eligibility</h2>
          <p>You must be at least 18 years old to use our services. By using this platform, you represent that you meet this age requirement and have the legal capacity to enter into binding agreements.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">3. Account Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">4. Prohibited Activities</h2>
          <p>You agree not to engage in any illegal activities, fraudulent transactions, or any activity that could harm other users or the platform. This includes money laundering, terrorist financing, or any other financial crimes.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">5. Transactions</h2>
          <p>All transactions are final and non-reversible unless otherwise stated. You are responsible for ensuring the accuracy of all transaction details before confirmation.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">6. Fees</h2>
          <p>We may charge fees for certain services. All applicable fees will be disclosed before you complete a transaction. Fees are subject to change with prior notice.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">7. Limitation of Liability</h2>
          <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">8. Modifications</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">9. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
        </section>

        <p className="text-xs text-muted-foreground pt-4 border-t border-border">Last updated: December 2025</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
