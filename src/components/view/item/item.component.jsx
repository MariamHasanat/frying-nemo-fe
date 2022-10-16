import { useState } from 'react';
import './item.css';
/**
 * 
 * @param {{
 * data:{
 *  name: string;
 *  description: string;
 *  price: number;
 *  category: string;
 *  ingredients: string[];
 * }
 * }} props 
 */
const Item = (props) => {

  console.log(props);
  return (
    <div className="item-card">
      <div className="img">
        <img src="https://i.imgur.com/eFWRUuR.jpg" alt="food" />
      </div>
      <div className="info">
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <p className="ingredients">{props.data.ingredients.join(" , ")}</p>
        <hr />
      </div>
      <div className="price">
        <span>{props.data.price}$</span>
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
