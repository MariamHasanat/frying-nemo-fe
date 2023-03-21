
const reducer = (cart, action) => {
  switch (action.type) {
    case `INCREMENT`: {
      let found = false;

      let newCart = cart.map((cartItem) => {
        if (cartItem.item._id == action.item._id) {
          found = true;
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else return cartItem;
      });

      const newItem = { item: action.item, quantity: 1 };
      
      if (!found) {
        newCart = [...newCart, newItem];
      }

      return newCart;
    }
    case `DECREMENT`: {
      let newCart = cart.map((cartItem) => {
        if (cartItem.item._id == action.item._id) return { ...cartItem, quantity: cartItem.quantity - 1 };
        else return cartItem;
      });
      newCart = newCart.filter(cartItem => cartItem.quantity != 0);
      return newCart;
    }
    case `DELETE`: {
      let newCart = [...cart];
      newCart = newCart.filter(cartItem => cartItem.item._id != action.item._id);
      return newCart;
    }
    case `CLEAR`: {
      return [];
    }
    case `SET`: {
      return action.cart;
    }
    default:
      throw new Error();
  }
};

export { reducer };