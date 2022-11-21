import CartList from '../../components/cart/cart-list/cart-list.component';
import './cart.css';

const Cart = (props) => {
    return (
        <div className='cart-page'>
            <CartList cart={props.cart} />
        </div>

    );
};
export default Cart;