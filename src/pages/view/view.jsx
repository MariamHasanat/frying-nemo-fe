import Card from './card';
import './view.css';
import React, { useContext } from 'react';
import { FilterBar } from './filter-bar/filter-bar';
import { CartContext } from '../../components/providers/cart-provider';
import Spinner from '../../components/pop/spinner';
import useGetItems from '../../components/Hooks/get-item-hook';

const ViewPage = (props) => {
  const { loading, menuItems } = useGetItems();
  const cartContext = useContext(CartContext);


  const getCartQuantity = (id, cart) => {
    const currentCartItem = cart.find(CartItem => CartItem.meal.id === id);
    if (currentCartItem)
      return currentCartItem.quantity;
    else
      return 0;
  };
  return (

    <div className='wrapper' >
      <br />
      <div className="filter">
        <FilterBar />

      </div>

      {
        loading ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Spinner /></div>

          : (
            <div className="container" >

              {
                menuItems.length
                  ? menuItems.map((item, index) =>
                    <Card data={item}
                      key={item.name + index}
                      dispatch={cartContext.dispatch}
                      cartQuantity={getCartQuantity(item.id, cartContext.cart)}
                    />
                  )
                  : (
                    <div className="no-results">
                      <p>No results found</p>
                    </div>
                  )
              }

            </div>)
      }
    </div>
  );
};

export default ViewPage;