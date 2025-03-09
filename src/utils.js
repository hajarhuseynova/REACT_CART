export const getTotal = (cart) => {
  let totalAmount = 0
  let totalCost = 0

  //CART.VALUES() !!IMPORTANT
  for (let { price, amount } of cart.values()) {
    totalAmount += amount
    totalCost += amount * price
  }
  return { totalAmount, totalCost }
}
