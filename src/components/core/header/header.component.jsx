import React, { useEffect, useState, useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { UserContext } from '../../providers/user-provider.component';
import logo from '../../../assets/images/nemoInHeader.png';
import { CartContext } from '../../providers/cart-provider.component';

const Header = () => {
    const [time, setTime] = useState(new Date());
    const userContext = useContext(UserContext);
    const cartContext = useContext(CartContext);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    let totalQuantity = 0;
    for (let i = 0; i < cartContext.cart.length; i++) {
        totalQuantity += cartContext.cart[i].quantity;
    }

    return (
        <header className='header'>
            <div className='left'>
                <img src={logo} alt={"Logo"} />
                <h2>
                    Frying Nemo
                </h2>
                <span className='clock'>{time.toLocaleTimeString()}</span>
                {
                    userContext.user
                        ? <div className='welcome-div'>
                            <span className='circle'></span>
                            <span className='welcome'> {userContext.user.fullName}</span>
                        </div>
                        : ""
                }


            </div>
            <div className='right'>
                <nav>
                    {
                        location.pathname !== '/log-in' &&
                        <Link className='count-items' to={'./cart'}>
                            Your Cart {totalQuantity}
                        </Link>
                    }
                    {
                        location.pathname !== '/log-in' &&
                        <Link className={`but ${location.pathname === '/add' ? 'current' : ''}`} to='/add'>
                            Add
                        </Link>
                    }

                    {
                        location.pathname !== '/log-in' &&
                        <Link className={`but ${location.pathname === '/view' ? 'current' : ''}`} to='/view'>
                            view
                        </Link>
                    }
                    {
                        (location.pathname !== '/log-in') &&
                        <button
                            className='log-out'
                            onClick={() => {
                                localStorage.removeItem('cart');
                                cartContext.dispatch({ type: 'CLEAR_ALL' });
                                userContext.setUser(null);
                                navigate('/log-in');
                            }}
                        >
                            Logout
                        </button>
                    }
                </nav>
            </div>
        </header>
    );
};
export default Header;