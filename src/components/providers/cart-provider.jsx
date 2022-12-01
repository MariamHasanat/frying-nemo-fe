import React, { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { reducer } from '../reducers/cart';
import { UserContext } from "./user-provider";

export const CartContext = React.createContext(null);

const updateCartInLocalStorage = (email, cart) => {
  const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}');
  cartMap[email || 'anonymous'] = cart;
  localStorage.setItem('cartMap', JSON.stringify(cartMap));
};

const getCartFromLocalStorage = (email) => {
  const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}');
  return cartMap[email || 'anonymous'] || [];
};
/**
 * 
 * @param {{children: React.ReactNode}} props 
 * @returns 
 */
const CartProvider = (props) => {

  const userContext = useContext(UserContext);
  const user = userContext.user;


  const [cart, dispatch] = useReducer(reducer, getCartFromLocalStorage(user?.email));

  useEffect(() => {
    updateCartInLocalStorage(user?.email, cart);
  }, [cart]);

  // without this effect, we must refresh the page in order to update the cartList
  useEffect(() => dispatch({ type: 'SET', cart: getCartFromLocalStorage(user?.email) }), [user]);


  let amount = 0;
  amount = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.meal.price;
  }
    , 0
  );

  return (
    <CartContext.Provider value={{ cart, dispatch, amount }}>
      {
        props.children
      }
    </CartContext.Provider>

  );
};

export default CartProvider;