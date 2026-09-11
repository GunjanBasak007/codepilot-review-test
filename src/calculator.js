export function calculateDiscount(price, discount) {
  if (discount < 0) {
    return price;
  }

  return price - discount;
}

export function divide(a, b) {
  return a / b;
}

export function getTotal(items) {
  let total = 0;

  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }

  return total;
}

export function calculateFinalPrice(price, discount, tax) {
  const discountedPrice = price - discount;
  const finalPrice = discountedPrice * tax;

  return finalPrice;
}