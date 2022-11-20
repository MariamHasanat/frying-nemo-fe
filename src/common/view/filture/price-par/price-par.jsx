import { useReducer } from "react";

const Price = (props) => {
const reducer =(state , action)=>{
      switch (action.type) {
        case 'INCREMENT':
          return {count:state.count +1};
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
         return state;
      }
    }

    const [state,dispatch] = useReducer(reducer,{count: 0})
  const handleIncrement = () => {
    props.dispatch({ type: 'INCREMENT_CART_QUANTITY', meal: props.item });
    dispatch({ type: 'INCREMENT' })

  };

  const handleDecrement = () => {
    props.dispatch({ type: 'DECREMENT_CART_QUANTITY', meal: props.item });
    dispatch({ type: 'DECREMENT' });

  };

  
  return (
  <div className="price">
    <div className="add-cart">
      <button onClick={handleIncrement } >+</button>
      <input type="number" max={500} value={props.cartQuantity} />
      <button onClick={handleDecrement}>-</button>
    </div>
  </div>);
};
export default Price;
