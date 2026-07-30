export const formatCurrency = (value: number) => {
  const currencyCode =
    typeof window !== "undefined"
      ? localStorage.getItem("currency") || "INR"
      : "INR";

  const locale = currencyCode === "USD" ? "en-US" : "en-IN";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(value);
};
