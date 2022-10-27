import React from 'react';
import './header.css';
import {Link, useNavigate} from 'react-router-dom' 
const Header = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='header'>
                {/* <img src={props.img} alt='logo' width={props.width} /> */}
                <img src='images/nemo.png' alt='logo' width={100} onClick={() => navigate('/')}/>  {/* go to home page when clicking on logo */}
                {props.text ? <span>{props.text}</span> : null}
                <span>
                    <Link to="/add" className='nemo-button'>add</Link>
                    <Link to="/view" className='nemo-button'>view</Link>
                </span>
            </div>
            <hr />
        </div>
    );
};
export default Header;