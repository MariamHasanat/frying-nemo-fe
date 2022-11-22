import React, { useState } from "react";

export const CartContext = React.createContext(null);
/**
 * 
 * @param {{children: React.ReactNode}} props 
 * @returns 
 */
const CartProvider = (props) => {

  return (
    <CartContext.Provider value={{}}>
      {
        props.children
      }
    </CartContext.Provider>

  );
};

export default CartProvider;