import * as React from "react";
import {useSearchParams } from "react-router-dom";
import "./cards.css";
import FilteredSearch from "../view/filter-search/filtered-search.component";
import { Link } from "react-router-dom";
import "../../common.css";
import PriceBar from "../view/price-bar/price-bar.component";
import { useContext } from "react";
import { CartContext } from "../providers/cart-provider.component";
import useGetItems from "../../hooks/add-item/get-items.hook";
//import { useParams } from "react-router-dom";

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
const Cards =  (props) => {
  const cartContext = useContext(CartContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTermsFromURL = searchParams.get('searchTerms') || '';
  const categoryFromURL = searchParams.get('category') || '';
  const items= useGetItems();
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
        minPriceFromUrl={parseInt(searchParams.get('minprice'))}
        maxPriceFromUrl={parseInt(searchParams.get('maxprice'))}
        searchParams= {searchParams}
        setSearchParams={setSearchParams}
        />
      
    <div className="card-container">
      {items.menuItems.map((item, index) => {
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
