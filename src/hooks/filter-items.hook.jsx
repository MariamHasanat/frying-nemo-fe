import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useFilteredItems = (menuItems) => {

  const [params, setParams] = useSearchParams();
  const searchParamFromURl = params.get('search') || '';
  const categoryFromURl = params.getAll('category') || '';
  const filteredItems = useMemo(() => {

    return menuItems.filter(e => {

      /**
       * 
       * @param {String} str 
       * @returns 
       */
      const doesItMatch = str => str.toLowerCase().includes(searchParamFromURl.toLowerCase().trim());

      let match = (
        doesItMatch(e.name) ||
        doesItMatch(e.description) ||
        e.ingredients.some(ingredient => doesItMatch(ingredient)));

      if (categoryFromURl.length) {
        match = match && (categoryFromURl.includes(e.category));
      }

      return match;

    });

  }, [params, menuItems]);


  return filteredItems;
};

export default useFilteredItems;