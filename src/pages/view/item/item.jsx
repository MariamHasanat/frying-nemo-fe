import './item.css';

const Item = (props) => {

  return (
    <div className="item-card">
      <div className="img">
        <img src="https://i.imgur.com/eFWRUuR.jpg" alt="food" />
      </div>
      <div className="info">
        <h2>{props.data.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dicta laudantium.</p>
        <p className="ingredients">{props.data.ingredients.join(', ')}</p>
        <hr />
      </div>
      <div className="price">
        <span>25.5$</span>
        <div className="add-cart">
          <button>+</button>
          <input type="number" max={500} />
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
