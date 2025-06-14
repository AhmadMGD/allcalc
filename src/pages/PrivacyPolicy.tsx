
import { MainLayout } from "@/components/layout/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-finance-darkBlue mb-6">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Information We Collect</h2>
            <p>We collect information you provide directly to us when using our business calculator toolkit. This may include:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Calculator inputs and results for your personal use</li>
              <li>Contact information when you reach out to us</li>
              <li>Usage data to improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide and maintain our calculator services</li>
              <li>Improve and personalize your experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates about our services (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Data Storage and Security</h2>
            <p>Your calculator data is processed locally in your browser and is not stored on our servers unless you explicitly save results. We implement appropriate security measures to protect your information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Cookies and Tracking</h2>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Remember your preferences</li>
              <li>Analyze site usage with Google Analytics</li>
              <li>Serve relevant advertisements through Google AdSense</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
            </ul>
            <p>These services may collect information as described in their respective privacy policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Disable cookies through your browser settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us through our contact form.</p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
