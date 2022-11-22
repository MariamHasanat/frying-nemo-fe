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
*       item: {
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
    const item = props.item.item;
    const quantity = props.item.quantity;
    const increment = () => props.dispatch({ type: 'INCREMENT_CART_QUANTITY', item: item });

    const decrement = () => props.dispatch({ type: 'DECREMENT_CART_QUANTITY', item: item });


    const deleteItem = () => props.dispatch({ type: 'DELETE_CART_ITEM', item: item });

    // TODO: display the total price 
    // TODO: clear all button 
    return (
        <li className='cart-row'>
            <img src={item.image} alt="meal" />
            <div className="main-info">
                <h2>{item.name}</h2>
                <span className="item-price">
                    ${item.price}
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    <span>In Stock</span></span>
                <div className="quantity-selector">
                    <button onClick={increment}>&#43;</button>
                    {quantity}
                    <button onClick={decrement}>&#8722;</button>
                </div>
            </div>
            <div className="total-price">
                <h3>${item.price * quantity}</h3>
                <button onClick={deleteItem}>
                    {/* TODO: must get the trashIcon here  */}
                    {/* <img src={trashIcon} alt="delete" />Delete */}
                    trash
                </button>
            </div>

        </li>
    );
};

export default Row;
