import { useMemo } from "react";
import useParams from "./params.hook";

const useFilteredItems = (menuItems, tourist) => {
  const { myParams } = useParams();
  /**
   * @type {Array}
   */
  const filteredItems = useMemo(() => {

    const filteredMenu = menuItems.filter(e => {

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


    if (tourist) {
      return filteredMenu.map(item => ({ ...item, price: item.price * 2 }));
    }
    return filteredMenu;

  }, [myParams, menuItems, tourist]);

  return filteredItems;
};

export default useFilteredItems;