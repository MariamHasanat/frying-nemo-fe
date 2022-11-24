import React, { useReducer } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { reduce } from '../../reducers/reducer-for-edit-item';
import { UserContext } from './user-provider.component';

export const CartContext = React.createContext(null);

const updateMapInLocalStorage = (email, cart) => {
    const cartMap = JSON.parse(localStorage.getItem('cartMap')) || {};
    cartMap[email || 'anonymous'] = cart;
    localStorage.setItem('cartMap', JSON.stringify(cartMap));
};

const getCartFromLocalStorage = (email) => {
    const cartMap = JSON.parse(localStorage.getItem('cartMap')) || {};
    const key = email || 'anonymous';
    return cartMap[key] || [];
};

/**
 * @param {{children:React.ReactNode}} props 
 * @returns 
 */
const CartProvider = (props) => {
    const userContext = useContext(UserContext);
    const initialCart = getCartFromLocalStorage(userContext.user?.email);
    const [cart, dispatch] = useReducer(reduce, initialCart);

    useEffect(() => updateMapInLocalStorage(userContext.user?.email, cart), [cart]);
    useEffect(() => {
        dispatch({ type: 'SET', item: getCartFromLocalStorage(userContext.user?.email) });
    }, [userContext.user]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;