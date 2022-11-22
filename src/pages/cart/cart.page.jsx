import React from 'react';
import './cart.css';

import CartList from '../../components/cart/list/cart-list.component';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../components/providers/user-provider.component';
import { useEffect } from 'react';

const Cart = () => {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (userContext.user === null) {
            navigate('/log-in', { replace: true });
        }
    }, []);
    return (
        <div className='cart-page'>
            <h2 className='header-in-cart'>Cart</h2>
            <CartList />
        </div>
    );
};

export default Cart;