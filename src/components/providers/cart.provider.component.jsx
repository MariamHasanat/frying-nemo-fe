import React, { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { reducer, initialState } from "../../data/reducer";
import { UserContext } from "./user.provider.component";

export const CartContext = React.createContext(null);
const GetCartFromLocalStorage = (email) => {
  const cartMap = JSON.parse(localStorage.getItem("cartMap") || "{}");
  const cartKey = email || "anonymous";
  const cartFromLocalStorage = cartMap[cartKey] || [];
  return cartFromLocalStorage;
};
const updateCartFromLocalStorage = (email, cart) => {
  const cartMap = JSON.parse(localStorage.getItem("cartMap") || "{}");
  const cartKey = email || "anonymous";
  cartMap[cartKey] = cart;
  localStorage.setItem("cartMap", JSON.stringify(cartMap));
};

/**
 * @param {{
 *  children: React.ReactNode;
 * }} props Component props
 */
const CartProvider = (props) => {
  const userContext = useContext(UserContext);
  const cartFromLocalStorage = GetCartFromLocalStorage(userContext.user?.email);
  const [cart, dispatch] = useReducer(reducer, cartFromLocalStorage);
  useEffect(() => {
    updateCartFromLocalStorage(userContext.user?.email, cart);
  }, [cart]);

  useEffect(() => console.debug('user updated'), [userContext.user])
  useEffect(() => dispatch({ type : 'SET' , cart: GetCartFromLocalStorage(userContext.user?.email) }),[userContext.user]);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
