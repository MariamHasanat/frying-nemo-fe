import './view.css';
import Items from '../view/item/item.component';
import React,{ useState, useEffect,useContext } from "react";
import { useSearchParams,useNavigate } from 'react-router-dom';
import FilterBar from './filture/filter-bar.companent';
import {getCartQuantity} from '../../utilit/cart';
import { UserContext } from '../../components/provider/provider.component';
import { CartContext } from '../../components/provider/cart-provider.component';
import { getItems } from '../../data/items';
import { useMemo } from 'react';

const ViewPage = (props) => {
  /**
 * @type {Array<{
 * id:number;
 * name: string;
   * description: string;
   * ingredients: string[];
   * price: number;
   * category: string;
   * image: string;
   * }>}
   */
  const initialItems = [];
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState(initialItems);
  const navigate = useNavigate();
  const userContext=useContext(UserContext);
  const cartContext = useContext(CartContext);

  const [params, setParams] = useSearchParams();
  const searchTerm = params.get('searchFood') || "";
  const categoryFromURL = params.getAll('category') || [];
  const maxFromUrl = params.get('max') || "";
  const minFromUrl = params.get('min') || "";

  /**
    * @param {string} value
    */
  const getMenuItems =async () => {
    setLoading(true);
    const data = await getItems();
    setMenuItems(data);
    setLoading(false);
    // Run the code inside after 1000 milliseconds (1 Second)
    // setTimeout(() => {
    //   const items = JSON.parse(localStorage.menuItems || '[]');

    //   setMenuItems(item);
    //   setLoading(false);
    // }, 1000);
  };

  useEffect(() => {
    getMenuItems();
    
  }, []);
  


  const filterItem = useMemo(()=>{
    console.log("Calculating filteredItems---");

    return menuItems.filter(item => {
    /**
     * @param {string}str
     */
    const doesItemMatch = str => str.toLowerCase().includes(searchTerm.toLowerCase().trim());
    let match = (
      doesItemMatch(item.name) ||
      doesItemMatch(item.description) ||
      item.ingredients.some(ingredient => doesItemMatch(ingredient))
    );

    if (categoryFromURL.length) {
      match = match && (categoryFromURL.includes(item.category));
    }

    if (minFromUrl) {
      match = match && (item.price >= minFromUrl);
    }

    if (maxFromUrl) {
      match = match && (item.price <= maxFromUrl);
    }
    return match;
  });
  }, [params,menuItems]);
  return (
    <div className="view-page">
      <h1>View All Menu Items</h1>
      <FilterBar
        value={searchTerm}
        categoryFromURL={categoryFromURL}
        params={params}
        setParams={setParams} />

      <div className="item" >
        {
          filterItem
            .map((item, index) => <Items data={item} key={item.name + index} dispatch={cartContext.dispatch} cartQuantity = {getCartQuantity(item.id,cartContext.cart)} />)
        }
      </div>
    </div>
  );
};

export default ViewPage;
