const getCartQuantity= (id,cart)=>{
  const currentCartQun=cart.find((cartItem)=>{
   if(cartItem.meal.id===id)
    return cart;
  })
  if(currentCartQun){
  return currentCartQun.quantity
  }
  
  else return 0
    }
    export {getCartQuantity}