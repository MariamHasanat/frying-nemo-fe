import React, { useEffect, useContext } from 'react';
import './cart.css';

import { useNavigate } from 'react-router-dom';

import CartList from '../../components/cart/list/cart-list.component';
import { UserContext } from '../../components/providers/user-provider.component';
import { CartContext } from '../../components/providers/cart-provider.component';

import trash from '../../assets/images/empty_cart.webp';

/**
 * @param {{
 *      cart:Array<{
 *          item:{
 *                             
 *          }
 *          quantity:number;
 *      }
 * }} cartContext
 */
const Cart = () => {
    const cartContext = useContext(CartContext);
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (userContext.user === null) {
            navigate('/log-in', { replace: true });
        }
    }, []);

    const handleClearAll = () => {
        cartContext.dispatch({ type: 'CLEAR_ALL' });
    };

    const totalPrice = cartContext.cart.reduce((val, cartItem) => {
        return val + (cartItem.quantity * cartItem.item.price);
    }, 0);
   
    return (
        <div>
            {
                cartContext.cart.length
                    ? <div className='cart-page'>
                        <div className='header-in-cart'>
                            <span>Cart</span>
                            <div className='price-and-clear'>
                                <span>
                                    Total Price: ${totalPrice} 
                                </span>
                                <button
                                    className='nemo-button'
                                    onClick={handleClearAll}
                                >
                                    Clear All
                                </button>
                            </div>
                        </div>
                        <CartList />
                    </div>
                    : <div className='empty-cart-page'>
                        <img src={trash} alt='Empty Cart' />
                        <h2 className='header-in-empty-cart'>
                            The cart is empty
                        </h2>
                    </div>
            }
        </div >
    );
};

export default Cart;