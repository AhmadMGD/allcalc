
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "./CalculatorLayout";
import { formatCurrency, formatPercentage, parseNumberInput, calculateDiscount } from "@/utils/calculatorUtils";
import { useCalculator } from "@/contexts/CalculatorContext";

export function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateDiscount> | null>(null);
  const { saveCalculation } = useCalculator();

  const handleCalculate = () => {
    const originalPriceValue = parseNumberInput(originalPrice);
    const discountPercentageValue = parseNumberInput(discountPercentage);
    
    if (originalPriceValue <= 0 || discountPercentageValue <= 0) {
      return;
    }
    
    const calculationResult = calculateDiscount(originalPriceValue, discountPercentageValue);
    setResult(calculationResult);
  };

  const handleSave = () => {
    if (!result) return;
    
    saveCalculation({
      calculator: "Discount Calculator",
      title: `Discount Calculation - ${new Date().toLocaleDateString()}`,
      data: {
        "Original Price": formatCurrency(parseNumberInput(originalPrice)),
        "Discount Percentage": formatPercentage(parseNumberInput(discountPercentage)),
        "Discount Amount": formatCurrency(result.discountAmount),
        "Final Price": formatCurrency(result.finalPrice)
      }
    });
  };

  return (
    <CalculatorLayout
      title="Discount Calculator"
      description="Calculate discounted prices and savings"
      onCalculate={handleCalculate}
      onSave={handleSave}
      disableSave={!result}
    >
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="originalPrice">Original Price</Label>
          <Input
            id="originalPrice"
            type="text"
            placeholder="0.00"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="calculator-input"
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="discountPercentage">Discount Percentage (%)</Label>
          <Input
            id="discountPercentage"
            type="text"
            placeholder="0.00"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            className="calculator-input"
          />
        </div>
        
        {result && (
          <div className="calculator-result mt-6">
            <h3 className="text-lg font-medium mb-2">Discount Calculation</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Discount Amount</p>
                <p className="text-lg font-medium text-finance-darkBlue">
                  {formatCurrency(result.discountAmount)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Final Price</p>
                <p className="text-lg font-medium text-green-600">
                  {formatCurrency(result.finalPrice)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
