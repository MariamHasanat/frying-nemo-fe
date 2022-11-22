import React from 'react';
import './cart-list.css';

import Row from '../row/row.component';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider.component';

const CartList = () => {
    const cartContext = useContext(CartContext);
    return (
        <ul className='cart-list'>
            {
                cartContext.cart.map((item, ind) => {
                    return (
                        <Row
                            key={"r_" + ind}
                            item={item}
                            dispatch={cartContext.dispatch}
                        />

                    );
                })
            }
        </ul>
    );
};

export default CartList;