// it updates the object state and returns the updated state 
const reducer = (cart, action) => {
  let finalCart = cart ; 
  //eslint-disable-next-line default-case 
  switch (action.type) {
    case "INCREMENT": {
      let found = false;
      const newCart = cart.map(item => {
        if (item.meal.id === action.meal.id) {
          found = true;
          return { meal: item.meal, quantity: item.quantity + 1 };
        }
        else {
          return item;
        }
      });
      if (!found) {
        finalCart = [...cart, { meal: action.meal, quantity: 1 }];
      }
      else {
        finalCart = newCart;
      }
      break;
    }
    case "DECREMENT": {
      const newCart = cart.map(item => {
        return item.meal.id === action.meal.id 
          ?  { meal: item.meal, quantity: item.quantity - 1 }
          : item ;
      });
      finalCart = newCart.filter(item => item.quantity);
      break ;
    }
    case "DELETE": {
      finalCart = cart.filter(item => item.meal.id !== action.meal.id);
      break;
    }
    case "CLEAR": {
      finalCart = [] ;
      break;
    }
    case "SET": {
      finalCart = action.cart ;
      break;
    }
    // default : return cart ;
  }
  // localStorage.setItem ('cart' , JSON.stringify (finalCart));
  return finalCart;
};
export { reducer  };