import Jiji from '../../common/jiji-the-cat/jiji.component';
import CartRow from '../cart-row/cart-row.component';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider.component';
import './cart-list.css';

const CartList = (props) => {
    const cartContext = useContext(CartContext);
    const getTotalPrice = () => cartContext.cart.reduce((val, next) => val + (next.quantity * next.meal.price), 0);

    const deleteAll = () => {
        cartContext.dispatch({ type: 'DELETE_ALL_ITEMS' });
    };

    return (
        <div className='cart-list'>
            <h1>Cart</h1>
            {!cartContext.cart?.length ?
                <Jiji message='no items were added to cart' />
                :

                <>{cartContext.cart?.map((item) =>
                    <CartRow key={item.meal.id + Date.now()} item={item} />
                )}
                    <div className='bottom'>
                        <button className='delete-all-btn' onClick={deleteAll}>delete all</button>
                        <p className='total-price'>total price: ${getTotalPrice()}</p>
                    </div>
                </>
            }


        </div>
    );
};

export default CartList;
