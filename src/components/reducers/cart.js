const initialState = [];
// it updates the object state and returns the updated state 
const reducer = (cart, action) => {
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
        return [...cart, { meal: action.meal, quantity: 1 }];
      }
      else {
        return newCart;
      }
    }
    case "DECREMENT": {
      const newCart = cart.map(item => {
        return item.meal.id === action.meal.id 
          ?  { meal: item.meal, quantity: item.quantity - 1 }
          : item ;
      });
      return newCart.filter(item => item.quantity);
      
    }
    // default : return cart ;
  }

};
export { reducer, initialState };