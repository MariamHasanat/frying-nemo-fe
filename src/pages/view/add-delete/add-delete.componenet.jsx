import './add-delete.css';



const AddDeleteItem = (props) => {

  const handleIncrement = () => {
    props.dispatch({ type: "INCREMENT_CART_QUANTITY", meal: props.item });
  };

  const handleDecrement = () => {
    props.dispatch({ type: "DECREMENT_CART_QUANTITY", meal: props.item });
  };


  return (
    <div className="add-del">
      <button className='add' onClick={handleIncrement}>+</button>
      <button className='del' onClick={handleDecrement}>-</button>
    </div>
  );
};
export default AddDeleteItem;