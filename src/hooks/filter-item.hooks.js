import { useMemo } from "react";
import { useSearchParams } from 'react-router-dom';
import { useParams } from "./params.item";
import useToggle from "./toggole-hook";

const useFilterItems = (menuItems, isTourist) => {
  const { myParams } = useParams();

  const filteredMenu = useMemo(() => {
    const filtered= menuItems.filter(item => {
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
        match = match && (myParams.categoryParams.includes(item.category));
      }

      if (myParams.MINParams && myParams.MAXParams) {
        match = match && (item.price >= myParams.MINParams && item.price <= myParams.MAXParams);
      }
      if (myParams.categoryParams.length) {
        match = match && (myParams.categoryParams.includes(item.category));
      }
     
      return match;
      
    } );
    if(isTourist)
    {

      return filtered.map(item => ({...item,price:item.price*2}))
    }
  else {
    return filtered

  }
  
    

  }, [myParams, menuItems,isTourist]);

  return filteredMenu;



};
export {

  useFilterItems
};