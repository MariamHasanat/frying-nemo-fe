import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../providers/cart-provider.component";
import './plus-minus-buttons.css'
const PlusMinusButtons = (props) => {

    const cartContext = useContext(CartContext);
    const handleIncrement = () => {
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
                <Plus size={15} weight="bold"/>
            </button>
            <span className='quant'>{props.quantity}</span>
            <button
                className='nemo-button'
                onClick={handleDecrement}>
                <Minus size={15} weight="bold"/>
            </button>
        </div>
    );
};

export default PlusMinusButtons;