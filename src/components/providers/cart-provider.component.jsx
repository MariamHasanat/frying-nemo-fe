import React, { useReducer } from "react";
import { useEffect } from "react";

import {reducer, initialState } from "../../reducers/cart";
export const  CartContext = React.createContext(null);

/**
 * @param {{
 *  children: React.ReactNode;
 * }} props Component props
 */

const CartProvider = (props) => {

  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') ||
   '[]');
  const [cart, dispatch] = useReducer(reducer, cartFromLocalStorage);

  
  useEffect( () => localStorage.setItem('cart',JSON.stringify(cart)),
  [cart]);
  return (

    <CartContext.Provider value={{cart,dispatch }}>
      {props.children}
    </CartContext.Provider>

  );
};
export default CartProvider;