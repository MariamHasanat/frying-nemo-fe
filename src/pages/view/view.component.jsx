import "./view.css";
import Card from "../../components/view/common/card/card.component";
import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../../components/view/common/filter/filter-bar.component";
import { CATEGORIES } from "../../data/constants";
import { useEffect } from "react";
import { capitalizeFirstLetter } from "../../services/utilities";
import { fetchMenuItems } from "../../services/fetchers";
import { useFilterItems } from "../../hooks/filter-items.hook";
import { DataContext } from "../../components/core/providers/data-provider.component";
import useGetItems from "../../hooks/menu/get-items.hook";

const ViewPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  let categories = searchParams.getAll("category")[0] || "";
  const { menuItems, loading } = useGetItems(search, categories);
  const filteredItems = useFilterItems(menuItems);
  const { isToggled, toggle } = useContext(DataContext);

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

  return (
    <div className="view-page">
      <div className="header">
        <p>OUR MENU</p>
        <FilterBar
          toggle={toggle}
          searchParams={searchParams}
          updateParam={updateParam}
          search={search}
          setSearch={setSearch}
          categories={categories}
        ></FilterBar>
      </div>
      <div className="cards">
        {!loading ? (
          filteredItems.length > 0 ? (
            filteredItems.map((item, i) => (
              <Card
                key={item?._id}
                item={item}
                itemId={item?._id}
                itemName={item?.name}
                itemCategory={capitalizeFirstLetter(item?.category)}
                itemDescription={item?.description}
                itemIngredients={item?.ingredients
                  .toString()
                  .replaceAll(",", ", ")}
                itemPrice={item?.price * (isToggled ? 2 : 1)}
                image={item?.imageURL}
                i={i}
                ctr={0}
              />
            ))
          ) : (
            <div className="none">No items found!</div>
          )
        ) :
          <div className="none">Loading...</div>}
      </div>
    </div>
  );
};

export default ViewPage;