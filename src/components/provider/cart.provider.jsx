import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { reducer } from "../reducer/reducer.component";
import { UserContext } from "./user-provider.component";
export const CartContext = React.createContext(null);


const getCartFromLocalStorage = email =>{
  const map =JSON.parse(localStorage.getItem('cartMap') || '{}');
  const key = email || 'anonymous';
  const cart = map [key] || [] ; 
  return cart;
 
};

const updateCartInLocalStorage = (email, cart) =>{
  const map =JSON.parse(localStorage.getItem('cartMap') || '{}');
  const key = email || 'anonymous';
  map[key] = cart;
  localStorage.setItem('cartMap', JSON.stringify(map));
}
/**
 * 
 * @param {{
 * children: React.ReactNode;
 * }} props 
 * @returns 
 */
const CartProvider = (props)=>{
  const userContext = useContext(UserContext);
  const user = userContext.user;
  const cartFromLocalStorage = getCartFromLocalStorage (userContext.user?.email);
 
  const [cart, dispatch] = useReducer(reducer, cartFromLocalStorage);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);
  useEffect(() => dispatch({type: 'SET', cart: getCartFromLocalStorage(user?.email)}), [user]);

  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;