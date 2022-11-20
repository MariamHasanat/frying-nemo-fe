const PlusMinusButtons = (props) => {

    const handleIncrement = () => {
        console.log('handling increment')
        props.dispatch({ type: 'add_new_item', meal: props.item });
      };
    
    const subtractOne = (oldVal) => {
        return (oldVal > 0) ? (oldVal - 1) : oldVal;
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
                onClick={() => props.setQuantity((oldVal) => subtractOne(oldVal))}>
                <b>-</b>
            </button>
        </div>
    );
};

export default PlusMinusButtons;