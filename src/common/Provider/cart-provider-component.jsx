import React from 'react';
import "./Provider.css";
import { useReducer, useEffect } from 'react';
import { reduce } from "../../reducers/cart";
import { UserContext } from '../../App';
import { useContext } from 'react';

export const CartContext = React.createContext(null);

/**
 * @param {{children:React.ReactNode;}} props 
 */
function CartProvider(props) {
  const userContext = useContext(UserContext);
  const cartMap = JSON.parse(localStorage.getItem("cartMap") || "{}");
  const cartKey = userContext.user?.email || 'anonymous';
  const cartFromLocalStorage = cartMap[cartKey] || [];
  const [cart, dispatch] = useReducer(reduce, cartFromLocalStorage);

  useEffect(() => {
  const  cartMap=JSON.parse(localStorage.getItem("cartMap") ||"{}")
  cartMap[userContext.user?.email || "anonymous"]=cart;
localStorage.setItem("cartMap",JSON.stringify(cartMap))
}, [cart]);




  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;