/*
  this hook is used to fetch items from server 
*/

import { useEffect, useState } from "react";
import { getItems } from "../../services/items";
const useGetItems = () => {
  const [state, setState] = useState({ menuItems: [], loading: true });
  const getMenuItems = async () => {
    setState({...state, loading: true});
    const items = await getItems();
    setState({loading: false, menuItems: items});
};

useEffect(()=>{getMenuItems();},[]);

  return {
    ...state
  }
};

export default useGetItems;
