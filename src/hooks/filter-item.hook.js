import { useMemo } from "react";
import useParam from "./params.hook";

const useFilterItmes = (menuItems) => {
  const {myParams} = useParam()

  const filteredItems = useMemo(() => {

    return menuItems.filter(item => {
      /**
       * Check if search terms are somewhere inside given string.
       * @param {string} str 
       */
      const doesItMatch = str => str.toLowerCase().includes(myParams.searchTermsFromURL.toLowerCase().trim());

      let match = (
        doesItMatch(item.name) ||
        doesItMatch(item.description) ||
        item.ingredients.some(ingredient => doesItMatch(ingredient))
      );

      if (myParams.categoriesFromURL.length) {
        match = match && (myParams.categoriesFromURL.includes(item.category));
      }

      return match;
    });

  }, [myParams, menuItems]);

  return filteredItems;
};

export default useFilterItmes;