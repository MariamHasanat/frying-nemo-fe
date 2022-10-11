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
                <img src={props.img} alt='logo' width={props.width} />
                {props.text ? <span>{props.text}</span> : null}
                <span>
                    <button
                        className={props.currentPage === 'add'? 'active nemo-button' :'nemo-button'}
                        onClick={() => props.setCurrentPage('add')}
                    >add
                    </button>

                    <button
                        className={props.currentPage === 'view'? 'active nemo-button' :'nemo-button'}
                        onClick={() => props.setCurrentPage('view')}
                    >view
                    </button>
                </span>
            </div>
            <hr />
        </div>
    );
};
export default Header;