
import React, { useReducer } from "react";
import { useEffect } from "react";

import {  reducer } from "../../reduce/cart";
export const CartContext = React.createContext(null);
/**
 * @param { { children:React.ReactNode}} props
 * @returns 
 */
const CartProviders = (props) => {
  const cartFromLocalStorge= JSON.parse(localStorage.getItem('cart')||'[]')
  const[cart,dispatch]=useReducer(reducer,cartFromLocalStorge);
  useEffect(()=>localStorage.setItem('cart',JSON.stringify(cart)),[cart])
  
  return (
    <CartContext.Provider value={{ cart , dispatch }}>
      {props.children}
    </CartContext.Provider>

  );
};
export default CartProviders;