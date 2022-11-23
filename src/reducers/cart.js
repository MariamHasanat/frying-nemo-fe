const initialState = [];

// action is an object : meal
// sometimes many action : so, use action.type

const reducer = (cart, action) => {
  // this function updates the state of cart
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cart, { meal: action.meal, quantity: 1 }];
    case "INCREMENT_CART_QUANTITY": {
      let found = false;
      const newCart = cart.map((cartItem) => {
        if (cartItem.meal.id === action.meal.id) {
          found = true;
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
      // if not found, add the new item to the cart
      if (!found) {
        return [...cart, { meal: action.meal, quantity: 1 }];
      }
      return newCart;
    }
    case "DECREMENT_CART_QUANTITY": {
      let shouldDelete = false;
      const newCart = cart.map((cartItem) => {
        if (cartItem.meal.id === action.meal.id) {
          if (cartItem.quantity - 1 === 0) {
            shouldDelete = true;
          }
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });
      if (shouldDelete) {
        return cart.filter((cartItem) => cartItem.meal.id !== action.meal.id);
      }
      return newCart;
    }
    case "DELETE_CART_QUANTITY": {
      return cart.filter((cartItem) => cartItem.meal.id !== action.meal.id);
    }
    case "DELETE_CART_ITEMS": {
      return (cart = []);
    }
    default:
      return cart; // no updates
  }
};

export { reducer, initialState };
