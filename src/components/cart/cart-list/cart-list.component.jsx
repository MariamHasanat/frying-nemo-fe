import Jiji from '../../common/jiji-the-cat/jiji.component';
import CartRow from '../cart-row/cart-row.component';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider.component';
import './cart-list.css';

const CartList = (props) => {
    const cartContext = useContext(CartContext);
    return (
        <div className='cart-list'>
            <h1>Cart</h1>
            {!cartContext.cart?.length ?
                <Jiji message='no items were added to cart' />
                :
                cartContext.cart?.map((item) =>
                    <CartRow key={item.meal.id + Date.now()} item={item} />
                )
            }

        </div>
    );
};

export default CartList;
