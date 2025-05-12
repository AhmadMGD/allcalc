
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CalculatorLayout } from "./CalculatorLayout";
import { formatCurrency, formatNumber, parseNumberInput, calculateBreakEven } from "@/utils/calculatorUtils";
import { useCalculator } from "@/contexts/CalculatorContext";

export function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [variableCost, setVariableCost] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const { saveCalculation } = useCalculator();

  const handleCalculate = () => {
    const fixedCostsValue = parseNumberInput(fixedCosts);
    const sellingPriceValue = parseNumberInput(sellingPrice);
    const variableCostValue = parseNumberInput(variableCost);
    
    if (fixedCostsValue <= 0 || sellingPriceValue <= 0 || variableCostValue >= sellingPriceValue) {
      return;
    }
    
    const calculationResult = calculateBreakEven(
      fixedCostsValue, 
      sellingPriceValue, 
      variableCostValue
    );
    
    setResult(calculationResult);
  };

  const handleSave = () => {
    if (result === null) return;
    
    saveCalculation({
      calculator: "Break-even Calculator",
      title: `Break-even Point Calculation - ${new Date().toLocaleDateString()}`,
      data: {
        "Fixed Costs": formatCurrency(parseNumberInput(fixedCosts)),
        "Selling Price Per Unit": formatCurrency(parseNumberInput(sellingPrice)),
        "Variable Cost Per Unit": formatCurrency(parseNumberInput(variableCost)),
        "Break-even Point (Units)": Math.ceil(result).toString(),
        "Revenue at Break-even": formatCurrency(Math.ceil(result) * parseNumberInput(sellingPrice))
      }
    });
  };

  return (
    <CalculatorLayout
      title="Break-even Point Calculator"
      description="Calculate how many units you need to sell to break even"
      onCalculate={handleCalculate}
      onSave={handleSave}
      disableSave={result === null}
    >
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="fixedCosts">Fixed Costs</Label>
          <Input
            id="fixedCosts"
            type="text"
            placeholder="0.00"
            value={fixedCosts}
            onChange={(e) => setFixedCosts(e.target.value)}
            className="calculator-input"
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="sellingPrice">Selling Price Per Unit</Label>
          <Input
            id="sellingPrice"
            type="text"
            placeholder="0.00"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            className="calculator-input"
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="variableCost">Variable Cost Per Unit</Label>
          <Input
            id="variableCost"
            type="text"
            placeholder="0.00"
            value={variableCost}
            onChange={(e) => setVariableCost(e.target.value)}
            className="calculator-input"
          />
        </div>
        
        {result !== null && (
          <div className="calculator-result mt-6">
            <h3 className="text-lg font-medium mb-2">Break-even Analysis</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Break-even Point (Units)</p>
                <p className="text-lg font-medium text-finance-darkBlue">
                  {Math.ceil(result).toLocaleString()} units
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Revenue at Break-even</p>
                <p className="text-lg font-medium text-finance-darkBlue">
                  {formatCurrency(Math.ceil(result) * parseNumberInput(sellingPrice))}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
