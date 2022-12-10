import { useMemo } from 'react';
import useParams from "./params.hook";
/**
 * Filters menu items based on parameter values.
 * @param {boolean} isTourist Is the person ordering a tourist.
 * @returns Filtered list of
 */

const useFilterItems = (menuItems, isTourist) => {
  const { myParams } = useParams();
  
  const filterItem = useMemo(() => {
    const filtered = menuItems.filter(item => {
      /**
       * @param {string}str
       */
      const doesItemMatch = str => str.toLowerCase().includes(myParams.searchTermsFromURL.toLowerCase().trim());
      let match = (
        doesItemMatch(item.name) ||
        doesItemMatch(item.description) ||
        item.ingredients.some(ingredient => doesItemMatch(ingredient))
      );

      if (myParams.categoriesFromURL.length) {
        match = match && (myParams.categoriesFromURL.includes(item.category));
      }

      if (myParams.minFromUrl) {
        match = match && (item.price >= myParams.minFromUrl);
      }

      if (myParams.maxFromUrl) {
        match = match && (item.price <= myParams.maxFromUrl);
      }
      return match;
    });

    if (isTourist) {
      return filtered.map(item => ({ ...item, price: item.price * 2 }));
    } else {
      return filtered;
    }

  }, [myParams, menuItems, isTourist]);
  return filterItem;
};

export default useFilterItems;