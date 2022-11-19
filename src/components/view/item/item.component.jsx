import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

import Card from '../../common/card/card.component';
import PriceBar from '../price-bar/price-bar.component';

/** 
 * Render a single menu item based on the data passed
 * @param {{
 *     item:{
 *     id: string;
 *     name: string;
 *     image: string;
 *     description: string;
 *     price: number;
 *     category: string;
 *     ingredients: string[];
 *    }, 
 *     dispatcher:React.DispatchWithoutAction;
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
            <PriceBar item={props.item} dispatcher={props.dispatcher} />
        </Card>
    );
};

export default Item;