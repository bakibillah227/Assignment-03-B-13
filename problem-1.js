/* Problem-1 */

function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  }

  if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  let discountAmount = (currentPrice * discount) / 100;
  let newPrice = currentPrice - discountAmount;
  return newPrice.toFixed(3);
}

console.log(newPrice(500, "5"));
