import './header.css';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/nemoInHeader.png';
const Header = (props) => {
    const [time, setTime] = useState(new Date());
    const location = useLocation();
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
                    props.user
                        ? <span className='welcome'>Welcome {props.user.fullName}</span>
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
                </nav>
            </div>
        </header>
    );
};
export default Header;