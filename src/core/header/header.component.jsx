import './header.css';
import { useEffect, useState } from 'react';

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

                    <button
                        onClick={() => props.onNavigate("add")}
                        className={props.currentPage === 'add' ? 'current' : ''}
                    >
                        Add
                    </button>
                    <button
                        onClick={() => props.onNavigate("view")}
                        className={props.currentPage === 'view' ? 'current' : ''}
                    >
                        view
                    </button>
                </nav>
            </div>
        </header>
    );
};
export default Header;