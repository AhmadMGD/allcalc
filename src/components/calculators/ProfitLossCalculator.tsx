
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "./CalculatorLayout";
import { formatCurrency, formatPercentage, parseNumberInput, calculateProfitLoss } from "@/utils/calculatorUtils";
import { useCalculator } from "@/contexts/CalculatorContext";

export function ProfitLossCalculator() {
  const [costPrice, setCostPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateProfitLoss> | null>(null);
  const { saveCalculation } = useCalculator();

  const handleCalculate = () => {
    const costPriceValue = parseNumberInput(costPrice);
    const sellingPriceValue = parseNumberInput(sellingPrice);
    
    if (costPriceValue <= 0 || sellingPriceValue <= 0) {
      return;
    }
    
    const calculationResult = calculateProfitLoss(costPriceValue, sellingPriceValue);
    setResult(calculationResult);
  };

  const handleReset = () => {
    setCostPrice("");
    setSellingPrice("");
    setResult(null);
  };

  const handleSave = () => {
    if (!result) return;
    
    const isProfit = result.profit > 0;
    
    saveCalculation({
      calculator: "Profit & Loss Calculator",
      title: `${isProfit ? 'Profit' : 'Loss'} Calculation - ${new Date().toLocaleDateString()}`,
      data: {
        "Cost Price": formatCurrency(parseNumberInput(costPrice)),
        "Selling Price": formatCurrency(parseNumberInput(sellingPrice)),
        [isProfit ? "Profit" : "Loss"]: formatCurrency(isProfit ? result.profit : result.loss),
        [isProfit ? "Profit Margin" : "Loss Margin"]: formatPercentage(isProfit ? result.profitMargin : result.lossMargin)
      }
    });
  };

  return (
    <CalculatorLayout
      title="Profit & Loss Calculator"
      description="Calculate profit or loss on your sales"
      onCalculate={handleCalculate}
      onReset={handleReset}
      onSave={handleSave}
      disableSave={!result}
    >
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="costPrice">Cost Price</Label>
          <Input
            id="costPrice"
            type="text"
            placeholder="0.00"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
            className="calculator-input"
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="sellingPrice">Selling Price</Label>
          <Input
            id="sellingPrice"
            type="text"
            placeholder="0.00"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            className="calculator-input"
          />
        </div>
        
        {result && (
          <div className={`calculator-result mt-6 ${result.profit > 0 ? 'bg-green-50' : 'bg-red-50'}`}>
            <h3 className="text-lg font-medium mb-2">
              {result.profit > 0 ? 'Profit' : 'Loss'} Calculation
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">
                  {result.profit > 0 ? 'Profit' : 'Loss'} Amount
                </p>
                <p className={`text-lg font-medium ${result.profit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(result.profit > 0 ? result.profit : result.loss)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  {result.profit > 0 ? 'Profit' : 'Loss'} Margin
                </p>
                <p className={`text-lg font-medium ${result.profit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatPercentage(result.profit > 0 ? result.profitMargin : result.lossMargin)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
