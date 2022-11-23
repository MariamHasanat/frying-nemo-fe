import { useContext } from "react";
import { CartContext } from "../../../components/providers/cart-provider.component";
import "./add-delete.css";

const AddDeleteItem = (props) => {

  const handleIncrement = () => {
    props.dispatch({ type: "INCREMENT_CART_QUANTITY", meal: props.item });
  };

  const handleDecrement = () => {
    props.dispatch({ type: "DECREMENT_CART_QUANTITY", meal: props.item });
  };

  return (
    <div className="add-del">
      <button className="add" onClick={handleIncrement}>
        +
      </button>
      <input
        type="number"
        max={100}
        width={100}
        className="counter"
        value={props.cartQuantity}
        disabled
      ></input>
      <button className="del" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};
export default AddDeleteItem;
