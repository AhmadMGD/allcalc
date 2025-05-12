
import { ProfitLossCalculator } from "@/components/calculators/ProfitLossCalculator";
import { CalculatorAction } from "@/components/calculators/CalculatorLayout";
import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";

const ProfitLoss = () => {
  return (
    <MainLayout>
      <Header />
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Profit & Loss Calculator
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Calculate your profit or loss and see your business performance at a glance.
            </p>
          </div>
          
          <div className="mx-auto max-w-2xl">
            <ProfitLossCalculator />
            <CalculatorAction />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfitLoss;
