import "./view.css";
import Card from "../../components/view/common/card/card.component";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../../components/view/common/filter/filter-bar.component";
import { CATEGORIES } from "../../data/constants";
import { useEffect } from "react";
import { capitalizeFirstLetter } from "../../services/utilities";

const ViewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  let categories = searchParams.getAll("category")[0] || "";

  const updateParam = (key, value) => {
    // console.log(value)
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

  let arr = JSON.parse(localStorage.getItem("menuItems")) || []; // Fetching data
  arr = arr.filter((item) => {
    const fixStr = (str) => str.toLowerCase().trim(); // Helper
    const isMatch = (str1) => fixStr(str1).includes(fixStr(search)); // Helper
    return (
      (isMatch(item.name) ||
        isMatch(item.description) ||
        item.ingredients.some((ing) => ing.includes(search))) &&
      categories
        .toLocaleLowerCase()
        .split(",")
        .includes(item.category.toLowerCase())
    );
  });

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
        {arr.length > 0 ? (
          arr.map((item, i) => (
            <Card
              key={item.id}
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
