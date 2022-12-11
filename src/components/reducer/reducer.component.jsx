


function reducer(cart, action){
switch (action.type){
  case 'ADD_CART_ITEM': 
  return [...cart, {meal: action.meal, quantity: 1}];
  case 'INCREMENT_CART_QUANTITY':{
    let found = false;
    const newCart = cart.map(cartItem =>{
      if (cartItem.meal.id ===action.meal.id){
        found = true;
        return {...cartItem, quantity: cartItem.quantity +1 };
      }else {
        return cartItem;
      }
    });

    if(!found){
      return [...cart, {meal: action.meal, quantity: 1}]
    }
    return newCart
  }
  case 'DECREMENT_CART_QUANTITY': {
    let shouldDelete = false;
    const newCart = cart.map(cartItem =>{
      if(cartItem.meal.id === action.meal.id){
        if(cartItem.quantity === 1){
          shouldDelete = true;
        }
        return{...cartItem,quantity: cartItem.quantity - 1};
      
      }
      else{
        return cartItem;
      }
    });

    if (shouldDelete){
      return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);

    }
    return newCart
  }
  case 'DELETE_CART_ITEM':{
    return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
  }

  case "DELETE_ALL_ITEMS": {
    return [];
}

case "SET": {
  return action.cart
}


}
return cart;
}




export  {reducer};
