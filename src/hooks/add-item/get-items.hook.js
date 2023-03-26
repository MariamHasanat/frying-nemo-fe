/*
  this hook is used to fetch items from server 
*/

import { useEffect, useState } from "react";
import { getItems } from "../../services/items";
import  useParams  from "../params.hook";
const useGetItems = () => {
  const {myParams} = useParams();
  const [state, setState] = useState({ menuItems: [], loading: true });
  const getMenuItems = async () => {
    setState({...state, loading: true});
    const items = await getItems(myParams.searchTermsFromURL,JSON.stringify(myParams.categoriesFromURL));
    setState({loading: false, menuItems: items});
};

useEffect(()=>{getMenuItems();},[myParams]);

  return {
    ...state
  }
};

export default useGetItems;
