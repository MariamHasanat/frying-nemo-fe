import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
//const cartContext = useContext(CartContext);
//localStorage.getItem("menuItems").length ? [...JSON.parse(localStorage.getItem("menuItems"))]: [];


const useFilterItems =(menuItems) =>{
  
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTermsFromURL = searchParams.get('q') || '';
  const categoryFromURL = searchParams.get('category') || '';
  let minPriceFromUrl= parseInt(searchParams.get('minprice'));
  let maxPriceFromUrl= parseInt(searchParams.get('maxprice'));
  
return useMemo(()=>
  
    {return menuItems.filter(item=>{
      /**
       * @param {string} str
       */
      const doesItMatch= (str)=>{return(str.toLowerCase().includes(searchTermsFromURL.toLowerCase().trim()));}
      let match =(doesItMatch(item.name) ||
      doesItMatch(item.description) ||
      item.ingredients.some(ingredient=>doesItMatch(ingredient))
      );
      if (categoryFromURL) {
        match = match && (item.category === categoryFromURL);
      }
      if(minPriceFromUrl || maxPriceFromUrl ){
        if(!maxPriceFromUrl){
          match = match && (item.price >= minPriceFromUrl);
        }else
        if(maxPriceFromUrl >= minPriceFromUrl){
          match = match && (item.price >= minPriceFromUrl && item.price <= maxPriceFromUrl);
        }else
        if(!minPriceFromUrl){
          match = match && (item.price <= maxPriceFromUrl);
        }else
        if(maxPriceFromUrl < minPriceFromUrl){
          match = false;
        }
    }
      return(match);
    })
  
  },[menuItems,searchParams] );};


export {
  useFilterItems
};