
import { MainLayout } from "@/components/layout/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-finance-darkBlue mb-6">About Us</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We're dedicated to empowering small business owners, freelancers, and entrepreneurs with professional-grade financial calculators that simplify complex business decisions. Our toolkit provides accurate, easy-to-use calculators that help you make informed financial choices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-finance-gray p-6 rounded-lg">
                <h3 className="font-semibold text-finance-darkBlue mb-3">GST Calculator</h3>
                <p className="text-gray-700">Calculate GST inclusive and exclusive amounts with precision for your business transactions.</p>
              </div>
              <div className="bg-finance-gray p-6 rounded-lg">
                <h3 className="font-semibold text-finance-darkBlue mb-3">Profit & Loss Calculator</h3>
                <p className="text-gray-700">Analyze your business profitability with detailed profit and loss calculations.</p>
              </div>
              <div className="bg-finance-gray p-6 rounded-lg">
                <h3 className="font-semibold text-finance-darkBlue mb-3">ROI Calculator</h3>
                <p className="text-gray-700">Measure the return on your investments to make smarter business decisions.</p>
              </div>
              <div className="bg-finance-gray p-6 rounded-lg">
                <h3 className="font-semibold text-finance-darkBlue mb-3">Break-even Analysis</h3>
                <p className="text-gray-700">Determine when your business will become profitable with our break-even calculator.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Why Choose Our Calculators?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-finance-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700"><strong>Accurate Calculations:</strong> All our calculators use standard financial formulas for precise results.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-finance-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700"><strong>Privacy First:</strong> Your data stays on your device - we don't store your calculations.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-finance-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700"><strong>Mobile Friendly:</strong> Use our calculators on any device, anywhere.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-finance-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700"><strong>Export Results:</strong> Save and share your calculations as PDF reports.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-finance-darkBlue mb-4">Our Commitment</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              We're committed to providing reliable, user-friendly financial tools that help businesses thrive. Our calculators are continuously updated to reflect current business practices and regulations, ensuring you always have access to accurate calculations.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
