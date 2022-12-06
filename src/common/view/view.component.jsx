import './view.css';
import Items from '../view/item/item.component';
import React,{ useState, useEffect,useContext } from "react";
import { useSearchParams,useNavigate } from 'react-router-dom';
import FilterBar from './filture/filter-bar.companent';
import {getCartQuantity} from '../../utilit/cart';
import { UserContext } from '../../components/provider/provider.component';
import { CartContext } from '../../components/provider/cart-provider.component';
import { getItems } from '../../data/items';
import useFilterItems from '../../hook/item.hook';

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
  const cartContext = useContext(CartContext);

  const [params, setParams] = useSearchParams();
 

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
  


  const filterItem = useFilterItems(menuItems);
  /**
     * Set query string parameter.
     * @param {string} name Parameter name.
     * @param {string | string[]} value Parameter value.
     */
   const setParam = (name, value) => {
    const newParams = new URLSearchParams(params);
    newParams.delete(name);
    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item));
    } else if (value.trim()) {
      newParams.set(name, value.trim());
    }
    setParams(newParams);
  };
  return (
    <div className="view-page">
      <h1>View All Menu Items</h1>
      <FilterBar />

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
