import React, { useReducer } from 'react';
import { reducer, initialState } from '../../reducers/cart';
import { useContext } from 'react';
import { UserContext } from './user-provider.component';
import { useEffect } from 'react';

export const CartContext = React.createContext(null);

const getCartFromLocalStorage = email => {
  const map = JSON.parse(localStorage.getItem('cartMap' || '{}'));
  const key = email || 'anonymous';
  const cart = map[key] || [];
}

const updateCartInLocalStorage = (email, cart) => {
  const map = JSON.parse(localStorage.getItem('cartMap') || '{}');
  const key = email || 'anonymous';
  map[key] = cart;
  localStorage.setItem('cartMap', JSON.stringify(map));
}

/**
 * @param {{
 *  children: React.ReactNode;
 * }} props Component props
 */
const CartProvider = (props) => {
  const userContext = useContext(UserContext);
  const cartFromLocalStorage = getCartFromLocalStorage(userContext.user?.email) || [];
  const user = userContext.user;

  const [cart, dispatch] = useReducer(reducer, cartFromLocalStorage);

  useEffect (()=> updateCartInLocalStorage(useContext.user?.email, cart), [cart]);

  useEffect(() => dispatch({ type: 'SET', cart: getCartFromLocalStorage(user?.email) }), [user]);


  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
