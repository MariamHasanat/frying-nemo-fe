import './view.css';
import Items from '../view/item/item.component';
import React,{ useState, useEffect,useContext } from "react";
import { useSearchParams,useNavigate } from 'react-router-dom';
import FilterBar from './filture/filter-bar.companent';
import {getCartQuantity} from '../../utilit/cart';
import { UserContext } from '../../components/provider/provider.component';

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

  const [params, setParams] = useSearchParams();
  const searchTerm = params.get('searchFood') || "";
  const categoryFromURL = params.getAll('category') || [];
  const maxFromUrl = params.get('max') || "";
  const minFromUrl = params.get('min') || "";

  /**
    * @param {string} value
    */
  const getMenuItems = () => {
    setLoading(true);
    // Run the code inside after 1000 milliseconds (1 Second)
    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItems || '[]');

      setMenuItems(items);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getMenuItems();
  }, []);
  useEffect(() => {
    if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }
  }, []);


  const filterItem = menuItems.filter(item => {
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
  // const  getCartQuantity= (id,cart)=>{
  //   const cartItem=props.cart.find(cartItem=> cartItem.meal.id === id );
  //   if (cartItem) {
  //     return cartItem.quantity;
  //   }else{
  //     return 0;
  //   }
  // }

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
            .map((item, index) => <Items data={item} key={item.name + index} dispatch={props.dispatch} cartQuantity = {getCartQuantity(item.id,props.cart)} />)
        }
      </div>
    </div>
  );
};

export default ViewPage;
