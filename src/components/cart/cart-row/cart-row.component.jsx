import PlusMinusButtons from '../../plus-minus-buttons/plus-minus-buttons.component';
import './cart-row.css';

const CartRow = (props) => {
    return (
        <li className='cart-row'>
            <div className="left">
                <img src={props.item.meal.img} width={170} height={200} alt="" />
            </div>
            <div className="center">
                <h2>{props.item.meal.name}</h2>
                <p>${props.item.meal.price}&nbsp;&nbsp;<span className='green-text'>In Stock</span></p>
                <PlusMinusButtons item={props.item.meal} quantity={props.item.quantity} dispatch={props.dispatch} />
            </div>
        </li>
    );
};

export default CartRow;
