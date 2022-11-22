import React from 'react';
import './row.css';

/**
 * 
 * @param {{
 *      dispatch: React.Dispatch<{
 *          type: string;
 *          item: {
*           id: string;
*           name: string;
*           image: string;
*           description: string;
*           price: number;
*           category: string;
*           ingredients: string[];
*           };
*       }>
*       cartItem: {
*           quantity: number;
*           item: {
*               id: string;
*               name: string;
*               image: string;
*               description: string;
*               price: number;
*               category: string;
*               ingredients: string[];
*           }
 * }}} props 
 * @returns 
 */


const Row = (props) => {
    return (
        <li className='cart-row'>
            
        </li>
    );
};

export default Row;
