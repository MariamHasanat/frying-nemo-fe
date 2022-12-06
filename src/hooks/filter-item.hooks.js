import { useMemo } from "react";
import { useSearchParams} from 'react-router-dom';
import { useParams } from "./params.item";
const useFilterItems=(menuItems)=>
{
const {myParams}=useParams()

  const filteredMenu = useMemo(() => {
    return menuItems.filter(item => {
      /**
       * Check if search terms are somewhere inside given string.
       * @param {string} str 
       */
      const doesItMatch = str => str.toLowerCase().includes(myParams.searchURL.toLowerCase().trim());

      let match = (
        doesItMatch(item.name) ||
        doesItMatch(item.description) ||
        item.ingredients.some(ingredient => doesItMatch(ingredient))
      );

      if (myParams.categoryParams.length) {
        match = match && ( myParams.categoryParams .includes(item.category));
      }

      if (myParams.MINParams && myParams.MAXParams) {
        match = match && (item.price >= myParams.MINParams && item.price <= myParams.MAXParams);
      }
      if (myParams.categoryParams.length) {
        match = match && (myParams.categoryParams.includes(item.category));
      }
      return match;
    });

  }, [myParams, menuItems])
  return filteredMenu;
}
export {

  useFilterItems
}