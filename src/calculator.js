export function calculateDiscount(price, discount) {
  return price + discount;
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