import React , { useReducer } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import {reducer } from '../../../../reducer/reducer'
import { UserContext } from './UserProvider';
export const CartContext = React.createContext(null);

const getCartFromLocalStorg = (email) => {
  const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}');
  const Key = email || 'Anonymous';
  const cartValue = cartMap[Key] || [];
  return cartValue;
}

const updateCartFromLocalStorg = (email , cart) => {
  const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}')
  const Key = email || 'Anonymous';
  cartMap[Key]  = cart;
  localStorage.setItem('cart', JSON.stringify(cartMap))
}

const CartProvider = (props) => {
  const userContext = useContext(UserContext);

  const getCart = getCartFromLocalStorg(userContext.user?.email);
  const [cart, dispatch] = useReducer(reducer, getCart);

  useEffect(() => updateCartFromLocalStorg(userContext.user?.email , cart), [cart]);
  
  useEffect(() => dispatch({ type: 'Set', cart: getCartFromLocalStorg(userContext.user?.email) }), [userContext.user]);

  
 return(
    <CartContext.Provider  value={{cart , dispatch}}>
      {props.children}
   </CartContext.Provider>
 )
}

export default CartProvider