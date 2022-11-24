import React, { useEffect, useReducer } from 'react';
import { useContext } from 'react';
import { reducer } from '../reducer/cart-reducer';
import { UserContext } from './provider.component';

export const CartContext = React.createContext(null);

const getCartFromLocalStorage = email =>{
  const map =JSON.parse(localStorage.getItem('cartMap' )|| '{}');
  const key = email || 'anonymous';
  const cart = map[key] || [];
  return cart;
};

const updateCartInLocalStorage = (email, cart) => {
  const map =JSON.parse(localStorage.getItem('cartMap' )|| '{}');
  const key = email || 'anonymous';
  map[key] = cart;
  localStorage.setItem('cartMap', JSON.stringify(map));
};

/**
 * @param {{
 *  children: React.ReactNode;
 * }} props Component props
 */

const CartProvider = (props) => {
  const userContext = useContext(UserContext);
  const cartFromLocalStorage = getCartFromLocalStorage(userContext.user?.email);
  const [cart, dispatch] = useReducer(reducer, cartFromLocalStorage);

  useEffect(()=>
  updateCartInLocalStorage(userContext.user?.email, cart)
  ,[cart]);

  useEffect(()=> 
  dispatch({ type:'SET', cart: getCartFromLocalStorage(userContext.user?.email)})
  ,[userContext.user]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
