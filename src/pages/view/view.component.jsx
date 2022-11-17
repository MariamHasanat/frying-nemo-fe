import "./view.css";
import { useEffect, useState, useContext } from "react";
import FilterBar from "../../components/view/filter-bar/filter-bar.component";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { UserContext } from "../../components/user-provider/user-provider";
import AddDeleteItem from "./add-delete/add-delete.componenet";

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
  const [menuItems, setMenuItems] = useState(initialItems);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const userContext = useContext(UserContext);


  const searchTerms = params.get("searchTerms") || "";
  const categoryFromURL = params.getAll("categoryFromURL") || "";
  const minValue = params.get("minValue") || "";
  const maxValue = params.get("maxValue") || "";

  const getMenuItems = () => {
    setLoading(true);

    setTimeout(() => {
      const items = JSON.parse(localStorage.menuItems || "[]");
      setMenuItems(items);
      setLoading(false);
    }, 1000);
  };

  // When the page rendered for the first time
  // if the array is empty will not be executed again
  useEffect(() => {
    if (!userContext.user?.id) {
      navigate('/login', { replace: false });
    }
    getMenuItems();
  }, []);

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
    <div>
      <h1>View Menu Items</h1>
      <FilterBar
        searchTerms={searchTerms}
        minValue={minValue}
        maxValue={maxValue}
        categoryFromURL={categoryFromURL}
        params={params}
        setParam={setParam} />
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
        {menuItems
          .filter((item) => {
            let match =
              item.name.toLowerCase().includes(searchTerms.toLowerCase().trim()) ||
              item.description
                .toLowerCase()
                .trim()
                .includes(searchTerms.toLowerCase().trim()) ||
              item.ingredients.some((ingredient) => {
                return ingredient
                  .toLowerCase()
                  .trim()
                  .includes(searchTerms.toLowerCase().trim());
              });

            if (categoryFromURL.length) {
              match = match && (categoryFromURL.includes(item.category));
            }

            if (minValue) {
              match = match && item.price >= parseInt(minValue);
            }
            if (maxValue) {
              match = match && item.price <= parseInt(maxValue);
            }

            return match;
          })
          .map((item, index) => {
            return (
              <div key={item.name + index} className="box">
                <div className="img">
                  <img src={item.image} alt="food" height={400} />
                </div>
                <div>
                  <Link to={`/view-details/${item.id}`} ><h2>{item.name}</h2></Link>
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
                <AddDeleteItem item={item} dispatch={props.dispatch} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ViewPage;
