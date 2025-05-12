
import { Button } from "@/components/ui/button";
import { useCalculator } from "@/contexts/CalculatorContext";

export function Header() {
  const { exportCalculationsToPDF } = useCalculator();
  
  return (
    <header className="bg-white py-6 border-b border-gray-200">
      <div className="container px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-finance-darkBlue">
              Business & Finance Calculator Toolkit
            </h1>
            <p className="text-gray-500 mt-1">
              Professional calculators for business owners and freelancers
            </p>
          </div>
          <Button
            className="bg-finance-blue hover:bg-finance-darkBlue"
            onClick={exportCalculationsToPDF}
          >
            Download PDF Report
          </Button>
        </div>
      </div>
    </header>
  );
}
