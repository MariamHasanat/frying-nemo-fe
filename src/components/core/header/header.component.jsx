import React, { useEffect, useState, useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { UserContext } from '../../providers/user-provider.component';
import logo from '../../../assets/images/nemoInHeader.png';
import { CartContext } from '../../providers/cart-provider.component';
import { ShoppingCart, SignOut } from 'phosphor-react';

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

                    <Link className='count-items' to={'./cart'}>
                        <ShoppingCart size={30} /> {totalQuantity}
                    </Link>
                    {
                        userContext.user &&
                        <Link className={`but ${location.pathname === '/add' ? 'current' : ''}`} to='/add'>
                            Add
                        </Link>
                    }

                    <Link className={`but ${location.pathname === '/view' ? 'current' : ''}`} to='/view'>
                        view
                    </Link>
                    {
                        (!userContext.user && location.pathname !== '/log-in') &&
                        <button
                            className='log'
                            onClick={() => {
                                userContext.setUser(null);
                                navigate('/log-in');
                            }}
                        >
                            Log&nbsp;in
                        </button>
                    }
                    {
                        (userContext.user) &&
                        <SignOut
                            size={24}
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                userContext.setUser(null);
                                navigate('/log-in');
                            }}
                        />

                    }
                </nav>
            </div>
        </header>
    );
};
export default Header;