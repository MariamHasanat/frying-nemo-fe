import './item.css';
import React from 'react';

/** 
 * Render a single menu item based on the data passed
 * @param {{
 *     data:{
 *     name: string;
 *     image: string;
 *     Description: string;
 *     Price: number;
 *     category: string;
 *     Ingredients: string[];
 *    }
 *   }} props
 */
const Item = (props) => {
  
  return (
    <div className="item-card">
      <div className="img">
        <img src={props.data.image} alt="food" />
      </div>
      <div className="info">
        <h2>{props.data.name}</h2>
        <p> desc{props.data.Description}</p>
        <p className="ingredients">{ props.data.Ingredients && props.data.Ingredients.join(",")}</p>
        {/* instead of join you can use // map((ing, i) => ing + (i < props.data.ingredients.length - 1 ? ', ' : ' ')) */}
      </div>
      <div className="price">
        <span>{props.data.Price} $</span>
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
