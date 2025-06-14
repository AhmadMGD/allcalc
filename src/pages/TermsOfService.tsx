
import { MainLayout } from "@/components/layout/MainLayout";

const TermsOfService = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-finance-darkBlue mb-6">Terms of Service</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Acceptance of Terms</h2>
            <p>By accessing and using our Business & Finance Calculator Toolkit, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Use License</h2>
            <p>Permission is granted to temporarily use our calculators for personal and commercial purposes. This license shall automatically terminate if you violate any of these restrictions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Disclaimer</h2>
            <p>The calculators and information provided are for educational and informational purposes only. Results should not be considered as professional financial advice. Always consult with qualified professionals for important financial decisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Accuracy of Calculations</h2>
            <p>While we strive for accuracy, we make no warranties about the completeness, reliability, and accuracy of the calculator results. It is your responsibility to verify all calculations independently.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Limitations</h2>
            <p>In no event shall our company or its suppliers be liable for any damages arising out of the use or inability to use our calculators.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Modifications</h2>
            <p>We reserve the right to revise these terms at any time without notice. By using our calculators, you agree to be bound by the current version of these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Contact Information</h2>
            <p>Questions about the Terms of Service should be sent to us through our contact form.</p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfService;
