import React from 'react';
import './cart.css';

import CartList from '../../components/cart/list/cart-list.component';

const Cart = () => {
    return (
        <div className='cart-page'>
            The cart page
            <CartList />
        </div>
    );
};

export default Cart;