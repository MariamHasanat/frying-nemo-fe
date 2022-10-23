import './header.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const [time, setTime] = useState(new Date());
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
                <img src='./images/nemoInHeader.png' alt="nemo" />
                <h2>
                    Frying Nemo
                </h2>
                <span className='clock'>{time.toLocaleTimeString()}</span>


            </div>
            <div className='right'>
                <nav>
                    <Link className='but' to='/add'>
                        Add
                    </Link>
                    <Link className='but' to='/view'>
                        view
                    </Link>
                </nav>
            </div>
        </header>
    );
};
export default Header;