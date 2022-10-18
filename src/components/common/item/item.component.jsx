import './item.css';
import React from 'react';

const Item = (props) => {
    return (
        <div className='item'>
            <img alt="food" src="./images/birgure.JFIF" />
            <div className='info'>
                <h2>
                    {props.item.name}
                </h2>
                <p className='item-description'>
                    {props.item.description}
                </p>
                <div className='ingre'>
                    {
                        props.item.Ingredients.join(',')
                    }
                </div>
                <div className='price'>
                    <span className='the-price'>
                        {props.item.price}$
                    </span>
                    <div className='number-of-items'>
                        <span>+</span>
                        <input type="number" name="numberOfItems" min={0} max={500} />
                        <span>-</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Item;