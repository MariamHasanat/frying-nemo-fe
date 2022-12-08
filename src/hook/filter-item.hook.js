import { useSearchParams } from "react-router-dom";
import { useMemo } from 'react';
import useParams from "./params.hook";
import useToggle from "./tourist.hook";
/**
 * @param {boolean} isTourist
 * 
 */

const useFilterItems = (menuItems,isTourist) => {
  const { myParams } = useParams();
  const filterItem = useMemo(() => {
    const filtered= menuItems.filter(item => {
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
    if(isTourist){
      return filterItem.map(item=>({...item,price:item.price*2}));
    }else
    return filtered;
  }, [myParams, menuItems,isTourist]);
  return filterItem;
};

export default useFilterItems;