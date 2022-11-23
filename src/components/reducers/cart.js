const initialState = JSON.parse(localStorage.getItem('cart') || '[]');
const reducer = (cart, action) => {
  // This function updates the state
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREMENT_CART_QUANTITY": {
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
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;

    }
    case "DECREMENT_CART_QUANTITY": {
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
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    }

    case "DELETE_CART_ITEM": {
      const newCart = cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    }
  }

  return cart.filter();
};
export {
  reducer, initialState
};