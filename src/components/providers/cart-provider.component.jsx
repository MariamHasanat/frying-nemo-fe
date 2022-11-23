import React, { useReducer } from 'react';
import { useEffect } from 'react';
import { reduce } from '../../reducers/reducer-for-edit-item';

export const CartContext = React.createContext(null);

/**
 * @param {{children:React.ReactNode}} props 
 * @returns 
 */
const CartProvider = (props) => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, dispatch] = useReducer(reduce, initialCart);

    useEffect(() => {
        if (cart.length)
            localStorage.setItem('cart', JSON.stringify(cart));
        else
            localStorage.removeItem('cart');

    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;