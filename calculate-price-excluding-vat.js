// DESCRIPTION:
// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

function excludingVatPrice(price) {
  if (price === null) return -1;
  
  const originalPrice = price / 1.15;
  return Math.round(originalPrice * 100) / 100;
}