import CartRow from '../cart-row/cart-row.component';
import './cart-list.css';

const CartList = (props) => {
    return (
        <div className='cart-list'>
            <h1>Cart</h1>
            {props.cart.map((item) =>
                <CartRow {...item} />
            )}
        </div>
    );
};

export default CartList;
