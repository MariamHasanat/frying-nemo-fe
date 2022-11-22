import React ,{ useReducer } from "react";
import { useEffect } from "react";
import { initial, reducer } from "../reducers/cart";

export const CartContext = React.createContext(null);

/**
 * 
 * @param {{children : React.ReactNode}} props 
 */
const CartProvider = (props) => {

  const cartLocalStorge= JSON.parse(localStorage.getItem('cart')||'[]')

  const[cart,dispatch]=useReducer(reducer,cartLocalStorge);
  useEffect(()=>localStorage.setItem('cart',JSON.stringify(cart)),[cart])
  
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
