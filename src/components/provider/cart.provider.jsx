import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { reducer } from "../reducer/reducer.component";
export const CartContext = React.createContext(null);

/**
 * 
 * @param {{
 * children: React.ReactNode;
 * }} props 
 * @returns 
 */
const CartProvider = (props)=>{
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, dispatch] = useReducer(reducer, cartFromLocalStorage);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

  return (
    <UserContext.Provider value={{cart, dispatch}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default CartProvider;