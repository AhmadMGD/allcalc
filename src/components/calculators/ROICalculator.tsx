
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "./CalculatorLayout";
import { formatCurrency, formatPercentage, parseNumberInput, calculateROI } from "@/utils/calculatorUtils";
import { useCalculator } from "@/contexts/CalculatorContext";

export function ROICalculator() {
  const [investment, setInvestment] = useState("");
  const [returns, setReturns] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateROI> | null>(null);
  const { saveCalculation } = useCalculator();

  const handleCalculate = () => {
    const investmentValue = parseNumberInput(investment);
    const returnsValue = parseNumberInput(returns);
    
    if (investmentValue <= 0) {
      return;
    }
    
    const calculationResult = calculateROI(investmentValue, returnsValue);
    setResult(calculationResult);
  };

  const handleSave = () => {
    if (!result) return;
    
    saveCalculation({
      calculator: "ROI Calculator",
      title: `ROI Calculation - ${new Date().toLocaleDateString()}`,
      data: {
        "Investment Amount": formatCurrency(parseNumberInput(investment)),
        "Return Amount": formatCurrency(parseNumberInput(returns)),
        "ROI": formatCurrency(result.roi),
        "ROI Percentage": formatPercentage(result.roiPercentage)
      }
    });
  };

  return (
    <CalculatorLayout
      title="ROI Calculator"
      description="Calculate Return on Investment"
      onCalculate={handleCalculate}
      onSave={handleSave}
      disableSave={!result}
    >
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="investment">Investment Amount</Label>
          <Input
            id="investment"
            type="text"
            placeholder="0.00"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            className="calculator-input"
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="returns">Return Amount</Label>
          <Input
            id="returns"
            type="text"
            placeholder="0.00"
            value={returns}
            onChange={(e) => setReturns(e.target.value)}
            className="calculator-input"
          />
        </div>
        
        {result && (
          <div className={`calculator-result mt-6 ${result.roi >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
            <h3 className="text-lg font-medium mb-2">ROI Calculation</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">ROI</p>
                <p className={`text-lg font-medium ${result.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(result.roi)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">ROI Percentage</p>
                <p className={`text-lg font-medium ${result.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatPercentage(result.roiPercentage)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
