import { useContext } from 'react';
import Filter from '../core/filter-bar/Filter';
import Spinner from '../core/spinner/Spinner';
import Item from '../view/item/item.component';
import './viewpage.css';
import { CartContext } from '../../common/Provider/cart-provider-component';
import Test from '../../common/Provider/Provider-commponet';
import { getCartQuantity } from '../../data/getCartQuantity';
import useToggle from '../../hooks/toggole-hook';
import UseGetItem from '../../hooks/menu/get-items';

const ViewPage = (props) => {


  const initialItems = [];
  const ContextCart = useContext(CartContext);
  const isTourist = useToggle(false);
  const { menuItems, loading } = UseGetItem();



  return (
    <div className="view-page">
      <Test><h1>View Menu Items</h1></Test>
      {menuItems.length}
      <Filter isTourist={isTourist.value} toggleIsTourist={isTourist.toggle} />
      {loading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Spinner /></div>
        : <div className="items-container">

          {
            menuItems.map((item, index) => <Item cartQuantity={getCartQuantity(item.id, ContextCart.cart)} data={item} key={item.name + index} />)
          }
        </div>
      }
    </div>
  );
};


export default ViewPage;