import React from "react";
import { useReducer } from "react";
import {reducer, initialState} from "./components/provider/provider.component";

export const CartContext = React.createContext(null);

/**
 * 
 * @param {{
 * children: React.ReactNode;
 * }} props 
 * @returns 
 */
const CartProvider = (props)=>{
  const [cart, dispatch]= useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{cart, dispatch}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default CartProvider;