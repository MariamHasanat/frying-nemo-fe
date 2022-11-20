// This file contains functions that are widely used in cart operations => to help in code reuse :)

const getCartQuantity = (id , cart) => {
  const cartItem = cart.find (item => item.meal.id === id) ;
  if (cartItem) 
    return cartItem.quantity ;
  else
    return 0 ;
}
export {getCartQuantity} ;