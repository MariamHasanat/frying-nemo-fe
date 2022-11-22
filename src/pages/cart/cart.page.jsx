import React from 'react';
import './cart.css';

import CartList from '../../components/cart/list/cart-list.component';

/**
 * 
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
*           }>
 * }} props 
 * @returns 
 */

const Cart = (props) => {
    return (
        <div className='cart-page'>
            <CartList
                cart={props.cart}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Cart;