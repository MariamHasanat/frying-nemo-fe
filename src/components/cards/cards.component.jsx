import * as React from "react";
//import { useState } from "react";
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
  const searchTermsFromURL = searchParams.get('q') || '';
  const categoryFromURL = searchParams.get('category') || '';
  let minPriceFromUrl= parseInt(searchParams.get('minprice'));
  let maxPriceFromUrl= parseInt(searchParams.get('maxprice'));
  const searchList= menuItems.filter(item=>{
    /**
     * @param {string} str
     */
    const doesItMatch= (str)=>{return(str.toLowerCase().includes(searchTermsFromURL.toLowerCase().trim()));}
    let match =(doesItMatch(item.name) ||
    doesItMatch(item.description) ||
    item.ingredients.some(ingredient=>doesItMatch(ingredient))
    );
    if (categoryFromURL) {
      match = match && (item.category === categoryFromURL);
    }
    if(minPriceFromUrl || maxPriceFromUrl ){
      if(!maxPriceFromUrl){
        match = match && (item.price >= minPriceFromUrl);
      }else
      if(maxPriceFromUrl >= minPriceFromUrl){
        match = match && (item.price >= minPriceFromUrl && item.price <= maxPriceFromUrl);
      }else
      if(!minPriceFromUrl){
        match = match && (item.price <= maxPriceFromUrl);
      }else
      if(maxPriceFromUrl < minPriceFromUrl){
        match = false;
      }
  }
    return(match);
  });
  
  return (
    <div>
      <FilteredSearch
      searchTermsFromURL={searchTermsFromURL}
      categoryFromURL={categoryFromURL}
      minPriceFromUrl={minPriceFromUrl}
      maxPriceFromUrl={maxPriceFromUrl}
      searchParams= {searchParams}
      setSearchParams={setSearchParams}
      />
    <div className="card-container">
      {searchList.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div
              className="card-image"
              key={index + item.price}
              style={{ backgroundImage: "url(" + item.photo + ")" }}
            >
            </div>
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
