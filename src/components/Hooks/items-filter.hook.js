
import { useMemo ,useState} from 'react';
import { useSearchParams } from 'react-router-dom';


const useItems = (menuitems) => {
  // const initial = [];
  const [params] = useSearchParams();
  const searchFromURL = params.get("searchTerms") || '';
  const categoriesFromURL = params.getAll("categories") || '';
  const categoriesURL = params.get("categories") || '';
  const maxFromURL = params.get("max") || '';
  const minFromURL = params.get("min") || '';
  const price = params.get("price") || '';

  console.log('hello custom Hook');
  const filterItems = useMemo(() => {
    return menuitems.filter(item => {
      /**
           * Check if search terms are somewhere inside given string.
           * @param {string} str 
           */

      ///update the value in isMatch method to search from search query in the URL  //easy user experience 
      const isMatch = str => str.toLowerCase().includes(searchFromURL.toLowerCase().trim());
      let match = (
        isMatch(item.name) ||
        isMatch(item.description) ||
        item.ingrediant?.some(ingredient => isMatch(ingredient))

      );

      if (categoriesFromURL.length) {
        match = match && (categoriesFromURL.includes(item.category));
        console.log(match);
      }

      if (categoriesURL) {
        match = match && (item.category === categoriesURL);
      }

      if (maxFromURL && minFromURL) {
        match = match && (item.price >= minFromURL && item.price <= maxFromURL);

      }
      if (price) {
        match = match && (item.price >= price);
      }

      return match;
      // item.name.toLowerCase().includes(search.toLowerCase().trim())
    });

  }, [params, menuitems]);
  return filterItems;
};

export default useItems;