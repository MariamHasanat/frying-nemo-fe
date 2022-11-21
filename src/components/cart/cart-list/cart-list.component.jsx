import Jiji from '../../common/jiji-the-cat/jiji.component';
import CartRow from '../cart-row/cart-row.component';
import './cart-list.css';

const CartList = (props) => {
    return (
        <div className='cart-list'>
            <h1>Cart</h1>
            {!props.cart.length?
                <Jiji message='no items were added to cart'/>
                :
                props.cart.map((item) =>
                    <CartRow key={item.meal.id} {...item} />
                )
            }

        </div>
    );
};

export default CartList;
