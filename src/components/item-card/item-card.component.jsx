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
    const [quantity, setQuantity] = useState(0);
    return (
        <div className='item-card'>
            <Card>
                <img src={props.img} width={350} height={230} alt={props.name} />
                <div className="item-description">
                    <Link to={`/view/${props.id}`}>{props.name}</Link >
                    <p>{props.description}</p>
                    <p><b>{props.ingredients.join(', ')}</b></p>
                </div>
                <div className="buy-item">
                    <div className="price">
                        <h3>${props.price}</h3>
                    </div>
                    <PlusMinusButtons quantity={quantity} setQuantity={setQuantity} />
                </div>
            </Card>
        </div>
    );
};

export default ItemCard;