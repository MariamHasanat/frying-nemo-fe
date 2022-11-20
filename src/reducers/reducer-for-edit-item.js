 /** the reduces function
    * @param {Array<{
  *       quantity: number;
  *       item:{
  *           id: string;
  *           name: string;
  *           image: string;
  *           description: string;
  *           price: number;
  *           category: string;
  *           ingredients: string[];
  *       }
  * }>} cart 
  * 
  * @param {{
  *      type:string;
  *      item:{
  *          id: string;
  *          name: string;
  *          image: string;
  *          description: string;
  *          price: number;
  *          category: string;
  *          ingredients: string[];
  *      }
  * }} action 
   */
  const reduce = (cart, action) => {
      switch (action.type) {
          case "ADD_CART_ITEM": {
              return [...cart, { item: action.item, quantity: 1 }];
          }
          case "DELETE_CART_ITEM": {
              return cart.filter(cartItem => cartItem.item.id !== action.item.id);
          }
          case "INCREMENT_CART_QUANTITY": {
              let found = false;
              const newCart1 = cart.map(cartItem => {
                  if (cartItem.item.id === action.item.id) {
                      found = true;
                      return { ...cartItem, quantity: cartItem.quantity + 1 };
                  }
                  else
                      return cartItem;
              });
              if (!found)
                  return [...cart, { item: action.item, quantity: 1 }];
              else
                  return newCart1;
          }
          case "DECREMENT_CART_QUANTITY": {
              let shouldDelete = false;
              const newCart2 = cart.map(cartItem => {
                  if (cartItem.item.id === action.item.id) {
                      shouldDelete |= (cartItem.quantity === 1);
                      return { ...cartItem, quantity: cartItem.quantity - 1 };
                  }
                  else
                      return cartItem;
              });
              if (shouldDelete)
                  return cart.filter(cartItem => cartItem.item.id !== action.item.id);
              else
                  return newCart2;
          }
          default:
              return cart;
      }
  };
  export{
    reduce
  }