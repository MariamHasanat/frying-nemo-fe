import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { json } from "react-router-dom";
import { initialState, reducer } from "../../reducers/cart";


export const CartContext = React.createContext(null);

// actions : add, delete and update
// Cart is an array of items
// each item : meal + quantity 


// dispatch : call reducer or used to dispatch actions
const CartProvider = (props) => {
  const cartFromLocalStorage = JSON.parse(sessionStorage.getItem('cart' || '[]'));
  const [cart, dispatch] = useReducer(reducer, initialState);

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );

};
export default CartProvider;