import React ,{ useReducer } from "react";
import { initial, reducer } from "../reducers/cart";

export const CartContext = React.createContext(null);

/**
 * 
 * @param {{children : React.ReactNode}} props 
 */
const CartProvider = (props) => {
  const [cart, dispatch] = useReducer(reducer, initial);

  
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
