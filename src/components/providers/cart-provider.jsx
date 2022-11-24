import React, { useReducer } from "react";
import { reducer, initialState } from '../reducers/cart';

export const CartContext = React.createContext(null);

/**
 * 
 * @param {{children: React.ReactNode}} props 
 * @returns 
 */
const CartProvider = (props) => {


  const [cart, dispatch] = useReducer(reducer, initialState);
  let amount = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   amount += (cart[i].quantity * cart[i].meal.price);
  // }

  amount = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.meal.price;
  }
    , 0
  );

  return (
    <CartContext.Provider value={{ cart, dispatch, amount }}>
      {
        props.children
      }
    </CartContext.Provider>

  );
};

export default CartProvider;