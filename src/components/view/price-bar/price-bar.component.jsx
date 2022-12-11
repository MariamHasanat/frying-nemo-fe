import  "./price-bar.css";
import {Plus,Minus} from "phosphor-react";
const PriceBar = (props) => {
  const handleIncrement = () => {
    props.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.item });
  };

  const handleDecrement = () => {
    props.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.item });
  };

  return (
    <div className="price">
      <span>${props.item.price}</span>
      <div className="add-cart">
        <button className="price-bar-button" onClick={handleIncrement}><Plus size={15} color={"green"} /></button>
        <input className="quantity" type="number" max={500} value={props.cartQuantity} disabled />
        <button className="price-bar-button" onClick={handleDecrement}><Minus size={15} color={"red"} /></button>
      </div>
    </div>
  );
};

export default PriceBar;