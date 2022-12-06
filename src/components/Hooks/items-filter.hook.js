import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useParams from './use-params.hook';

const useItems = (menuitems) => {
  const { myParam } = useParams();

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
      const isMatch = str => str.toLowerCase().includes(myParam.searchFromURL.toLowerCase().trim());
      let match = (
        isMatch(item.name) ||
        isMatch(item.description) ||
        item.ingrediant?.some(ingredient => isMatch(ingredient))
​
      );
​
      if (myParam.categoriesURL.length) {
        match = match && (myParam.categoriesFromURL.includes(item.category));
        console.log(match);
      }
​
      if (myParam.categoriesURL) {
        match = match && (item.category === myParam.categoriesURL);
      }
​
      if (myParam.maxFromURL && myParam.minFromURL) {
        match = match && (item.price >= myParam.minFromURL && item.price <= myParam.maxFromURL);
​
      }
      if (myParam.price) {
        match = match && (item.price >= price);
      }
​
      return match;
      // item.name.toLowerCase().includes(search.toLowerCase().trim())
    });
​
  }, [params, menuitems]);
  return filterItems;
};
​
export default useItems;