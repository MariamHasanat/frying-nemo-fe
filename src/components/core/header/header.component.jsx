import React from 'react';
import './header.css';

/**
 * 
 * @param {React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {text:string;}} props 
 * @returns 
 */

const Header = (props) => {
    return (
        <div>
            <div className='header'>
                {/* <img src={props.img} alt='logo' width={props.width} /> */}
                <img src='images/nemo.png' alt='logo' width={100} />
                {props.text ? <span>{props.text}</span> : null}
                <span>
                    <a href="/add" className='nemo-button'>add</a>
                    <a href="/view" className='nemo-button'>view</a>
                </span>
            </div>
            <hr />
        </div>
    );
};
export default Header;