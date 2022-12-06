import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSearchItem from './searchItem.hook';

const useFilterItems = (menuItem, { max, min }) => {
   const {myParam}=useSearchItem();
  
  const filterItem = useMemo(() => {
    return menuItem.filter(item => {     
      const dose = str => str.toLowerCase().includes(myParam.searchFromUrl.toLowerCase().trim());//function ببعت الو يلي جواتو اخنصار

      let match = (
        dose(item.name) ||//ممكن اكتب هيك بختصر 
        item.description.toLowerCase().includes(  myParam. searchFromUrl.toLowerCase().trim()) ||
        item.ingredients?.some(ingredient => ingredient.toLowerCase().includes(myParam.searchFromUrl.toLowerCase().trim()))
      );
      if (myParam.categoriesFromURL.length) {
        match = match && (myParam.categoriesFromURL.includes(item.category));
      }
      if (min)
        match = match && (item.price >= min);
      if (max)
        match = match && (item.price <= max);
      return match;
    });
  }, [myParam, menuItem, max, min]);
  return filterItem;
};
export default useFilterItems;