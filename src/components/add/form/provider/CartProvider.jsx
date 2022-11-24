import React , { useReducer } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import {reducer } from '../../../../reducer/reducer'
import { UserContext } from './UserProvider';
export const CartContext = React.createContext(null);

const CartProvider = (props) => {
  const userContext = useContext(UserContext);
  const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}');
  const Key = userContext.user?.email || 'Anonymous';
  const cartValue = cartMap[Key] || [];
  const [cart, dispatch] = useReducer(reducer, cartValue);

  useEffect(() => {
  const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}')
  const Key = userContext.user?.email || 'Anonymous';
  cartMap[Key]  = cart;
  localStorage.setItem('cart', JSON.stringify(cartMap))}, [cart]
  );

 return(
    <CartContext.Provider  value={{cart , dispatch}}>
      {props.children}
   </CartContext.Provider>
 )
}

export default CartProvider