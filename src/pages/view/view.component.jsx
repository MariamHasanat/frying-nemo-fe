import "./view.css";
import { useEffect, useState } from "react";
import FilterBar from "../../components/view/filter-bar/filter-bar.component";
import { useNavigate, useSearchParams } from "react-router-dom";

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

  const searchTerms = params.get("searchTerms") || "";
  const categoryFromURL = params.get("categoryFromURL") || "";

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
    getMenuItems();
  }, []);

  return (
    <div>
      <h1>View Menu Items</h1>
      <FilterBar
        searchTerms={searchTerms}
        categoryFromURL={categoryFromURL}
        params={params}
        setParams={setParams} />
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

            if (categoryFromURL) {
              match = match && (item.category === categoryFromURL);
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
                  <span>Name :</span> {item.name}
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
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ViewPage;
