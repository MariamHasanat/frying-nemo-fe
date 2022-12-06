import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import useParams from "./params.hook";

const useFilteredItems = (menuItems) => {
  const { myParams } = useParams();
  const filteredItems = useMemo(() => {

    return menuItems.filter(e => {

      /**
       * 
       * @param {String} str 
       * @returns 
       */
      const doesItMatch = str => str.toLowerCase().includes(myParams.searchParamFromURl.toLowerCase().trim());

      let match = (
        doesItMatch(e.name) ||
        doesItMatch(e.description) ||
        e.ingredients.some(ingredient => doesItMatch(ingredient)));

      if (myParams.categoryFromURl.length) {
        match = match && (myParams.categoryFromURl.includes(e.category));
      }

      return match;

    });

  }, [myParams, menuItems]);


  return filteredItems;
};

export default useFilteredItems;