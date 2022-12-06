import { useMemo } from "react";
import { useParams } from "./params.hook";

const useFilterItems = (menuItems) => {
  const { myParams } = useParams();


  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      /**
       * Check if search terms are somewhere inside given string.
       * @param {string} str 
       */
      const doesItMatch = str => str.toLowerCase().includes(myParams.searchTerms.toLowerCase().trim());

      let match = (
        doesItMatch(item.name) ||
        doesItMatch(item.description) ||
        item.ingredients.some(ingredient => doesItMatch(ingredient))
      );

      if (myParams.categoryFromURL.length) {
        match = match && (myParams.categoryFromURL.includes(item.category));
      }

      if (myParams.minValue) {
        match = match && item.price >= parseInt(myParams.minValue);
      }
      if (myParams.maxValue) {
        match = match && item.price <= parseInt(myParams.maxValue);
      }

      return match;
    });
  }, [myParams, menuItems]);
  return filteredItems;
};
export {
  useFilterItems
}

