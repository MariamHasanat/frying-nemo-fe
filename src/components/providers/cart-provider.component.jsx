
import React, { useReducer } from "react";
import { reducer } from '../../reducers/cart';

export const CartContext = React.createContext(null);

const CartProvider = (props) => {
    const [cart, dispatch] = useReducer(reducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;