import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import useParams from "./params.hooh";

const useFilterItem = () => {
  const filteredItems = useMemo(() =>{
    const {myParams} = useParams();
    return menuItems.filter(item =>
      {
       /**
  //    * Check if search terms are somewhere inside given string.
  //    * @param {string} str 
  //    */
  const doesItMatch = str => str.toLowerCase().includes(myParams.searchTermsFromURL.toLowerCase().trim());

  let match = (
    doesItMatch(item.name) ||
    doesItMatch(item.description) ||
    item.ingredients.some(ingredient => doesItMatch(ingredient))
  );

  if (myParams. categoriesFromURL.length) {
    match = match && (myParams. categoriesFromURL.includes(item.category));
  }

  return match;
      })
  }, [myParams, menuItems]);
}

export default useFilterItem;