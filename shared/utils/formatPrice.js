export default function formatPrice(amount) {
  const dollarAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100);
  return dollarAmount;
}
