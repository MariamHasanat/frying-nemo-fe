import { Minus, Plus } from "phosphor-react";
import './price.css';
const Price = (props) => {
  const handleIncrement = () => {
    props.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.item });
  };

  const handleDecrement = () => {
    props.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.item });
  };

  return (
  <div className="price">
    <div className="add-cart">
      <button onClick={handleIncrement } ><Plus size={18} color="#0a0a0a" /></button>
      <input className="input-number" type="number" max={500} value={props.cartQuantity} disabled />
      <button onClick={handleDecrement}><Minus size={18} color="#0a0a0a" /></button>
    </div>
  </div>);
};
export default Price;
