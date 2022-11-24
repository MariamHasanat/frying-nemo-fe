import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "../../../reducers/cart-reducer";
import { UserContext } from "./user-provider.component";

export const CartContext = React.createContext(null);

const CartProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const getCartMapData = () => JSON.parse(localStorage.getItem(`cartMap`) || '{}');
  const getCartUserData = () => getCartMapData()[user?.email || `anonymous`] || []
  console.log(`carts`, getCartUserData())
  const initialState = getCartUserData();
  const [cart, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    const data = getCartMapData();
    data[user?.email || `anonymous`] = cart;
    localStorage.setItem(`cartMap`, JSON.stringify(data));
  }, [cart])

  useEffect(() => {
    dispatch({type: `SET`, cart: getCartUserData()})
  }, [user])
  

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;