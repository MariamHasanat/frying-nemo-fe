import { useState, useEffect } from "react";
import "./view-item.css";
import { useParams } from "react-router-dom";
import { fetchItem } from "../../services/items";
import Item from "../../components/view/item/item.component";
import { getCartQuantity } from "../../utility/cart";
import { useContext } from "react";
import { CartContext } from "../../components/providers/cart-provider.component";

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

const ViewItemPage = (props) => {
  const params = useParams();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const cartContext = useContext(CartContext);

  const getItem = async () => {
    setLoading(true);
    const item = await fetchItem(params.id);
    console.log(item);
    if (item !== null) {
      setCurrentItem(item);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="view-item-page">
      <h1>View Menu Item</h1>
      {loading && (
        <div className="loading">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="loading">Loading ...</div>
        </div>
      )}
      {!loading && currentItem !== null ? (
        <Item
          data={currentItem}
          item={currentItem}
          dispatch={cartContext.dispatch}
          cartQuantity={getCartQuantity(currentItem.id, cartContext.cart)}
        />
      ) : (
        <img src={process.env.PUBLIC_URL + "/Error-404-02.jpg"} alt="" width={700} />
      )}
    </div>
  );
};//Error-404-02

export default ViewItemPage;
