import { useMemo } from "react";
import {  useSearchParams } from 'react-router-dom';
import useParam from "./useParam.hook";

const useFilteredItem = (menuItems) => {
  const { myParams } = useParam();

  const [params] = useSearchParams();
  const searchFromURL = params.get('search') || '';
  const categoriesFromURL = params.getAll('category') || '';
  const minFromURL = params.get('min') || '';
  const maxFromURL = params.get('max') || '';
  
  const filteredItems = useMemo(() => { 
    return menuItems.filter(item => {
    /**
     * Check if search terms are somewhere inside given string.
     * @param {string} str 
     */
    const doesItMatch = str => str.toLowerCase().includes(myParams.searchFromURL.toLowerCase().trim());

    let match = (
      doesItMatch(item.name) ||
      doesItMatch(item.description) ||
      item.ingredients.some(ingredient => doesItMatch(ingredient))
    );

    if (myParams.categoriesFromURL.length) {
      match = match && categoriesFromURL.includes(item.category);
    }

    if (myParams.minFromURL) {
        match = match && item.price >= minFromURL
    }

    if (myParams.maxFromURL) {
      match = match && item.price <= maxFromURL
    }

    return match;
  });
} , [myParams , menuItems]);



return filteredItems;
}
export default useFilteredItem;