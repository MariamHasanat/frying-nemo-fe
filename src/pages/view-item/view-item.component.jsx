import { useState, useEffect } from "react";
import "./view-item.css";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/items";
import Item from "../../components/view/item/item.component";
import { getCartQuantity } from "../../utility/cart";

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

  useEffect(() => {
    setLoading(true);
    const item = getItem(params.id);
    if (params.id) {
      setCurrentItem(item);
      setLoading(false);
    }
  }, [params.id]);

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
          dispatch={props.dispatch}
          cartQuantity={getCartQuantity(currentItem.id, props.cart)}
        />
      ) : (
        <span>Item Not Found!</span>
      )}
    </div>
  );
};

export default ViewItemPage;
