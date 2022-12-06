import "./view.css";
import Card from "../../components/view/common/card/card.component";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../../components/view/common/filter/filter-bar.component";
import { CATEGORIES } from "../../data/constants";
import { useEffect } from "react";
import { capitalizeFirstLetter } from "../../services/utilities";
import { fetchMenuItems } from "../../services/fetchers";
import { useFilterItems } from "../../hooks/filter-items.hook";

const ViewPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  let categories = searchParams.getAll("category")[0] || "";
  const filteredItems = useFilterItems(menuItems);

  const updateParam = (key, value) => {
    let params = new URLSearchParams(searchParams);
    (Array.isArray(value) ? value.length != 0 : value)
      ? params.set(key, value)
      : params.delete(key);
    setSearchParams(params);
  };

  useEffect(() => {
    if ((searchParams.getAll("category")[0] || "") == "") {
      updateParam("category", CATEGORIES);
    }
  }, []);

  const fetchItems = () => {
    fetchMenuItems().then(
      (res) => {
        setMenuItems(
          res.filter((item) => {
            const fixStr = (str) => str.toLowerCase().trim(); // Helper
            const isMatch = (str1) => fixStr(str1).includes(fixStr(search)); // Helper
            return (
              (isMatch(item.name) ||
                isMatch(item.description) ||
                (Array.isArray(item.ingredients) && item.ingredients.some((ing) => ing.includes(search)))) && categories.toLocaleLowerCase().split(",").includes(item.category.toLowerCase())
            );
          })
        );
      }
    )
  }

  if (menuItems.length == 0) {
    fetchItems();
  }

  return (
    <div className="view-page">
      <div className="header">
        <p>OUR MENU</p>
        <FilterBar
          searchParams={searchParams}
          updateParam={updateParam}
          search={search}
          setSearch={setSearch}
          categories={categories}
        ></FilterBar>
      </div>
      <div className="cards">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, i) => (
            <Card
              key={item.id}
              item={item}
              itemId={item.id}
              itemName={item.name}
              itemCategory={capitalizeFirstLetter(item.category)}
              itemDescription={item.description}
              itemIngredients={item.ingredients
                .toString()
                .replaceAll(",", ", ")}
              itemPrice={item.price}
              image={item.image}
              i={i}
              ctr={0}
            />
          ))
        ) : (
          <div className="none">No items found!</div>
        )}
      </div>
    </div>
  );
};

export default ViewPage;
