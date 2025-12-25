export const formatCurrency = (
  amount: number,
  currency: string = "USD"
) => {
  try {
    const validCurrency = currency?.toUpperCase() || "USD";
    const safeAmount = Number(amount) || 0;

    // Manual BDT formatting (Stripe-safe UI)
    if (validCurrency === "BDT") {
      return `৳ ${safeAmount.toLocaleString("en-BD", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: validCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(safeAmount);
  } catch {
    return `${currency} ${Number(amount).toFixed(2)}`;
  }
};
