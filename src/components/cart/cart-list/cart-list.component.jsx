import Jiji from '../../common/jiji-the-cat/jiji.component';
import CartRow from '../cart-row/cart-row.component';
import { useContext } from 'react';
import { CartContext } from '../../providers/cart-provider.component';
import './cart-list.css';

const CartList = (props) => {
    const cartContext = useContext(CartContext);
    const getTotalPrice = () => {
        let price = 0;
        // price = cartContext.cart.map(item => price += item.price);
        const cart = cartContext.cart;
        for (let i = 0; i < cart.length; i++) {
            price += (cart[i].meal.price * cart[i].quantity);
        }
        return price;
    };

    const deleteAll = () => {
        cartContext.dispatch({ type: 'DELETE_ALL_ITEMS', meal: props.item });
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
                    <div>
                        <p>total price: ${getTotalPrice()}</p>
                        <button onClick={deleteAll}>delete all</button>
                    </div>
                </>
            }


        </div>
    );
};

export default CartList;
