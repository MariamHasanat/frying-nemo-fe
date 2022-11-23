import { useContext } from "react";
import { CartContext } from "../providers/cart-provider.component";
const PlusMinusButtons = (props) => {

    const cartContext = useContext(CartContext);
    const handleIncrement = () => {
        console.log(props.item);
        cartContext.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.item});
      };
    const handleDecrement = () => {
        cartContext.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.item });
      };

    return (
        <div className="item-quantity">
            <button
                className='nemo-button'
                onClick={handleIncrement}
            >
                <b>+</b>
            </button>
            <span className='quant'>{props.quantity}</span>
            <button
                className='nemo-button'
                onClick={handleDecrement}>
                <b>-</b>
            </button>
        </div>
    );
};

export default PlusMinusButtons;