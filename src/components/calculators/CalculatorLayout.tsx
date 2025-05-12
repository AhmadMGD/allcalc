
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCalculator } from "@/contexts/CalculatorContext";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  onCalculate: () => void;
  onSave: () => void;
  disableSave?: boolean;
}

export function CalculatorLayout({
  title,
  description,
  children,
  onCalculate,
  onSave,
  disableSave = true
}: CalculatorLayoutProps) {
  return (
    <Card className="w-full card-shadow">
      <CardHeader className="bg-finance-gray rounded-t-lg">
        <CardTitle className="text-finance-darkBlue">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {children}
      </CardContent>
      <CardFooter className="flex justify-between gap-4 pt-2 pb-4">
        <Button 
          variant="default" 
          size="lg" 
          className="bg-finance-blue hover:bg-finance-darkBlue"
          onClick={onCalculate}
        >
          Calculate
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={onSave}
          disabled={disableSave}
        >
          Save Result
        </Button>
      </CardFooter>
    </Card>
  );
}

export function CalculatorAction() {
  const { exportCalculationsToPDF, clearCalculations } = useCalculator();
  
  return (
    <div className="flex justify-end gap-4 my-8">
      <Button 
        variant="outline" 
        onClick={clearCalculations}
      >
        Clear All
      </Button>
      <Button 
        variant="default"
        className="bg-finance-blue hover:bg-finance-darkBlue"
        onClick={exportCalculationsToPDF}
      >
        Export to PDF
      </Button>
    </div>
  );
}
