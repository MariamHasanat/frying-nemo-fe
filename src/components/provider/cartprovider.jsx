
import React, { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from 'react';
import { reducer } from "../../reduce/cart";
import { UserContext } from "./provider";

export const CartContext = React.createContext(null);

const getCartFromLocalStorge = email => {
  const map = JSON.parse(localStorage.getItem('cartMap') || '{}');
  const key = email || 'anonymous';
  const cart = map[key] || [];
  return cart;
};
const updatCartInLocalstorge = (email, cart) => {
  const map = JSON.parse(localStorage.getItem('cartMap') || '{}');
  const key = email || 'anonymous';
  map[key] = cart;
  localStorage.setItem('cartMap', JSON.stringify(map));
};

/**
 * @param { { children:React.ReactNode}} props
 * @returns 
 */
const CartProviders = (props) => {
  const userContext = useContext(UserContext);
  console.log(userContext.user);

  const cartFromLocalStorge = getCartFromLocalStorge(userContext.user?.email);
  const [cart, dispatch] = useReducer(reducer, cartFromLocalStorge);

  useEffect(() => updatCartInLocalstorge(userContext.user?.email, cart), [cart]);
  useEffect(() => dispatch({type: 'SET', cart : getCartFromLocalStorge(userContext.user?.email)}), [userContext.user]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>

  );
};
export default CartProviders;