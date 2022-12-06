import { useSearchParams } from "react-router-dom";
import { useMemo } from 'react';


const useFilterItems =(menuItems)=>{
  const [params] = useSearchParams();
  const searchTerm = params.get('searchFood') || "";
  const categoryFromURL = params.getAll('category') || [];
  const maxFromUrl = params.get('max') || "";
  const minFromUrl = params.get('min') || "";
 
  const filterItem = useMemo(()=>{
    console.log("Calculating filteredItems---");
    return menuItems.filter(item => {
    /**
     * @param {string}str
     */
    const doesItemMatch = str => str.toLowerCase().includes(searchTerm.toLowerCase().trim());
    let match = (
      doesItemMatch(item.name) ||
      doesItemMatch(item.description) ||
      item.ingredients.some(ingredient => doesItemMatch(ingredient))
    );

    if (categoryFromURL.length) {
      match = match && (categoryFromURL.includes(item.category));
    }

    if (minFromUrl) {
      match = match && (item.price >= minFromUrl);
    }

    if (maxFromUrl) {
      match = match && (item.price <= maxFromUrl);
    }
    return match;
  });
  }, [params,menuItems]);
  return filterItem;
};

export default useFilterItems;