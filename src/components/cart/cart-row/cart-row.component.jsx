import './cart-row.css';

const CartRow = (props) => {
    return (
        <li className='cart-row'>
            <div className="left">
                <img src={props.meal.img} width={170} height={200} alt="" />
            </div>
            <div className="center">
                <h2>{props.meal.name}</h2>
                <p>${props.meal.price}&nbsp;&nbsp;<span className='green-text'>In Stock</span></p>
            </div>
        </li>
    );
};

export default CartRow;
