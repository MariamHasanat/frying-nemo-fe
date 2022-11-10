import './item.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../common/card/card.component';

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
 *    }
 *   }} props
 */


const Item = (props) => {
    const [value, setValue] = useState(0);

    const add = () => {
        let v = value;
        v += 1;
        setValue(v);
    };
    const remove = () => {
        let v = value;
        v -= (v > 0);
        setValue(v);
    };

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
                <div className='price'>
                    <span className='the-price'>
                        {props.item.price}&nbsp;$
                    </span>
                    <div className='number-of-items'>
                        <span onClick={add}>+</span>
                        <input readOnly type="number" value={value} name="numberOfItems" min={0} max={500} />
                        <span onClick={remove}>-</span>
                    </div>
                </div>

            </div>
        </Card>
    );
};

export default Item;