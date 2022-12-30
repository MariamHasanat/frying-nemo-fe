import { useMemo } from "react";
import { useParams } from "../hooks/params.hook";


const useFilterItems = (menuItems) => {
  const { param } = useParams() ;
  
  const filteredIetems = useMemo(() => {
    return menuItems.filter(element => {
      const doesItMatch = (value) => value.toLowerCase().includes(param.searchUsingURL.toLowerCase().trim());
      let match = (
        doesItMatch(element.name)
        || doesItMatch(element.description)
        || element.ingredients.some(ingredient => doesItMatch(ingredient))
        // => i can use find function instead , but (some is better to use) 
      );
      if (param.categoryUsingURL) {
        // match = match && element.category == categoryUsingURL ;   => for a single category filter :) 
        match = match && param.categoryUsingURL.includes(element.category);  // for a multiple category filter :)
      }
      if (param.minPrice)
        match = match && element.price >= param.minPrice;
      if (param.maxPrice)
        match = match && element.price <= param.maxPrice;
      return match;
    });
  } , [param , menuItems]) ;
  return filteredIetems ;
}
export {useFilterItems} ;