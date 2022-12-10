const getCartQuantity = (id, cart) => {
  const cartItem = cart.find(cartItem => cartItem.meal.id === id);
  if (cartItem) {
    return cartItem.quantity;
  } else {
    return 0;
  }
};
export {
  getCartQuantity
};
