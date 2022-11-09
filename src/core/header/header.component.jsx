import './header.css';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/nemoInHeader.png';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
const Header = () => {
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
                        ? <span className='welcome'>Welcome {userContext.user.fullName}</span>
                        : ""
                }


            </div>
            <div className='right'>
                <nav>
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