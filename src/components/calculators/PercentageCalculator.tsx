
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalculatorLayout } from "./CalculatorLayout";
import { formatNumber, formatPercentage, parseNumberInput, calculatePercentage } from "@/utils/calculatorUtils";
import { useCalculator } from "@/contexts/CalculatorContext";

export function PercentageCalculator() {
  const [value, setValue] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("find-percentage");
  const { saveCalculation } = useCalculator();

  const handleCalculate = () => {
    const valueNum = parseNumberInput(value);
    const percentageNum = parseNumberInput(percentage);
    
    if (valueNum <= 0 || percentageNum <= 0) {
      return;
    }
    
    if (activeTab === "find-percentage") {
      // Calculate X% of Y
      const calculatedResult = calculatePercentage(valueNum, percentageNum);
      setResult(calculatedResult);
    } else {
      // Calculate X is what % of Y
      const calculatedResult = (valueNum / percentageNum) * 100;
      setResult(calculatedResult);
    }
  };

  const handleSave = () => {
    if (result === null) return;
    
    if (activeTab === "find-percentage") {
      saveCalculation({
        calculator: "Percentage Calculator",
        title: `Percentage Calculation - ${new Date().toLocaleDateString()}`,
        data: {
          "Base Value": formatNumber(parseNumberInput(value)),
          "Percentage": formatPercentage(parseNumberInput(percentage)),
          "Result": formatNumber(result)
        }
      });
    } else {
      saveCalculation({
        calculator: "Percentage Calculator",
        title: `Percentage Ratio Calculation - ${new Date().toLocaleDateString()}`,
        data: {
          "Value": formatNumber(parseNumberInput(value)),
          "Base Value": formatNumber(parseNumberInput(percentage)),
          "Percentage Ratio": formatPercentage(result)
        }
      });
    }
  };

  return (
    <CalculatorLayout
      title="Percentage Calculator"
      description="Calculate percentages and percentage ratios"
      onCalculate={handleCalculate}
      onSave={handleSave}
      disableSave={result === null}
    >
      <Tabs 
        defaultValue="find-percentage" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="find-percentage">Find Percentage</TabsTrigger>
          <TabsTrigger value="percentage-ratio">Percentage Ratio</TabsTrigger>
        </TabsList>
        
        <TabsContent value="find-percentage" className="space-y-4 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="value">Value</Label>
            <Input
              id="value"
              type="text"
              placeholder="0.00"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="calculator-input"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="percentage">Percentage (%)</Label>
            <Input
              id="percentage"
              type="text"
              placeholder="0.00"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="calculator-input"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="percentage-ratio" className="space-y-4 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="value-ratio">Value</Label>
            <Input
              id="value-ratio"
              type="text"
              placeholder="0.00"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="calculator-input"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="total-value">Total Value</Label>
            <Input
              id="total-value"
              type="text"
              placeholder="0.00"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="calculator-input"
            />
          </div>
        </TabsContent>
        
        {result !== null && (
          <div className="calculator-result mt-6">
            <h3 className="text-lg font-medium mb-2">Result</h3>
            <div>
              {activeTab === "find-percentage" ? (
                <p className="text-lg font-medium text-finance-darkBlue">
                  {formatNumber(parseNumberInput(percentage))}% of {formatNumber(parseNumberInput(value))} = {formatNumber(result)}
                </p>
              ) : (
                <p className="text-lg font-medium text-finance-darkBlue">
                  {formatNumber(parseNumberInput(value))} is {formatPercentage(result)} of {formatNumber(parseNumberInput(percentage))}
                </p>
              )}
            </div>
          </div>
        )}
      </Tabs>
    </CalculatorLayout>
  );
}
