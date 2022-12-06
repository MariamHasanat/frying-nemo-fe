import { useSearchParams } from "react-router-dom";
import { useMemo } from 'react';
import useParams from "./params.hook";


const useFilterItems = (menuItems) => {
  const { myParams } = useParams();

  const filterItem = useMemo(() => {
    return menuItems.filter(item => {
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
  }, [myParams, menuItems]);
  return filterItem;
};

export default useFilterItems;