import React from 'react';
import './card.css';

/**
 * @param {{children:React.ReactNode}} props 
 * @returns 
 */
const Card = (props) => {
    return (
        <div className='card'>
            {props.children}
        </div>
    );
};

export default Card;