import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { reducer } from '../reducers/cart';
import { UserContext } from './user-provider.component';
export const CartContext = React.createContext (null) ;
const CartProvider = (props) => {
  const userContext = useContext (UserContext) ;

  const cartMap = JSON.parse (localStorage.getItem ("cartMap")) || {} ;
  const cartKey = userContext.user?.email || "anonymous" ;
  
  const [cart , dispatch] = useReducer (reducer , cartMap[cartKey] || []) ;

  useEffect (()=> {
    const map = JSON.parse (localStorage.getItem ("cartMap")) || {} ;
    const key = userContext.user?.email || "anonymous" ;
    map[key] = cart ;
    localStorage.setItem ("cartMap" , JSON.stringify (map));
  } , [cart])

  return (
    <CartContext.Provider value = {{cart , dispatch}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
