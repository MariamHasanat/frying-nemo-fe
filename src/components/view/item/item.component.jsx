import React from 'react';
import './item.css';
import { Link, useLocation } from 'react-router-dom';

import Card from '../../common/card/card.component';
import PriceBar from '../price-bar/price-bar.component';
import { CartContext } from '../../providers/cart-provider.component';
import { useContext } from 'react';

/** 
 * Render a single menu item based on the data passed
 * @param {{
 *      item:{
 *          _id: string;
 *          name: string;
 *          imageURL: string;
 *          description: string;
 *          price: number;
 *          category: string;
 *          ingredients: string[];
 *      }
 *    deleteItems:() => void;
*     cartQuantity:number;
*   }} props
*/
const Item = (props) => {
    const location = useLocation();
    const cartContext = useContext(CartContext);
    return (
        <Card>

            {
                !location.pathname.includes(`view-details`)
                    ? <>
                        <Link to={`/view-details/${props.item._id}`}>
                            <img src={`${props.item.image}?x=${Math.random()}`} alt="food" />
                        </Link>
                        <div className='info'>
                            <h2>
                                <Link to={`/view-details/${props.item._id}`} className='link-in-h2'>
                                    {props.item.name}
                                </Link>
                            </h2>
                            <p className='item-description'>
                                {props.item.description}
                            </p>
                            <div className='ingre'>
                                {
                                    props.item.ingredients.join(', ')
                                }
                            </div>

                        </div>
                    </>
                    : <>
                        <img src={`${props.item.image}?x=${Math.random()}`} alt="food" />
                        <div className='info'>
                            <h2>
                                {props.item.name}
                            </h2>
                            <p className='item-description'>
                                {props.item.description}
                            </p>
                            <div className='ingre'>
                                {
                                    props.item.ingredients.join(', ')
                                }
                            </div>

                        </div>
                    </>
            }
            <PriceBar
                deleteItems={props.deleteItems}
                cartQuantity={props.cartQuantity}
                item={props.item}
                dispatch={cartContext.dispatch}
            />
        </Card>
    );
};

export default Item;