
import { DiscountCalculator } from "@/components/calculators/DiscountCalculator";
import { CalculatorAction } from "@/components/calculators/CalculatorLayout";
import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";

const Discount = () => {
  return (
    <MainLayout>
      <Header />
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Discount Calculator
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Calculate discounts and final prices for your business transactions.
            </p>
          </div>
          
          <div className="mx-auto max-w-2xl">
            <DiscountCalculator />
            <CalculatorAction />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Discount;
