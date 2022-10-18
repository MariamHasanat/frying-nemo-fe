import Select from "../common/select/select.component";
import "./card.css";
import { useState } from "react";

const Cards = (props) => {
  const menuItems = [...JSON.parse(localStorage.getItem("menuItems"))];
  const [cardsValue, setCardsValue] = useState(menuItems || []);
  return (
    <div className="card-container">
      {cardsValue.map((item, index) => {
        console.log(item.photo);
        return (
          <div className="card" key={index}>
            <div
              className="card-image"
              key={index + item.price}
              style={{ backgroundImage: "url(" + item.photo + ")" }}
            ></div>
            <div className="card-name">{item.name}</div>
            <span className="card-text">Description</span>
            <div className="card-description">&nbsp;{item.description}</div>
            <div className="card-price">
              <span className="card-text">Price: </span>
              {item.price} <span className="card-text-dollar">$</span>
            </div>
            <div className="card-category">
              <span className="card-text">Category: </span>
              {item.category}
              <br />
              <span className="card-text">Ingredients</span>
            </div>

            <Select name="category" label="" className="card-Ingredients">
              {item.ingredients.map((current) => {
                return (
                  <option key={current} value={current} disabled>
                    {current}
                  </option>
                );
              })}
            </Select>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
