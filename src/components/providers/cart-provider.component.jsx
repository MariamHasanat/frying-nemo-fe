import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { json } from "react-router-dom";
import { initialState, reducer } from "../../reducers/cart";
import { UserContext } from "./user-provider";


export const CartContext = React.createContext(null);

const getCartFromLocalStorage = (email) => {
  const map = JSON.parse(localStorage.getItem('cartMap') || '{}');
  const key = email || 'anonymous';
  const cart = map[key] || [];
  return cart;
};
const updateCartInLocalStorage = (email, cart) => {
  const map = JSON.parse(localStorage.getItem('cartMap') || '{}');
  const key = email || 'anonymous';
  map[key] = cart;
  localStorage.setItem('cartMap', JSON.stringify(map));
};



// actions : add, delete and update
// Cart is an array of items
// each item : meal + quantity 


// dispatch : call reducer or used to dispatch actions
const CartProvider = (props) => {
  // to show each user his own cart, object of arrays instead of one single array
  const userContext = useContext(UserContext);
  const cartMapFromLocalStorage = JSON.parse(localStorage.getItem('cartMap') || '{}');
  const cartKey = userContext.user?.email || 'anonymous'; // id or key = user email
  const [cart, dispatch] = useReducer(reducer, cartMapFromLocalStorage[cartKey] || []);

  useEffect(() => {
    updateCartInLocalStorage(userContext.user?.email, cart);
  }, [cart]);

  useEffect(() => dispatch({ type: 'SET', cart: getCartFromLocalStorage(userContext.user?.email) }), [userContext.user]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );

};
export default CartProvider;