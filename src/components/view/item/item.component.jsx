import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

import Card from '../../common/card/card.component';
import PriceBar from '../price-bar/price-bar.component';

/** 
 * Render a single menu item based on the data passed
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
const Item = (props) => {
    return (
        <Card>
            <Link to={`/view-details/${props.item.id}`}>
                <img alt="food" src={props.item.image} />
            </Link>
            <div className='info'>
                <h2>
                    <Link to={`/view-details/${props.item.id}`} className='link-in-h2'>
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
            <PriceBar
                cartQuantity={props.cartQuantity}
                item={props.item}
                dispatch={props.dispatch}
            />
        </Card>
    );
};

export default Item;