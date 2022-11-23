import React from 'react';
import "./Provider.css";
import { useReducer,useEffect } from 'react';

import {reduce} from "../../reducers/cart"

export const CartContext = React.createContext(null);

/**
 * @param {{children:React.ReactNode;}} props 
 */
function CartProvider(props) {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, dispatch] = useReducer(reduce, cartFromLocalStorage);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);



  

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;