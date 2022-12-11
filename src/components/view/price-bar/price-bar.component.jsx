import { Minus, Plus } from 'phosphor-react';
import React from 'react';
import './price-bar.css';

/** 
 * @param {{
 *      item:{
 *          id: string;
 *          name: string;
 *          image: string;
 *          description: string;
 *          price: number;
 *          category: string;
 *          ingredients: string[];
 *      }
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
*     cartQuantity:number;
*   }} props
*/
const PriceBar = (props) => {
    const handleIncrement = () => {
        props.dispatch({ type: "INCREMENT_CART_QUANTITY", item: props.item });
    };
    const handleDecrement = () => {
        props.dispatch({ type: "DECREMENT_CART_QUANTITY", item: props.item });
    };
    return (
        <div className='price'>
            <span className='the-price'>
                {props.item.price}&nbsp;$
            </span>
            <div className='number-of-items'>
                <button onClick={handleIncrement}> <Plus weight='bold'/> </button>
                <span className='show-the-quantity'> {props.cartQuantity} </span>
                <button onClick={handleDecrement}> <Minus weight='bold'/></button>
            </div>
        </div>
    );
};

export default PriceBar;