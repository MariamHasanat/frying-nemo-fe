const initial = [];

const reducer = (cart, action) => {

  switch (action.type) {

    case "Add-to-cart ":
      return [...cart, { meal: action.meal, quantity: 1 }];

    /*                ***********INCREMENT*********              */

    case "Increment-cart-Quantity": {
      let found = false;
      const newCart = cart.map(cartItem => {
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
      return newCart;
    }

    /*                ***********DECREMENT*********              */

    case "Decrement-cart-Quantity": {
      let shouldDelete = false;
      const newCart = cart.map(cartItem => {
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

      return newCart;
    }
    /*                ***********DELETE*********              */
    case "Delete-cart": {
      return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
    }
    case "Delete-All": {
      // return  cart={ { meal: action.meal, quantity: 0}}   
    }

  }

  return cart;

};

export {
  initial,
  reducer
}