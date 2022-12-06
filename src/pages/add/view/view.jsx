import { useEffect, useState } from 'react';
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Input from '../../../components/common/input/input';
import Item from '../../../components/item/items/item';
import Spinner from '../../../components/spinner/spinner';
import './view.css';
import Select from '../../../components/common/select/select';
import FilterBar from '../../../components/filter-bar/filter-bar';
import { useContext } from 'react';
import { UserContext } from '../../../components/provider/provider';
import { getQuantity } from '../../../util/util';
import { CartContext } from '../../../components/provider/cartprovider';
import { fetchItemsApi, getItemsApi } from '../../../components/add/form/data/items';
import useFilterItems from '../../../hooks/filterItems.hook';
import useSearchItem from '../../../hooks/searchItem.hook';

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
const initialItems = [];
const View = () => {
  const cartContext = useContext(CartContext);
  const [menuItem, setMenuItem] = useState(initialItems);
  const [loading, setLoading] = useState(true);
  const userContext = useContext(UserContext);
  const  [min,setMin] = useState();
  const  [max,setMax] = useState();
  const navigate = useNavigate();
  // const setItemSearchInLocalStoreg=(value)=>{
  //   localStorage.setItem("the informathion search",value);
  //   SetSearch(value);[]F

  // }
  useEffect(() => {
    if (!userContext.user?.id) {
      navigate('/login');
    }
  }, []);
  const {myParam,setParam}= useSearchItem();

  const filterItem = useFilterItems(menuItem, {max, min });


  const getMenuItems = async () => {
    setLoading(true);
    const items = await fetchItemsApi();
    setMenuItem(items);
    setLoading(false);


  };
  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <div className='view-page'>
      <h1>View menu item </h1>
      <FilterBar
       
        setMax={setMax}
        setMin={setMin}
      >
      </FilterBar >
      {
        loading
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
          : (
            <div className="items-container">
              {
                filterItem.length
                  ? filterItem.map((item, index) =>
                    <Item
                      data={item}
                      key={item.name + index}
                      dispatch={cartContext.dispatch}
                      cartQuantity={getQuantity(item.id, cartContext.cart)}
                    />
                  )

                  : (
                    <div className="no-results">
                      <img src="./frustrated-realistic.jpg" alt="No results" />
                      <p>No results found</p>
                    </div>
                  )
              }
            </div>

          )


      }
    </div>
  );
};
export default View;