import { useMemo, useState } from "react";
import useParams from "./params.hook";

/**
 * Filters menu items based on parameter values.
 * @param {boolean} isTourist Is the person ordering a tourist.
 * @returns Filtered list of
 */
const useFilterItems = (menuItems, isTourist) => {
  const { myParams } = useParams();
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

  const filteredItems = useMemo(() => {
    
    const filtered = menuItems.filter(item => {
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

  
      if (min !== null && min !== '')
        match &= (item.price >= min);
      if (max !== null && max !== '')
        match &= (item.price <= max);
      return match;
    });

    if (isTourist) {
      return filtered.map(item => ({ ...item, price: item.price * 2 }));
    } else {
      return filtered;
    }

  }, [myParams, menuItems, isTourist, min, max]);

  return { filteredItems, setMin, setMax };

};

export default useFilterItems;