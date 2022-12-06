import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const useFilteredItems = (menuItems) =>{
  const [params, setParams] = useSearchParams();
  const categoriesFromURL = params.getAll('category') || '';
  const search = params.get('search') || '';
  const minPrice = params.get('Min') || '';
  const maxPrice = params.get('Max') || '';


  const filteredItems = menuItems.filter(item => {
    /**
     * check if search terms are somewhere inside given string.
     * @param {string} str
     */
    const isMatch = str => str.toLowerCase().includes(search.toLowerCase().trim());

    let match = (
      isMatch(item.name) ||
      isMatch(item.description) ||
      item.ingredients.some(ingredient => isMatch(ingredient))
    );

    if (categoriesFromURL.length) {
      match = match && (categoriesFromURL.includes(item.category));
    }

    if (minPrice && maxPrice) {
      match = match && (item.price >= minPrice && item.price <= maxPrice);
    }


    return match;
  });
  return filteredItems;
};

export default useFilteredItems;