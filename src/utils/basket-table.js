export const calculateSubtotal = (itemsInBasket) => {
  const subtotal = itemsInBasket.reduce((total, itemInBasket) => {
    const productTotal = itemInBasket.price * itemInBasket.quantity;
    return total + productTotal;
  }, 0);

  return Number(subtotal.toFixed(2));
}

export const calculateVAT = (total) => {
  const vat = (total / 100) * 20;
  return Number(vat.toFixed(2));
}