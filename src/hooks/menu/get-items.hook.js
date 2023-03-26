
/*
* This hooks is used to fetch items form the server (all items or filtered), 
* and to store the state of the menu items
*/
import { useEffect, useState } from "react";
import { fetchItems } from "../../services/items.service";

const useGetItems = () => {
  const [state, setState] = useState({ menuItems: [], loading: true });

  const getMenuItems = async () => {
    setState({ ...state, loading: true });
    const items = await fetchItems();
    console.log(items);
    setState({ loading: false, menuItems: items });
  };

  useEffect(() => { getMenuItems(); }, []);

  return { ...state };
};

export default useGetItems;