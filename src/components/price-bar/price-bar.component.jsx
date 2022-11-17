
const PriceBar=(props)=>{

  return(
    <div className="price">
    <span>{props.data.Price} $</span>
    <div className="add-cart">
      <button>+</button>
      <input type="number" max={500} />
      <button>-</button>
    </div>
  </div>
  )
}
export default PriceBar;