const getItemQuantity = (cart, id) => {
  const currentItem = cart.find(item => item.meal.id === id);
  if (currentItem) {
    return currentItem.quantity;
  }
  return 0;
};
export { getItemQuantity };