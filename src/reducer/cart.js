
    const reducer = (cart, action) => {
      // eslint-disable-next-line default-case
      switch (action.type) {
        case "ADD_CART_ITEM":
          return [...cart, { meal: action.meal, quantity: 1 }];
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
          return newCart;
        }
        case "DECREMENT_CART_QUANTITY": {
          const newCart = cart.map(cartItem => {
            return cartItem.meal.id === action.meal.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem;
          });

          return newCart.filter(cartItem => cartItem.quantity > 0);

        }
        case "DELETE_CART_ITEM": {
          return cart.filter(cartItem => cartItem.meal.id !== action.meal.id);
        }
        case "CLEAR_CART" :{
          return cart.cartItem=[];
        }
        case 'SET':
          return action.cart;
      }

      return cart;
    };
    export{
      reducer ,
    }