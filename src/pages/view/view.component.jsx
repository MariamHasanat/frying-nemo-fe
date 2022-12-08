import "./view.css";
import { useEffect, useState, useContext } from "react";
import FilterBar from "../../components/view/filter-bar/filter-bar.component";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { UserContext } from "../../components/providers/user-provider";
import AddDeleteItem from "./add-delete/add-delete.componenet";
import { getCartQuantity } from "../../utility/cart";
import { CartContext } from "../../components/providers/cart-provider.component";
import { fetchItems, getItem, getItems } from "../../services/items";
import { useMemo } from "react";
import { useFilterItems } from "../../hooks/filter-items.hook";
import { useParams } from "../../hooks/params.hook";
import { useToggle } from "../../hooks/common/toggle.hook";

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

const ViewPage = (props) => {
  // const [params, setParams] = useSearchParams();
  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const [isTourist, toggleIsTourist] = useToggle(false);


  // const searchTerms = params.get("searchTerms") || "";
  // const categoryFromURL = params.getAll("categoryFromURL") || "";
  // const minValue = params.get("minValue") || "";
  // const maxValue = params.get("maxValue") || "";

  const getMenuItems = async () => {
    setLoading(true);
    const items = await fetchItems();
    setMenuItems(items);
    setLoading(false);
  };

  // When the page rendered for the first time
  // if the array is empty will not be executed again
  useEffect(() => {
    getMenuItems();
  }, []);


  const filteredItems = useFilterItems(menuItems,isTourist);

  return (
    <div>
      <h1>View Menu Items</h1>
      <FilterBar isTourist={isTourist} toggleIsTourist={toggleIsTourist}/>
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
      <div className="items-container">
        {
          filteredItems.length ?
            filteredItems.map((item, index) => (

              <div key={item.name + index} className="box">
                <div className="img">
                  <img src={item.image} alt="food" height={400} />
                </div>
                <div>
                  <Link to={`/view-details/${item.id}`}>
                    <h2>{item.name}</h2>
                  </Link>
                </div>
                <div className="desc">
                  <span>Description :</span> {item.description}
                </div>
                <div>
                  <span>Price :</span> {item.price}$
                </div>
                <div>
                  <span>Category :</span> {item.category}
                </div>
                <div>
                  <span>Ingredients : </span>
                  {item.ingredients.join(" | ")}
                </div>
                <AddDeleteItem
                  dispatch={cartContext.dispatch}
                  item={item}
                  cart={cartContext.cart}
                  cartQuantity={getCartQuantity(item.id, cartContext.cart)}
                />
              </div>
            )) :
            <img src={process.env.PUBLIC_URL + "/Error-404-02.jpg"} alt="" width={700} />
        }
      </div>
    </div>
  );
};

export default ViewPage;
