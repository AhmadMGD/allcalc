
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorLayout } from "./CalculatorLayout";
import { formatCurrency, formatPercentage, parseNumberInput, calculateGST } from "@/utils/calculatorUtils";
import { useCalculator } from "@/contexts/CalculatorContext";

export function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("10");
  const [result, setResult] = useState<{ gst: number; total: number } | null>(null);
  const { saveCalculation } = useCalculator();

  const handleCalculate = () => {
    const amountValue = parseNumberInput(amount);
    const rateValue = parseFloat(rate);
    
    if (amountValue <= 0) {
      return;
    }
    
    const calculationResult = calculateGST(amountValue, rateValue);
    setResult(calculationResult);
  };

  const handleSave = () => {
    if (!result) return;
    
    saveCalculation({
      calculator: "GST Calculator",
      title: `GST Calculation - ${new Date().toLocaleDateString()}`,
      data: {
        "Amount (excl. GST)": formatCurrency(parseNumberInput(amount)),
        "GST Rate": formatPercentage(parseFloat(rate)),
        "GST Amount": formatCurrency(result.gst),
        "Total Amount": formatCurrency(result.total)
      }
    });
  };

  return (
    <CalculatorLayout
      title="GST Calculator"
      description="Calculate the GST (Goods and Services Tax) amount and total price"
      onCalculate={handleCalculate}
      onSave={handleSave}
      disableSave={!result}
    >
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="amount">Amount (excluding GST)</Label>
          <Input
            id="amount"
            type="text"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="calculator-input"
          />
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="rate">GST Rate (%)</Label>
          <Select defaultValue={rate} onValueChange={setRate}>
            <SelectTrigger id="rate" className="calculator-input">
              <SelectValue placeholder="Select GST rate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5%</SelectItem>
              <SelectItem value="10">10%</SelectItem>
              <SelectItem value="12.5">12.5%</SelectItem>
              <SelectItem value="15">15%</SelectItem>
              <SelectItem value="18">18%</SelectItem>
              <SelectItem value="20">20%</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {result && (
          <div className="calculator-result mt-6">
            <h3 className="text-lg font-medium mb-2">Result</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">GST Amount</p>
                <p className="text-lg font-medium text-finance-darkBlue">
                  {formatCurrency(result.gst)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-lg font-medium text-finance-darkBlue">
                  {formatCurrency(result.total)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
