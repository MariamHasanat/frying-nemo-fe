import { useMemo } from "react";
import useParams from './params.hook';

const useFilteredItems = (menuItems, isTourist) => {

  const { myParams } = useParams();
  const filteredItems = useMemo(() => {
    console.log('5');
    const filtered =  menuItems.filter(item => {
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
    if (isTourist)
      return filtered.map(item => ({ ...item, price: item.price * 2 }));
    return filtered;
  }, [myParams, menuItems, isTourist]);
  return filteredItems
};
export default useFilteredItems;