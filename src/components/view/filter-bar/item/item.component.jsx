import './item.css';
import React, { useState } from 'react';

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
        <div className='item'>
            <img alt="food" src={props.item.img} />
            <div className='info'>
                <h2>
                    {props.item.name}
                </h2>
                <p className='item-description'>
                    {props.item.description}
                </p>
                <div className='ingre'>
                    {
                        props.item.Ingredients.join(', ')
                    }
                </div>
                <div className='price'>
                    <span className='the-price'>
                        ${props.item.price}
                    </span>
                    <div className='number-of-items'>
                        <span onClick={add}>+</span>
                        <input readOnly type="number" value={value} name="numberOfItems" min={0} max={500} />
                        <span onClick={remove}>-</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Item;