import React from "react";
import { useReducer } from "react";
import {reducer , initialState} from '../../reducer/cart'

export const CartContext = React.createContext(null);

const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  return(
  <CartContext.Provider value ={{ cart, dispatch }}>
  { props.children }
   </CartContext.Provider >
  );
};

export default CartProvider;

