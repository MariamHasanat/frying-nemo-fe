import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useFilterItems = (menuItem, { max, min }) => {
  const [param, SetParam] = useSearchParams();
  const searchFromUrl = param.get('searchTerms') || '';
  const categoriesFromURL = param.getAll('category') || '';
  
  const filterItem = useMemo(() => {
    return menuItem.filter(item => {     
      const dose = str => str.toLowerCase().includes(searchFromUrl.toLowerCase().trim());//function ببعت الو يلي جواتو اخنصار

      let match = (
        dose(item.name) ||//ممكن اكتب هيك بختصر 
        item.description.toLowerCase().includes(searchFromUrl.toLowerCase().trim()) ||
        item.ingredients?.some(ingredient => ingredient.toLowerCase().includes(searchFromUrl.toLowerCase().trim()))
      );
      if (categoriesFromURL.length) {
        match = match && (categoriesFromURL.includes(item.category));
      }
      if (min)
        match = match && (item.price >= min);
      if (max)
        match = match && (item.price <= max);
      return match;
    });
  }, [param, menuItem, max, min]);
  return filterItem;
};
export default useFilterItems;