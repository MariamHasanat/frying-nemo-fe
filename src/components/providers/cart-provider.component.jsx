import React, { useReducer } from 'react';
import { reduce } from '../../reducers/reducer-for-edit-item';

export const CartContext = React.createContext(null);

/**
 * @param {{children:React.ReactNode}} props 
 * @returns 
 */
const CartProvider = (props) => {
    const [cart, dispatch] = useReducer(reduce, []); // reduce function in the reducer-for-edit-item.js
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;