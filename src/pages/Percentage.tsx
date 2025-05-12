
import { PercentageCalculator } from "@/components/calculators/PercentageCalculator";
import { CalculatorAction } from "@/components/calculators/CalculatorLayout";
import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";

const Percentage = () => {
  return (
    <MainLayout>
      <Header />
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Percentage Calculator
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Calculate percentage values, discounts, and ratios with ease.
            </p>
          </div>
          
          <div className="mx-auto max-w-2xl">
            <PercentageCalculator />
            <CalculatorAction />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Percentage;
