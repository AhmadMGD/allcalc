
import { ProfitLossCalculator } from "@/components/calculators/ProfitLossCalculator";
import { Header } from "@/components/layout/Header";
import { CalculatorAction } from "@/components/calculators/CalculatorLayout";

const ProfitLossPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Profit & Loss Calculator
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Calculate your profit or loss margins with this easy-to-use calculator.
              </p>
            </div>
            
            <div className="mx-auto max-w-2xl">
              <ProfitLossCalculator />
              <CalculatorAction />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-gray-50 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                © 2025 Business & Finance Calculator Toolkit. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfitLossPage;
