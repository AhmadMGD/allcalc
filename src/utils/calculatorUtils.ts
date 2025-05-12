
// Utility functions for the calculators

// Format numbers with commas for thousands
export function formatNumber(num: number): string {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// Format as currency (with $ sign)
export function formatCurrency(amount: number): string {
  return '$' + formatNumber(amount);
}

// Format as percentage
export function formatPercentage(percentage: number): string {
  return percentage.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) + '%';
}

// Parse input to number, handling non-numeric input
export function parseNumberInput(input: string): number {
  const parsedValue = parseFloat(input.replace(/[^\d.-]/g, ''));
  return isNaN(parsedValue) ? 0 : parsedValue;
}

// Calculate GST
export function calculateGST(amount: number, rate: number): { gst: number, total: number } {
  const gst = amount * (rate / 100);
  const total = amount + gst;
  return { gst, total };
}

// Calculate Profit & Loss
export function calculateProfitLoss(costPrice: number, sellingPrice: number): { 
  profit: number, 
  loss: number, 
  profitMargin: number, 
  lossMargin: number 
} {
  const difference = sellingPrice - costPrice;
  
  if (difference >= 0) {
    return {
      profit: difference,
      loss: 0,
      profitMargin: costPrice > 0 ? (difference / costPrice) * 100 : 0,
      lossMargin: 0
    };
  } else {
    return {
      profit: 0,
      loss: Math.abs(difference),
      profitMargin: 0,
      lossMargin: costPrice > 0 ? (Math.abs(difference) / costPrice) * 100 : 0
    };
  }
}

// Calculate Percentage
export function calculatePercentage(value: number, percentage: number): number {
  return (value * percentage) / 100;
}

// Calculate ROI
export function calculateROI(investment: number, returns: number): {
  roi: number,
  roiPercentage: number
} {
  const roi = returns - investment;
  const roiPercentage = investment > 0 ? (roi / investment) * 100 : 0;
  
  return { roi, roiPercentage };
}

// Calculate Break-even Point
export function calculateBreakEven(
  fixedCosts: number, 
  sellingPricePerUnit: number, 
  variableCostPerUnit: number
): number {
  const contributionMargin = sellingPricePerUnit - variableCostPerUnit;
  if (contributionMargin <= 0) return 0;
  return fixedCosts / contributionMargin;
}

// Calculate Discount
export function calculateDiscount(
  originalPrice: number, 
  discountPercentage: number
): { discountAmount: number, finalPrice: number } {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const finalPrice = originalPrice - discountAmount;
  
  return { discountAmount, finalPrice };
}
