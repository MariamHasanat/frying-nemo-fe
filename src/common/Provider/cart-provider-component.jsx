import React from 'react';
import "./Provider.css";
import { useReducer } from 'react';

import { reduce, initializationState } from "../../reducers/cart";

export const CartContext = React.createContext(null);

/**
 * @param {{children:React.ReactNode;}} props 
 */
function CartProvider(props) {
  const [cart, dispatch] = useReducer(reduce, initializationState);


  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;