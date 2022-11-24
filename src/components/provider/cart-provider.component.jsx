import React, { useReducer,useEffect,useContext } from 'react';
import { reducer } from '../../reducer/cart';
import { UserContext } from './provider.component';
export const CartContext = React.createContext(null);


const getCardFromLocalStorage=email =>{
    const map = JSON.parse(localStorage.getItem('cartMap')||'{}');
    const key = email || 'ana';
    const cart = map[key] || [];
    return cart; 
  }
  const UpdateCartInLocalStorage =(email,cart) =>{
    const map = JSON.parse(localStorage.getItem('cartMap')||'{}');
    const key = email || 'ana';
    map[key] = cart;
    localStorage.setItem('cartMap',JSON.stringify(map));
  }
/**
 * @param {{
 *  children: React.ReactNode;
 * }} props Component props
 */
const CartProvider = (props) => {
  
  const userContext = useContext(UserContext);
  const cartFromLocalStorage = getCardFromLocalStorage(userContext.user?.email);


  const [cart, dispatch] = useReducer(reducer, cartFromLocalStorage);

  useEffect(() => UpdateCartInLocalStorage(userContext.user?.email,cart), [cart]);

  useEffect(() => dispatch({type:'SET' , cart:getCardFromLocalStorage(userContext.user?.email)},[userContext.user]));


  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
