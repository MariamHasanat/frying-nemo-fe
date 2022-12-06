import { useMemo } from "react";
import { useSearchParams } from 'react-router-dom';

const useFilteredItems = (menuItems) => {
  const [params] = useSearchParams();
  const searchTermsFromURL = params.get('searchTerms') || '';
  const categoriesFromURL = params.getAll('category') || '';
  
  const filteredItems = useMemo( () => {
    console.log('5');
    return menuItems.filter(item => {
      /**
       * Check if search terms are somewhere inside given string.
       * @param {string} str 
       */
      const doesItMatch = str => str.toLowerCase().includes(searchTermsFromURL.toLowerCase().trim());

      let match = (
        doesItMatch(item.name) ||
        doesItMatch(item.description) ||
        item.ingredients.some(ingredient => doesItMatch(ingredient))
      );

      if (categoriesFromURL.length) {
        match = match && (categoriesFromURL.includes(item.category));
      }

      return match;
    })
  }, [params, menuItems]);


  return filteredItems;
}
export default useFilteredItems;