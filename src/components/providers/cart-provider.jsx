import React, { useContext, useReducer } from "react";
import { useEffect } from "react";
import { UserContext } from "../../App";
import { initial, reducer } from "../reducers/cart";

export const CartContext = React.createContext(null);

/**
 * 
 * @param {{children : React.ReactNode}} props 
 */
const CartProvider = (props) => {

  const userContext = useContext(UserContext);
  const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}');
  const cartkey = userContext.user?.email || 'anonymous';
  const user = userContext.user;
  // const cartLocalStorge= JSON.parse(localStorage.getItem('cart')||'[]')
  /*be lik :*/
  const cartLocalStorage = cartMap[cartkey] || [];
  const [cart, dispatch] = useReducer(reducer, cartLocalStorage);

  useEffect(() => {
    const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}');
    cartMap[userContext.user?.email || 'anonymous'] = cart;
    localStorage.setItem('cartMap', JSON.stringify(cartMap));
  }
    , [cart]);


  useEffect(() => {
    const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}');
    cartMap[userContext.user?.email || 'anonymous'] = cart;
    dispatch({ type: 'SET', cart: cart });
  }, [user]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
