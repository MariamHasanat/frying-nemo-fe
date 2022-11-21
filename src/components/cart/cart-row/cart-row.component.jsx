import './cart-row.css';

const CartRow = (props) => {
    return (
        <li className='cart-row'>
            <img src={props.meal.img} width={170} height={200} alt="" />
        </li>
    );
};

export default CartRow;
