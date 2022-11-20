import { useState } from 'react';
import './item-card.css';
import { Link } from 'react-router-dom';
import Card from '../common/card/card.component';
import PlusMinusButtons from '../plusMinusButtons/plusMinusButtons.component';

/**
 * 
 * @param {}
 */


const ItemCard = (props) => {
    // const getImage = () => {
    //     if (/http(s)?:\/\/picsum.photos\/\d+(\/\d+)?/.test(props.image)) {
    //         // console.log('image was found')
    //         return props.image;
    //     }
    //     else {
    //         // console.log('image was NOT found')
    //         return 'images/default.jpg';
    //     }
    // };
    return (
        <div className='item-card'>
            <Card>
                <img src={props.item.img} width={350} height={230} alt={props.item.name} />
                <div className="item-description">
                    <Link to={`/view/${props.item.id}`}>{props.item.name}</Link >
                    <p>{props.item.description}</p>
                    <p><b>{props.item.ingredients.join(', ')}</b></p>
                </div>
                <div className="buy-item">
                    <div className="price">
                        <h3>${props.item.price}</h3>
                    </div>
                    <PlusMinusButtons item={props.item} quantity={props.itemQuantity} dispatch={props.dispatch}/>
                </div>
            </Card>
        </div>
    );
};

export default ItemCard;