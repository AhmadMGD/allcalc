
import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

type CalculationResult = {
  calculator: string;
  title: string;
  data: Record<string, string | number>;
  timestamp: string;
};

interface CalculatorContextType {
  savedCalculations: CalculationResult[];
  saveCalculation: (calculation: Omit<CalculationResult, "timestamp">) => void;
  exportCalculationsToPDF: () => void;
  clearCalculations: () => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [savedCalculations, setSavedCalculations] = useState<CalculationResult[]>([]);

  const saveCalculation = (calculation: Omit<CalculationResult, "timestamp">) => {
    const newCalculation: CalculationResult = {
      ...calculation,
      timestamp: new Date().toISOString(),
    };
    
    setSavedCalculations((prev) => [...prev, newCalculation]);
    toast.success("Calculation saved!");
  };

  const exportCalculationsToPDF = () => {
    // In a real application, we would use a library like jsPDF to generate a PDF
    // For now, we'll just show what would be exported
    if (savedCalculations.length === 0) {
      toast.error("No calculations to export!");
      return;
    }

    // Create a data URL representing the JSON data
    const dataStr = JSON.stringify(savedCalculations, null, 2);
    const dataUri = `data:text/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    // Create a link and trigger a download
    const exportLink = document.createElement("a");
    exportLink.setAttribute("href", dataUri);
    exportLink.setAttribute("download", `calculations-${new Date().toISOString().slice(0, 10)}.json`);
    exportLink.click();
    
    toast.success("Calculations exported! In a production app, this would be a PDF.");
  };

  const clearCalculations = () => {
    setSavedCalculations([]);
    toast.success("Calculations cleared!");
  };

  return (
    <CalculatorContext.Provider
      value={{
        savedCalculations,
        saveCalculation,
        exportCalculationsToPDF,
        clearCalculations,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error("useCalculator must be used within a CalculatorProvider");
  }
  return context;
}
