export default function priceFormatter(
  price: number,
  locales = "en-US",
  currency: string = "USD"
) {
  return Intl.NumberFormat(locales, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
