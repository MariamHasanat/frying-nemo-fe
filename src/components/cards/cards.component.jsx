import { useState } from "react";
import Select from "../common/select/select.component";
import "./cards.css";
import Input from "../common/input/input.component";
/**
 * @type {Array<{
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */
const Cards = (props) => {
  const menuItems = [...JSON.parse(localStorage.getItem("menuItems"))];
  const [searchTerm,setSearchTerm]= useState('');
  const searchList= menuItems.filter(item=>{
    /**
     * @param {string} str
     */
    const doesItMatch= (str)=>{return(str.toLowerCase().includes(searchTerm.toLowerCase().trim()));}
    const match =(doesItMatch(item.name) ||
    doesItMatch(item.description) ||
    item.ingredients.some(ingredient=>doesItMatch(ingredient))
    );
    return(match);
  });
  return (
    <div>
      <Input 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
    <div className="card-container">
      {searchList.map((item, index) => {
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
            <div className="card-buttom-container">
            <Select name="category" label="" className="card-Ingredients" >
              {item.ingredients.map((current) => {
                return (
                  <option key={current} value={current} disabled>
                    {current}
                  </option>
                );
              })}
            </Select>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Cards;
