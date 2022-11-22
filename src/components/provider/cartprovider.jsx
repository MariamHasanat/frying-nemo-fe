
import React from "react";
import { useReducer } from "react";
import { initialState, reducer } from "../../reduce/cart";
export const CartContext = React.createContext(null);
/**
 * @param { { children:React.ReactNode}} props
 * @returns 
 */
const CartProviders = (props) => {
  const[cart,dispatch]=useReducer(reducer,initialState);
  return (
    <CartContext.Provider value={{ cart , dispatch }}>
      {props.children}
    </CartContext.Provider>

  );
};
export default CartProviders;