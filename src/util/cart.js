const getCartQuantity = (id , cart) => {
  const cartItem = cart.find (item => item.meal.id === id) ;
  if (cartItem) 
    return cartItem.quantity ;
  else
    return 0 ;
}
export {getCartQuantity} ;