import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";


const useFilterItems = (menuItems) => {
  const [param] = useSearchParams() ;
  const searchUsingURL = param.get('searchTerms') || '';
  const categoryUsingURL = param.getAll('category') || '';
  const minPrice = param.get('min') || '';
  const maxPrice = param.get('max') || '';
  const filteredIetems = useMemo(() => {
    return menuItems.filter(element => {
      const doesItMatch = (value) => value.toLowerCase().includes(searchUsingURL.toLowerCase().trim());
      let match = (
        doesItMatch(element.name)
        || doesItMatch(element.description)
        || element.ingredients.some(ingredient => doesItMatch(ingredient))
        // => i can use find function instead , but (some is better to use) 
      );
      if (categoryUsingURL) {
        // match = match && element.category == categoryUsingURL ;   => for a single category filter :) 
        match = match && categoryUsingURL.includes(element.category);  // for a multiple category filter :)
      }
      if (minPrice)
        match = match && element.price >= minPrice;
      if (maxPrice)
        match = match && element.price <= maxPrice;
      return match;
    });
  } , [param , menuItems]) ;
  return filteredIetems ;
}
export {useFilterItems} ;