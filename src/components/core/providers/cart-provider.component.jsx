import React from "react";
import { cart, dispatch } from "../../../services/reducers";

export const CartContext = React.createContext(null);

const CartProvider = ({ children }) => {

  return (
    <CartContext.Provider value={{ dispatch, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
