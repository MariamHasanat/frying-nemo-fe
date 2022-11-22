import React, { useEffect, useState, useContext } from 'react';
import './header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { UserContext } from '../../providers/user-provider.component';
import logo from '../../../assets/nemoInHeader.png';

/**
* 
* @param {{
*   cart: Array<{
*       item:{
*       id: string;
*       name: string;
*       image: string;
*       description: string;
*       price: number;
*       category: string;
*       ingredients: string[];
*       }
*       quantity: number; 
*   }>}} props
* @returns 
*/

const Header = (props) => {
    const [time, setTime] = useState(new Date());
    const userContext = useContext(UserContext);
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

    let itemsCount = 0;
    for (let i = 0; i < props.cart.length; i++) {
        itemsCount += props.cart[i].quantity;
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
                            Your Cart {itemsCount}
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