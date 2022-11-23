const getCartQuantity = (id, cart) => {
  const currentCartItem = cart.find((cartItem) => cartItem.meal.id === id);
  if (currentCartItem) return currentCartItem.quantity;
  else return 0;
};
const getCartValue = (cart) => {
  let totalValue = 0;
  for (let i = 0; i < cart.length; i++) {
      totalValue += cart[i].meal.price * cart[i].quantity;
  }
  return totalValue;
};

export { getCartQuantity, getCartValue };
