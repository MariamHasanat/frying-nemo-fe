import './cart.css';

const Cart = (props) => {
    return (
        <div className='cart-page'>
            <div className='cart-list'>
                {/* <CartRow key={item.meal.id + item.quantity} item{item}/>*/}
                {props.cart.map((item) => <li
                    key={item.meal.id +" : " + item.quantity}
                >
                    {item.meal.name + " : " + item.quantity}
                </li>
                )}
            </div>
        </div>
    );
};
export default Cart;