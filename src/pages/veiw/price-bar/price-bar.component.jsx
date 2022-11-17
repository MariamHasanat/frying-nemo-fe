const PriceBar = (props) => {
  const handleIncrement = () =>{

  }

  const handleDncrement = () =>{
    
  }

  return(
    <div className="price">
    <span><b>Price: </b>${props.item.price}</span>
    <div className="add-cart">
      <button>+</button>
      <input type="number" max={500} value="0"/>
      <button>-</button>
    </div>
  </div>
  )

}
export default PriceBar;