let intialState = [];

const reducer = (cart , action) => {

  switch (action.type) {

    case 'Increment': {
      let found = false;
      const newCart = cart.map(cartItem => {
        console.log(cartItem)
        if (cartItem.meal.id === action.meal.id) {
          found = true;
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });

      if (!found) {
        return [...cart, { meal: action.meal, quantity: 1 }];
      }
      else {
        return newCart;
      }

    }
    case 'Decrement':{
      let shouldDelete = false;
      const newCart = cart.map((cartItem) => {
        if (cartItem.meal.id === action.meal.id) {
          if (cartItem.quantity === 1) {
            shouldDelete = true;
          }
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });

      if (shouldDelete) {
        return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
      }
    else {
      return newCart;

    }
     }
     case "Delete": {
       return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
      }
      default : break;

    }
    
  }

  export {
    reducer,
    intialState
  }