
import React, { useReducer, useEffect } from "react";
import { useContext } from "react";
import { reducer } from '../../reducers/cart';
import { UserContext } from "./user-provider.component";
export const CartContext = React.createContext(null);

const CartProvider = (props) => {

    const userContext = useContext(UserContext);
    const getCartFromLocalStorage = (email) => {
        const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}');
        const cartKey = email || 'anonymous';
        const cart = cartMap[cartKey] || [];
        return cart;
    };

    const [cart, dispatch] = useReducer(reducer, getCartFromLocalStorage(userContext.user?.email));

    useEffect(() => {
        const cartMap = JSON.parse(localStorage.getItem('cartMap') || '{}');
        cartMap[userContext.user?.email || 'anonymous'] = cart;
        localStorage.setItem('cartMap', JSON.stringify(cartMap));
    }, [cart]);

    useEffect(() => {
        dispatch({ type: 'SET', cart: getCartFromLocalStorage(userContext.user?.email)});
    }, [userContext.user]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;