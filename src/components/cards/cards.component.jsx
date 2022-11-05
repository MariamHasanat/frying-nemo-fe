import * as React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./cards.css";
import Select from "../common/select/select.component";
import FilteredSearch from "../view/filter-search/filtered-search.component";
import "../../common.css";
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
  const menuItems = localStorage.getItem("menuItems").length ? [...JSON.parse(localStorage.getItem("menuItems"))]: [];
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm,setSearchTerm]= useState(searchParams.get('q') || '');
  const [categoryParams, setCategoryParams] = useSearchParams();
  const [categoryTerm,setCategoryTerm]= useState(categoryParams.get('category') || '');
  const searchList= menuItems.filter(item=>{
    /**
     * @param {string} str
     */
    const doesItMatch= (str)=>{return(str.toLowerCase().includes(searchTerm.toLowerCase().trim()));}
    let match =(doesItMatch(item.name) ||
    doesItMatch(item.description) ||
    item.ingredients.some(ingredient=>doesItMatch(ingredient))
    );
    if (categoryTerm) {
      match = match && (item.category === categoryTerm);
    }
    return(match);
  });
  
  return (
    <div>
      <FilteredSearch
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      searchParams= {searchParams}
      setSearchParams={setSearchParams}

      categoryTerm={categoryTerm}
      setCategoryTerm={setCategoryTerm}
      categoryParams= {categoryParams}
      setCategoryParams={setCategoryParams}
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
