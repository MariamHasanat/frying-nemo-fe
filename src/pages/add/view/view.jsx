import { useEffect} from 'react';
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Item from '../../../components/item/items/item';
import Spinner from '../../../components/spinner/spinner';
import './view.css';
import FilterBar from '../../../components/filter-bar/filter-bar';
import { useContext } from 'react';
import { UserContext } from '../../../components/provider/provider';
import { getQuantity } from '../../../util/util';
import { CartContext } from '../../../components/provider/cartprovider';
import useGetitems from '../../../hooks/git-item.hook';

const View = () => {
  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext);
  // const  [min,setMin] = useState();
  // const  [max,setMax] = useState();
  const navigate = useNavigate();
  // const setItemSearchInLocalStoreg=(value)=>{
  //   localStorage.setItem("the informathion search",value);
  //   SetSearch(value);[]
  // }
  useEffect(() => {
    if (!userContext.user?.id) {
      navigate('/login');
    }
  }, []);
  const { loading, menuItems } = useGetitems();
  // const filterItem = useFilterItems(menuItems, {max, min });




  return (
    <div className='view-page'>
      <h1>View menu item </h1>
      <FilterBar
       
      >
      </FilterBar >
      {
        loading
          ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>
          : (
            <div className="items-container">
              {
                menuItems.length
                  ? menuItems.map((item, index) =>
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