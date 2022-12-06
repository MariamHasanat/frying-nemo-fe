import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useFilterItems=(menuItems)=>{
  const [params] =useSearchParams();
  const searchTermsFromURL = params.get('searchTerms') || '';
const categoryFromURL = params.getAll('category') || '';
const price = params.get("price") || '';
const maxFromURL = params.get("max") || '';
const minFromURL = params.get("min") || '';
const filteredItems = useMemo(()=>{
  
  console.log("calculating items ... ");
  return menuItems.filter(item => {

  /**
   * Check if search terms are somewhere inside given string.
   * @param {string} str 
   */
  const DoesItMatch = str =>
    str.toLowerCase().includes(searchTermsFromURL.toLowerCase().trim());

  let Match = (
    DoesItMatch(item.name) ||
    DoesItMatch(item.description) ||
    item.ingredients?.some(Ingredient => DoesItMatch(Ingredient))
  );

  if (categoryFromURL.length) {
    Match = Match && categoryFromURL.some(cat => cat === item.category);
  }
  if (maxFromURL && minFromURL) {
    Match = Match && (item.price >= minFromURL && item.price <= maxFromURL);
  }
  if (price) {
    Match = Match && (item.price >= price && item.price <= parseInt(price, 0));
  }

  return Match;
});
},[params,menuItems]);
return filteredItems;
};
export default useFilterItems;