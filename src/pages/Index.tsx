
import { GSTCalculator } from "@/components/calculators/GSTCalculator";
import { Header } from "@/components/layout/Header";
import { CalculatorAction } from "@/components/calculators/CalculatorLayout";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { MainLayout } from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <Header />
      <main className="flex-1">
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Business & Finance Calculator Toolkit
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Professional calculators to simplify your business decisions. Quick, accurate, and easy to use.
              </p>
            </div>
            
            <div className="mx-auto max-w-2xl">
              <GSTCalculator />
              <CalculatorAction />
            </div>
          </div>
        </section>
        
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      
      <footer className="border-t bg-gray-50 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                © 2025 Business & Finance Calculator Toolkit. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                The calculators provided are for informational purposes only. Always consult with a qualified professional for financial advice.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
};

export default Index;
