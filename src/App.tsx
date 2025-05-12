
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { CalculatorProvider } from "./contexts/CalculatorContext";

// Pages
import Index from "./pages/Index";
import ProfitLoss from "./pages/ProfitLoss";
import Percentage from "./pages/Percentage";
import ROI from "./pages/ROI";
import BreakEven from "./pages/BreakEven";
import Discount from "./pages/Discount";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CalculatorProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profit-loss" element={<ProfitLoss />} />
            <Route path="/percentage" element={<Percentage />} />
            <Route path="/roi" element={<ROI />} />
            <Route path="/break-even" element={<BreakEven />} />
            <Route path="/discount" element={<Discount />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CalculatorProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
