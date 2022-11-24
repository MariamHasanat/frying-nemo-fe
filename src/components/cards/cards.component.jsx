import * as React from "react";
import {useSearchParams } from "react-router-dom";
import "./cards.css";
import FilteredSearch from "../view/filter-search/filtered-search.component";
import { Link } from "react-router-dom";
import "../../common.css";
import PriceBar from "../view/price-bar/price-bar.component";
import { useContext } from "react";
import { CartContext } from "../providers/cart-provider.component";
/**
 * @type {Array<{
 * id: number
 * name: string;
 * description: string;
 * ingredients: string[];
 * price: number;
 * category: string;
 * image: string;
 * }>}
 */
const Cards = (props) => {
  const cartContext = useContext(CartContext);
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
  const getCartQuantity = (id) => {
    const currentCartItem = cartContext.cart.find(cartItem => (cartItem.meal.id === id));
    if (currentCartItem) {
      return currentCartItem.quantity;
    } else {
      return 0;
    }
  };

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
                style={{ backgroundImage: "url(" + item.image + ")" }}
              >
              </div>
              <Link className="card-name" to = {`/view-item/${item.id}`}>{item.name}</Link>
              <span className="card-text">Description</span>
              <div className="card-description">&nbsp;{item.description}</div>
              <div className="card-category">
                <span className="card-text">Category: </span>
                {item.category}
                <br />
                <span className="card-text">Ingredients</span>
              </div>
              <div className="card-buttom-container">
                <div className="card-Ingredients-container">
                    {item.ingredients.map((current) => {
                      return (
                        <span  className="ingredient-item" key={current} value={current} disabled>
                          {current}, &nbsp;
                        </span>
                      );
                    })}
                </div>
              </div>
              <PriceBar item={item} dispatch={cartContext.dispatch} cartQuantity={getCartQuantity(item.id, cartContext.cart)} />
            </div>
        );
      })}
    </div>
    </div>
  );
};
export default Cards;
