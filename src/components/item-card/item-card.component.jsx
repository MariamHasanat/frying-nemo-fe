import './item-card.css';
import { Link } from 'react-router-dom';
import Card from '../common/card/card.component';
import PlusMinusButtons from '../plus-minus-buttons/plus-minus-buttons.component';
const ItemCard = (props) => {

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
                    <PlusMinusButtons
                        item={props.item}
                        quantity={props.itemQuantity}
                    />
                </div>
            </Card>
        </div>
    );
};

export default ItemCard;