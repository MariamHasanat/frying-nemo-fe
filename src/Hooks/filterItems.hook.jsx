import { useMemo } from "react";
import {  useSearchParams } from 'react-router-dom';

const useFilteredItem = (menuItems) => {
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
    const doesItMatch = str => str.toLowerCase().includes(searchFromURL.toLowerCase().trim());

    let match = (
      doesItMatch(item.name) ||
      doesItMatch(item.description) ||
      item.ingredients.some(ingredient => doesItMatch(ingredient))
    );

    if (categoriesFromURL.length) {
      match = match && categoriesFromURL.includes(item.category);
    }

    if (minFromURL) {
        match = match && item.price >= minFromURL
    }

    if (maxFromURL) {
      match = match && item.price <= maxFromURL
    }

    return match;
  });
} , [params , menuItems]);



return filteredItems;
}
export default useFilteredItem;