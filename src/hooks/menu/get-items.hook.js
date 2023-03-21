import { useState, useEffect } from "react";
import { fetchItems } from "../../services/items";

/*
* This hooks is used to fetch items form the server (all items or filtered), 
* and to store the state of the menu items
*/
const useGetItems = () => {
  const [state, setState] = useState({ menuItems: [], loading: true });


  const getMenuItems = async () => {
    setState({ ...state, loading: true });
    const items = await fetchItems;
    setState({ loading: false, menuItems: items });

  };
  useEffect(() => { getMenuItems(); }, []);
  return { ...state };
};
export default useGetItems;