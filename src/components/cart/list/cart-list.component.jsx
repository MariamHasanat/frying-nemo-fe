import React from 'react';
import './cart-list.css';

import Row from '../row/row.component';

/**
 * @param {{
 *      dispatch: React.Dispatch<{
 *          type: string;
 *          item: {
*           id: string;
*           name: string;
*           image: string;
*           description: string;
*           price: number;
*           category: string;
*           ingredients: string[];
*           };
*       }>
*       cart: Array<{
*           quantity: number;
*           item: {
*               id: string;
*               name: string;
*               image: string;
*               description: string;
*               price: number;
*               category: string;
*               ingredients: string[];
*           }
*       }>
 * }} props 
 * @returns 
 */
const CartList = (props) => {
    return (
        <ul className='cart-list'>
            {
                props.cart.map((cartItem, ind) => {
                    return (
                        <Row
                            key={"c_" + ind}
                            cartItem={cartItem}
                            dispatch={props.dispatch}
                        />

                    );
                })
            }
        </ul>
    );
};

export default CartList;