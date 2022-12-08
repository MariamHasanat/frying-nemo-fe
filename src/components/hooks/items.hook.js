import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useParams from './params.hook';


const useFilteredItems = (menuItems, isTourist) =>{
  const {someParams} = useParams();
  // const minPrice = someParams.params.get('Min') || '';
  // const maxPrice = someParams.params.get('Max') || '';


  const filteredItems = useMemo(()=>{
    const filtered = menuItems.filter(item => {
      /**
       * check if search terms are somewhere inside given string.
       * @param {string} str
       */
      const isMatch = str => str.toLowerCase().includes(someParams.searchTermsFromURL.toLowerCase().trim());
  
      let match = (
        isMatch(item.name) ||
        isMatch(item.description) ||
        item.ingredients.some(ingredient => isMatch(ingredient))
      );
  
      if (someParams.categoriesFromURL.length) {
        match = match && (someParams.categoriesFromURL.includes(item.category));
      }
  
      if (someParams.minPrice && someParams.maxPrice) {
        match = match && (item.price >= someParams.minPrice && someParams.item.price <= someParams.maxPrice);
      }
  
  
      return match;
    });
    if (isTourist){
      return filtered.map(item => ({...item, price: item.price*2}));
    }
    else {
      return filtered;
    }
  },[someParams, menuItems, isTourist])
  return filteredItems;
};

export default useFilteredItems;