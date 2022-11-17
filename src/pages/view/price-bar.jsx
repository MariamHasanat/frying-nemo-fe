



const Price = (props) => {


  
  return (
  <div className="price">
    <div className="add-cart">
      <button>+</button>
      <input type="number" max={500} />
      <button>-</button>
    </div>
  </div>);
};
export default Price;