export default function discountCalculator(price: number, percentage: number) {
  return price - (price * percentage) / 100;
}
