import { useMemo } from "react";
import item from "../services/item";

const useFilterItem = () => {
  const filteredItems = useMemo(() =>{
    return menuItems.filter(item =>
      {
       /**
  //    * Check if search terms are somewhere inside given string.
  //    * @param {string} str 
  //    */
  const doesItMatch = str => str.toLowerCase().includes(searchTermsFromURL.toLowerCase().trim());

  let match = (
    doesItMatch(item.name) ||
    doesItMatch(item.description) ||
    item.ingredients.some(ingredient => doesItMatch(ingredient))
  );

  if (categoriesFromURL.length) {
    match = match && (categoriesFromURL.includes(item.category));
  }

  return match;
      })
  }, [params, menuItems]);
}

export default useFilterItem;