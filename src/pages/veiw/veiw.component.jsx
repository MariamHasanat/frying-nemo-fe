import { useEffect, useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/providers/user.provider.component";
import FilterBar from "./filter-bar/filter-bar.component";
import Item from "../../components/item/item.component";
import "./veiw.css";
import { getCartQuantity } from "../../utils/cart";
import { CartContext } from "../../components/providers/cart.provider.component";
import { getItems } from "../../services/items";
import useFilterItems from "../../hooks/item.hooks";
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

const Addveiw = () => {
  const [menuItems, setMenuItems] = useState(initialItems);
  const navigate = useNavigate();
  // const searchTermsFromURL = params.get("searchTerms") || "";
  // const categoriesFromURL = params.getAll("category") || "";
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const getMenuItems = async () => {
    const items = await getItems();
    // console.log(items);
    setMenuItems(items);
    // // Run the code inside after 1000 milliseconds (1 Second)
    // setTimeout(() => {
    //   const items = JSON.parse(localStorage.menuItems || "[]");
    //   setMenuItems(items);
    //   setLoading(false);
    // }, 1000);
  };
  useEffect(() => {
    // To check if the user is already logged in, send him to the view page
    if (!userContext.user?.id) {
      navigate("/login", { replace: false });
    }
  }, []);

  useEffect(() => {
    getMenuItems();
  }, []);
  const filteredItems = useFilterItems(menuItems);

  /**
   * Set query string parameter.
   * @param {string} name Parameter name.
   * @param {string | string[]} value Parameter value.
   */
  

  return (
    <div className="view-page">
      <h1>View Menu Items</h1>
      <FilterBar />
      {
        <div className="items-container">
          {filteredItems.length ? (
            filteredItems.map((item, index) => (
              <Item
                data={item}
                key={item.name + index}
                dispatch={cartContext.dispatch}
                cartQuantity={getCartQuantity(item.id, cartContext.cart)}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No results found</p>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default Addveiw;
